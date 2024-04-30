var sheetName = 'Sheet1';

function getSpreadsheetId() {
  var cache = CacheService.getScriptCache();
  var spreadsheetId = cache.get('spreadsheetId');
  if (!spreadsheetId) {
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    spreadsheetId = activeSpreadsheet.getId();
    cache.put('spreadsheetId', spreadsheetId, 21600); // Cache for 6 hours
  }
  return spreadsheetId;
}

function initialSetup() {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var scriptProp = PropertiesService.getScriptProperties();
  scriptProp.setProperty('key', activeSpreadsheet.getId());
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': 'Lock not acquired' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var doc = SpreadsheetApp.openById(getSpreadsheetId());
    var sheet = doc.getSheetByName(sheetName);
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow() + 1;
    var newRow = headers.map(function(header) {
      return header === 'timestamp' ? new Date() : e.parameter[header];
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (exception) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': exception.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
