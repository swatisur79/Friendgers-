function getUserDetails() {
  var uname = document.getElementById("username").value;
  var ps = document.getElementById("password").value;
  confirm(uname,ps);
}

function confirm(username, password){
    if(username=="admin" && password=="user"){
      window.location.href="homepage.html";
    }
    else{
      alert("wrong username or password");
    }
    return false;
}

