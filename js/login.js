
var userMailInput = document.getElementById("userMail");
var userPasswordInput = document.getElementById("userPassword");
var btnLoginInput = document.getElementById("btnLogin");
var messageValidation= document.getElementById("messageValidation");
var messageValidation2 = document.getElementById("messageValidation2")
var signupAnchore = document.getElementById("signupAnchore");



var userContainer =[];

if(localStorage.getItem("user") !=null){

  userContainer = JSON.parse(localStorage.getItem("user"))
}

btnLoginInput.addEventListener('click', function(){

    userLogin();
})

function userLogin(){
  var user = {
    email : userMailInput.value,
    password : userPasswordInput.value
  }

  if(user.email.length == 0 || user.password.length == 0){

    messageValidation.classList.remove('d-none');
  }

  else{
    var emailIsExist =false;
    var index=0;
    
    for(var i=0 ; i< userContainer.length; i++){

      if(userContainer[i].email ==  user.email && userContainer[i].password == user.password){
       emailIsExist = true;
       index =i;
       break;

      }
      else{
       emailIsExist =false
      }
  }

  if(emailIsExist == true){
    localStorage.setItem('useNameSession',JSON.stringify(userContainer[index].name))
    window.location ='./home.html'
  }
  else{
    messageValidation2.classList.remove('d-none')
  }

  }
    
}

signupAnchore.addEventListener("click",function(){
  window.location = './signup.html'
})
