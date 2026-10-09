display=document.getElementById("display")
result=document.getElementById("results")
    function appendtodisplay(x){
        display.innerHTML+=x;
    }
function equal(){
    try{
        results.innerHTML=eval(display.innerHTML);
    }
    catch(error){
        display.innerHTML="Syntax Error";
    }
}
function clears(){
    results.innerHTML="0";
    display.innerHTML="";
}
function deletelast(){
    display.innerHTML=display.innerHTML.substring(0, display.innerHTML.length-1);
}
