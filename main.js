

function get_info(){

    var get_job=document.getElementById('job').value;

    if(get_job=="Currently Working"){
     document.getElementById('desig').style.display="";

     document.getElementById('company').style.display="";
     document.getElementById('salary').style.display="";
     
    
     document.getElementById('exp_salary').style.display="none";

    }else if(get_job=="No Job"){

        document.getElementById('desig').style.display="none";

        document.getElementById('company').style.display="none";
        document.getElementById('salary').style.display="none";
        
       
        document.getElementById('exp_salary').style.display="";
        

    }

}