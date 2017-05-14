function clearvalues(element) {
    element.value = '';
}

function addelements() {
    var row = document.getElementById("rows");
    var column = document.getElementById("columns");
    var placefortable = document.getElementById("mydata");
    var table = document.createElement("table");
    var existingTable = document.getElementsByTagName("table");
    var sumrows = [];
    if (column.value > 10) {
        document.getElementById("maxcolumn").innerHTML = "You can not insert more than 10 columns"
    } else if (row.value > 10000) {
        document.getElementById("maxrows").innerHTML = "That's crazy! We can handle max 10 000 rows, sorry."
    } else {
        if (existingTable.length > 0) {
            for (var i = 0, len = existingTable.length; i != len; ++i) {
                existingTable[0].parentNode.removeChild(existingTable[0]);
            }
        };

        function createTable() {
            placefortable.appendChild(table);
        };
        createTable();
        for (let i = 0; i < row.value; i++) {
            sumrows.push("<tr>");
        }
        table.innerHTML = sumrows;
        var allrows = document.getElementsByTagName("tr");

        function addColumns() {
            for (let i = 0; i < allrows.length; i++) {
                var newcolumn = document.createElement("td");
                allrows[i].appendChild(newcolumn);
            }
        }
        for (let i = 0; i < column.value; i++) {
            addColumns()
        }

        clearvalues(row);
        clearvalues(column);
    }
}


function addText() {
    var text = document.getElementById("newtext");
    var AllCells = document.getElementsByTagName("td");
    for (let i = 0; i <= AllCells.length; i++) {
        AllCells[i].innerHTML += text.value;
    }
    clearvalues(text.value);
}


function addToCell() {
    var text = document.getElementById("specificvalue");
    var chosenrow = document.getElementById("rowid").value;
    var chosencolumn = document.getElementById("columnid").value;
    var table = document.getElementsByTagName("table");
    var allrows = document.getElementsByTagName("tr");
    if (table.length == 1) {
        var selectedrow = allrows[chosenrow - 1];
        var allcells = selectedrow.getElementsByTagName("td");
        var selectedcell = allcells[chosencolumn - 1];
        selectedcell.innerHTML = text.value;
        clearvalues(text);
    } else {
        document.getElementById("tablevalidation").innerHTML = "Please create a table before inserting values to it."
    }
}
