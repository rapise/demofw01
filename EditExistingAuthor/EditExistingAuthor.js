
function TestInit()
{
	//Input variables - allows SpiraTest to configure as parameters
	//Provide backup values if not defined
	if ('undefined' == typeof(g_author_age))
	{
		g_author_age = 35;
	}
	if ('undefined' == typeof(g_author_name))
	{
		g_author_name = 'Roger Hammersmith';
	}
	if ('undefined' == typeof(g_browser_library))
	{
		g_browser_library = "Internet Explorer HTML";
	}
	
	Tester.SetReportAttribute("Browser", g_browser_library);
	KillBrowser();
}


//########## Script Steps ##############

function Test()
{
	/**
	@fileOverview
	This is automated version of former manual 
	Spira test case "Ability to edit existing author".
 
	Illustrate how you can use Rapise to automate tests 
	managed in SpiraTest. Each of these test scripts 
	corresponds to a specific test case inside of 
	SpiraTest. You can open these tests and save to 
	your instance of SpiraTest, mapping them to the
	corresponding test case in the Library Information 
	System project.

	This will then allow you to execute the tests 
	from SpiraTest using the RapiseLauncher application 
	that installs with Rapise.

	The URL for accessing the Library Information System 
	is http://www.libraryinformationysystem.org and 
	is hosted by Inflectra for your use.

	You may switch between different web 
	browsers using "Browser:" combo box.
	*/

	var author_id = 2;
	Login();
	EditAuthor(author_id, g_author_name, g_author_age);
	Logout();
}

g_load_libraries=["%g_browserLibrary:Internet Explorer HTML%"];


