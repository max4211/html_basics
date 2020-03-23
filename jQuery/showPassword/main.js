//Here we create a BOOL that checks if the password is shown or hidden
let viewLoginPwd = false;

function changePwdView ()
{
    //Here we grab the input
    let getPwdView = $("#viewPwdLogin");

    //Here we check the viewLoginPwd BOOL status
    if (viewLoginPwd === false)
    {
        //Here we change the input type from "password" to "text"
        getPwdView.attr("type", "text");
        viewLoginPwd = true;
    }
    else if (viewLoginPwd === true)
    {
        //Here we change the input type from "text" to "password"
        getPwdView.attr("type", "password");
        viewLoginPwd = false;
    }
}
