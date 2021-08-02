
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyC4w14nHvrC2_3BDFc2VoEj4meQJACqgzo",
      authDomain: "kwitter-test-e8054.firebaseapp.com",
      databaseURL: "https://kwitter-test-e8054-default-rtdb.firebaseio.com",
      projectId: "kwitter-test-e8054",
      storageBucket: "kwitter-test-e8054.appspot.com",
      messagingSenderId: "538534832574",
      appId: "1:538534832574:web:97f62afd7fe01692b071ef"
    };
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome "+ user_name+ "!";

   function addRoom()
   {
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
       purpose:"adding room name "
     });
     localStorage.setItem("room_name",room_name);
     window.location = "kwitter_page.html";

   }
   
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToRoomname(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location ="kwitter_page.html";
  
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

