
if (typeof document !== 'undefined')
{
    var nav = document.getElementById("bar");

var body = document.body;

window.onscroll = function a(){
    var abc = document.body.scrollTop;
    if (abc == 0)
    {
        nav.style.backgroundColor = "rgba(0, 0, 0, 0)"
    }else{
        nav.style.backgroundColor = "rgb(80, 129, 217)"
    }
}

function clik(){
    a();
    console.log(document.body.scrollTop);
}

}