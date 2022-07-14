var firebaseConfig = {
    apiKey: "AIzaSyA-VFy0bxGE1YxMnm7u27gm1AF0x5j6eCI",
    authDomain: "someproblem-c7493.firebaseapp.com",
    databaseURL: "https://someproblem-c7493-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "someproblem-c7493",
    storageBucket: "someproblem-c7493.appspot.com",
    messagingSenderId: "454898398650",
    appId: "1:454898398650:web:1ee1f1f21b5328db94d983"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!"

function addRoom() {

    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html"
}


function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        //document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log(Room_names);
            row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
            document.getElementById("output").innerHTML += row
                //End code
        });
    });
}
getData();

function redirectToRoomName(name) {

    console.log(name);

    localStorage.setItem("room_name", name);

    window.location = "kwitter_page.html";


}

function logout() {

    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "index.html"
}