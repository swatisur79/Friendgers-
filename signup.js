function getDetails() {
  var uname = document.getElementById("username").value;
  var ps = document.getElementById("password").value;
  var em= document.getElementById("email").value;
  var cps= document.getElementById("cpassword").value;
  checkPassword(ps, cps);
}

function checkPassword(ps, cps){
  if (ps != cps){
    alert("Make sure the password and confirm password are the same");
      location.reload();
  }
  else{

  }
}

function createDatabase(){
  var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
}