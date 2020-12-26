# Functions changed info

---------------diffs in libdnf_libdnf.so.2_abidiff.out:----------------

Functions changes summary: 31 Removed (16 filtered out), 0 Changed, 0 Added functions

Variables changes summary: 0 Removed (1 filtered out), 0 Changed, 0 Added variable

Function symbols changes summary: 34 Removed, 132 Added function symbols not referenced by debug info

Variable symbols changes summary: 36 Removed, 36 Added variable symbols not referenced by debug info



31 Removed functions:



  'method libdnf::DependencyContainer::DependencyContainer(DnfSack*, Queue)'    {_ZN6libdnf19DependencyContainerC1EP8_DnfSack7s_Queue, aliases _ZN6libdnf19DependencyContainerC2EP8_DnfSack7s_Queue}

  'method libdnf::File::OpenException::OpenException(const std::__cxx11::string&, const std::__cxx11::string&)'    {_ZN6libdnf4File13OpenExceptionC2ERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES9_, aliases _ZN6libdnf4File13OpenExceptionC1ERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES9_}

  'method libdnf::ModuleDefaultsContainer::ModuleDefaultsContainer()'    {_ZN6libdnf23ModuleDefaultsContainerC1Ev, aliases _ZN6libdnf23ModuleDefaultsContainerC2Ev}

  'method void libdnf::ModuleDefaultsContainer::fromString(const std::__cxx11::string&, int)'    {_ZN6libdnf23ModuleDefaultsContainer10fromStringERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEEi}

  'method std::vector<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >, std::allocator<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > > > libdnf::ModuleDefaultsContainer::getDefaultProfiles(std::__cxx11::string&, std::__cxx11::string&)'    {_ZN6libdnf23ModuleDefaultsContainer18getDefaultProfilesERNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES7_}

  'method std::__cxx11::string libdnf::ModuleDefaultsContainer::getDefaultStreamFor(std::__cxx11::string)'    {_ZN6libdnf23ModuleDefaultsContainer19getDefaultStreamForENSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE}

  'method std::map<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >, std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >, std::less<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > >, std::allocator<std::pair<const std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >, std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > > > > libdnf::ModuleDefaultsContainer::getDefaultStreams()'    {_ZN6libdnf23ModuleDefaultsContainer17getDefaultStreamsB5cxx11Ev}

  'method void libdnf::ModuleDefaultsContainer::reportFailures(const GPtrArray*) const'    {_ZNK6libdnf23ModuleDefaultsContainer14reportFailuresEPK10_GPtrArray}

  'method void libdnf::ModuleDefaultsContainer::resolve()'    {_ZN6libdnf23ModuleDefaultsContainer7resolveEv}

  'method void libdnf::ModuleDefaultsContainer::saveDefaults(GPtrArray*, int)'    {_ZN6libdnf23ModuleDefaultsContainer12saveDefaultsEP10_GPtrArrayi}

  'method libdnf::ModuleDefaultsContainer::~ModuleDefaultsContainer(int)'    {_ZN6libdnf23ModuleDefaultsContainerD2Ev, aliases _ZN6libdnf23ModuleDefaultsContainerD1Ev}

  'method std::vector<std::map<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >, std::vector<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >, std::allocator<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > > >, std::less<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > >, std::allocator<std::pair<const std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >, std::vector<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >, std::allocator<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > > > > > >, std::allocator<std::map<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >, std::vector<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >, std::allocator<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > > >, std::less<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > >, std::allocator<std::pair<const std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >, std::vector<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >, std::allocator<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > > > > > > > > libdnf::ModuleDependencies::getRequirements(GHashTable*) const'    {_ZNK6libdnf18ModuleDependencies15getRequirementsB5cxx11EP11_GHashTable}

  'method std::map<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >, std::vector<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >, std::allocator<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > > >, std::less<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > >, std::allocator<std::pair<const std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >, std::vector<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >, std::allocator<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > > > > > > libdnf::ModuleDependencies::wrapModuleDependencies(const char*, ModulemdSimpleSet*) const'    {_ZNK6libdnf18ModuleDependencies22wrapModuleDependenciesB5cxx11EPKcP18_ModulemdSimpleSet}

  'method libdnf::ModuleMetadata::ModuleMetadata(std::unique_ptr<_ModulemdModule, std::default_delete<_ModulemdModule> >&&)'    {_ZN6libdnf14ModuleMetadataC2EOSt10unique_ptrI15_ModulemdModuleSt14default_deleteIS2_EE, aliases _ZN6libdnf14ModuleMetadataC1EOSt10unique_ptrI15_ModulemdModuleSt14default_deleteIS2_EE}

  'method const char* libdnf::ModuleMetadata::getArchitecture() const'    {_ZNK6libdnf14ModuleMetadata15getArchitectureEv}

  'method std::vector<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >, std::allocator<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > > > libdnf::ModuleMetadata::getArtifacts() const'    {_ZNK6libdnf14ModuleMetadata12getArtifactsB5cxx11Ev}

  'method const char* libdnf::ModuleMetadata::getContext() const'    {_ZNK6libdnf14ModuleMetadata10getContextEv}

  'method std::vector<libdnf::ModuleDependencies, std::allocator<libdnf::ModuleDependencies> > libdnf::ModuleMetadata::getDependencies() const'    {_ZNK6libdnf14ModuleMetadata15getDependenciesEv}

  'method std::__cxx11::string libdnf::ModuleMetadata::getDescription() const'    {_ZNK6libdnf14ModuleMetadata14getDescriptionB5cxx11Ev}

  'method const char* libdnf::ModuleMetadata::getName() const'    {_ZNK6libdnf14ModuleMetadata7getNameEv}

  'method std::vector<libdnf::ModuleProfile, std::allocator<libdnf::ModuleProfile> > libdnf::ModuleMetadata::getProfiles(const std::__cxx11::string&) const'    {_ZNK6libdnf14ModuleMetadata11getProfilesERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE}

  'method const char* libdnf::ModuleMetadata::getStream() const'    {_ZNK6libdnf14ModuleMetadata9getStreamEv}

  'method std::__cxx11::string libdnf::ModuleMetadata::getSummary() const'    {_ZNK6libdnf14ModuleMetadata10getSummaryB5cxx11Ev}

  'method long long int libdnf::ModuleMetadata::getVersion() const'    {_ZNK6libdnf14ModuleMetadata10getVersionEv}

  'method std::__cxx11::string libdnf::ModuleMetadata::getYaml() const'    {_ZNK6libdnf14ModuleMetadata7getYamlB5cxx11Ev}

  'method std::vector<libdnf::ModuleMetadata, std::allocator<libdnf::ModuleMetadata> > libdnf::ModuleMetadata::metadataFromString()'    {_ZN6libdnf14ModuleMetadata18metadataFromStringERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE}

  'method std::vector<libdnf::ModuleMetadata, std::allocator<libdnf::ModuleMetadata> > libdnf::ModuleMetadata::wrapModulemdModule()'    {_ZN6libdnf14ModuleMetadata18wrapModulemdModuleEP10_GPtrArray}

  'method libdnf::ModuleMetadata::~ModuleMetadata(int)'    {_ZN6libdnf14ModuleMetadataD1Ev, aliases _ZN6libdnf14ModuleMetadataD2Ev}

  'method libdnf::ModulePackage::ModulePackage(DnfSack*, libdnf::LibsolvRepo*, libdnf::ModuleMetadata&&, const std::__cxx11::string&)'    {_ZN6libdnf13ModulePackageC2EP8_DnfSackP6s_RepoONS_14ModuleMetadataERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE, aliases _ZN6libdnf13ModulePackageC1EP8_DnfSackP6s_RepoONS_14ModuleMetadataERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE}

  'method std::unique_ptr<_LrHandle, std::default_delete<_LrHandle> > libdnf::Repo::Impl::lrHandleInitRemote(const char*, bool)'    {_ZN6libdnf4Repo4Impl18lrHandleInitRemoteEPKcb}

  'method int64_t libdnf::Swdb::beginTransaction(int64_t, std::__cxx11::string, std::__cxx11::string, uint32_t)'    {_ZN6libdnf4Swdb16beginTransactionElNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES6_j}



