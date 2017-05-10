function addelements() {
    var row = document.getElementById("rows").value;
    var column = document.getElementById("columns").value;
    var placefortable = document.getElementById("mydata");
    var table = document.createElement("table");
    if (column > 10) {
document.getElementById("maxcolumn").innerHTML="You can not insert more than 10 columns"
    }
else if (row > 10000) {
  document.getElementById("maxrows").innerHTML="That's crazy! We can handle max 10 000 rows, sorry."
}

    else {
        function createTable() {
            placefortable.appendChild(table);
        };
        createTable();
        for (let i = 0; i < row; i++) {
            var newrow = document.createElement("tr");
            table.appendChild(newrow);
        }
        var allrows = document.getElementsByTagName("tr");

        function addColumns() {
            for (let i = 0; i < allrows.length; i++) {
                var newcolumn = document.createElement("td");
                allrows[i].appendChild(newcolumn);
            }
        }
        for (let i = 0; i < column; i++) {
            addColumns()
        }
    }
  }




    function addText() {
        var text = document.getElementById("newtext").value;
        var cell = document.getElementsByTagName("td");
        for (let i = 0; i <= cell.length; i++) {
            cell[i].innerHTML += text;
        }
    }


    function addToCell() {
        var text = document.getElementById("specificvalue").value;
        var chosenrow = document.getElementById("rowid").value;
        var chosencolumn = document.getElementById("columnid").value;
        var table = document.getElementsByTagName("table")
        if (table.length == 1) {
            var selectedcell = table.rows[chosenrow].cells[chosencolumn];
            selectedcell.innerHTML = text;
        } else if (table.length == 0) {
            document.getElementById("notable").innerHTML="Please create a table before inserting values to it."
        } else {
            window.alert("It seems that you have more than one table created. It is possible to add values only to one table.");
//To be fixed
        }
    }
