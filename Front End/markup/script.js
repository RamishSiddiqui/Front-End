function myfunction() {
	var x = document.getElementById("nav");
    if (x.className === "nav-menu") {
        x.className += " responsive";
    } else {
        x.className = "nav-menu";
    }
}
function myfunc() {
	var x = document.getElementById("icon");
    if (x.className === "fa fa-angle-double-right") {
    	x.classList.remove("fa-angle-double-right");
        x.className += "fa fa-angle-double-down";
    } else {

        x.className = "fa fa-angle-double-down";
    }
}


/*
 $(document).ready(function(){
  $('.tab label i').click(function(){
    $('label i').removeClass("active");
    $(this).addClass("active");

$('#teb').click(function(e){
    e.preventDefault();
    $(this).find('i').toggleClass('fa-angle-double-right fa-angle-double-left');
});

$('#icon').on('click', function(){
    $('#icon.fa-angle-double-right').removeClass('fa-angle-double-right');
    $(this).addClass('fa-angle-double-down');
});

$(function () {

     //this will attach the class to every target 
     $(".tab").on("click", function (event) {
        $(this).addClass("fa-angle-double-right").siblings().removeClass("fa-angle-double-right");
    });

    })*/