var sMax;   // ������������Ǽ��������ֵ  
var holder; // ���ͣ�������ֿؼ�  
var preSet; // ����������ֵ��ͨ���������������֣�  
var rated=new Array(); //�Ƿ����ֹ����������˽����ע���ֵһ����Ϊ�գ��Ͳ��������֣�  
  
// ���ͣ���¼�  
function rating(idPre,num){  
    sMax = 0;   // Ĭ��ֵΪ0  
    for(var n=0; n<num.parentNode.childNodes.length; n++){  
        if(num.parentNode.childNodes[n].nodeName == "A"){  
            sMax++;   
        }  
    }  
      
    if(!rated[idPre]){  
          
        s = num.id.replace(idPre+'_', ''); // ��ȡѡ�е����ǵ�����������ʹ��_1,_2,_3,_4,_5����Ϊ���ֿؼ���ID����ȻҲ�������ķ�ʽ��  
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
  
// �뿪�¼�  
function off(idPre,me){  
    if(!rated[idPre]){  
        if(!preSet){      
            for(var i=1; i<=sMax; i++){        
                document.getElementById(idPre+"_"+i).className = "";  
                document.getElementById("rateStatus").innerHTML = me.parentNode.name;  
            }  
        }else{  
            rating(idPre,preSet);  
            //document.getElementById("rateStatus").innerHTML = document.getElementById("ratingSaved").innerHTML;  
        }  
    }  
}  
  
// �����������  
function rateIt(idPre,me){  
    if(!rated[idPre]){  
        document.getElementById("rateStatus").innerHTML = me.name;//document.getElementById("ratingSaved").innerHTML + " :: "+  
        preSet = me;  
        //rated=1;  //��Ϊ1�Ժ󣬾ͱ�������ս�����������޸����ֽ��  
        rated[idPre]=1;  
        sendRate(me);  
        rating(idPre,me);  
    }  
}  
  
//ʹ��Ajax��������ʽ�������ֽ��   
function sendRate(sel){  
    //alert("���ֽ��: "+sel.name);  
}  