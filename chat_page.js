const firebaseConfig = {
    apiKey: "AIzaSyAqJ7q3NNkKhw9pTxAmBrhQ3FyrOula8jA",
    authDomain: "let-s-chat-fb969.firebaseapp.com",
    databaseURL: "https://let-s-chat-fb969-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-fb969",
    storageBucket: "let-s-chat-fb969.appspot.com",
    messagingSenderId: "13735433483",
    appId: "1:13735433483:web:4c0ea144041038f699be0e",
    measurementId: "G-553BTEN877"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name"); 
  room_name=localStorage.getItem("room_name"); 

  function send() {
      msg=document.getElementById("msg").value;
      console.log(msg);
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("msg").innerHTML=""; 
  }