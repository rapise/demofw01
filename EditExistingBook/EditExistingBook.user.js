//Put your custom functions and variables in this file

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

//Finds the row in the table by the book id
function FindRowById(id)
{
	var rows = SeS('MainContent_grdBooks')._DoDOMQueryXPath("./tbody/tr");
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

function EditBook(book_id, name, author, genre)
{
	//Click on Book Management
	SeS('Book_Management').DoClick();
	
	//Find the Edit link for the appropriate book
	//Have to do this dynamically using the native DOM
	//which can be accessed through the 'element property'
	var tr = FindRowById(book_id);
	var editLink = tr._DoDOMQueryXPath('./td/a')[0];
	editLink.DoClick();
	
	//Set Name:
	SeS('Name_').DoSetText(name);
	//Select Author:
	SeS('Author_').DoSelect(author);
	//Select Genre:
	SeS('Genre_').DoSelect(genre);
	//Click on ctl00$MainContent$btnSubmit
	SeS('ctl00$MainContent$btnSubmit').DoClick();
	
	//Verify that the Book was edited
	var tr = FindRowById(book_id);
	var nameFound = tr._DoDOMQueryXPath('./td')[1].GetInnerText();
	Tester.Assert('Book was edited successfully', nameFound == name);
}
