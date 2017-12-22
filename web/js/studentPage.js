//////////////// student Page js //////////

////////////// document.ready ////////////
$(function () {
    reloadTable();

});

////////// submitForm with ajax /////////
$("#addForm").submit(function (e) {
    $.ajax({
        type: "POST",
        url: "/hw6/api/students",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(ConvertFormToJSON(this)),
        success: function (result) {
            if (result)
                reloadTable();
            alert(result?"Successfully Added":"Already Exist!");
        },
        error: function (xhr, status, error) {
            alert(status +"\n" + error)
        }
    });
    e.preventDefault()
});

//////////// Converting Form to Json //////////
function ConvertFormToJSON(form){
    var array = $(form).serializeArray();
    var json = {};

    $.each(array, function() {
        json[this.name] = this.value || '';
    });

    return json;
    // var data = {};
    // $(".form-selector").serializeArray().map(function(x){data[x.name] = x.value;});
    // console.log(data);
}

//////////// JQuery Ajax To reload Table///////////
function reloadTable() {
    $("#stTable tbody").empty();
    $.getJSON("/hw6/api/students", function (data, status) {
        $.each(data, function (index, element) {
            addRow(element);
        })
        /////////// bootstable part /////////
        $("#stTable").SetEditable({
            columnsEd: "1,2,3",
            onEdit: function (row) {
                //////////  edit ajax ////////////
                var id = row[0].firstChild.textContent;
                $.each($("#stTable").tableToJSON(), function (i, student) {
                    if (student.id === id) {
                        $.ajax({
                            url: "/hw6/api/students/" + id,
                            type: "PUT",
                            dataType: "json",
                            contentType: "application/json",
                            data: JSON.stringify(student),
                            success: function (result) {
                                alert(result?"Successfully Edited":"Not Exist!");
                            },
                            error: function (xhr, status, error) {
                                alert(status +"\n" + error);
                                reloadTable();
                            }
                        });
                    }
                });///////////////////////////////////////
            }
        });
    });
}

//////////// add Row to stTable //////////////
function addRow(JsonElement) {
    var row = '<tr>';
    $.each(JsonElement, function (i, field) {
        row += '<td>' + field + '</td>';
    });
    row += '</tr>';
    $("#stTable tbody").append(row);
}

////////// submitForm function with ajax /////////
// function submitForm() {
//     var formData = $("#addForm").serializeArray();
//     console.log(formData);
//     $.ajax({
//         type: "POST",
//         url: "/hw6/api/students",
//         data: formData,
//         success: function(){alert("Successfully Added")},
//         dataType: "json",
//         contentType : "application/json"
//     });
//     return false;
// }
