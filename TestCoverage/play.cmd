If /I "%Processor_Architecture%" NEQ "x86" (
%SystemRoot%\SysWoW64\cmd.exe /C %0
goto :eof
)
SET SMARTESTUDIO_TEST_FOLDER=%~dp0
pushd "C:\Work\Inflectra\Demo\Framework\CreateNewAuthor"
"C:\Work\Inflectra\Rapise\Rapise\Core\bin\..\Engine\play.bat"  "C:\Work\Inflectra\Demo\Framework\CreateNewAuthor\CreateNewAuthor.js" "-eval:g_verboseLevel=1" "-eval:g_userFunctionsFileName='CreateNewAuthor.user.js'" "-eval:g_scriptObjectsFileName='CreateNewAuthor.objects.js'" "-eval:g_objectsMetadataFileName='C:\\Work\\Inflectra\\Demo\\Framework\\CreateNewAuthor\\CreateNewAuthor.objects.metadata'" "-eval:g_reportFileName='CreateNewAuthor.trp'" "-eval:g_commandInterval=1000" "-eval:g_iterationsCount=1" "-eval:g_cacheObjects=false" "-eval:g_objectLookupAttempts=5" "-eval:g_objectLookupAttemptInterval=300" "-eval:g_beautifySavedObjects=true" "-eval:g_saveRecordingScreenshots=false" "-eval:g_savePlaybackScreenshots=false" "-eval:g_savePlaybackScreenshotsInTestReport=false" "-eval:g_saveScreenshotObjectOnly=false" "-eval:g_saveScreenshotsCaptureCursor=true" "-eval:g_entryPointName='Test'" "-eval:g_browserLibrary='Internet Explorer HTML'" "-eval:g_rWnd='regex:.*'" "-eval:g_serverProjectId='1'" "-eval:g_serverTestCaseFolderId='19'" "-eval:g_serverTestCaseId='23'"
popd
