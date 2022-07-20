
//ADD YOUR FIREBASE LINKS HERE
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name- "+Room_names); 
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"; 
      document.getElementById("output").innerHTML+=row; 
      //End code
      });});}
getData();

function logout() {
      localStorage.removeItem("user_name"); 
      localStorage.removeItem("room_name")
      window.location="index.html"
}

function addroom(){
      room_name=document.getElementById("room_name").value; 
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name); 
      window.location="chat_page.html"
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name); 
      window.location="chat_page.html"; 
}