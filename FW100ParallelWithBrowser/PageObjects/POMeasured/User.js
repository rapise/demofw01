//Put your custom functions and variables in this file

var startTime = null;

function BeginRun()
{
	startTime = _SeSCurrMillis();
}

function WaitUntil(/**number*/maxMillis) {
	var chunk = 0;
	var curr = _SeSCurrMillis();
	var lastWait = maxMillis - (curr - startTime);
	var nextWait = curr - startTime;
	while( lastWait > 10000) {
		var curr = _SeSCurrMillis();
		var nextChunk = Math.round( (curr - startTime) / 10000 );
		var lastWait = maxMillis - (curr - startTime);
		if( nextChunk > chunk )
		{
			Tester.Assert( (nextChunk*10)+"sec passed", true);
			chunk = nextChunk;
		}
		Global.DoSleep(1000);
	}
	
	if( lastWait > 0 )
	{
		Global.DoSleep( lastWait );
		Tester.Assert("Final : "+(maxMillis/1000) +"sec reached", true);
	}
}