34 Removed function symbols not referenced by debug info:



  _ZN6libdnf23ModuleDefaultsContainer16ResolveExceptionD0Ev

  _ZN6libdnf23ModuleDefaultsContainer16ResolveExceptionD1Ev

  _ZN6libdnf23ModuleDefaultsContainer16ResolveExceptionD2Ev, aliases _ZN6libdnf23ModuleDefaultsContainer16ResolveExceptionD1Ev

  _ZN6libdnf23ModuleDefaultsContainer17ConflictExceptionD0Ev

  _ZN6libdnf23ModuleDefaultsContainer17ConflictExceptionD1Ev, aliases _ZN6libdnf23ModuleDefaultsContainer17ConflictExceptionD2Ev

  _ZN6libdnf23ModuleDefaultsContainer17ConflictExceptionD2Ev

  _ZN6libdnf23ModuleDefaultsContainer9ExceptionD0Ev

  _ZN6libdnf23ModuleDefaultsContainer9ExceptionD1Ev

  _ZN6libdnf23ModuleDefaultsContainer9ExceptionD2Ev, aliases _ZN6libdnf23ModuleDefaultsContainer9ExceptionD1Ev

  _ZN6libdnf4File11IOExceptionD0Ev

  _ZN6libdnf4File11IOExceptionD1Ev

  _ZN6libdnf4File11IOExceptionD2Ev, aliases _ZN6libdnf4File11IOExceptionD1Ev

  _ZN6libdnf4File13OpenExceptionD0Ev

  _ZN6libdnf4File13OpenExceptionD1Ev, aliases _ZN6libdnf4File13OpenExceptionD2Ev

  _ZN6libdnf4File13OpenExceptionD2Ev

  _ZN6libdnf4File14CloseExceptionD0Ev

  _ZN6libdnf4File14CloseExceptionD1Ev, aliases _ZN6libdnf4File14CloseExceptionD2Ev

  _ZN6libdnf4File14CloseExceptionD2Ev

  _ZN6libdnf4File18ShortReadExceptionD0Ev

  _ZN6libdnf4File18ShortReadExceptionD1Ev

  _ZN6libdnf4File18ShortReadExceptionD2Ev, aliases _ZN6libdnf4File18ShortReadExceptionD1Ev

  _ZN6libdnf4Goal9ExceptionD0Ev

  _ZN6libdnf4Goal9ExceptionD1Ev

  _ZN6libdnf4Goal9ExceptionD2Ev, aliases _ZN6libdnf4Goal9ExceptionD1Ev

  _ZN7SQLite312LibExceptionD0Ev

  _ZN7SQLite312LibExceptionD1Ev

  _ZN7SQLite312LibExceptionD2Ev, aliases _ZN7SQLite312LibExceptionD1Ev

  _ZN7SQLite39ExceptionD0Ev

  _ZN7SQLite39ExceptionD1Ev

  _ZN7SQLite39ExceptionD2Ev, aliases _ZN7SQLite39ExceptionD1Ev

  _ZNSt4pairIKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESt6vectorIS5_SaIS5_EEED1Ev, aliases _ZNSt4pairIKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESt6vectorIS5_SaIS5_EEED2Ev

  _ZNSt4pairIKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESt6vectorIS5_SaIS5_EEED2Ev

  _ZNSt5arrayIKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEELm1EED1Ev

  _ZNSt5arrayIKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEELm1EED2Ev, aliases _ZNSt5arrayIKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEELm1EED1Ev



