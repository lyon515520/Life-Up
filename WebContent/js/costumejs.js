
function callback(keyword){
    $(keyword).slideToggle("300");
  }
//-----------------------------------------------------------------------------
function change_arrow(keyword){
	if($(keyword).hasClass('ml-body-arrow-down')){
		$(keyword).removeClass('ml-body-arrow-down').addClass('ml-body-arrow-up');
	}else{
		$(keyword).removeClass('ml-body-arrow-up').addClass('ml-body-arrow-down');
	}
}
function change_arrow_float(keyword){
	if($(keyword).hasClass('float-arrow-down')){
		$(keyword).removeClass('float-arrow-down').addClass('float-arrow-up');
	}else{
		$(keyword).removeClass('float-arrow-up').addClass('float-arrow-down');
	}
}
//---------------------------------------------------------------------------the part to change the direction of arrows
function choose_day(keyword){
	if($(keyword).hasClass('icon-mon-compte-week-off')){
		$(keyword).removeClass('icon-mon-compte-week-off').addClass('icon-mon-compte-week-on');
	}else{
		$(keyword).removeClass('icon-mon-compte-week-on').addClass('icon-mon-compte-week-off');
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
function all_select(source){
	checkboxes = document.getElementsByName('fg-message');
	for(var i=0, n=checkboxes.length;i<n;i++) {
		checkboxes[i].checked = source.checked;
	}
}

//auto adjust the height of textarea
$('.textarea-description').on( 'keyup', 'textarea', function (e){
    $(this).css('height', 'auto' );
    $(this).height( this.scrollHeight );
});
$('.textarea-description').find( 'textarea' ).keyup();
//Ajouter &agrave; mes lieux
//Lieux favoris
//Retirer de vos favoris
/*function ml_mouseover_favoris(){
	if(document.getElementById('ml-head-link-favoris').innerHTML == "Ajouter &agrave; mes lieux"){
		document.getElementById('ml-head-link-favoris').style.color = "rgb(235,101,49)";
		$("#ml-head-icon-favoris").attr("class" , 'icon-star-level ml-head-link-icon-click');
	}
	else if(document.getElementById('ml-head-link-favoris').innerHTML == "Lieux favoris"){
		document.getElementById('ml-head-link-favoris').innerHTML = "Retirer de vos favoris";
		document.getElementById('ml-head-link-favoris').style.color = "rgb(134,134,134)";
		$("#ml-head-icon-favoris").attr("class" , 'icon-star-level ml-head-link-icon');
	}
	else {
	}
}
function ml_mouseout_favoris(){
	if(document.getElementById('ml-head-link-favoris').innerHTML == "Ajouter &agrave; mes lieux"){
		document.getElementById('ml-head-link-favoris').style.color = "rgb(134,134,134)";
		$("#ml-head-icon-favoris").attr("class" , 'icon-star-level ml-head-link-icon');
	}
	else if(document.getElementById('ml-head-link-favoris').innerHTML == "Lieux favoris"){
	}
	else {
		document.getElementById('ml-head-link-favoris').innerHTML = "Lieux favoris";
		document.getElementById('ml-head-link-favoris').style.color = "rgb(235,101,49)";
		$("#ml-head-icon-favoris").attr("class" , 'icon-star-level ml-head-link-icon-click');
	}
}
function ml_onclick_favoris(){
	if(document.getElementById('ml-head-link-favoris').innerHTML != "Retirer de vos favoris"){
		document.getElementById('ml-head-link-favoris').innerHTML = "Lieux favoris";
		document.getElementById('ml-head-link-favoris').style.color = "rgb(235,101,49)";
		$("#ml-head-icon-favoris").attr("class" , 'icon-star-level ml-head-link-icon-click');
	}
	else {
		document.getElementById('ml-head-link-favoris').innerHTML = "Ajouter &agrave; mes lieux";
		document.getElementById('ml-head-link-favoris').style.color = "rgb(134,134,134)";
		$("#ml-head-icon-favoris").attr("class" , 'icon-star-level ml-head-link-icon');
	}
}*/

/*                  keep the div always flow on the page, and on the top of the window
 $.fn.smartFloat = function() {
    var position = function(element) {
        var top = element.position().top, pos = element.css("position");
        $(window).scroll(function() {
            var scrolls = $(this).scrollTop();
            if (scrolls > top) {
                if (window.XMLHttpRequest) {
                    element.css({
                        position: "fixed",
	                    width: "685px",
                        top: 0
                    });    
                } else {
                    element.css({
                        top: scrolls
                    });    
                }
            }else {
                element.css({
                    position: "relative",
                    top: top
                });    
            }
        });
    };
    return $(this).each(function() {
        position($(this));                         
    });
};

$("#ville-search-float").smartFloat();
*/