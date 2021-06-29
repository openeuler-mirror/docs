# Руководство по разработке secGear

В этом примере описывается, как использовать secGear для разработки программы helloworld с помощью языка программирования C. Это поможет вам понять в процессе разработки приложений при использовании secGear.

## Описание структуры каталогов

Приложения, разработанные с использованием secGear, соответствуют следующей унифицированной структуре каталогов.

```
├── helloworld
│   ├── CMakeLists.txt
│   ├── enclave
│   │   ├── CMakeLists.txt
│   │   ├── Enclave.config.xml
│   │   ├── Enclave.lds
│   │   ├── hello.c
│   │   ├── manifest.txt.in
│   │   └── rsa_public_key_cloud.pem
│   ├── helloworld.edl
│   └── host
│       ├── CMakeLists.txt
│       └── main.c
```

## Начало работы

1. Создайте рабочий каталог программы helloworld, затем в этом каталоге создайте enclave и host.

2. Скомпилируйте EDL-файл (Encalve Definition Language).
   
   Для обеспечения согласованности кода secGear предоставляет secgear\_urts.h и secgear\_tstdc.edl для маскировки различий между базовыми Intel SGX и ARM iTrustee. Поэтому, когда используется библиотека функций языка программирования C, файлы secgear\_urts.h и secgear\_tstdc.edl должны быть импортированы по умолчанию. Файл helloworld.edl выглядит следующим образом:
   
   ```c
   enclave {
    include "secgear_urts.h"
    from "secgear_tstdc.edl" import *;
    trusted {
     public int get_string([out, size=32]char *buf);
    };
   };
   ```
   
   Примечание. Более подробную информацию о синтаксисе EDL см. в руководстве по разработке Intel SGX.

3. Скомпилируйте файл верхнего уровня CMakeLists.txt.
   
   Скомпилируйте файл верхнего уровня CMakeLists.txt и разместите его в рабочем каталоге helloworld. Этот файл используется для настройки такой информации, как процессорная архитектура и необходимые EDL-файлы во время компиляции.
   
   В предыдущей команде EDL\_FILE указывает EDL-файл, который должен быть указан пользователями. В данном примере EDL-файл — helloworld.edl. DPATH — это динамическая библиотека, загруженная в TEE. Пример конфигурации:
   
   ```c
   cmake_minimum_required(VERSION 3.12 FATAL_ERROR)
   project(HelloWorld  C)
   set(CMAKE_C_STANDARD 99)
   set(CURRENT_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})
   set(EDL_FILE helloworld.edl)
   set(LOCAL_ROOT_PATH "$ENV{CC_SDK}")
       set(SECGEAR_INSTALL_PATH /lib64/)
   if(CC_GP)
    set(CODETYPE trustzone)
    set(CODEGEN codegen_arm64)
    execute_process(COMMAND uuidgen -r OUTPUT_VARIABLE UUID)
    string(REPLACE "\n" "" UUID ${UUID})
    add_definitions(-DPATH="/data/${UUID}.sec")
   endif()
   if(CC_SGX)
    set(CODETYPE sgx)
    set(CODEGEN codegen_x86_64)
    add_definitions(-DPATH="${CMAKE_CURRENT_BINARY_DIR}/enclave/enclave.signed.so")
   endif()
   add_subdirectory(${CURRENT_ROOT_PATH}/enclave)
   add_subdirectory(${CURRENT_ROOT_PATH}/host)
   ```

