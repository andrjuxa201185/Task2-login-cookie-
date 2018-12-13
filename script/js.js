document.addEventListener("DOMContentLoaded", function (){   
    let form = document.querySelector('form');
    let h1 = document.querySelector('h1');
    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let alert = document.querySelector('div.alert'); 

    function getCookie(name) {     
        let cookie = document.cookie;
        let search = `${name}=`;
        let start = 0, end = 0, str = null;     
        if (cookie.length) {         
            start = cookie.indexOf(search);         
            if (start != -1) {             
                start += search.length;             
                end = cookie.indexOf(";", start);             
                if (end == -1) {                 
                    end = cookie.length;             
                }             
                str = cookie.substring(start, end);         
            }     
        }     
        return str; 
    }
    
    function signIn(bool){
        if (bool){
            h1.classList.remove("d-none");
            form.classList.add('d-none');
        } else {
            h1.classList.add("d-none");
            form.classList.remove('d-none');
        }
    }
    
    function showAlert(){
        alert.classList.remove('d-none');
        setTimeout(function(){
            alert.classList.add('d-none');
        },2000);
    }


    if (getCookie("signIn")){
        signIn(true);
    } else {
        signIn(false);
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        if (username.value == "mike" && password.value == "qwerty"){
            const date = new Date();
            date.setSeconds(date.getSeconds() + 60);
            document.cookie = `signIn=true; expires=${date.toUTCString()}`;
            signIn(true);
            location.reload();
        } else {
            showAlert();
        }
    });
});


