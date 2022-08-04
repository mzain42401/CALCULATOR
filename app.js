function firstfunction(num){
    var a=document.getElementById('result')
    a.value+=num;
    
}


function clearresult(){
    var a=document.getElementById('result')
    a.value=a.value.slice(0,a.value.length-1);
    
}
function clea(){
    var a=document.getElementById('result')
    a.value="";
}

function getresult(){
    var a=document.getElementById('result')
    a.value=a.value.replace('x','*')
    a.value= eval(a.value)
}
function zai(){
    var a=document.getElementById('result')
    a.value=a.value.replace('*','x')
    
}

