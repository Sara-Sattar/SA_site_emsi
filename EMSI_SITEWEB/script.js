
// home

let nav = document.getElementsByTagName("nav")[0]; // Access the first nav element

window.addEventListener("scroll", function() {
    if (window.scrollY > 30)
    {   
        nav.classList.add("fixed");
        nav.classList.remove("nav");
    }
    else
    {
        nav.classList.remove("fixed");
        nav.classList.add("nav");
    }
});


function showPass(){
    var passInput=document.getElementById('signin-password');
    if(passInput.type=='password'){
        passInput.type='text';
    }else if(passInput.type=='text'){
        passInput.type='password';
    }
}



// Tableau pour stocker les informations des utilisateurs
let users = [{ username:'sara' , password:'12345324567' , email:'sara@gmail.com'}, { 
    username:'amine ze', password:'12345678923' , email:'amin1123gmail.com'}];

 function add(){ //signin 
    var usernamevalue = document.getElementById('signup-username').value;
    var emailvalue = document.getElementById('signup-email').value;
    var passvalue = document.getElementById('signup-password').value;
    
    if(passvalue.length<10){
       document.getElementById('s1').innerHTML = 'password must contains 5 characteres!!!'
        
     }
     var user = {
        username: usernamevalue,
        email: emailvalue,
        password: passvalue
    };

   users.push(user);
    console.log(users);
    alert("User successfully registered!");
 }





 function login(){
    var nameValue=document.getElementById('signin-username').value;
    var passValue=document.getElementById('signin-password').value;
   
    for(var i=0;i<users.length;i++){
        if(users[i].username==nameValue && users[i].password==passValue){
            return true;
        }

        }

        document.getElementById('s2').innerHTML='password and name do not match';
        return false;
    }

