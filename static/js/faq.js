$(document).ready(function(){
	$("#box1").slideToggle();
	$("#box2").slideToggle();
	$("#box3").slideToggle();
	$("#box4").slideToggle();
	$("#box5").slideToggle();
	$("#box6").slideToggle();
	$("#box7").slideToggle();
	$("#box8").slideToggle();

	function check1(){
		if ($("#ques1").hasClass("open")) {
			$("#box1").slideToggle();
			$("#ques1").removeClass("open")
		}
	}	

	function check2(){
		if ($("#ques2").hasClass("open")) {
			$("#box2").slideToggle();
			$("#ques2").removeClass("open")
		}
	}	

	function check3(){
		if ($("#ques3").hasClass("open")) {
			$("#box3").slideToggle();
			$("#ques3").removeClass("open")
		}
	}	

	function check4(){
		if ($("#ques4").hasClass("open")) {
			$("#box4").slideToggle();
			$("#ques4").removeClass("open")
		}
	}	

	function check5(){
		if ($("#ques5").hasClass("open")) {
			$("#box5").slideToggle();
			$("#ques5").removeClass("open")
		}
	}	

	function check6(){
		if ($("#ques6").hasClass("open")) {
			$("#box6").slideToggle();
			$("#ques6").removeClass("open")
		}
	}	

	function check7(){
		if ($("#ques7").hasClass("open")) {
			$("#box7").slideToggle();
			$("#ques7").removeClass("open")
		}
	}	

	function check8(){
		if ($("#ques8").hasClass("open")) {
			$("#box8").slideToggle();
			$("#ques8").removeClass("open")
		}
	}	
	$("#ques1").click(function(){
		$("#faq1").css("display","block");
		if ($("#ques1").hasClass("open")) {
			$("#box1").slideToggle();
			$("#ques1").removeClass("open")
		}
		else{
			check2();
			check3();
			check4();
			check5();
			check6();
			check7();
			check8();

			$("#box1").slideToggle();
			$(this).addClass("open");
		}
	});

	$("#ques2").click(function(){
		$("#faq2").css("display","block");
		if ($("#ques2").hasClass("open")) {
			$("#box2").slideToggle();
			$("#ques2").removeClass("open")
		}
		else{
			check1();
			check3();
			check4();
			check5();
			check6();
			check7();
			check8();

			$("#box2").slideToggle();
			$(this).addClass("open");
		}
	});

	$("#ques3").click(function(){
		$("#faq3").css("display","block");
		if ($("#ques3").hasClass("open")) {
			$("#box3").slideToggle();
			$("#ques3").removeClass("open")
		}
		else{
			check1();
			check2();
			check4();
			check5();
			check6();
			check7();
			check8();

			$("#box3").slideToggle();
			$(this).addClass("open");
		}
	});

	$("#ques4").click(function(){
		$("#faq4").css("display","block");
		if ($("#ques4").hasClass("open")) {
			$("#box4").slideToggle();
			$("#ques4").removeClass("open")
		}
		else{
			check1();
			check2();
			check3();
			check5();
			check6();
			check7();
			check8();

			$("#box4").slideToggle();
			$(this).addClass("open");
		}
	});

	$("#ques5").click(function(){
		$("#faq5").css("display","block");
		if ($("#ques5").hasClass("open")) {
			$("#box5").slideToggle();
			$("#ques5").removeClass("open")
		}
		else{
			check1();
			check2();
			check3();
			check4();
			check6();
			check7();
			check8();

			$("#box5").slideToggle();
			$(this).addClass("open");
		}
	});

	$("#ques6").click(function(){
		$("#faq6").css("display","block");
		if ($("#ques6").hasClass("open")) {
			$("#box6").slideToggle();
			$("#ques6").removeClass("open")
		}
		else{
			check1();
			check2();
			check3();
			check4();
			check5();
			check7();
			check8();

			$("#box6").slideToggle();
			$(this).addClass("open");
		}
	});

	$("#ques7").click(function(){
		$("#faq7").css("display","block");
		if ($("#ques7").hasClass("open")) {
			$("#box7").slideToggle();
			$("#ques7").removeClass("open")
		}
		else{
			check1();
			check2();
			check3();
			check4();
			check5();
			check6();
			check8();

			$("#box7").slideToggle();
			$(this).addClass("open");
		}
	});

	$("#ques8").click(function(){
		$("#faq8").css("display","block");
		if ($("#ques8").hasClass("open")) {
			$("#box8").slideToggle();
			$("#ques8").removeClass("open")
		}
		else{
			check1();
			check2();
			check3();
			check4();
			check5();
			check6();
			check7();

			$("#box8").slideToggle();
			$(this).addClass("open");
		}
	});
});