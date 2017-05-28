function clearValues(element) {
    element.value = '';
}


function createTable() {
    var placefortable = document.getElementById("mydata");
    var table = document.createElement("table");
    placefortable.appendChild(table);
};

function addRows() {
    var row = document.getElementById("rows");
    var sumrows = [];
    var existingTable = document.getElementsByTagName("table");
    for (let i = 0; i < row.value; i++) {
        sumrows.push("<tr>");
    }
    existingTable[0].innerHTML = sumrows;
};

function addColumns() {
    var allrows = document.getElementsByTagName("tr");
    for (let i = 0; i < allrows.length; i++) {
        var newcolumn = document.createElement("td");
        allrows[i].appendChild(newcolumn);
    }
}

function addelements() {
    var row = document.getElementById("rows");
    var column = document.getElementById("columns");
    var table = document.createElement("table");
        var existingTable = document.getElementsByTagName("table");
    if (column.value > 10) {
        document.getElementById("maxcolumn").innerHTML = "You can not insert more than 10 columns"
    } else if (row.value > 10000) {
        document.getElementById("maxrows").innerHTML = "That's crazy! We can handle max 10 000 rows, sorry."
    } else {
        if (existingTable.length > 0) {
                existingTable[0].parentNode.removeChild(existingTable[0]);
            }
        };
        createTable();
        addRows();
        for (let i = 0; i < column.value; i++) {
            addColumns()
        };

        clearValues(row);
        clearValues(column);
    };


function addText() {
    var text = document.getElementById("newtext");
    var AllCells = document.getElementsByTagName("td");
    for (let i = 0; i <= AllCells.length; i++) {
        AllCells[i].innerHTML += text.value;
    }
    clearValues(text.value);
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
        clearValues(text);
    } else {
        document.getElementById("tablevalidation").innerHTML = "Please create a table before inserting values to it."
    }
}
