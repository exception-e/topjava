const ajaxUrl = "ajax/profile/meals/";
let datatableApi;

function updateTable() {
    $.ajax({
        type: "GET",
        url: ajaxUrl + "filter",
        data: $("#filter").serialize()
    }).done(updateTableByData);
}

function clearFilter() {
    $("#filter")[0].reset();
    $.get(ajaxUrl, updateTableByData);
}

$(function () {
    datatableApi = $("#datatable").DataTable({
        "ajax" :
            {
                "url": ajaxUrl,
                "dataSrc": ""
            },
        "paging": false,
        "info": true,
        "columns": [
            {
                "data": "dateTime",
                "render": function(date, type, row)
                {
                    if(type === "display")
                    {
                        return date.replace("T"," ");
                    }
                }
            },
            {
                "data": "description"
            },
            {
                "data": "calories"
            },
            {
                "orderable": false,
                "defaultContent": "",
                "render": renderEditBtn
            },
            {
                "orderable": false,
                "defaultContent": "",
                "render": renderDeleteBtn
            }
        ],
        "order": [
            [
                0,
                "desc"
            ]
        ],
        "createRow":function(row,data,dataIndex)
        {
            $(row).addClass(data.exceed ? "exceeded" : "normal");
        },
        "initComplete": function(){
            $("#filter").submit(function () {
                updateTable();
                return false;
            })
            makeEditable();
        }

    });

});