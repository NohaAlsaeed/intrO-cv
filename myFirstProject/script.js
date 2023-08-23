function funEduc(){
    document.getElementById("edu").innerHTML="Bachelor in Information Systems";
}

function funskill(){
    document.getElementById('skill').innerHTML="HTML, CSS, JavaScript, Python"
}

function funAccou(){
    document.getElementById('accou').innerHTML='1- CoderHub &#9754;';
    document.getElementById('accou').style.textDecoration= 'none';
    document.getElementById('accou1').innerHTML=`<br>2- soloLearn &#9754;<br><br>`;
    document.getElementById('accou1').style.textDecoration= 'none';
}


// function myfun(){
//     document.getElementById('demo').innerHTML='<p>Email: Noha1alsaeed@gmail.com</p>';
    
// }


function handler1()
{
console.log("handler1");
}
function handler2()
{
console.log("handler2");
}
document.getElementById('button1').addEventListener('click',handler1,false);
document.getElementById('button1').addEventListener('click',handler2,false);
