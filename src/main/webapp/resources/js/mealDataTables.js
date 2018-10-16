var ajaxUrl = "ajax/meals/";
var datatableApi;

function filter(){
    $.ajax({
        type: "GET",
        url: ajaxUrl+"filter",
        data: $("#filterForm").serialize(),
        success: function (data) {
            datatableApi.clear().rows.add(data).draw();
        }
    })
}

// $(document).ready(function () {
$(function () {
    datatableApi = $("#datatable").DataTable({
        "paging": false,
        "info": true,
        "columns": [
            {
                "data": "dateTime"
            },
            {
                "data": "description"
            },
            {
                "data": "calories"
            },
            {
                "data": "id"
            },
            {
                "defaultContent": "Edit",
                "orderable": false
            },
            {
                "defaultContent": "Delete",
                "orderable": false
            }
        ],
        "order": [
            [
                0,
                "asc"
            ]
        ]
    });
    makeEditable();
});