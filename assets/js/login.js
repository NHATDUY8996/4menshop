const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      regiter = document.querySelector(".register-link"),
      login = document.querySelector(".login-link");
      Login = document.querySelector(".Login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("fa-eye-slash", "fa-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("fa-eye", "fa-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    regiter.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });
    Login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });


    // đều hướng trang web
    function LocationPage(){
        location.replace("./index.html");
    }