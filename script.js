/* Slideshow */

let slides=document.querySelectorAll(".slide");

let index=0;

function showSlides(){

slides.forEach((slide)=>{
slide.classList.remove("active");
});

index++;

if(index>slides.length){
index=1;
}

slides[index-1].classList.add("active");

setTimeout(showSlides,3000);

}

showSlides();



/* Form Validation */

function validateForm(){

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();

if(name===""){
alert("Please enter your name");
return false;
}

if(email===""){
alert("Please enter your email");
return false;
}

alert("Thank you for contacting Solapur Tourism!");

return true;

}
