const firebaseConfig = {
    apiKey: "AIzaSyCbApg71l3V43BjfkfNs5_m99McsuQLB8k",
    authDomain: "let-s-chat-6d0c9.firebaseapp.com",
    databaseURL: "https://let-s-chat-6d0c9-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-6d0c9",
    storageBucket: "let-s-chat-6d0c9.appspot.com",
    messagingSenderId: "11495401375",
    appId: "1:11495401375:web:306606f8613f7adab77faa",
    measurementId: "G-92H2BNF7X4"
  };


firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });

}

getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
}