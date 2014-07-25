
function callback(keyword){
    $(keyword).slideToggle("300");
  }
//-----------------------------------------------------------------------------
function change_arrow(){
	var div_hide = document.getElementById('ml-body-motive-hide').style;
	var arrow_up = document.getElementById('ml-motive-arrow-up').style;
	var arrow_down = document.getElementById('ml-motive-arrow-down').style;
	if(div_hide.display != "none"){
		arrow_up.display = "block";
		arrow_down.display = "none";
	}
	else if(div_hide.display == "none"){
		arrow_up.display = "none";
		arrow_down.display = "block";
	}
}
//---------------------------------------------------------------------------the part to change the direction of arrows
function style_test(){
	var change = document.getElementById('ml-body-motive-show').style; 
	if(change.display=="block"){
		change.backgroundColor = "red";
	}
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

function ml_show_hide_detail(keyword){
	var keywordzip = keyword + 'zip';
	var e = document.getElementById(keywordzip);
	if(e.style.display != "none"){
		$(keywordzip).fadeOut(500).css("display","none");
	}

}