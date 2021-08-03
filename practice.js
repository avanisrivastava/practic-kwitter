
//ADD YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyASv-DwHd5CKE6cszJ-0CUQmZDGXfeBMxA",
    authDomain: "practice-activity-11a05.firebaseapp.com",
    databaseURL: "https://practice-activity-11a05-default-rtdb.firebaseio.com",
    projectId: "practice-activity-11a05",
    storageBucket: "practice-activity-11a05.appspot.com",
    messagingSenderId: "131200252019",
    appId: "1:131200252019:web:716f407f918026dbf09206"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({purpose:"adduser"});
  }