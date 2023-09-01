function get_detail(){
 var value=document.getElementById('get_name').value;

 if(value=="ins"){
    document.getElementById('select').style.display="none";
    document.getElementById('choose').style.display="none";
    document.getElementById('choose1').style.display="none";
    document.getElementById('select1').style.display="none";
    document.getElementById('choose3').style.display="none";
    document.getElementById('choose4').style.display="none";
    document.getElementById('select2').style.display="none";
    document.getElementById('choose6').style.display="none";
    document.getElementById('choose7').style.display="none";
    document.getElementById('choose8').style.display="none";
    document.getElementById('choose9').style.display="none";
    document.getElementById('choose10').style.display="none";
    document.getElementById('choose.').style.display="none";    


}else if(value== "school"){
    document.getElementById('select1').style.display="none";
    document.getElementById('choose3').style.display="none";
    document.getElementById('choose4').style.display="none";
    document.getElementById('select').style.display="";
    document.getElementById('choose').style.display="";
    document.getElementById('choose1').style.display="";
    document.getElementById('select2').style.display="none";
    document.getElementById('choose6').style.display="none";
    document.getElementById('choose7').style.display="none";
    document.getElementById('choose8').style.display="none";
    document.getElementById('choose9').style.display="none";
    document.getElementById('choose10').style.display="none";
    document.getElementById('choose.').style.display="none";

}else if(value=="collage"){
    document.getElementById('select1').style.display="";
    document.getElementById('choose3').style.display="";
    document.getElementById('choose4').style.display="";
    document.getElementById('choose.').style.display="";
  
    document.getElementById('select').style.display="none";
    document.getElementById('choose').style.display="none";
    document.getElementById('choose1').style.display="none";
    document.getElementById('select2').style.display="none";
    document.getElementById('choose6').style.display="none";
    document.getElementById('choose7').style.display="none";
    document.getElementById('choose8').style.display="none";
    document.getElementById('choose9').style.display="none";
    document.getElementById('choose10').style.display="none";
    



}
else if(value=="university"){
    document.getElementById('select1').style.display="none";
    document.getElementById('choose3').style.display="none";
    document.getElementById('choose4').style.display="none";
    document.getElementById('select').style.display="none";
    document.getElementById('choose').style.display="none";
    document.getElementById('choose1').style.display="none";
    document.getElementById('select2').style.display="";
    document.getElementById('choose6').style.display="";
    document.getElementById('choose7').style.display="";
    document.getElementById('choose8').style.display="";
    document.getElementById('choose9').style.display="";
    document.getElementById('choose10').style.display="";
    document.getElementById('choose.').style.display="none";

}


}