4. Скомпилируйте код REE и файл CMakeLists.txt.
   
   4.1 Скомпилируйте файл main.c.
   
   Скомпилируйте файл main.c в REE и поместите его в каталог хоста. enclave.h — файл заголовка secGear, а helloworld\_u.h — файл заголовка, сгенерированный инструментом генерирования вспомогательного кода. Используйте cc\_enclave\_create для создания контекста enclave в безопасной зоне и cc\_enclave\_destroy для уничтожения контекста enclave в безопасной зоне. get\_string — это доверенная функция TEE, определенная в EDL-файле. Следует отметить, что эта функция отличается от функции get\_string, определенной в EDL-файле. Параметр context — это контекст безопасной зоны, а параметр retval — возвращаемое значение функции get\_string в EDL-файле. res указывает, что функция get\_string успешно вызвана.
   
   ```c
   #include <stdio.h>
   #include "enclave.h"
   #include "helloworld_u.h"
   
   #define BUF_LEN 32
   
   int main()
   {
    int  retval = 0;
    char *path = PATH;
    char buf[BUF_LEN];
    cc_enclave_t *context = NULL;
    cc_enclave_result_t res;
    res = cc_enclave_create(path, AUTO_ENCLAVE_TYPE, 0, SECGEAR_DEBUG_FLAG, NULL, 0, &context);
   ...
   
       res = get_string(context, &retval, buf);
       if (res != CC_SUCCESS || retval != (int)CC_SUCCESS) {
        printf("Ecall enclave error\n");
       } else {
        printf("%s\n", buf);
       }
   
       if (context != NULL) {
        res = cc_enclave_destroy(context);
        ...
       }
       return res;
   }
   ```
   
   4.2 Скомпилируйте CMakeLists.txt в REE.
   
   ```c
   # Set compilation environment variables.
   #set auto code prefix
   set(PREFIX helloworld)
   #set host exec name
   set(OUTPUT secgear_helloworld)
   #set host src code
   set(SOURCE_FILE ${CMAKE_CURRENT_SOURCE_DIR}/main.c)
   
   # Use the code generation tool to generate auxiliary code. The CODEGEN and CODETYPE variables are also defined in the top-level CMakeLists.txt file. --search-path is used to specify the path of other dependent EDL files imported to helloword.edl.
   #set auto code
   if(CC_GP)
    set(AUTO_FILES  ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_u.h ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_u.c ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_args.h)
    add_custom_command(OUTPUT ${AUTO_FILES}
    DEPENDS ${CURRENT_ROOT_PATH}/${EDL_FILE}
    COMMAND ${CODEGEN} --${CODETYPE} --untrusted ${CURRENT_ROOT_PATH}/${EDL_FILE} --search-path ${LOCAL_ROOT_PATH}/inc/host_inc/gp)
   endif()
   
   if(CC_SGX)
    set(AUTO_FILES  ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_u.h ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_u.c)
    add_custom_command(OUTPUT ${AUTO_FILES}
    DEPENDS ${CURRENT_ROOT_PATH}/${EDL_FILE}
    COMMAND ${CODEGEN} --${CODETYPE} --untrusted ${CURRENT_ROOT_PATH}/${EDL_FILE} --search-path ${LOCAL_ROOT_PATH}/inc/host_inc/sgx  --search-path ${SGXSDK}/include)
   endif()
   
   # Set compilation and link options.
   set(CMAKE_C_FLAGS "-fstack-protector-all -W -Wall -Werror -Wextra -Werror=array-bounds -D_FORTIFY_SOURCE=2 -O2 -ftrapv -fPIE")
   set(CMAKE_EXE_LINKER_FLAGS    "-Wl,-z,relro -Wl,-z,now -Wl,-z,noexecstack")
   
   # Compilation link reference directory
   if(CC_GP)
    if(${CMAKE_VERSION} VERSION_LESS "3.13.0")
     link_directories(${SECGEAR_INSTALL_PATH})
    endif()
    add_executable(${OUTPUT} ${SOURCE_FILE} ${AUTO_FILES})
    target_include_directories(${OUTPUT} PRIVATE
        /usr/include/secGear/host_inc
        /usr/include/secGear/host_inc/gp
        ${CMAKE_CURRENT_BINARY_DIR})
    if(${CMAKE_VERSION} VERSION_GREATER_EQUAL "3.13.0")
     target_link_directories(${OUTPUT} PRIVATE ${SECGEAR_INSTALL_PATH})
    endif()
    target_link_libraries(${OUTPUT} secgear)
   endif()
   if(CC_SGX)
    if(${CMAKE_VERSION} VERSION_LESS "3.13.0")
     link_directories(${SECGEAR_INSTALL_PATH}  ${SGXSDK}/lib64)
    endif()
    set(SGX_MODE HW)
    if(${SGX_MODE} STREQUAL HW)
     set(Urts_Library_Name sgx_urts)
    else()
     set(Urts_Library_Name sgx_urts_sim)
    endif()
    add_executable(${OUTPUT} ${SOURCE_FILE} ${AUTO_FILES} ${LOCAL_ROOT_PATH}/src/host_src/sgx/sgx_log.c)
    target_include_directories(${OUTPUT} PRIVATE
         /usr/include/secGear/host_inc
         /usr/include/secGear/host_inc/sgx
         ${CMAKE_CURRENT_BINARY_DIR})
    if(${CMAKE_VERSION} VERSION_GREATER_EQUAL "3.13.0")
     target_link_directories(${OUTPUT} PRIVATE ${SECGEAR_INSTALL_PATH}  ${SGXSDK}/lib64)
    endif()
    target_link_libraries(${OUTPUT} secgear ${Urts_Library_Name})
   endif()
   
   # Specify the binary installation directory.
   set_target_properties(${OUTPUT} PROPERTIES SKIP_BUILD_RPATH TRUE)
   if(CC_GP)
    install(TARGETS  ${OUTPUT}
      RUNTIME
      DESTINATION /vendor/bin/
      PERMISSIONS OWNER_EXECUTE OWNER_WRITE OWNER_READ)
   endif()
   if(CC_SGX)
    install(TARGETS  ${OUTPUT}
      RUNTIME
      DESTINATION ${CMAKE_BINARY_DIR}/bin/
      PERMISSIONS OWNER_EXECUTE OWNER_WRITE OWNER_READ)
   endif()  
   ```

