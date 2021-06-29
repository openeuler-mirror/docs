# Управление контейнерами

- [Управление контейнерами](#container-management-2)
  - [attach](#attach-41)
  - [commit](#commit)
  - [cp](#cp)
  - [create](#create)
  - [diff](#diff)
  - [exec](#exec-42)
  - [export](#export)
  - [inspect](#inspect)
  - [logs](#logs)
  - [pause/unpause](#pause-unpause)
  - [port](#port)
  - [ps](#ps)
  - [rename](#rename)
  - [restart](#restart)
  - [rm](#rm)
  - [run](#run)
  - [start](#start)
  - [stats](#stats)
  - [stop](#stop)
  - [top](#top)
  - [update](#update)
  - [wait](#wait)


Подкоманды, поддерживаемые текущей версией Docker, подразделяются на следующие группы по функциям:

<table><thead align="left"><tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row1183915"><th class="cellrowborder" valign="top" id="mcps1.1.5.1.1"><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p28788263"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p28788263"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p28788263"></a><strong id="en-us_topic_0183243657_b2756155817459"><a name="en-us_topic_0183243657_b2756155817459"></a><a name="en-us_topic_0183243657_b2756155817459"></a>Функции</strong></p>
</th>
<th class="cellrowborder" colspan="2" valign="top" id="mcps1.1.5.1.2"><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p50147992"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p50147992"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p50147992"></a><strong id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_b683194415355"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_b683194415355"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_b683194415355"></a>Команда</strong></p>
</th>
<th class="cellrowborder" valign="top" id="mcps1.1.5.1.3"><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p35455590"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p35455590"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p35455590"></a><strong id="en-us_topic_0183243657_b1544135612465"><a name="en-us_topic_0183243657_b1544135612465"></a><a name="en-us_topic_0183243657_b1544135612465"></a>Описание</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row50664859"><td class="cellrowborder" rowspan="2" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p10212927"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p10212927"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p10212927"></a>Среда хоста</p>
</td>
<td class="cellrowborder" colspan="2" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p21940722"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p21940722"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p21940722"></a>version</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p32368095"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p32368095"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p32368095"></a>Просмотр версии Docker.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row22877402"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p41130254"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p41130254"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p41130254"></a>info</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p43216271"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p43216271"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p43216271"></a>Просмотр системы Docker и информации о среде  хоста.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row53402119"><td class="cellrowborder" rowspan="20" valign="top" width="25%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p30604389"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p30604389"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p30604389"></a>Информация о контейнере</p>
</td>
<td class="cellrowborder" rowspan="7" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p63036484"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p63036484"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p63036484"></a>Управление жизненным циклом контейнера</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p5681612"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p5681612"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p5681612"></a>create</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p57557412"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p57557412"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p57557412"></a>Создание контейнера с использованием образа.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row48254661"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p16313497"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p16313497"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p16313497"></a>run</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p46324881"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p46324881"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p46324881"></a>Создание и запуск контейнера с использованием образа.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row14270750"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p15080136"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p15080136"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p15080136"></a>start</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p13531531"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p13531531"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p13531531"></a>Запуск остановленного контейнера.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row54674917"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p66592127"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p66592127"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p66592127"></a>stop</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p25253189"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p25253189"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p25253189"></a>Остановка работающего контейнера.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row25952117"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p21746729"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p21746729"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p21746729"></a>restart</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p16654654"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p16654654"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p16654654"></a>Перезапуск контейнера.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row45420240"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p55160823"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p55160823"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p55160823"></a>wait</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p38841670"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p38841670"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p38841670"></a>Ожидание момента остановки контейнера и печать кода выхода контейнера.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row14030717"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p62746268"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p62746268"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p62746268"></a>rm</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p49282936"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p49282936"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p49282936"></a>Удаление контейнера.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row40893240"><td class="cellrowborder" rowspan="4" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p24018105"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p24018105"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p24018105"></a>Управление процессами контейнера</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p66418347"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p66418347"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p66418347"></a>pause</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p11177013"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p11177013"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p11177013"></a>Приостановка всех процессов в контейнере.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row33484259"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p27870469"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p27870469"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p27870469"></a>unpause</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p42915540"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p42915540"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p42915540"></a>Возобновление работы приостановленного процесса в контейнере.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row50695543"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p12698356"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p12698356"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p12698356"></a>top</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p21933905"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p21933905"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p21933905"></a>Просмотр процессов в контейнере.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row63187419"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p17907308"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p17907308"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p17907308"></a>exec</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p41205809"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p41205809"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p41205809"></a>Выполнение процесса в контейнерах.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row35307962"><td class="cellrowborder" rowspan="9" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p41372713"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p41372713"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p41372713"></a>Инструмент проверки контейнера</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p62855489"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p62855489"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p62855489"></a>ps</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p58129833"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p58129833"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p58129833"></a>Просмотр работающих контейнеров (без подключения каких-либо параметров).</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row53406450"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p30955222"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p30955222"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p30955222"></a>logs</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p24345054"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p24345054"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p24345054"></a>Отображение информации журналов контейнера.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row17778899"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p30804749"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p30804749"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p30804749"></a>attach</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p12156768"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p12156768"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p12156768"></a>Присоединение стандартных потоков ввода и вывода к контейнеру.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row42302050"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p3913996"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p3913996"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p3913996"></a>inspect</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p48598242"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p48598242"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p48598242"></a>Возврат информации нижнего уровня контейнера.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row34731002"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p61747774"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p61747774"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p61747774"></a>port</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p35513827"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p35513827"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p35513827"></a>Вывод информации о соответствии портов между  контейнерами и хостами.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row51188993"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p52667802"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p52667802"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p52667802"></a>diff</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p38233575"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p38233575"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p38233575"></a>Возврат изменений, внесенных контейнером,  отличающихся от данных корневой файловой системы образа.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row8557861"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p22098140"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p22098140"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p22098140"></a>cp</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p45118907"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p45118907"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p45118907"></a>Копирование файлов между контейнерами и хостами.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row3416986"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p8340425"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p8340425"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p8340425"></a>export</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p4485813"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p4485813"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p4485813"></a>Экспорт файловой системы в контейнер в виде пакета .tar.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row44406948121132"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p35936326121132"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p35936326121132"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p35936326121132"></a>stats</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p25161274121132"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p25161274121132"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p25161274121132"></a>Просмотр загрузки ресурсов контейнера в  реальном времени.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row40372317"><td class="cellrowborder" rowspan="14" valign="top" width="25%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p48932206"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p48932206"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p48932206"></a>Образы</p>
</td>
<td class="cellrowborder" rowspan="4" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p4085744"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p4085744"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p4085744"></a>Генерирование образа</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p62509834"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p62509834"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p62509834"></a>build</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p30131813"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p30131813"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p30131813"></a>Создание образа с помощью Dockerfile.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row2750866"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p21493617"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p21493617"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p21493617"></a>commit</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p63261412"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p63261412"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p63261412"></a>Создание образа на основе корневой файловой системы контейнера.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row32481801"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p13780214"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p13780214"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p13780214"></a>import</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p42455531"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p42455531"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p42455531"></a>Создание образа, используя содержимое пакета .tar в качестве файловой системы.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row46555465"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p12896286"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p12896286"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p12896286"></a>load</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p37966223"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p37966223"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p37966223"></a>Загрузка образа из пакета .tar.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row6151694"><td class="cellrowborder" rowspan="5" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p28525238"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p28525238"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p28525238"></a>Реестр образа</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p28842926"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p28842926"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p28842926"></a>login</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p54575646"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p54575646"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p54575646"></a>Вход в реестр.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row21418771"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p57198891"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p57198891"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p57198891"></a>logout</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p2598608"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p2598608"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p2598608"></a>Выход из реестра.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row23387474"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p15337269"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p15337269"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p15337269"></a>pull</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p34359256"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p34359256"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p34359256"></a>Извлечение образа из реестра.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row40797849"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p16291455"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p16291455"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p16291455"></a>push</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p44539515"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p44539515"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p44539515"></a>Помещение образа в реестр.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row65311315"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p55725192"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p55725192"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p55725192"></a>search</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p17446726"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p17446726"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p17446726"></a>Поиск образа в реестре.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row22802807"><td class="cellrowborder" rowspan="5" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p35088084"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p35088084"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p35088084"></a>Управление образами</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p23562574"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p23562574"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p23562574"></a>images</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p29520332"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p29520332"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p29520332"></a>Отображение образа в системе.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row64356400"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p45485936"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p45485936"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p45485936"></a>history</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p60482217"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p60482217"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p60482217"></a>Отображение истории изменений образа.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row7469042"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p1012626"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p1012626"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p1012626"></a>rmi</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p14913854"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p14913854"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p14913854"></a>Удаление образа.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row6965"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p564191"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p564191"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p564191"></a>tag</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p45699530"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p45699530"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p45699530"></a>Добавление тега к образу.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row8642591"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p28961294"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p28961294"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p28961294"></a>save</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p64163473"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p64163473"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p64163473"></a>Сохранение образа в пакет .tar.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row40600350"><td class="cellrowborder" rowspan="2" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p294043"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p294043"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p294043"></a>Другое</p>
</td>
<td class="cellrowborder" colspan="2" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p23817504"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p23817504"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p23817504"></a>events</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p50169686"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p50169686"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p50169686"></a>Получение событий в реальном времени от демона Docker.</p>
</td>
</tr>
<tr id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_row2952396121125"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p5522470121253"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p5522470121253"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p5522470121253"></a>rename</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p9096874121125"><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p9096874121125"></a><a name="en-us_topic_0183243657_en-us_topic_0155236992_en-us_topic_0076221003_en-us_topic_0043209396_p9096874121125"></a>Переименование контейнера.</p>
</td>
</tr>
</tbody>
</


Некоторые подкоманды выполняются с определенными параметрами, например команда **docker run**. Для просмотра справочной информации о команде выполняется команда **docker \_command \_**--**help**. Подробную информацию о параметрах команд см. вышеприведенную таблицу. Далее приведены инструкции по использованию каждой команды.

## attach

Синтаксис: **docker attach \[**_options_**]** _container_

Функция: подключение определенной функции к работающему контейнеру.

Описание параметров:

**--no-stdin=false**: не подключает STDIN.

**--sig-proxy=true**: перенаправляет все сигналы контейнера, кроме SIGCHLD, SIGKILL и SIGSTOP.

Пример.

```
$ sudo docker attach attach_test
root@2988b8658669:/# ls bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
```

## commit

Синтаксис: **docker commit \[**_options_**] **\_container \_**\[**_repository\[:tag]_**]**

Функция: создает образ из контейнера.

Описание параметров:

**-a**,  **--author=""**: параметр указывает автора.

**-m**,  **--message=""**: параметр указывает представленную информацию.

**-p**,  **--pause=true**: ставит контейнер на паузу во время отправки.

Пример.

В следующем примере команды контейнер запускается и представляется в виде нового образа:

```
$ sudo docker commit test busybox:test
sha256:be4672959e8bd8a4291fbdd9e99be932912fe80b062fba3c9b16ee83720c33e1

$ sudo docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
busybox             latest              e02e811dd08f        2 years ago         1.09MB
```

  

## cp

Синтаксис: **docker cp \[**_options_**] **_container_**:**_src\_path_ _dest\_path_**\|-**

**docker cp \[**_options_**]** _src\_path_**\|-** _container_**:**_dest\_path_

Функция: копирование файла или папки из пути в контейнере в путь на хосте или копирование файла или папки с хоста в контейнер.

Меры предосторожности: команда **docker cp** не поддерживает копирование файлов в таких виртуальных файловых системах, как **/proc, /sys, /dev** и **/tmp,** в контейнере, а также файлов и файловых систем, смонтированных пользователями в контейнере.

Описание параметров:

**-a**,  **--archive**: настройка владельца файла, скопированного в контейнер, для пользователя **container** (--user).

**-L**,  **--follow-link**: синтаксический анализ и трассировка символической ссылки файла.

Пример.

В следующем примере команда копирует каталог **/test**, расположенный в контейнере реестра, в каталог **/home/aaa** на хосте:

```
$ sudo docker cp registry:/test /home/aaa
```

## create

Синтаксис: **docker create \[**_options_**]** _image_ **\[**_command_**] \[**_arg_**...]**

Функция: создание контейнера с помощью файла образа и возврат значения идентификационного номера контейнера. Создав контейнер, выполните команду **docker start**, чтобы его запустить. _options_ — это параметры, используемые для настройки контейнера во время его создания. Некоторые параметры перезаписывают конфигурацию контейнера в файле образа. _command_ — это команда, которую необходимо выполнить при запуске контейнера.

Описание параметров:

**Табл. 1** Описание параметров

| **Параметр**               | Описание                                                     |
| -------------------------- | ------------------------------------------------------------ |
| -a --attach=[]             | Подключение консоли к STDIN, STDOUT и STDERR процесса в контейнере. |
| --name=""                  | Имя контейнера.                                              |
| --add-host=[host:ip]       | Добавление соответствия между именем хоста и IP-адресом к **/etc/hosts** в контейнере. Например, **--add-host=test:10.10.10.10**. |
| --annotation               | Аннотации для контейнера. Например, задайте параметр **native.umask**. <br /> --annotation native.umask=normal #Значением **umask** запущенного контейнера является 0022.  <br />--annotation native.umask=secure #Значением **umask** запущенного контейнера является 0027. Если этот параметр не установлен, используется конфигурация **umask** в dockerd. |
| --blkio-weight             | Относительный вес занятия ресурсов blockio, значение которого находится в диапазоне от 10 до 1000. |
| --blkio-weight-device=[]   | Вес blockio, конфигурирующий относительный вес.              |
| -c, --cpu-shares=0         | Относительный вес ресурсов процессора хоста, занимаемых контейнером. Этот параметр можно использовать для получения более высокого приоритета занятия ресурсов. По умолчанию все контейнеры получают одинаковый приоритет на занятие ресурсов процессора. |
| --cap-add=[]               | Добавление функций Linux.                                    |
| --cap-drop=[]              | Сброс функций Linux.                                         |
| --cgroup-parent            | Родительский каталог контрольной группы cgroup для контейнера. |
| --cidfile=""               | Запись идентификатора контейнера в указанный файл. <br />Пример: **--cidfile=/home/cidfile-test** записывает идентификатор контейнера в файл **/home/cidfile-test**. |
| --cpu-period               | Период CFS процессора. Значение по умолчанию — **100 мс**. <br />Как правило, **--cpu-period** и **--cpu-quota** используются вместе. <br />Например, **--cpu-period=50000 --cpu-quota=25000** означает, что если есть один процессор, контейнер может получать 50% его ресурсов каждые 50 мс. Тот же эффект дает настройка **--cpus=0.5**. |
| -cpu-quota                 | Квота CFS процессора. Значение по умолчанию равно **0**, что указывает на отсутствие ограничений на квоту. |
| --cpuset-cpus              | Количество процессоров (0-3, 0, 1), ресурсы которых могут занимать процессы в контейнере. По умолчанию нет ограничений на этот параметр. |
| --cpuset-mems              | Узлы памяти (0-3, 0, 1), используемые для работы процессов в контейнере. Этот параметр действителен только для системы NUMA. |
| --device=[]                | Добавление хост-устройства в контейнер, <br />например **--device=/dev/sdc:/dev/xvdc:rwm**. |
| --dns=[]                   | Принудительная активация режима использования контейнером указанного сервера DNS. Например, **--dns=114.114.***xxx.xxx* означает, что **nameserver 114.114.***xxx.xxx* записывается в файл **/etc/resolv.conf** созданного контейнера, и исходное содержимое перезаписывается. |
| --dns-opt=[]               | Параметры DNS.                                               |
| --dns-search=[]            | Принудительный поиск поискового домена DNS, используемого контейнером. |
| -e, --env=[]               | Установка переменной среды для контейнера. <br />--env=[KERNEL_MODULES=]: Вставка указанного модуля в контейнер. В настоящее время можно вставить только модули хоста. После удаления контейнера модули остаются на хосте, и для контейнера необходимо настроить параметр **--hook-spec**. Следующие допустимые форматы параметра: <br />KERNEL_MODULERS=  <br />KERNEL_MODULERS=a  <br />KERNEL_MODULERS=a,b  <br />KERNEL_MODULERS=a,b, |
| --entrypoint=""            | Перезапись исходного значения **entrypoint** в образе. Параметр **entrypoint** используется для установки команды, выполняемой при запуске контейнера. |
| --env-file=[]              | Считывание переменных среды из файла. В данном файле несколько переменных среды разделяются строками. Пример: <br />**--Env-file=/home/test/env** означает, что в файле **env** хранятся несколько переменных среды. |
| --expose=[]                | Включение внутреннего порта контейнера. Приведенный в следующем разделе **-P** сопоставляет активированный порт с портом хоста. |
| --group-add=[]             | Добавление указанного контейнера в дополнительную группу.    |
| -h, --hostname=""          | Имя хоста.                                                   |
| --health-cmd               | Команда проверки состояния работоспособности контейнера.     |
| --health-interval          | Интервал между двумя последовательными попытками выполнения команды. Значение по умолчанию — **30s**. |
| --health-timeout           | Максимальная продолжительность выполнения одной команды проверки. По истечении времени ожидания выполнения команда завершается с неуспешным результатом. Значение по умолчанию — **30s**. |
| --health-start-period      | Интервал между моментом запуска контейнера и моментом проведения первой проверки состояния работоспособности. Значение по умолчанию — **0s**. |
| --health-retries           | Максимальное количество повторов после неудачной проверки состояния работоспособности. Значение по умолчанию — **3**. |
| --health-exit-on-unhealthy | Параметр определяет, требуется ли остановить контейнер в случае обнаружения его в неработоспособном состоянии (unhealthy). Значение по умолчанию **false**. |
| --host-channel=[]          | Установка канала связи между процессами в контейнере и хосте в формате *host path*:*container path*:*rw/ro*:*size limit*. |
| -i, --interactive=false    | Включение STDIN, даже если он не присоединен.                |
| --ip                       | IPv4-адрес контейнера.                                       |
| --ip6                      | IPv6-адрес контейнера.                                       |
| --ipc                      | Пространство имен IPC контейнера.                            |
| --isolation                | Политика изоляции контейнера.                                |
| -l, --label=[]             | Метка контейнера.                                            |
| --label-file=[]            | Получение метки из файла.                                    |
| --link=[]                  | Ссылки на другой контейнер. Этот параметр добавляет к контейнеру переменные среды IP-адреса и номера порта контейнера, на который идет ссылка, и добавляет соответствие в файл **/etc/hosts**, например <br />**--link=***name:alias*. |
| --log-driver               | Диск, на котором хранится журнал контейнера.                 |
| --log-opt=[]               | Параметр диска, на котором хранится журнал.                  |
| --m, --memory=""           | Ограничение памяти контейнера. Формат параметра — *numberoptional unit*, доступные единицы измерения **b**, **k**, **m** и **g**. Минимальное значение параметра — **4m**. |
| --mac-address              | MAC-адрес контейнера, например, **92:d0:c6:0a:***xx***:***xx*. |
| --memory-reservation       | Ограничение памяти контейнера. Значение по умолчанию такое же, как и в случае с **--memory**. **--memory** — это жесткое ограничение, **--memory-reservation** — мягкое ограничение. Если загрузка памяти превышает заданное значение, ее объем динамически регулируется (система пытается перераспределить ресурсы, уменьшая объем занятой памяти до значения ниже заданного). Однако загрузка памяти может превышать заданное значение. Этот параметр должен использоваться вместе с параметром **--memory**. Значение должно быть меньше заданного значения **--memory**. |
| --memory-swap              | Суммарная загрузка общей памяти и раздела подкачки. **-1** указывает на отсутствие ограничений на размер занимаемой памяти. Если этот параметр не установлен, размер раздела подкачки в два раза превышает значение **--memory**. То есть, для раздела подкачки может использоваться объем памяти, заданный параметром **--memory**. |
| --memory-swappiness=-1     | Время использования контейнером раздела подкачки. Диапазон принимаемых значений — от 0 до 100 процентов. |
| --net="bridge"             | Сетевой режим контейнера. Docker 1.3.0 имеет следующие сетевые режимы: **bridge**, **host**, **none**, **container:**name**\|**id. Значение по умолчанию — **bridge**. <br /> ·      **bridge**: создание сетевого стека на мосту при запуске демона Docker. <br /> ·      **host**: использование сетевого стека хоста в контейнере.  <br />·      **none**: неиспользование сети. <br /> ·      **container:**name***\|***id: повторное использование сетевого стека другого контейнера. |
| --no-healthcheck           | Невыполнение проверки состояния работоспособности контейнера. |
| --oom-kill-disable         | Отключение функции OOM killer. Рекомендуется не устанавливать этот параметр, если параметр **-m** не задан. |
| --oom-score-adj            | Настройка правила OOM контейнера. Диапазон принимаемых значений — от -1000 до 1000. |
| -P, --publish-all=false    | Сопоставление всех включенных портов контейнера с портами хоста. Доступ к контейнерам осуществляется через порты хоста. Просмотр соответствия между портами контейнера и портами хоста выполняется командой **docker port**. |
| -p, --publish=[]           | Данный параметр сопоставляет порт в контейнере к порту хоста в формате *IP address**:**host port**:**container port **\|** IP address**::**container port **\|** host port**:**container port **\|** container port*. Если IP-адрес не настроен, прослушиваются каналы доступа ко всем картам NIC хоста. Если порт хоста не настроен, порт автоматически выделяется. |
| --pid                      | Пространство имен PID контейнера.                            |
| --privileged=false         | Предоставление дополнительного разрешения контейнеру. Если используется параметр **--privileged**, контейнер может получить доступ ко всем устройствам на хосте. |
| --restart=""               | Настройка правила перезапуска при выходе контейнера. В настоящее время версия 1.3.1 поддерживает следующие правила: <br /> ·  **no**: контейнер не перезапускается в случае остановки.<br /> ·  **on-failure**: контейнер перезапускается, если код выхода контейнера не равен 0. Это правило может использоваться для добавления максимального количества повторных запусков, например **on-failure:5** означает, что контейнер можно перезапустить максимум пять раз.<br />  · **always**: контейнер завершает работу, независимо от кода выхода. |
| --read-only                | Монтирование корневой файловой системы контейнера в режиме только для чтения. |
| --security-opt=[]          | Правило безопасности контейнера.                             |
| --shm-size                 | Размер устройства **/dev/shm**. Значение по умолчанию — **64M**. |
| --stop-signal=SIGTERM      | Сигнал остановки контейнера. Значение по умолчанию — **SIGTERM**. |
| -t, --tty=false            | Параметр выделяет псевдотерминал.                            |
| --tmpfs=[]                 | Монтирование каталога tmpfs.                                 |
| -u, --user=""              | Имя или идентификатор пользователя.                          |
| --ulimit=[]                | Вид ограничения.                                             |
| --userns                   | Пространство имен контейнера.                                |
| -v, --volume=[]            | Монтирование каталога хоста в контейнер или создание тома в контейнере. Например, **-v /home/test:/home** монтирует каталог **/home/test** хоста в каталог **/home** контейнера и **-v /tmp** создает папку **tmp** в каталоге root контейнера, папку могут использовать другие контейнеры, используя параметр **--volumes-from**. Каталог хоста нельзя смонтировать в подкаталог **/proc** контейнера. В противном случае, при запуске контейнера передается ошибка. |
| --volume-driver            | Диск, на котором находится том данных контейнера. Параметр необязательный. |
| --volumes-from=[]          | Монтирование тома другого контейнера к текущему контейнеру для совместного использования данного тома. Например, **-volumes-from** *container_name* монтирует том *container_name* в текущий контейнер. <br />**-v** и **--volumes-from=[]** — это два очень важных режима резервного копирования и горячей миграции данных. |
| -w, --workdir=""           | Задает рабочий каталог контейнера.                           |



Пример.

В следующем примере создается контейнер с именем **busybox** и выполняется команда **docker start** для его запуска.

```
$ sudo docker create -ti --name=busybox busybox /bin/bash
```

## diff

Синтаксис: **docker diff** _container_

Функция: проверка различий между контейнерами и выявление изменений, внесенных после создания контейнера.

Описание параметров: --.

Пример.

```
$ sudo docker diff registry
C /root
A /root/.bash_history
A /test
```

  

## exec

Синтаксис: **docker exec \[**_options_**]** _container_ _command_ **\[**_arg..._**]**

Функция: запуск команды в контейнере.

Описание параметров:

**-d** и **--detach=false**: запуск в фоновом режиме.

**-i** и **--interactive=false**: сохранение STDIN контейнера во включенном состоянии.

**-t** и **--tty=false**: выделение виртуального терминала.

**--privileged**: выполнение команд в приоритетном режиме.

**-u** и **--user**: имя пользователя или UID.

Пример.

```
$ sudo docker exec -ti exec_test ls
bin  etc   lib	  media  opt   root  sbin  sys	 tmp  var
dev  home  lib64  mnt	 proc  run   srv   test  usr
```

  

## export

Синтаксис: **docker export** _container_

Функция: экспорт содержимого файловой системы контейнера в STDOUT в формате .tar.

Описание параметров: --.

Пример.

В следующем примере экспортируется содержимое контейнера с именем **busybox**, помещенное в пакет **busybox.tar**:

```
$ sudo docker export busybox > busybox.tar
$ ls
busybox.tar 
```

  

## inspect

Синтаксис: **docker inspect \[**_options_**] **_container_**\|**\_image \_**\[**_container_\|_image..._**]**

Функция: возврат информации о контейнере или образе.

Описание параметров:

**-f** и **--format=""**: вывод информации в указанном формате.

**-s** и **--size**: отображение общего размера файла контейнера, если типом запроса является контейнер.

**--type**: возврат значения типа формата JSON.

**-t** и **--time=120**: интервал времени ожидания в секундах. Если команда **docker inspect** не выполняется в течение интервала времени ожидания, система прекращает ожидание и немедленно сообщает об ошибке. Значение по умолчанию — **120**.

Пример.

1. В следующем примере выполняется возврат информации о контейнере:
   
   ```
   $ sudo docker inspect busybox_test
   [
       {
           "Id": "9fbb8649d5a8b6ae106bb0ac7686c40b3cbd67ec2fd1ab03e0c419a70d755577",
           "Created": "2019-08-28T07:43:51.27745746Z",
           "Path": "bash",
           "Args": [],
           "State": {
               "Status": "running",
               "Running": true,
               "Paused": false,
               "Restarting": false,
               "OOMKilled": false,
               "Dead": false,
               "Pid": 64177,
               "ExitCode": 0,
               "Error": "",
               "StartedAt": "2019-08-28T07:43:53.021226383Z",
               "FinishedAt": "0001-01-01T00:00:00Z"
           },
   ......
   ```
   
     

2. В следующем примере выполняется возврат указанной информации о контейнере в заданном формате. В примере используется IP-адрес контейнера busybox\_test.
   
   ```
   $ sudo docker inspect -f {{.NetworkSettings.IPAddress}} busybox_test
   172.17.0.91
   ```

## logs

Синтаксис: **docker logs \[**_options_**]** _container_

Функция: сбор данных журналов в контейнере, который находится в состоянии **running** или **stopped**.

Описание параметров:

**-f** и **--follow=false**: печать журналов в реальном времени.

**-t** и **--timestamps=false**: отображение метки времени журнала.

**--since**: отображение журналов, сгенерированных после указанного времени.

**--tail="all"**: установка количества отображаемых строк. По умолчанию отображаются все строки.

Пример.

1. В следующем примере выполняется проверка журналов контейнера jaegertracing, в котором работает служба jaegertracing:
   
   ```
   $ sudo docker logs jaegertracing
   {"level":"info","ts":1566979103.3696961,"caller":"healthcheck/handler.go:99","msg":"Health Check server started","http-port":14269,"status":"unavailable"}
   {"level":"info","ts":1566979103.3820567,"caller":"memory/factory.go:55","msg":"Memory storage configuration","configuration":{"MaxTraces":0}}
   {"level":"info","ts":1566979103.390773,"caller":"tchannel/builder.go:94","msg":"Enabling service discovery","service":"jaeger-collector"}
   {"level":"info","ts":1566979103.3908608,"caller":"peerlistmgr/peer_list_mgr.go:111","msg":"Registering active peer","peer":"127.0.0.1:14267"}
   {"level":"info","ts":1566979103.3922884,"caller":"all-in-one/main.go:186","msg":"Starting agent"}
   {"level":"info","ts":1566979103.4047635,"caller":"all-in-one/main.go:226","msg":"Starting jaeger-collector TChannel server","port":14267}
   {"level":"info","ts":1566979103.404901,"caller":"all-in-one/main.go:236","msg":"Starting jaeger-collector HTTP server","http-port":14268}
   {"level":"info","ts":1566979103.4577134,"caller":"all-in-one/main.go:256","msg":"Listening for Zipkin HTTP traffic","zipkin.http-port":9411}
   ```
   
     

2. В следующем примере в команду добавляется параметр -f , чтобы выводить журналы контейнера jaegertracing в режиме реального времени.
   
   ```
   $ sudo docker logs -f jaegertracing
   {"level":"info","ts":1566979103.3696961,"caller":"healthcheck/handler.go:99","msg":"Health Check server started","http-port":14269,"status":"unavailable"}
   {"level":"info","ts":1566979103.3820567,"caller":"memory/factory.go:55","msg":"Memory storage configuration","configuration":{"MaxTraces":0}}
   {"level":"info","ts":1566979103.390773,"caller":"tchannel/builder.go:94","msg":"Enabling service discovery","service":"jaeger-collector"}
   {"level":"info","ts":1566979103.3908608,"caller":"peerlistmgr/peer_list_mgr.go:111","msg":"Registering active peer","peer":"127.0.0.1:14267"}
   {"level":"info","ts":1566979103.3922884,"caller":"all-in-one/main.go:186","msg":"Starting agent"}
   ```
   
     

## pause/unpause

Синтаксис: **docker pause** _container_

**docker unpause** _container_

Функция: эти две команды используются в паре. Команда **docker pause** приостанавливает все процессы в контейнере, а команда **docker unpause** возобновляет приостановленные процессы.

Описание параметров: --.

Пример.

Далее приведен пример, в котором используется контейнер с запущенной службой реестра Docker. После выполнения команды **docker pause** для постановки процесса контейнера на паузу доступ к службе реестра посредством команды **curl** блокируется. Возобновление работы приостановленной службы реестра осуществляется командой **docker unpause**. Получить доступ к службе реестра можно, выполнив команду **curl**.

1. Запуск реестра контейнера:
   
   ```
   $ sudo docker run -d --name pause_test -p 5000:5000 registry
   ```
   
   Командой **curl** выполняется доступ к службе. Убедитесь, что возвращается код состояния **200 OK.**
   
   ```
   $ sudo curl -v 127.0.0.1:5000
   ```
   
     

2. Остановка процессов в контейнере:
   
   ```
   $ sudo docker pause pause_test
   ```
   
   Выполните команду **curl**, чтобы получить доступ к службе, проверьте, заблокирована она или нет, и дождитесь, когда служба запустится.

3. Возобновление работы процессов в контейнере:
   
   ```
   $ sudo docker unpause pause_test
   ```
   
   Доступ к службе cURL на шаге 2 восстановлен и возвращается код состояния запроса **200 OK**.
   
     

## port

Синтаксис: **docker port **_container_ **\[**_private\_port\[/proto]_**]**

Функция: вывод списка соответствия портов контейнера или запрос портов хоста, в котором находится указанный порт.

Описание параметров: --.

Пример.

1. В следующем примере команда выводит список всех соответствий портов контейнера:
   
   ```
   $ sudo docker port registry
   5000/tcp -> 0.0.0.0.:5000
   ```

2. В следующем примере команда запрашивает информацию о соответствии указанного порта контейнера:
   
   ```
   $ sudo docker port registry 5000
   0.0.0.0.:5000
   ```

## ps

Синтаксис: **docker ps** \[**_options_**]

Функция: вывод списка контейнеров в различных состояниях в соответствии с заданными параметрами. Если ни один параметр не добавлен, выводятся все работающие контейнеры.

Описание параметров:

**-a** и **--all=false**: отображение контейнера.

**-f** и **--filter=\[]**: фильтрация значений. Доступные значения: **exited=**_int_ (код выхода контейнера) **status=**_restarting\|running\|paused\|exited_ (код состояния контейнера), например, **-f status=running**: выводит список работающих контейнеров.

**-l** и **--latest=false**: вывод информации о последнем созданном контейнере.

**-n=-1**: вывод информации о последних _n_ созданных контейнерах.

**--no-trunc=false**: отображение всех идентификаторов контейнеров в полном 64-разрядном формате. По умолчанию идентификаторы отображаются в усеченном 12-разрядном формате.

**-q** и **--quiet=false**: отображение идентификатора контейнера.

**-s** и **--size=false**: отображение размера контейнера.

Пример.

1. Вывод списка работающих контейнеров:
   
   ```
   $ sudo docker ps
   ```

2. Вывод списка всех контейнеров:
   
   ```
   $ sudo docker ps -a
   ```

## rename

Синтаксис: **docker rename OLD\_NAME NEW\_NAME**

Функция: переименование контейнера

Пример.

В следующем примере команда **docker run** создает и запускает контейнер, команда **docker rename** переименовывает контейнер. Убедитесь, что имя контейнера изменено.

```
$ sudo docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
b15976967abb        busybox:latest        "bash"              3 seconds ago       Up 2 seconds                            festive_morse
$ sudo docker rename pedantic_euler new_name
$ sudo docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
b15976967abb        busybox:latest        "bash"              34 seconds ago      Up 33 seconds                           new_name
```

  

## restart

Синтаксис: **docker restart \[**_options_**]** _container_ **\[**_container..._**]**

Функция: перезапуск работающего контейнера.

Описание параметров:

**-t** и **--time=10**: период времени в секундах, необходимый для ожидания остановки контейнера до того, как он будет аннулирован. Если контейнер остановился, перезапустите его. Значение по умолчанию — **10**.

Пример.

```
$ sudo docker restart busybox
```

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
Если во время перезапуска в контейнере какой-либо из процессов находится в состоянии **D** или **Z**, это может стать причиной сбоя его перезапуска. В этом случае необходимо проанализировать причину возникновения состояния **D** или **Z** процесса в контейнере. Перезапустите контейнер после устранения состояния **D** или **Z** процесса в контейнере.

## rm

Синтаксис: **docker rm \[**_options_**] **_container_ **\[**_container..._**]**

Функция: удаление одного или нескольких контейнеров.

Описание параметров:

**-f** и **--force=false**: принудительное удаление работающего контейнера.

**-l** и **--link=false**: удаление указанного канала без удаления исходного контейнера.

**-v** и **--volumes=false**: удаление томов, имеющих отношение к контейнеру.

Пример.

1. Удаление остановленного контейнера:
   
   ```
   $ sudo docker rm test
   ```

2. Удаление работающего контейнера:
   
   ```
   $ sudo docker rm -f rm_test
   ```

## run

Синтаксис: **docker run \[**_options_**] **_image_ **\[**_command_**] \[**_arg_**...]**

Функция: создание контейнера из заданного образа (если указанный образ не существует, образ загружается из официального реестра образов), запуск контейнера и выполнение указанной команды в контейнере. Эта команда объединяет команды **docker create**, **docker start** и **docker exec**.

Описание параметров: (Параметры этой команды совпадают с параметрами команды **docker create**. Для получения подробной информации см. описание параметров команды **docker create**. Отличаются только следующие два параметра.)

**--rm=false**: параметр указывает контейнер, который будет автоматически удален при завершении работы.

**-v**: монтирование локального каталога или анонимного тома в контейнер. Примечание. Если локальный каталог монтируется в контейнер с меткой безопасности SELinux, не выполняйте одновременно операции добавления и удаления локального каталога. Иначе есть вероятность, что метка безопасности не вступит в силу.

**--sig-proxy=true**: получение прокси-запроса сигнала процесса. Для сигналов SIGCHLD, SIGSTOP и SIGKILL прокси-запросы не используются.

Пример.

В следующем примере выполнен запуск образа busybox, чтобы запустить контейнер, и команда **/bin/sh** после запуска контейнера:

```
$ sudo docker run -ti busybox /bin/sh
```

## start

Синтаксис: **docker start \[**_options_**]** _container_ **\[**_container_**...]**

Функция: запуск одного и более контейнеров, которые еще не запущены в работу.

Описание параметров:

**-a** и **-- attach=false**: присоединение стандартных потоков вывода и ошибок контейнера к STDOUT и STDERR хоста.

**-i** и **--interactive=false**: присоединение стандартных потоков ввода контейнера к STDIN хоста.

Пример.

В следующем примере команда запускает контейнер с именем **busybox** и добавляет **-i -a** к команде, чтобы добавить стандартные потоки ввода и вывода. После запуска можно сразу войти в контейнер. Выход из контейнера осуществляется командой **exit**.

Если параметр **-i -a** не добавляется в команду при запуске контейнера, контейнер запускается в фоновом режиме.

```
$ sudo docker start -i -a busybox
```

## stats

Синтаксис: **docker stats \[**_options_**] \[**_container_**...]**

Функция: непрерывный мониторинг и отображение загрузки ресурсов указанного контейнера. (Если контейнер не указан, по умолчанию отображается загрузка ресурсов всех контейнеров.)

Описание параметров:

**-a** и **--all**: отображение информации обо всех контейнерах. По умолчанию выводится информация только о работающих контейнерах.

**--no-stream**: отображение только первого результата без постоянного его отслеживания.

Пример.

В следующем примере команда **docker run** запускает и создает контейнер, а команда **docker stats** отображает информацию о загрузке ресурсов контейнера:

```
$ sudo docker stats
CONTAINER ID        NAME                    CPU %               MEM USAGE / LIMIT     MEM %               NET I/O             BLOCK I/O           PIDS
2e242bcdd682        jaeger                  0.00%               77.08MiB / 125.8GiB   0.06%               42B / 1.23kB        97.9MB / 0B         38
02a06be42b2c        relaxed_chandrasekhar   0.01%               8.609MiB / 125.8GiB   0.01%               0B / 0B             0B / 0B             10
deb9e49fdef1        hardcore_montalcini     0.01%               12.79MiB / 125.8GiB   0.01%               0B / 0B             0B / 0B             9
```

  

## stop

Синтаксис: **docker stop \[**_options_**]** _container_ **\[**_container_**...]**

Функция: посылка сигнала SIGTERM контейнеру, а затем посылка сигнала SIGKILL для остановки контейнера через определенный промежуток времени.

Описание параметров:

**-t** и **--time=10**: период времени в секундах, необходимый системе для ожидания завершения работы контейнера до того, как он будет аннулирован. Значение по умолчанию — **10**.

Пример.

```
$ sudo docker stop -t=15 busybox
```

## top

Синтаксис: **docker top** _container_ **\[**_ps options_**]**

Функция: отображение процессов, работающих в контейнере.

Описание параметров: --.

Пример.

В следующем примере выполнен запуск контейнера top\_test и выполнена команда **top** в данном контейнере.

```
$ sudo docker top top_test
UID                 PID                 PPID                C                   STIME               TTY                 TIME                CMD
root                70045               70028               0                   15:52               pts/0               00:00:00            bash
```

Значением **PID** является PID процесса в контейнере на хосте.

## update

Синтаксис: **docker update \[**_options_**]** _container_ **\[**_container_**...]**

Функция: изменение одной и более настроек контейнера в горячем режиме.

Описание параметров:

**Табл. 1** Описание параметров

| Параметр             | Описание                                                     |
| -------------------- | ------------------------------------------------------------ |
| --accel=[]           | Настройка одного или нескольких ускорителей контейнера.      |
| --blkio-weight       | Относительный вес контейнера blockio. Диапазон принимаемых значений — от 10 до 1000. |
| --cpu-shares         | Относительный вес ресурсов процессора хоста, занимаемых контейнером. Этот параметр можно использовать для получения более высокого приоритета занятия ресурсов. По умолчанию все контейнеры получают одинаковый приоритет на занятие ресурсов процессора. |
| --cpu-period         | Период CFS процессора. Значение по умолчанию — **100 мс**. Как правило, **--cpu-period** и **--cpu-quota** используются вместе. Например, **--cpu-period=50000 --cpu-quota=25000** означает, что если есть один процессор, контейнер может получать 50% его ресурсов каждые 50 мс. |
| --cpu-quota          | Квота CFS процессора. Значение по умолчанию равно **0**, что указывает на отсутствие ограничений на квоту. |
| --cpuset-cpus        | Количество процессоров (0-3, 0, 1) ресурсы которых могут занимать процессы в контейнере. По умолчанию нет ограничений на этот параметр. |
| --cpuset-mems        | Узлы памяти (0-3, 0, 1), используемые для работы процессов в контейнере. Этот параметр действителен только для системы NUMA. |
| --kernel-memory=""   | Ограничение памяти ядра контейнера. Формат параметра — *numberoptional unit*, доступные единицы измерения **b**, **k**, **m** и **g**. |
| -m, --memory=""      | Ограничение памяти контейнера. Формат параметра — *numberoptional unit*, доступные единицы измерения **b**, **k**, **m** и **g**. Минимальное значение параметра — **4m**. |
| --memory-reservation | Ограничение памяти контейнера. Значение по умолчанию такое же, как и в случае с **--memory**. **--memory** — это жесткое ограничение, **--memory-reservation** — мягкое ограничение. Если загрузка памяти превышает заданное значение, ее объем динамически регулируется (система пытается перераспределить ресурсы, уменьшая объем занятой памяти до значения ниже заданного). Однако загрузка памяти может превышать заданное значение. Этот параметр должен использоваться вместе с параметром **--memory**. Значение должно быть меньше заданного значения **--memory**. |
| --memory-swap        | Суммарная загрузка общей памяти и раздела подкачки. **-1** указывает на отсутствие ограничений на размер занимаемой памяти. Если этот параметр не установлен, размер раздела подкачки в два раза превышает значение **--memory**. То есть, для раздела подкачки может использоваться объем памяти, заданный параметром **--memory**. |
| --restart=""         | Настройка правила перезапуска при выходе контейнера. В настоящее время версия 1.3.1 поддерживает следующие правила:   <br />**no**: контейнер не перезапускается в случае остановки.   <br />**on-failure**: контейнер перезапускается, если код выхода контейнера не равен 0. Это правило может использоваться для добавления максимального количества повторных запусков, например **on-failure:5** означает, что контейнер можно перезапустить максимум пять раз.   <br />**always**: контейнер завершает работу, независимо от кода выхода. |
| --help               | Справочная информация.                                       |


Пример.

В следующем примере команда изменяет настройки процессора и памяти контейнера с именем **busybox**, в том числе относительный вес процессора хоста, полученный контейнером, на значение **512**, ядер процессора, на которых могут работать процессы в контейнере, на значение **0,1,2,3** и ограничение размера памяти, необходимой для работы контейнера, на значение **512 m**.

```
$ sudo docker update  --cpu-shares 512  --cpuset-cpus=0,3 --memory 512m ubuntu 
```

## wait

Синтаксис: **docker wait** _container_ **\[**_container..._**]**

Функция: ожидание момента остановки контейнера и печать кода выхода контейнера.

Описание параметров: --.

Пример.

Запуск контейнера с именем **busybox**:

```
$ sudo docker start -i -a busybox
```

Выполнение команды **docker wait:**

```
$ sudo docker wait busybox
0
```

Система ожидает завершения работы контейнера **busybox**. После завершения его работы появляется код выхода **0**.