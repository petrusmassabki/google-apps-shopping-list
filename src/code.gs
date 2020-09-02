// Insert the spreadsheet url and its name here
var url = "Spreadsheet-URL";
var spreadsheet = SpreadsheetApp.openByUrl(url);
var workingSheet = spreadsheet.getSheetByName("Sheet1");

function doGet(request) {
    return HtmlService.createTemplateFromFile('index').evaluate();
}

function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function accessSpreadsheet() {

    if(workingSheet.getLastRow() > 0) {
        return workingSheet.getDataRange().getValues();
    } else {
        return [];
    }
}

function addToSpreadsheet(row) {
    workingSheet.appendRow(row);
}

function removeFromSpreadsheet(itemToDelete) {
    var groceriesList = workingSheet.getDataRange().getValues();
    var rowsLength = workingSheet.getDataRange().getNumRows();

    for (var row = 0; row < rowsLength; row++) {
        var item = groceriesList[row][0];
        var amount = parseInt(groceriesList[row][1]);
        var rowContent = item + " (" + amount + ")";

        if (itemToDelete == rowContent) {
            workingSheet.deleteRow(row + 1);
            break;
        }
    }
}
