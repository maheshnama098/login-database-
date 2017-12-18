var noCreds = document.getElementById('no-creds'),
      loginForm = document.getElementById('login-form'),
      loginFields = document.getElementsByClassName('form__field');

// Form Labels
loginFields.addEventListener('focus', function(){
    alert('hi');
});


// Show the "No User" copy
noCreds.addEventListener('click', function(){
    document.getElementById('login-form').style.display = "none";
    document.getElementById('no-user').style.display = "block";
});