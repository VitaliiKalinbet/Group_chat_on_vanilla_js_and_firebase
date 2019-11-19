// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB0yodiPYM6vp6Cz1lbHaz2mkb7zMqn9Jg",
  authDomain: "group-chat-with-vanilla-js.firebaseapp.com",
  databaseURL: "https://group-chat-with-vanilla-js.firebaseio.com",
  projectId: "group-chat-with-vanilla-js",
  storageBucket: "group-chat-with-vanilla-js.appspot.com",
  messagingSenderId: "1051434315046",
  appId: "1:1051434315046:web:9805befa0dae607074a5e7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.querySelector("#send").addEventListener("click", function(e) {
  var u = document.querySelector("#user");
  var msg = document.querySelector("#msg");
  firebase
    .database()
    .ref("chat")
    .push({
      user: u.value,
      txt: msg.value
    });
  msg.value = "";
});

var msgs = document.querySelector("#msgs");
firebase
  .database()
  .ref("chat")
  .on("value", function(snp) {
    msgs.innerHTML = "";
    snp.forEach(function(e) {
      var x = e.val();
      msgs.innerHTML += `<p>👽${x.user}: ${x.txt}</p>`;
    });
  });
