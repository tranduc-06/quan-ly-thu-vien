// const { now } = require("lodash");

$(document).ready(function(){
    // $("#btnAdd").click(function(){
    //     $("#add-dialog").dialog('open');
    // });
    dialog = $(".add-dialog").dialog({
        autoOpen: false,
        width: 700,
        modal: true,
    });
    dialog1 = $(".add-member-dialog").dialog({
        autoOpen: false,
        width: 500,
        // height: 500,
        modal: true,
    });
    $('#btnAdd').click(function () {
        dialog.dialog('open');
    });
    $('#btn-edit-1,#btn-edit-2').click(function () {
        dialog1.dialog('open');
    });
    $('#add-dialog-cancel').click(function(){
        dialog.dialog('close')
    })
    $('#add-dialog-cancel').click(function(){
        dialog1.dialog('close')
    })
    $("#btnAdd-image").hover(function(){
        $(".add-filter").toggle();
    })
    $("#add-icon").click(function(){
        $("#img").click();
        $("#img").change(function(){
            if ($("#img").get(0).files.length > 0) {
                var $i = $("#img").get(0).files[0].name;
                $("#m-image").attr("src","images/book_images/" + $i);
                $("#img").get(0).files = null;
            }
        })
    })

    $('#edit').click(function () {
        dialog.dialog('open');
    });
    // $("#img").change(function(){
    //     if ($("#img").get(0).files.length > 0) {
    //         var $i = $("#img").get(0).files[0].name;
    //         $("#m-image").attr("src","images/book_images/" + $i);
    //     }
    // })
    
});