5. Скомпилируйте код TEE, файл CMakeLists.txt и конфигурационный файл и сохраните их в каталоге enclave.
   
   5.1 Скомпилируйте файл кода hello.c TEE.
   
   Скомпилируйте файл кода hello.c TEE и поместите его в каталог enclave. helloworld\_t.h — это инструмент генерирования вспомогательного кода. Он использует EDL-файл для создания файла заголовка TEE.
   
   ```c
   #include <stdio.h>
   #include <string.h>
   #include "helloworld_t.h"
   
   #define TA_HELLO_WORLD        "secGear hello world!"
   #define BUF_MAX 32
   int get_string(char *buf)
   {
    strncpy(buf, TA_HELLO_WORLD, strlen(TA_HELLO_WORLD) + 1);
    return 0;
   }
   ```
   
   5.2 Скомпилируйте файл CMakeLists.txt TEE.
   
   ```
   #set auto code prefix
   set(PREFIX helloworld)
   
   #set sign key
   set(PEM Enclave_private.pem)
   
   #set sign tool
   set(SIGN_TOOL ${LOCAL_ROOT_PATH}/tools/sign_tool/sign_tool.sh)
   
   #set enclave src code
   set(SOURCE_FILES ${CMAKE_CURRENT_SOURCE_DIR}/hello.c)
   
   #set log level
   set(PRINT_LEVEL 3)
   add_definitions(-DPRINT_LEVEL=${PRINT_LEVEL})
   
   # WHITE_LIS_X sets the iTrustee whitelist. Only the host binary files in these paths can call the security image, and a maximum of eight list paths can be configured. The user set by WHITE_LIST_OWNER will be applied to all whitelist paths. The DEVICEPEM public key is used by the iTrustee to encrypt the TEE secure dynamic library using the dynamically generated AES key.
   if(CC_GP)
       #set signed output
       set(OUTPUT ${UUID}.sec)
       #set itrustee device key
       set(DEVICEPEM ${CMAKE_CURRENT_SOURCE_DIR}/rsa_public_key_cloud.pem)
       #set whilelist. default: /vendor/bin/teec_hello
       set(WHITE_LIST_0 /vendor/bin/helloworld)
       set(WHITE_LIST_OWNER root)
       set(WHITE_LIST_1 /vendor/bin/secgear_helloworld)
       set(WHITELIST WHITE_LIST_0 WHITE_LIST_1)
   
       set(AUTO_FILES  ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_t.h ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_t.c ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_args.h)
       add_custom_command(OUTPUT ${AUTO_FILES}
       DEPENDS ${CURRENT_ROOT_PATH}/${EDL_FILE}
       COMMAND ${CODEGEN} --${CODETYPE} --trusted ${CURRENT_ROOT_PATH}/${EDL_FILE} --search-path ${LOCAL_ROOT_PATH}/inc/host_inc/gp)
   endif()
   
   # Signature of the dynamic library on the SGX TEE side.
   if(CC_SGX)
       set(OUTPUT enclave.signed.so)
       set(AUTO_FILES  ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_t.h ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_t.c)
       add_custom_command(OUTPUT ${AUTO_FILES}
       DEPENDS ${CURRENT_ROOT_PATH}/${EDL_FILE}
       COMMAND ${CODEGEN} --${CODETYPE} --trusted ${CURRENT_ROOT_PATH}/${EDL_FILE} --search-path ${LOCAL_ROOT_PATH}/inc/host_inc/sgx --search-path ${SGXSDK}/include)
   endif()
   
   # Set compilation options.
   set(COMMON_C_FLAGS "-W -Wall -Werror  -fno-short-enums  -fno-omit-frame-pointer -fstack-protector \
    -Wstack-protector --param ssp-buffer-size=4 -frecord-gcc-switches -Wextra -nostdinc -nodefaultlibs \
    -fno-peephole -fno-peephole2 -Wno-main -Wno-error=unused-parameter \
           -Wno-error=unused-but-set-variable -Wno-error=format-truncation=")
   
   set(COMMON_C_LINK_FLAGS "-Wl,-z,now -Wl,-z,relro -Wl,-z,noexecstack -Wl,-nostdlib -nodefaultlibs -nostartfiles")
   
   # The manifest.txt file needs to be generated for the iTrustee. Specify the iTrustee compilation options and the search path for header files and link files.
   if(CC_GP)
       configure_file("${CMAKE_CURRENT_SOURCE_DIR}/manifest.txt.in" "${CMAKE_CURRENT_SOURCE_DIR}/manifest.txt")
   
       set(CMAKE_C_FLAGS "${COMMON_C_FLAGS}  -march=armv8-a ")
       set(CMAKE_C_FLAGS_RELEASE "${CMAKE_C_FLAGS}  -s -fPIC")
       set(CMAKE_SHARED_LINKER_FLAGS  "${COMMON_C_LINK_FLAGS} -Wl,-s")
   
       set(ITRUSTEE_TEEDIR ${iTrusteeSDK}/)
       set(ITRUSTEE_LIBC ${iTrusteeSDK}/thirdparty/open_source/musl/libc)
   
       if(${CMAKE_VERSION} VERSION_LESS "3.13.0")
           link_directories(${CMAKE_BINARY_DIR}/lib/)
       endif()
   
       add_library(${PREFIX} SHARED ${SOURCE_FILES} ${AUTO_FILES})
   
       target_include_directories( ${PREFIX} PRIVATE
    ${CMAKE_CURRENT_BINARY_DIR}
    ${LOCAL_ROOT_PATH}/inc/host_inc
    ${LOCAL_ROOT_PATH}/inc/host_inc/gp
    ${LOCAL_ROOT_PATH}/inc/enclave_inc
    ${LOCAL_ROOT_PATH}/inc/enclave_inc/gp
    ${ITRUSTEE_TEEDIR}/include/TA
    ${ITRUSTEE_TEEDIR}/include/TA/huawei_ext
    ${ITRUSTEE_LIBC}/arch/aarch64
    ${ITRUSTEE_LIBC}/
    ${ITRUSTEE_LIBC}/arch/arm/bits
    ${ITRUSTEE_LIBC}/arch/generic
    ${ITRUSTEE_LIBC}/arch/arm
    ${LOCAL_ROOT_PATH}/inc/enclave_inc/gp/itrustee)
   
       if(${CMAKE_VERSION} VERSION_GREATER_EQUAL "3.13.0")
           target_link_directories(${PREFIX} PRIVATE
            ${CMAKE_BINARY_DIR}/lib/)
       endif()
   
       foreach(WHITE_LIST ${WHITELIST})
        add_definitions(-D${WHITE_LIST}="${${WHITE_LIST}}")
       endforeach(WHITE_LIST)
       add_definitions(-DWHITE_LIST_OWNER="${WHITE_LIST_OWNER}")
   
       target_link_libraries(${PREFIX} -lsecgear_tee)
   
       add_custom_command(TARGET ${PREFIX}
          POST_BUILD
                 COMMAND bash ${SIGN_TOOL} -d sign -x trustzone -i ${CMAKE_LIBRARY_OUTPUT_DIRECTORY}/lib${PREFIX}.so -m ${CMAKE_CURRENT_SOURCE_DIR}/manifest.txt
            -e ${DEVICEPEM} -o ${CMAKE_LIBRARY_OUTPUT_DIRECTORY}/${OUTPUT})
   
       install(FILES ${CMAKE_LIBRARY_OUTPUT_DIRECTORY}/${OUTPUT}  
           DESTINATION /data
           PERMISSIONS OWNER_EXECUTE OWNER_WRITE OWNER_READ GROUP_READ GROUP_EXECUTE  WORLD_READ  WORLD_EXECUTE)
   
   endif()
   
   if(CC_SGX)
       set(SGX_DIR ${SGXSDK})
       set(CMAKE_C_FLAGS "${COMMON_C_FLAGS} -m64 -fvisibility=hidden")
       set(CMAKE_C_FLAGS_RELEASE "${CMAKE_C_FLAGS}  -s")
       set(LINK_LIBRARY_PATH ${SGX_DIR}/lib64)
   
       if(CC_SIM)
           set(Trts_Library_Name sgx_trts_sim)
           set(Service_Library_Name sgx_tservice_sim)
       else()
           set(Trts_Library_Name sgx_trts)
           set(Service_Library_Name sgx_tservice)
       endif()
   
       set(Crypto_Library_Name sgx_tcrypto)
   
       set(CMAKE_SHARED_LINKER_FLAGS  "${COMMON_C_LINK_FLAGS} -Wl,-z,defs -Wl,-pie -Bstatic -Bsymbolic -eenclave_entry \
    -Wl,--export-dynamic -Wl,--defsym,__ImageBase=0 -Wl,--gc-sections -Wl,--version-script=${CMAKE_CURRENT_SOURCE_DIR}/Enclave.lds")
   
       if(${CMAKE_VERSION} VERSION_LESS "3.13.0")
           link_directories(${LINK_LIBRARY_PATH})
       endif()
   
       add_library(${PREFIX}  SHARED ${SOURCE_FILES} ${AUTO_FILES})
   
       target_include_directories(${PREFIX} PRIVATE
        ${CMAKE_CURRENT_BINARY_DIR}
        ${SGX_DIR}/include/tlibc
        ${SGX_DIR}/include/libcxx
        ${SGX_DIR}/include
        ${LOCAL_ROOT_PATH}/inc/host_inc
        ${LOCAL_ROOT_PATH}/inc/host_inc/sgx)
   
       if(${CMAKE_VERSION} VERSION_GREATER_EQUAL "3.13.0")
           target_link_directories(${PREFIX} PRIVATE
            ${LINK_LIBRARY_PATH})
       endif()
   
       target_link_libraries(${PREFIX}  -Wl,--whole-archive ${Trts_Library_Name} -Wl,--no-whole-archive
         -Wl,--start-group -lsgx_tstdc -lsgx_tcxx -l${Crypto_Library_Name} -l${Service_Library_Name}   -Wl,--end-group)
       add_custom_command(TARGET ${PREFIX}
       POST_BUILD
       COMMAND umask 0177
       COMMAND openssl genrsa -3 -out ${PEM} 3072
       COMMAND bash ${SIGN_TOOL} -d sign -x sgx -i ${CMAKE_LIBRARY_OUTPUT_DIRECTORY}/lib${PREFIX}.so -k ${PEM} -o ${OUTPUT} -c ${CMAKE_CURRENT_SOURCE_DIR}/Enclave.config.xml)
   endif()
   
   set_target_properties(${PREFIX} PROPERTIES SKIP_BUILD_RPATH TRUE)  
   ```