132 Added function symbols not referenced by debug info:



  [A] _ZN10tinyformat6detail21parseWidthOrPrecisionERiRPKcbPKNS0_9FormatArgES1_i

  [A] _ZN6libdnf11TransactionD0Ev

  [A] _ZN6libdnf11Transformer13migrateSchemaESt10shared_ptrI7SQLite3E

  [A] _ZN6libdnf12swdb_private11TransactionD0Ev

  [A] _ZN6libdnf12swdb_private11TransactionD1Ev

  [A] _ZN6libdnf12swdb_private11TransactionD2Ev, aliases _ZN6libdnf12swdb_private11TransactionD1Ev

  [A] _ZN6libdnf13ModulePackageC1EP8_DnfSackP6s_RepoP21_ModulemdModuleStreamRKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE

  [A] _ZN6libdnf13ModulePackageC2EP8_DnfSackP6s_RepoP21_ModulemdModuleStreamRKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE, aliases _ZN6libdnf13ModulePackageC1EP8_DnfSackP6s_RepoP21_ModulemdModuleStreamRKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE

  [A] _ZN6libdnf14ModuleMetadata17getDefaultStreamsB5cxx11Ev

  [A] _ZN6libdnf14ModuleMetadata18getDefaultProfilesENSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES6_

  [A] _ZN6libdnf14ModuleMetadata20getAllModulePackagesEP8_DnfSackP6s_RepoRKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE

  [A] _ZN6libdnf14ModuleMetadata20resolveAddedMetadataEv

  [A] _ZN6libdnf14ModuleMetadata21addMetadataFromStringERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEEi

  [A] _ZN6libdnf14ModuleMetadataC1Ev

  [A] _ZN6libdnf14ModuleMetadataC2Ev, aliases _ZN6libdnf14ModuleMetadataC1Ev

  [A] _ZN6libdnf19DependencyContainerC1EP8_DnfSackO7s_Queue

  [A] _ZN6libdnf19DependencyContainerC1EP8_DnfSackRK7s_Queue

  [A] _ZN6libdnf19DependencyContainerC2EP8_DnfSackO7s_Queue, aliases _ZN6libdnf19DependencyContainerC1EP8_DnfSackO7s_Queue

  [A] _ZN6libdnf19DependencyContainerC2EP8_DnfSackRK7s_Queue, aliases _ZN6libdnf19DependencyContainerC1EP8_DnfSackRK7s_Queue

  [A] _ZN6libdnf21pathExistsOrExceptionERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE

  [A] _ZN6libdnf22ModulePackageContainer16ResolveExceptionD0Ev

  [A] _ZN6libdnf22ModulePackageContainer16ResolveExceptionD1Ev

  [A] _ZN6libdnf22ModulePackageContainer16ResolveExceptionD2Ev, aliases _ZN6libdnf22ModulePackageContainer16ResolveExceptionD1Ev

  [A] _ZN6libdnf22ModulePackageContainer17ConflictExceptionD0Ev

  [A] _ZN6libdnf22ModulePackageContainer17ConflictExceptionD1Ev, aliases _ZN6libdnf22ModulePackageContainer17ConflictExceptionD2Ev

  [A] _ZN6libdnf22ModulePackageContainer17ConflictExceptionD2Ev

  [A] _ZN6libdnf22TransformerTransactionD0Ev

  [A] _ZN6libdnf22TransformerTransactionD1Ev

  [A] _ZN6libdnf22TransformerTransactionD2Ev, aliases _ZN6libdnf22TransformerTransactionD1Ev

  [A] _ZN6libdnf4File10CloseErrorC1ERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE, aliases _ZN6libdnf4File10CloseErrorC2ERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE

  [A] _ZN6libdnf4File10CloseErrorC2ERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE

  [A] _ZN6libdnf4File10CloseErrorD0Ev

  [A] _ZN6libdnf4File10CloseErrorD1Ev, aliases _ZN6libdnf4File10CloseErrorD2Ev

  [A] _ZN6libdnf4File10CloseErrorD2Ev

  [A] _ZN6libdnf4File7IOErrorD0Ev

  [A] _ZN6libdnf4File7IOErrorD1Ev, aliases _ZN6libdnf4File7IOErrorD2Ev

  [A] _ZN6libdnf4File7IOErrorD2Ev

  [A] _ZN6libdnf4File9OpenErrorC1ERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES9_

  [A] _ZN6libdnf4File9OpenErrorC2ERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES9_, aliases _ZN6libdnf4File9OpenErrorC1ERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES9_

  [A] _ZN6libdnf4File9OpenErrorD0Ev

  [A] _ZN6libdnf4File9OpenErrorD1Ev

  [A] _ZN6libdnf4File9OpenErrorD2Ev, aliases _ZN6libdnf4File9OpenErrorD1Ev

  [A] _ZN6libdnf4File9ReadErrorD0Ev

  [A] _ZN6libdnf4File9ReadErrorD1Ev, aliases _ZN6libdnf4File9ReadErrorD2Ev

  [A] _ZN6libdnf4File9ReadErrorD2Ev

  [A] _ZN6libdnf4Goal26set_protect_running_kernelEb

  [A] _ZN6libdnf4Goal4Impl22protectedRunningKernelEv

  [A] _ZN6libdnf4Goal5ErrorC1EPKci, aliases _ZN6libdnf4Goal5ErrorC2EPKci

  [A] _ZN6libdnf4Goal5ErrorC2EPKci

  [A] _ZN6libdnf4Goal5ErrorD0Ev

  [A] _ZN6libdnf4Goal5ErrorD1Ev, aliases _ZN6libdnf4Goal5ErrorD2Ev

  [A] _ZN6libdnf4Goal5ErrorD2Ev

  [A] _ZN6libdnf4Goal5favorEP11_DnfPackage

  [A] _ZN6libdnf4Goal8disfavorEP11_DnfPackage

  [A] _ZN6libdnf4Repo4Impl18lrHandleInitRemoteEPKc

  [A] _ZN6libdnf4Swdb16beginTransactionElNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES6_jS6_

  [A] _ZN6libdnf5ErrorD0Ev

  [A] _ZN6libdnf5ErrorD1Ev

  [A] _ZN6libdnf5ErrorD2Ev, aliases _ZN6libdnf5ErrorD1Ev

  [A] _ZN6libdnf5Query4Impl17filterDepSolvableERKNS_6FilterEP5s_Map

  [A] _ZN6libdnf5Query4Impl19obsoletesByPriorityEP6s_PoolP10s_SolvableP5s_MapPKS6_i

  [A] _ZN6libdnf5Query4Impl22filterUpdownByPriorityERKNS_6FilterEP5s_Map

  [A] _ZN6libdnf5Query4Impl25filterObsoletesByPriorityERKNS_6FilterEP5s_Map

  [A] _ZN6libdnf9ExceptionD0Ev

  [A] _ZN6libdnf9ExceptionD1Ev, aliases _ZN6libdnf9ExceptionD2Ev

  [A] _ZN6libdnf9ExceptionD2Ev

  [A] _ZN6libdnf9RepoErrorD0Ev

  [A] _ZN6libdnf9RepoErrorD1Ev

  [A] _ZN6libdnf9RepoErrorD2Ev, aliases _ZN6libdnf9RepoErrorD1Ev

  [A] _ZN6libdnf9urlEncodeERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES7_

  [A] _ZN7SQLite35ErrorC1ERKS_iRKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE

  [A] _ZN7SQLite35ErrorC2ERKS_iRKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE, aliases _ZN7SQLite35ErrorC1ERKS_iRKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE

  [A] _ZN7SQLite35ErrorD0Ev

  [A] _ZN7SQLite35ErrorD1Ev, aliases _ZN7SQLite35ErrorD2Ev

  [A] _ZN7SQLite35ErrorD2Ev

  [A] _ZN7SQLite39Statement5ErrorC1ERS0_iRKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE

  [A] _ZN7SQLite39Statement5ErrorC2ERS0_iRKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE, aliases _ZN7SQLite39Statement5ErrorC1ERS0_iRKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE

  [A] _ZN7SQLite39Statement5ErrorD0Ev

  [A] _ZN7SQLite39Statement5ErrorD1Ev, aliases _ZN7SQLite39Statement5ErrorD2Ev

  [A] _ZN7SQLite39Statement5ErrorD2Ev

  [A] _ZNK6libdnf13ModulePackage7getYamlB5cxx11Ev

  [A] _ZNK6libdnf17MergedTransaction12listCommentsB5cxx11Ev

  [A] _ZNK6libdnf4Goal26get_protect_running_kernelEv

  [A] _ZNKSt8_Rb_treeINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES5_St9_IdentityIS5_ESt4lessIS5_ESaIS5_EE4findERKS5_

  [A] _ZNSt10_HashtableINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES5_SaIS5_ENSt8__detail9_IdentityESt8equal_toIS5_ESt4hashIS5_ENS7_18_Mod_range_hashingENS7_20_Default_ranged_hashENS7_20_Prime_rehash_policyENS7_17_Hashtable_traitsILb1ELb1ELb1EEEE10_M_emplaceIJS5_EEESt4pairINS7_14_Node_iteratorIS5_Lb1ELb1EEEbESt17integral_constantIbLb1EEDpOT_

  [A] _ZNSt10_HashtableINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES5_SaIS5_ENSt8__detail9_IdentityESt8equal_toIS5_ESt4hashIS5_ENS7_18_Mod_range_hashingENS7_20_Default_ranged_hashENS7_20_Prime_rehash_policyENS7_17_Hashtable_traitsILb1ELb1ELb1EEEE9_M_rehashEmRKm

  [A] _ZNSt10_HashtableINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES5_SaIS5_ENSt8__detail9_IdentityESt8equal_toIS5_ESt4hashIS5_ENS7_18_Mod_range_hashingENS7_20_Default_ranged_hashENS7_20_Prime_rehash_policyENS7_17_Hashtable_traitsILb1ELb1ELb1EEEED1Ev, aliases _ZNSt10_HashtableINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES5_SaIS5_ENSt8__detail9_IdentityESt8equal_toIS5_ESt4hashIS5_ENS7_18_Mod_range_hashingENS7_20_Default_ranged_hashENS7_20_Prime_rehash_policyENS7_17_Hashtable_traitsILb1ELb1ELb1EEEED2Ev

  [A] _ZNSt10_HashtableINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES5_SaIS5_ENSt8__detail9_IdentityESt8equal_toIS5_ESt4hashIS5_ENS7_18_Mod_range_hashingENS7_20_Default_ranged_hashENS7_20_Prime_rehash_policyENS7_17_Hashtable_traitsILb1ELb1ELb1EEEED2Ev

  [A] _ZNSt10unique_ptrIN6libdnf5NevraESt14default_deleteIS1_EED1Ev, aliases _ZNSt10unique_ptrIN6libdnf5NevraESt14default_deleteIS1_EED2Ev

  [A] _ZNSt10unique_ptrIN6libdnf5NevraESt14default_deleteIS1_EED2Ev

  [A] _ZNSt10unique_ptrINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESt14default_deleteIS5_EED1Ev, aliases _ZNSt10unique_ptrINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESt14default_deleteIS5_EED2Ev

  [A] _ZNSt10unique_ptrINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESt14default_deleteIS5_EED2Ev

  [A] _ZNSt12__shared_ptrI7SQLite3LN9__gnu_cxx12_Lock_policyE2EEC1ERKS3_

  [A] _ZNSt12__shared_ptrI7SQLite3LN9__gnu_cxx12_Lock_policyE2EEC1ISaIS0_EJRA9_KcEEESt19_Sp_make_shared_tagRKT_DpOT0_

  [A] _ZNSt12__shared_ptrI7SQLite3LN9__gnu_cxx12_Lock_policyE2EEC2ERKS3_, aliases _ZNSt12__shared_ptrI7SQLite3LN9__gnu_cxx12_Lock_policyE2EEC1ERKS3_

  [A] _ZNSt12__shared_ptrI7SQLite3LN9__gnu_cxx12_Lock_policyE2EEC2ISaIS0_EJRA9_KcEEESt19_Sp_make_shared_tagRKT_DpOT0_, aliases _ZNSt12__shared_ptrI7SQLite3LN9__gnu_cxx12_Lock_policyE2EEC1ISaIS0_EJRA9_KcEEESt19_Sp_make_shared_tagRKT_DpOT0_

  [A] _ZNSt3setINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESt4lessIS5_ESaIS5_EED1Ev, aliases _ZNSt3setINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESt4lessIS5_ESaIS5_EED2Ev

  [A] _ZNSt3setINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESt4lessIS5_ESaIS5_EED2Ev

  [A] _ZNSt6vectorIN6libdnf7Plugins14PluginWithDataESaIS2_EE17_M_realloc_insertIJS2_EEEvN9__gnu_cxx17__normal_iteratorIPS2_S4_EEDpOT_

  [A] _ZNSt6vectorIP10s_SolvableSaIS1_EE17_M_realloc_insertIJRKS1_EEEvN9__gnu_cxx17__normal_iteratorIPS1_S3_EEDpOT_

  [A] _ZNSt6vectorIP10s_SolvableSaIS1_EE7reserveEm

  [A] _ZNSt6vectorIPN6libdnf13ModulePackageESaIS2_EE17_M_realloc_insertIJS2_EEEvN9__gnu_cxx17__normal_iteratorIPS2_S4_EEDpOT_

  [A] _ZNSt8_Rb_treeINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES5_St9_IdentityIS5_ESt4lessIS5_ESaIS5_EE16_M_insert_uniqueIRKS5_EESt4pairISt17_Rb_tree_iteratorIS5_EbEOT_

  [A] _ZNSt8_Rb_treeINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES5_St9_IdentityIS5_ESt4lessIS5_ESaIS5_EE16_M_insert_uniqueIS5_EESt4pairISt17_Rb_tree_iteratorIS5_EbEOT_

  [A] _ZNSt8_Rb_treeINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES5_St9_IdentityIS5_ESt4lessIS5_ESaIS5_EE24_M_get_insert_unique_posERKS5_

  [A] _ZNSt8_Rb_treeINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES5_St9_IdentityIS5_ESt4lessIS5_ESaIS5_EE7_M_copyINSB_20_Reuse_or_alloc_nodeEEEPSt13_Rb_tree_nodeIS5_EPKSF_PSt18_Rb_tree_node_baseRT_

  [A] _ZNSt8_Rb_treeINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES5_St9_IdentityIS5_ESt4lessIS5_ESaIS5_EEaSERKSB_

  [A] _ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPP10s_SolvableSt6vectorIS3_SaIS3_EEEENS0_5__ops15_Iter_comp_iterIPFbPKS2_SC_EEEEvT_SG_T0_

  [A] _ZSt9__find_ifIN9__gnu_cxx17__normal_iteratorIPKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESt6vectorIS7_SaIS7_EEEENS0_5__ops16_Iter_equals_valIA4_KcEEET_SJ_SJ_T0_St26random_access_iterator_tag

  [A] _ZSt9__find_ifIN9__gnu_cxx17__normal_iteratorIPKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESt6vectorIS7_SaIS7_EEEENS0_5__ops16_Iter_equals_valIA5_KcEEET_SJ_SJ_T0_St26random_access_iterator_tag

  [A] dnf_context_disable_plugins

  [A] dnf_context_enable_plugins

  [A] dnf_context_get_config_file_path

  [A] dnf_context_get_disabled_plugins

  [A] dnf_context_get_enabled_plugins

  [A] dnf_context_get_install_weak_deps

  [A] dnf_context_get_plugins_all_disabled

  [A] dnf_context_get_repos_dir

  [A] dnf_context_is_set_config_file_path

  [A] dnf_context_reset_all_modules

  [A] dnf_context_set_config_file_path

  [A] dnf_context_set_install_weak_deps

  [A] dnf_context_set_plugins_all_disabled

  [A] dnf_context_set_repos_dir

  [A] dnf_package_get_prereq_ignoreinst

  [A] dnf_package_get_regular_requires

  [A] dnf_package_is_local

  [A] dnf_repo_set_skip_if_unavailable

  [A] dnf_transaction_set_dont_solve_goal

  [A] hy_goal_disfavor

  [A] hy_goal_favor

  [A] hy_nevra_free



