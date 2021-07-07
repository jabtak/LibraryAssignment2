let password = document.getElementById("pwd");
let errorpsw = document.getElementById("errorpswd");


function validate(){
    var pswdexp =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
   
    if(pswdexp.test(password.value)){
        errorpsw.innerHTML = "valid";
        errorpsw.style.color = "green";
        return true;
    }
    else{
      errorpsw.innerHTML = "Invalid";
      errorpsw.style.color = "red";
      return false;
    }
}