6. Скомпилируйте конфигурационный файл.
   
   Для процессорной архитектуры x86\_64, использующей Intel SGX, скомпилируйте файлы Enclave.config.xml и Enclave.lds и поместите их в каталог enclave в TEE. Более подробная информация о формате файла приведена в официальном документе SGX.
   
   Справочная информация о Enclave.config.xml:
   
   ```c
   <EnclaveConfiguration>
     <ProdID>0</ProdID>
     <ISVSVN>0</ISVSVN>
     <StackMaxSize>0x40000</StackMaxSize>
     <HeapMaxSize>0x100000</HeapMaxSize>
     <TCSNum>10</TCSNum>
     <TCSPolicy>1</TCSPolicy>
     <!-- Recommend changing 'DisableDebug' to 1 to make the enclave undebuggable for enclave release -->
     <DisableDebug>0</DisableDebug>
     <MiscSelect>0</MiscSelect>
     <MiscMask>0xFFFFFFFF</MiscMask>
   </EnclaveConfiguration>
   ```
   
   Справочная информация о Enclave.lds:
   
   ```c
   enclave.so
   {
       global:
           g_global_data_sim;
           g_global_data;
           enclave_entry;
           g_peak_heap_used;
       local:
           *;
   };
   ```
   
   Скопируйте файл открытого ключа устройства rsa\_public\_key\_cloud.pem в каталог enclave. Открытый ключ устройства используется для шифрования динамической библиотеки в безопасной зоне с помощью временно сгенерированного ключа AES.
   
   Примечание. Путь загрузки файла rsa\_public\_key\_cloud.pem: <https://gitee.com/openeuler/secGear/blob/master/examples/helloworld/enclave/rsa_public_key_cloud.pem>

7. Скомпилируйте программу.
   
   Выполните следующие команды для компиляции версии SGX. После компиляции создается исполняемая программа secgear\_helloworld.
   
   ```shell
   cmake -DCMAKE_BUILD_TYPE=debug -DCC_SGX=ON -DSGXSDK="PATH"  ./ && make
   ```

8. Запустите программу.
   
   ```c
   $ ./secgear_helloworld
   Create secgear enclave
   secgear hello world!
   ```