console.log("hello");
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data);
            var table = document.getElementById("table1");
            for (var i in data) {
                var row = table.insertRow(Number(i) +1);

                row.insertCell().innerHTML = data[i].id;
                row.insertCell().innerHTML = data[i].name;
                row.insertCell().innerHTML = data[i].dept;
                row.insertCell().innerHTML = data[i].supervisor_id;
            }
        }
    };
    xhttp.open("GET", "/hw6/api/students", true);
    xhttp.send();
}
loadDoc();
