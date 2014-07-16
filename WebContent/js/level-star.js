/**
 * 
 */
var sMax;   
var holder; 
var preSet; 
var rated=new Array(); 
  
function rating(idPre,num){  
    sMax = 0;  
    for(var n=0; n<num.parentNode.childNodes.length; n++){  
        if(num.parentNode.childNodes[n].nodeName == "A"){  
            sMax++;   
        }  
    }  
      
    if(!rated[idPre]){  
          
        s = num.id.replace(idPre+'_', ''); 
        a = 0;  
        for(var i=1; i<=sMax; i++){        
            if(i<=s){  
                  
                document.getElementById(idPre+"_"+i).className = "on";  
                document.getElementById("rateStatus").innerHTML = num.name;      
                holder = a+1;  
                a++;  
            }else{  
                  
                document.getElementById(idPre+"_"+i).className = "";  
            }  
        }  
    }  
}  
  
function off(idPre,me){  
    if(!rated[idPre]){  
        if(!preSet){      
            for(var i=1; i<=sMax; i++){        
                document.getElementById(idPre+"_"+i).className = "";  
                document.getElementById("rateStatus").innerHTML = "D&eacute;couverir";  
            }  
        }else{  
            rating(idPre,preSet);  
            //document.getElementById("rateStatus").innerHTML = document.getElementById("ratingSaved").innerHTML;  
        }  
    }  
}  
  
function rateIt(idPre,me){  
    if(!rated[idPre]){  
        document.getElementById("rateStatus").innerHTML = me.name;//document.getElementById("ratingSaved").innerHTML + " :: "+  
        preSet = me;  
        //rated=1;  //can't change the rank
        rated[idPre]=1;  
        sendRate(me);  
        rating(idPre,me);  
    }  
}  
  
function sendRate(sel){  
    //alert("result: "+sel.name);  
}  