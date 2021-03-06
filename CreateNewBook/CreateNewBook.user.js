//Put your custom functions and variables in this file

function Login()
{
	//Click on Log In
	//SeS('Log_In').DoClick();	
	//Set Text librarian in Username:
	SeS('Username_').DoSetText("librarian");
	//Set Text librarian in Password:
	SeS('Password_').DoSetText("librarian");
	//Click on ctl00$MainContent$LoginUser$LoginButton
	SeS('ctl00$MainContent$LoginUser$Logi').DoClick();
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

function CreateBook(name, author, genre)
{
	//Click on Book Management
	SeS('Book_Management').DoClick();
	//Click on (Create new book) 
	SeS('_Create_new_book__').DoClick();
	//Set Name:
	SeS('Name_').DoSetText(name);
	//Select Author:
	SeS('Author_').DoSelect(author);
	//Select Genre:
	SeS('Genre_').DoSelect(genre);
	//Click on ctl00$MainContent$btnSubmit
	SeS('ctl00$MainContent$btnSubmit').DoClick();
	
	//Verify that the Book is added to the grid
	//We need to xpath query the grid to see if any
	//added rows match the item added
	var tr = FindRowByName(name);
	Tester.Assert('Book was added successfully', tr.length != 0);
}

//Finds the row in the table by the author name
function FindRowByName(name)
{
	var row = SeS('MainContent_grdBooks')._DoDOMQueryXPath("./tbody/tr/td[.='" + name + "']");
	return row;
}