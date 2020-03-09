# CSE 135 - HW4 README

Hosted URL:
https://cse135-hw4-4a3ad.firebaseapp.com/
Test Login: test5@gmail.com
Test Password: 123456

## Brief overview of Authenication
### Firebase Authenication - Email and Password
### User Interface
* Users access Sign Up - Log In - Log Out on the navbar at the top right
* Sign Up - Users input valid email and password to send to google auth
* Log In - Users input valid email and password and google auth code handles whether or not its valid (user feedback in future implementation)
* Log out - Users simply click logout to sign out as a user
```
Sign in code:

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


```
### Handling authenication for dashboard
* Users charts and graphs and dashboard UI aren't created and "data" aren't accessed until a check in auth.js for onAuthStateChanged and checking whether or not user is null. Currently grid and chart are using static data but will be eventually implemented that a call to firebase firestore w/ user cred will be implemented and passing firebase firestore data into it.
```
Example of check
//Listen for authenication state changes
auth.onAuthStateChanged(user => {
    setup_UI(user); <--- setup_UI has its own check for user
    if (user) {
        create_grid("Created Grid");  <--- Fake data
        create_chart("Created Chart"); <--- Fake data (eventually call firebase firestore before passing in data)

        //user logged in
        //Future Implementation TODO

        //Get DB Data
        
        //Create_grid/chart with real data;

    } else {
        //user logged out
    }
    console.log(user);
})
```

### Diagram for POC

See cse135hw4diagrams.pdf page 1 for diagram

## Grid Library
### Handsontable - Grid Library

Handsontable is the grid library I used to implement my POC. I used this library because I was fascinated with how similar it performed like google sheets/excel. In addition it had filtering options and pagination options and a multitude of other features that made it attrative. In addition, I thought it would be helpful for users using the app to have a layout that is familiar to them especially when dealing with rows and rows of data which is expected from a data formatted into a grid.

## Chart Library
### Chart.js - Chart Library

What attracted me to Chart.js is the cool animations and colorful visuals that the library had. One of the things I was looking for in a chart library is the ability to display charts in a colorful and graphically pleasing way. Charts should be a visually pleasing way to understand trends and patterns in the data in one look. And Chart.js seemed to fulfill that along with a pleasing to look API reference.


## Diagrams and Wireframe for final project

See cse135hw4diagrams.pdf page 2 and 3

