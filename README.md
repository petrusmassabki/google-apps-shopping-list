# Google Apps Shopping List

This is a simple shopping list web app to be used in conjunction with Google Sheets. The project served merely to introduce me to Google Apps Script platform - hence the simplicity -, but it is still handy if you, like me, need to constantly create a shared shopping list with housemates.

![App views](https://github.com/petrusmassabki/google-apps-shopping-list/blob/master/screeshots.png)

## Functionalities

 - Display and edit a shopping list stored in a Google Sheets spreadsheet through a simple user interface
 - Remove items by double-clicking
 - Find matching items while typing to avoid duplicates
 - Share the list and simultaneously edit it with others

## Usage

1. Copy the content of _src_ to corresponding files in a new Google Apps Script project
2. Create a new Google Sheets spreadsheet and paste its URL where indicated at the _code.gs_ file:
```
// Insert the spreadsheet url and its name here
var url = "Spreadsheet-URL";
var spreadsheet = SpreadsheetApp.openByUrl(url);
var workingSheet = spreadsheet.getSheetByName("Sheet1");
```
3. Deploy the project as a web app; choose the permissions according to your needs
