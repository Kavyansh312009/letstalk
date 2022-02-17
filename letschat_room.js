var firebaseConfig = {
      apiKey: "AIzaSyBueIKqchMWpJqvPsewhQeF7pKEXU8McpQ",
      authDomain: "kwitter-c6920.firebaseapp.com",
      databaseURL: "https://kwitter-c6920-default-rtdb.firebaseio.com",
      projectId: "kwitter-c6920",
      storageBucket: "kwitter-c6920.appspot.com",
      messagingSenderId: "1019309130854",
      appId: "1:1019309130854:web:ca25a266bbbee2cfbf59a7"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem("Random_name");
    document.getElementById("welcome").innerHTML="Welcome " + user_name +" !";

    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({purpose:"adding room"})
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name'id="+Room_names+" onclick='redirecthere(this.id)'>"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function logout(){
      localStorage.removeItem("Random_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function redirecthere(room){
      localStorage.setItem("room_name",room);
      window.location="letschat_page.html";

}