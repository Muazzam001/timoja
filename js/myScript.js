$(document).ready(function () {
    $("#shirt-image-container1").css("display", "block");
    $("#shirt-section-img1, #fabric-t").click(function () {
        $(".shirt-section-img").css("border-color", "#ccc");
        $(".shirt-section-img").removeClass("show-arrow");
        $(this).addClass("show-arrow");
        $(this).css("border-color", "#000");
        $("#shirt-measures1").addClass("shirt-visible").fadeIn();
        $("#input1").focus();
        $(".shirt-image-container").css("display", "none");
        $("#shirt-image-container1").css("display", "block");
    })
    $("#shirt-section-img2, #sleeves-t").click(function () {
        $(".shirt-section-img").css("border-color", "#ccc");
        $(".shirt-section-img").removeClass("show-arrow");
        $(this).addClass("show-arrow");
        $(this).css("border-color", "#000");
        $("#shirt-measures2").addClass("shirt-visible");
        $("#input2").focus();
        $("#shirt-chest").css("display", "block");
        $(".shirt-image-container").css("display", "none");
        $("#shirt-image-container2").css("display", "block");
    })
    $("#shirt-section-img3, #collar-t").click(function () {
        $(".shirt-section-img").css("border-color", "#ccc");
        $(".shirt-section-img").removeClass("show-arrow");
        $(this).addClass("show-arrow");
        $(this).css("border-color", "#000");
        $("#shirt-measures3").addClass("shirt-visible");
        $("#input3").focus();
        $("#shirt-waist").css("display", "block");
        $(".shirt-image-container").css("display", "none");
        $("#shirt-image-container3").css("display", "block");
        $("#coller1").css("display", "block");
    })
    $("#shirt-section-img4, #cuffs-t").click(function () {
        $(".shirt-section-img").css("border-color", "#ccc");
        $(".shirt-section-img").removeClass("show-arrow");
        $(this).addClass("show-arrow");
        $(this).css("border-color", "#000");
        $("#shirt-measures4").addClass("shirt-visible");
        $("#input4").focus();
        $("#shirt-neck").css("display", "block");
        $(".shirt-image-container").css("display", "none");
        $("#shirt-image-container4").css("display", "block");
    })
    $("#shirt-section-img5, #pocket-t").click(function () {
        $(".shirt-section-img").css("border-color", "#ccc");
        $(".shirt-section-img").removeClass("show-arrow");
        $(this).addClass("show-arrow");
        $(this).css("border-color", "#000");
        $("#shirt-measures5").addClass("shirt-visible");
        $("#shirt-chest").css("display", "block");
        $("#input5").focus();
        $(".shirt-image-container").css("display", "none");
        $("#shirt-image-container5").css("display", "block");
    })
    $("#shirt-section-img6, #tm-t").click(function () {
        $(".shirt-section-img").css("border-color", "#ccc");
        $(".shirt-section-img").removeClass("show-arrow");
        $(this).addClass("show-arrow");
        $(this).css("border-color", "#000");
        $("#shirt-measures6").addClass("shirt-visible");
        $("#input6").focus();
        $(".shirt-image-container").css("display", "none");
        $("#shirt-image-container6").css("display", "block");
    })
    $("#chng-pwd").click(function () {
        $(".account-options ul li a").css("color", "#ccc");
        $(".edit-profile").css("display", "none");
        $(".change-pass").css("display", "block");
        $(this).css("color", "#888")
    })
    $("#profile").click(function () {
        $(".account-options ul li a").css("color", "#ccc");
        $(".change-pass").css("display", "none");
        $(".edit-profile").css("display", "block");
        $(this).css("color", "#888")
    })
    $("#del-acc").click(function () {
        $(".account-options ul li a").css("color", "#ccc");
        $(this).css("color", "#888")
        confirm("Do you want to delete your account?");
    })
    $(".otp-item").click(function() {
    $(".otp-item .fa-check").css("visibility", "visible");    
    })
})