36 Removed variable symbols not referenced by debug info:



  _ZTIN6libdnf23ModuleDefaultsContainer16ResolveExceptionE

  _ZTIN6libdnf23ModuleDefaultsContainer17ConflictExceptionE

  _ZTIN6libdnf23ModuleDefaultsContainer9ExceptionE

  _ZTIN6libdnf4File11IOExceptionE

  _ZTIN6libdnf4File13OpenExceptionE

  _ZTIN6libdnf4File14CloseExceptionE

  _ZTIN6libdnf4File18ShortReadExceptionE

  _ZTIN6libdnf4Goal9ExceptionE

  _ZTIN7SQLite312LibExceptionE

  _ZTIN7SQLite39ExceptionE

  _ZTISt23_Sp_counted_ptr_inplaceIN6libdnf14CompressedFileESaIS1_ELN9__gnu_cxx12_Lock_policyE2EE

  _ZTISt23_Sp_counted_ptr_inplaceIN6libdnf4FileESaIS1_ELN9__gnu_cxx12_Lock_policyE2EE

  _ZTSN6libdnf23ModuleDefaultsContainer16ResolveExceptionE

  _ZTSN6libdnf23ModuleDefaultsContainer17ConflictExceptionE

  _ZTSN6libdnf23ModuleDefaultsContainer9ExceptionE

  _ZTSN6libdnf4File11IOExceptionE

  _ZTSN6libdnf4File13OpenExceptionE

  _ZTSN6libdnf4File14CloseExceptionE

  _ZTSN6libdnf4File18ShortReadExceptionE

  _ZTSN6libdnf4Goal9ExceptionE

  _ZTSN7SQLite312LibExceptionE

  _ZTSN7SQLite39ExceptionE

  _ZTSSt23_Sp_counted_ptr_inplaceIN6libdnf14CompressedFileESaIS1_ELN9__gnu_cxx12_Lock_policyE2EE

  _ZTSSt23_Sp_counted_ptr_inplaceIN6libdnf4FileESaIS1_ELN9__gnu_cxx12_Lock_policyE2EE

  _ZTVN6libdnf23ModuleDefaultsContainer16ResolveExceptionE

  _ZTVN6libdnf23ModuleDefaultsContainer17ConflictExceptionE

  _ZTVN6libdnf23ModuleDefaultsContainer9ExceptionE

  _ZTVN6libdnf4File11IOExceptionE

  _ZTVN6libdnf4File13OpenExceptionE

  _ZTVN6libdnf4File14CloseExceptionE

  _ZTVN6libdnf4File18ShortReadExceptionE

  _ZTVN6libdnf4Goal9ExceptionE

  _ZTVN7SQLite312LibExceptionE

  _ZTVN7SQLite39ExceptionE

  _ZTVSt23_Sp_counted_ptr_inplaceIN6libdnf14CompressedFileESaIS1_ELN9__gnu_cxx12_Lock_policyE2EE

  _ZTVSt23_Sp_counted_ptr_inplaceIN6libdnf4FileESaIS1_ELN9__gnu_cxx12_Lock_policyE2EE



