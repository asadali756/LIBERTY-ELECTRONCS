function validation(){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value


    let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordCheck = /^[A-Za-z]\w{7,14}$/;

    if(emailCheck.test(email)){
        document.getElementById('emailerror').innerHTML = "";
    }
    else{
        document.getElementById('emailerror').innerHTML = " Invalid Email";
        return false;
    }

    if(passwordCheck.test(password)){
        document.getElementById('passworderror').innerHTML = "";
    }
    else{
        document.getElementById('passworderror').innerHTML = " Invalid Password";
        return false;
    }

    if(emailCheck.test(email) && passwordCheck.test(password)){
        swal("Good job!", "Your Form has been submitted!", "success");
        return false;
    }
    else{
        alert("Invalid");
    }
}