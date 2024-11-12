// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDxBXchuAv8px0ZlziNWVGkYJyE5uMfelI",
    authDomain: "auth-form-89a5e.firebaseapp.com",
    projectId: "auth-form-89a5e",
    storageBucket: "auth-form-89a5e.appspot.com",
    messagingSenderId: "800339173862",
    appId: "1:800339173862:web:4f1783d50b3843a6937627"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}