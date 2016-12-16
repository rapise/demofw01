If /I "%Processor_Architecture%" NEQ "x86" (
%SystemRoot%\SysWoW64\cmd.exe /C %0
goto :eof
)
SET SMARTESTUDIO_TEST_FOLDER=%~dp0
pushd "C:\Demo\Framework\TestCoverage"
"C:\work\Rapise\Rapise\Core\Bin\..\Engine\record.bat"  "C:\Demo\Framework\TestCoverage\TestCoverage.js" "-eval:g_verboseLevel=1" "-eval:g_userFunctionsFileName='TestCoverage.user.js'" "-eval:g_scriptObjectsFileName='TestCoverage.objects.js'" "-eval:g_objectsMetadataFileName='C:\\Demo\\Framework\\TestCoverage\\TestCoverage.objects.metadata'" "-eval:g_reportFileName='TestCoverage.trp'" "-eval:g_commandInterval=100" "-eval:g_iterationsCount=1" "-eval:g_cacheObjects=false" "-eval:g_objectLookupAttempts=5" "-eval:g_objectLookupAttemptInterval=300" "-eval:g_beautifySavedObjects=true" "-eval:g_saveRecordingScreenshots=false" "-eval:g_savePlaybackScreenshots=false" "-eval:g_savePlaybackScreenshotsInTestReport=false" "-eval:g_saveScreenshotObjectOnly=false" "-eval:g_saveScreenshotsCaptureCursor=true" "-eval:g_entryPointName='Test'" "-eval:g_spyDiscoveryMode='true'"
popd
