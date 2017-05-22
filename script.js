var euro = prompt("Enter the value of the euro" , "200");
var dolar = prompt("Enter the value of the dolar", "200");
var euroGrn = 29.98*euro;
var dolarGrn = 26.16*dolar;
var euroKurs = 29.89;
var dolarKurs = 26.16;
var equalED = euroKurs / dolarKurs;
alert(euro + ' euros are equal ' + euroGrn + ' grn. ,' + dolar + ' dollars are equal ' + dolarGrn + ' grn. , one euro is equal ' + equalED + ' dollars.');
