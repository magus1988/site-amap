$(document).ready(function () {
	$('#menuID1').click(function () {
		$('#sousMenu1').toggleClass('isOpen');
	});

    $('#menuID2').click(function () {
		$('#sousMenu2').toggleClass('isOpen');
	});

    $('#menuID3').click(function () {
		$('#sousMenu3').toggleClass('isOpen');
	});

    $('#menuID4').click(function () {
		$('#sousMenu4').toggleClass('isOpen');
	});

	$('#menuID1').click(function(){

        if($("#sousMenu2").hasClass('isOpen')){
            $("#sousMenu2").removeClass('isOpen')};
        
        if($("#sousMenu3").hasClass('isOpen')){
           $("#sousMenu3").removeClass('isOpen')};

        if($("#sousMenu4").hasClass('isOpen')){
            $("#sousMenu4").removeClass('isOpen')};

    });

    $('#menuID2').click(function(){

        if($("#sousMenu1").hasClass('isOpen')){
            $("#sousMenu1").removeClass('isOpen')};
        
        if($("#sousMenu3").hasClass('isOpen')){
           $("#sousMenu3").removeClass('isOpen')};

        if($("#sousMenu4").hasClass('isOpen')){
            $("#sousMenu4").removeClass('isOpen')};

    });

    $('#menuID3').click(function(){

        if($("#sousMenu2").hasClass('isOpen')){
            $("#sousMenu2").removeClass('isOpen')};
        
        if($("#sousMenu1").hasClass('isOpen')){
           $("#sousMenu1").removeClass('isOpen')};

        if($("#sousMenu4").hasClass('isOpen')){
            $("#sousMenu4").removeClass('isOpen')};

    });

    $('#menuID4').click(function(){

        if($("#sousMenu2").hasClass('isOpen')){
            $("#sousMenu2").removeClass('isOpen')};
        
        if($("#sousMenu3").hasClass('isOpen')){
           $("#sousMenu3").removeClass('isOpen')};

        if($("#sousMenu1").hasClass('isOpen')){
            $("#sousMenu1").removeClass('isOpen')};

    });





        

});