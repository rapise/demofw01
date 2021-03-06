//The various functions used in the script

function Login()
{
	//Click on Log In
	SeS('Log_In').DoClick();
	//Set Text librarian in Username:
	SeS('Username_').DoSetText("librarian");
	//Set Text librarian in Password:
	SeS('Password_').DoSetText("librarian");
	//Click on ctl00$MainContent$LoginUser$LoginButton
	SeS('ctl00$MainContent$LoginUser$Logi').DoClick();
}

function CreateAuthor(author, age)
{
	//Click on Author Management
	SeS('Author_Management').DoClick();
	//Click on Create Author link
	SeS('_Create_new_author__').DoClick();
	//Set the author name
	SeS('Name_').DoSetText(author);
	//Set the author age
	SeS('Age_').DoSetText(age);
	//Click on ctl00$MainContent$btnSubmit
	SeS('ctl00$MainContent$btnSubmit').DoClick();

	//Verify that the Author is added to the grid
	//We need to xpath query the grid to see if any
	//added rows match the item added
	var tr = FindRowByName(author);
	Tester.Assert('Author was added successfully', tr.length != 0);
}

//Finds the row in the table by the author name
function FindRowByName(name)
{
	var row = SeS('MainContent_grdAuthors')._DoDOMQueryXPath("./tbody/tr/td[.='" + name + "']");
	return row;
}

function Logout()
{
	//Click on Log Out
	SeS('Log_Out').DoClick();
}

function KillBrowser()
{
	switch (g_browserLibrary)
	{
		case "Internet Explorer HTML":
			Global.DoKillByName('iexplore.exe');
			break;
		case "Firefox HTML":
			Global.DoKillByName('firefox.exe');
			break;
		case "Chrome HTML":
			Global.DoKillByName('chrome.exe');
			break;			
	}
}

