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

  function getdata() {
      firebase.database().ref("/"+room_name).on('value',function(snapshot){
          document.getElementById("output").innerHTML=""; 
          snapshot.forEach(function(childSnapshot){
              childkey=childSnapshot.key; 
              childData=childSnapshot.val();
              if(childkey!="purpose"){
                  firebase_message_id=childkey; 
                  message_data=childData;
                  console.log(message_data); 
                  name=message_data['name']; 
                  message=message_data['message']; 
                  like=message_data['like']; 
                  row="<h4>"+name+"<img class='user_tick' src='tick.png'></h4><h4 class='message_h4'>"+message+"</h4>"
                  row=row+"<button class='btn btn-waring' id='"+firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)'>"
                  row=row+"<span classs='glyphicon glyphiconicon-thumbs-up'>Like: "+like+"</span></button></hr>";
                  document.getElementById("output").innerHTML+=row;
              }
          });
      });
  }

  getdata(); 

  function updateLike(message_id){
      button_id=message_id; 
      likes=document.getElementById(button_id).value; 
      likes_in_number=Number(likes)+1;
      console.log(likes_in_number); 
      firebase.database().ref(room_name).child(message_id).update({
          like:likes_in_number
      }); 
  }

  function logout() {
    localStorage.removeItem("user_name"); 
    localStorage.removeItem("room_name")
    window.location="index.html"
}
