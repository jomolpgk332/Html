function add(){
    
    var num1=document.getElementById("num").value;
var xhr=new XMLHttpRequest();
xhr.onload=function(){
    responseObject=JSON.parse(xhr.responseText);
    var number=document.getElementById('num').nodeValue;
    number=parseInt(number);
    var newContent='';
   //number=2; //for static
    for(var i=0;i<responseObject.events.length;i++){
        //if(number==responseObject.events[i].Id)
        if(num1==i){
        newContent +='<div class="event">';
        newContent +='<p><b>' + responseObject.events[i].name + '<p>';
        newContent +='<p><b>' + responseObject.events[i].address + '<br/><br/>';
        newContent +='<p><b>' + responseObject.events[i].email+ '</b><br>';   
        newContent +='</div>'
    }
    }
    document.getElementById('content').innerHTML=newContent;
};
xhr.open('GET','data1.json',true);
xhr.send(null);
}
function reset(elementID){
    document.getElementById(elementID).innerHTML="";
}