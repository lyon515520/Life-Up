
function callback(keyword){
    $(keyword).slideToggle("300");
  }
function showout(){
	var test = document.getElementById("test1");
	if(test.style.display!="inline-block"){
		$("#test1").fadeIn(500).css("display","inline-block");
	}
	else{
		$("#test1").fadeOut(500);
	}
  }

function show_detail(keyword){
	var keywordzip = keyword+'zip';
	$(keywordzip).hide();
	$(keyword).show();
}
function hide_detail(keyword){
	var keywordzip = keyword+'zip';
	$(keywordzip).show();
	$(keyword).hide();
}
function hide(keyword){
	$(keyword).fadeOut(500);
}
function change_mdp(){
	$("#mon-compte-block-mdp").hide();
	$("#mon-compte-block-new-mdp").fadeIn(300);
}
function show_ajoute_activite(){
	$("#ajoute-activite").fadeIn(500);
}
//---------------------------------------------------------------------------------------------
