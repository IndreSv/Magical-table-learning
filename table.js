function clearValues(element) {
    element.value = '';
}

var existingTable = document.getElementsByTagName("table");

function replaceTable() {
    var childs = document.getElementsByTagName("tr");
    if (childs.length > 0) {
        while (existingTable.firstChild) {
            existingTable.removeChild(existingTable.firstChild);
        }
    }
}

function addRows() {
    var row = document.getElementById("rows");
    var sumRows = [];
    for (let i = 0; i < row.value; i++) {
        sumRows.push("<tr>");
    }
    existingTable[0].innerHTML = sumRows;
}

function addColumns() {
    var allRows = document.getElementsByTagName("tr");
    for (let i = 0; i < allRows.length; i++) {
        var newColumn = document.createElement("td");
        allRows[i].appendChild(newColumn);
    }
}

function addElements() {
    var row = document.getElementById("rows");
    var column = document.getElementById("columns");
    if (column.value > 10) {
        document.getElementById("maxcolumn").innerHTML = "You can not insert more than 10 columns"
    } else if (row.value > 10000) {
        document.getElementById("maxrows").innerHTML = "That's crazy! We can handle max 10 000 rows, sorry."
    };
    replaceTable()
    addRows()
    for (let i = 0; i < column.value; i++) {
        addColumns()
    }
    clearValues(row)
    clearValues(column)
}

function addText() {
    var text = document.getElementById("newtext");
    var allCells = document.getElementsByTagName("td");
    for (let i = 0; i <= allCells.length; i++) {
        allCells[i].innerHTML += text.value;
    }
    clearValues(text.value);
}

function addToCell() {
    var text = document.getElementById("specificvalue");
    var chosenRow = document.getElementById("rowid").value;
    var chosenColumn = document.getElementById("columnid").value;
    var allRows = document.getElementsByTagName("tr");
    if (allRows.length > 0) {
        var selectedRow = allRows[chosenRow - 1];
        var allCells = selectedRow.getElementsByTagName("td");
        var selectedCell = allCells[chosenColumn - 1];
        selectedCell.innerHTML = text.value;
        clearValues(text);
    } else {
        document.getElementById("tablevalidation").innerHTML = "Please create a table before inserting values to it."
    }
}
