function validateForm()
{

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;

if(name == "")
{
alert("Please enter your name");
return false;
}

if(email == "")
{
alert("Please enter your email");
return false;
}

alert("Thank you! Your enquiry has been submitted.");
return true;

}