36 Added variable symbols not referenced by debug info:



  _ZTIN6libdnf22ModulePackageContainer16ResolveExceptionE

  _ZTIN6libdnf22ModulePackageContainer17ConflictExceptionE

  _ZTIN6libdnf4File10CloseErrorE

  _ZTIN6libdnf4File7IOErrorE

  _ZTIN6libdnf4File9OpenErrorE

  _ZTIN6libdnf4File9ReadErrorE

  _ZTIN6libdnf4Goal5ErrorE

  _ZTIN6libdnf5ErrorE

  _ZTIN6libdnf9ExceptionE

  _ZTIN6libdnf9RepoErrorE

  _ZTIN7SQLite35ErrorE

  _ZTIN7SQLite39Statement5ErrorE

  _ZTSN6libdnf22ModulePackageContainer16ResolveExceptionE

  _ZTSN6libdnf22ModulePackageContainer17ConflictExceptionE

  _ZTSN6libdnf4File10CloseErrorE

  _ZTSN6libdnf4File7IOErrorE

  _ZTSN6libdnf4File9OpenErrorE

  _ZTSN6libdnf4File9ReadErrorE

  _ZTSN6libdnf4Goal5ErrorE

  _ZTSN6libdnf5ErrorE

  _ZTSN6libdnf9ExceptionE

  _ZTSN6libdnf9RepoErrorE

  _ZTSN7SQLite35ErrorE

  _ZTSN7SQLite39Statement5ErrorE

  _ZTVN6libdnf22ModulePackageContainer16ResolveExceptionE

  _ZTVN6libdnf22ModulePackageContainer17ConflictExceptionE

  _ZTVN6libdnf4File10CloseErrorE

  _ZTVN6libdnf4File7IOErrorE

  _ZTVN6libdnf4File9OpenErrorE

  _ZTVN6libdnf4File9ReadErrorE

  _ZTVN6libdnf4Goal5ErrorE

  _ZTVN6libdnf5ErrorE

  _ZTVN6libdnf9ExceptionE

  _ZTVN6libdnf9RepoErrorE

  _ZTVN7SQLite35ErrorE

  _ZTVN7SQLite39Statement5ErrorE



