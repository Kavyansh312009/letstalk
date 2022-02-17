function login(){
    user_name= document.getElementById("user_name").value;
    localStorage.setItem("Random_name",user_name);
    window.location="letschat_room.html";
}