function getUserDetails() {
  var uname = document.getElementById("username").value;
  var ps = document.getElementById("password").value;
  confirm(uname,ps);
}

function confirm(username, password){
    if(username=="admin" && password=="user"){
      var f=document.getElementById("form")
       f.setAttribute('method',"post");
       f.setAttribute('action',"homepage.html");
      return true;
  }
    else{
      alert("wrong username or password");
      location.reload();
      return false;
    }
}



