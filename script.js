function getUserDetails() {
  alert("you clicked submit");
  var uname = document.getElementById("username");
  console.log(uname);
  var ps = document.getElementById("password");
  console.log(ps);
}
function confirm(){
    var user=document.getElementById("username").Value;
    var pass=document.getElenmentById("password").value;
    if(user=="admin" && pass=="user"){
        alert("suceess")
        return false;
    }
    else{}

}