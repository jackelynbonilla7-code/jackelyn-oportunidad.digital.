// Pega este código en Google Apps Script (Extensiones > Apps Script) de tu hoja de cálculo.
function doPost(e) {
  var sh = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (sh.getLastRow() === 0) sh.appendRow(['Fecha','Nombre','Apellido','Teléfono','Color ticket','Código']);
  var d = JSON.parse(e.postData.contents);
  sh.appendRow([new Date(), d.nombre, d.apellido, "'" + d.telefono, d.color, d.codigo]);
  return ContentService.createTextOutput('ok');
}
