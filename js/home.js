var welcomeMessage = document.getElementById('welcomeMessage');
var btnLogout =document.getElementById('btnLogout')


 var userName= JSON.parse(localStorage.getItem('useNameSession'))

welcomeMessage.innerHTML ='Welcome' +' '+ userName;

btnLogout.addEventListener('click',function(){

    localStorage.removeItem('useNameSession');
    window.location = './index.html'

})