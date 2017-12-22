/**
 * Created by Nader on 12/22/2017.
 */
//////////////// prof Page js //////////

////////////// document.ready ////////////
$(function () {
    console.log("hi profs")
    reloadTable();

});

////////// submitForm with ajax /////////
$("#addForm").submit(function (e) {
    $.ajax({
        type: "POST",
        url: "/hw6/api/profs",
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
    $("#prTable tbody").empty();
    $.getJSON("/hw6/api/profs", function (data, status) {
        $.each(data, function (index, element) {
            addRow(element);
        })
        /////////// bootstable part /////////
        $("#prTable").SetEditable({
            columnsEd: "1,2",
            onEdit: function (row) {
                //////////  edit ajax ////////////
                var id = row[0].firstChild.textContent;
                $.each($("#prTable").tableToJSON(), function (i, prof) {
                    if (prof.id === id) {
                        $.ajax({
                            url: "/hw6/api/profs/" + id,
                            type: "PUT",
                            dataType: "json",
                            contentType: "application/json",
                            data: JSON.stringify(prof),
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
            },
            onDelete: function (t) {
                $.ajax({
                    url: "/hw6/api/profs/" + $(t).parents("tr").children().first().text(),
                    type: 'DELETE',
                    success: function (result) {
                        alert(result==="true" ? "Successfully Deleted" : "Not Exist!");
                    }
                });
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
    $("#prTable tbody").append(row);
}

////////// submitForm function with ajax /////////
// function submitForm() {
//     var formData = $("#addForm").serializeArray();
//     console.log(formData);
//     $.ajax({
//         type: "POST",
//         url: "/hw6/api/profs",
//         data: formData,
//         success: function(){alert("Successfully Added")},
//         dataType: "json",
//         contentType : "application/json"
//     });
//     return false;
// }
