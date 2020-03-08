//Listen for authenication state changes
auth.onAuthStateChanged(user => {
    console.log(user);
})

const signup_form = document.querySelector('#signup-form');

signup_form.addEventListener('submit', (e)=> {
    e.preventDefault();

    //get user inputs
    const email = signup_form['signup-email'].value;
    const password = signup_form['signup-password'].value;

    //create user using google auth
    auth.createUserWithEmailAndPassword(email, password).then( user_cred => {
        console.log(user_cred.user);
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signup_form.reset();
    })
})

const logout = document.querySelector("#logout");
logout.addEventListener('click', (e)=> {
    e.preventDefault();
    auth.signOut().then(() =>{
        console.log("user signed out");
    })
})

const login_form = document.querySelector('#login-form');
login_form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //get user info
    const email = login_form['login-email'].value;
    const password = login_form['login-password'].value;

    auth.signInWithEmailAndPassword(email,password).then(user_cred => {
        console.log(user_cred.user);
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        login_form.reset();
    })
})
