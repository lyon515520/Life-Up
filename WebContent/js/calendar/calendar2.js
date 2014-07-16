/**
 * 
 */
var cale = new Calendar("idCalendar", {
    SelectDay: new Date().setDate(10),
    onSelectDay: function(o){ o.className = "onSelect"; },
    onToday: function(o){ o.className = "onToday"; },
    onFinish: function(){
        $("idCalendarYear").innerHTML = this.Year; $("idCalendarMonth").innerHTML = this.Month;
        var flag = [10,15,20];
        for(var i = 0, len = flag.length; i < len; i++){
            //this.Days[flag[i]].innerHTML = "<a href='javascript:void(0);' class='onEvent' onclick=\"alert('ÈÕÆÚÊÇ:"+this.Year+"/"+this.Month+"/"+flag[i]+"');return false;\">" + flag[i] + "</a>";
            this.Days[flag[i]].innerHTML = "<a href='javascript:void(0);' class='onEvent' onclick=\"showout(test1)\">" + flag[i] + "</a>";
        }
    }
});

$("idCalendarPre").onclick = function(){ cale.PreMonth(); }
$("idCalendarNext").onclick = function(){ cale.NextMonth(); }