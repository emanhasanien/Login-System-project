

var userNameInput =document.getElementById("userName");
var userMailInput = document.getElementById("userMail");
var userPasswordInput = document.getElementById("userPassword");
var btnSignupInput = document.getElementById("btnSignup");
var signinAnchore = document.getElementById("signinAnchore");
var messageSuccess =document.getElementById("messageSuccess");
var incorrectMessageAlert = document.getElementById("incorrectMessage");
var emailNotExistAlert =document.getElementById("emailNotExist");
var index =0;

var userContainer =[];

if(localStorage.getItem("user") !=null){

  userContainer = JSON.parse(localStorage.getItem("user"))
}

btnSignupInput.addEventListener('click', function(){

  userSignup();
})

function userSignup(){
  var userIndex =0;
  
  var user = {
    name: userNameInput.value,
    email : userMailInput.value,
    password : userPasswordInput.value
  }

  if(user.name.length == 0 || user.email.length == 0 || user.password.length== 0){
    emailNotExistAlert.classList.add('d-none')
    incorrectMessageAlert.classList.remove("d-none");
    user = '';
  }
  
  if(userContainer.length == 0 && user!= '' &&  regexName()== true  && regexEmail() == true){
    
    userContainer.push(user);
    localStorage.setItem("user",JSON.stringify(userContainer));
    incorrectMessageAlert.classList.add('d-none');
    messageSuccess.classList.remove("d-none");
   
    
  }
 
 else{

 var mailIsExist = false;
  
  for( var i =0;i< userContainer.length; i++){

    if(userContainer[i].email == user.email){
          mailIsExist =true;
          break;
    }
    else{
      mailIsExist =false;

    }
  
  }

   if(mailIsExist == true){

      emailNotExistAlert.classList.remove("d-none");
      messageSuccess.classList.add("d-none");
      incorrectMessageAlert.classList.add('d-none')
      
    }

    else if(mailIsExist == false && user != '' &&  regexName()== true && regexEmail() == true){
    
    emailNotExistAlert.classList.add("d-none");
    userContainer.push(user);
    localStorage.setItem("user",JSON.stringify(userContainer))
    messageSuccess.classList.remove("d-none");
    incorrectMessageAlert.classList.add('d-none');
    }

 }

 clearUserData();
  
}



function clearUserData(){
    userNameInput.value ="";
    userMailInput.value = "";
    userPasswordInput.value = ""
}

signinAnchore.addEventListener('click',function(){
    window.location ="./index.html"
})




userNameInput.addEventListener('input', function(){

  regexName();
})

function regexName() {

  var messageNameInvaild =document.getElementById('messageNameInvaild');

 var regexName = /^[A-Z][a-z]{2,8}$/
 var text = userNameInput.value;
  
 if(regexName.test ( text ) == true ){

    userNameInput.classList.add('is-valid');
    userNameInput.classList.remove('is-invalid');
    messageNameInvaild.classList.add('d-none');
    return true;

 }
 else{

    userNameInput.classList.add('is-invalid');
    userNameInput.classList.remove('is-valid');
    messageNameInvaild.classList.remove('d-none');
    return false
 }
 
}


userMailInput.addEventListener('input', function(){

  regexEmail();
})

function regexEmail() {

  var messageEmailInvaild =document.getElementById('messageEmailInvaild');

 var regexName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 var text = userMailInput.value;
  
 if(regexName.test ( text ) == true ){

    userMailInput.classList.add('is-valid');
    userMailInput.classList.remove('is-invalid');
    messageEmailInvaild.classList.add('d-none');
    return true;

 }
 else{

    userMailInput.classList.add('is-invalid');
    userMailInput.classList.remove('is-valid');
    messageEmailInvaild.classList.remove('d-none');
    return false
 }
 
}


