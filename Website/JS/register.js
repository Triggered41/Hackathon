function cancel_click()
{
    window.open("../index.hgittml", "_self");
}

// Validate whether or not fields "passwords" and "confirm password" are same

var form = document.getElementById('form');

form.addEventListener('submit', (event) => {

    var pass = document.getElementsByName('psw')[0].value;
    var c_pass = document.getElementsByName('confirm_psw')[0].value;
    
    if (pass == c_pass)
    {
        console.log(form);
        form.action = "/submit";
        from.submit();  
    }else
    {
        console.log("SORRY!");
        event.preventDefault();
        alert("Passwords does not match")
    }
});