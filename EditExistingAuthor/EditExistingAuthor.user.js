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

function EditAuthor(existingId, newName, newAge)
{
	//Click on Author Management
	SeS('Author_Management').DoClick();
	
	//Find the Edit link for the appropriate author
	//Have to do this dynamically using the native DOM
	//which can be accessed through the 'element property'
	var tr = FindRowById(existingId);
	var editLink = tr._DoDOMQueryXPath('./td/a')[0];
	editLink.DoClick();
	
	//Set the author name
	SeS('Name_').DoSetText(newName);
	//Set the author age
	SeS('Age_').DoSetText(newAge);
	//Click on ctl00$MainContent$btnSubmit
	SeS('ctl00$MainContent$btnSubmit').DoClick();

	//Verify that the Author is added to the grid
	//We need to xpath query the grid to see if any
	//added rows match the item added
	tr = FindRowById(existingId);
	var name = tr._DoDOMQueryXPath('./td')[1].GetInnerText();
	Tester.Assert('Author was edited successfully', name == newName);
}

//Finds the row in the table by the row id
function FindRowById(id)
{
	var rows = SeS('MainContent_grdAuthors')._DoDOMQueryXPath("./tbody/tr");
	for(var i = 0; i < rows.length; i++)
	{
		var row = rows[i];
		var cells = row._DoDOMQueryXPath('./td');
		if(cells.length > 0 && cells[0].GetInnerText() == id)
		{
			return row;
		}
	}
	return null;
}

function Logout()
{
	//Click on Log Out
	SeS('Log_Out').DoClick();
}

function KillBrowser()
{
	switch (g_browser_library)
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

