function get_info(){


var get_detail=document.getElementById('name').value;

if(get_detail=="availbal"){

    document.getElementById('Pia').style.display="";
    document.getElementById('eco').style.display="";
    document.getElementById('inter').style.display="";

}else if(get_detail=="international"){
    document.getElementById('Pia').style.display="";
    document.getElementById('eco').style.display="none";
    document.getElementById('inter').style.display="none";
}

}
