Param(
  [string]$param1
)
$connectionstring = "Server=10.18.81.102;Database=CSI_Demo_Forms;User Id=sa;Password=1nf0r!!!"
$sqlcon = new-object system.Data.sqlclient.sqlconnection;
$sqlcon.connectionstring = $connectionstring;
$sqlquery = "select top 100 filename from images"
$sqlcmd = new-object system.Data.sqlclient.sqlcommand $sqlquery,$sqlcon;
$sqlcon.open();
$reader = $sqlcmd.ExecuteReader();
$datatable = new-object System.Data.DataTable;
$datatable.load($reader)
foreach ($row in $datatable) {
    read-host $row
}
