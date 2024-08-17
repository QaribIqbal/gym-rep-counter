function increment(){
    let num=document.getElementById("num");
num.innerText= JSON.parse(num.innerText) + 1;
}
    function res()
{
    let num=document.getElementById("num");
    num.innerText=0;
}
function save()
{
    var x=document.getElementById("memo");
    var y= document.getElementById("num");
    x.innerHTML=x.innerHTML+y.innerHTML+' - ';
    var len=0;
     len=(x.innerHTML).length;
    var temp=x.innerHTML;
    console.log(len);
    if(len>100)
    {
        alert("Maximum memory storage filled! please refresh the page and your data will be reset");
        x.innerHTML="Previous numbers: "

    }
}
    
