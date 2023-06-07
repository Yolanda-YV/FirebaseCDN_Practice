function signUp(){
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        alert(cred.user.email + " has been registered")
    })
}

function login(){
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        alert(cred.user.email + " has logged in")
    })
}