// ===============================
// FORM SUBMIT
// ===============================
const form = document.querySelector("form");
const msg = document.getElementById("successMessage");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (msg) {
      msg.style.display = "block";

      setTimeout(() => {
        msg.style.display = "none";
      }, 3000);
    } else {
      alert("Your request has been sent successfully!");
    }

    form.reset();
  });
}


// ===============================
// SCROLL ANIMATION
// ===============================
const elements = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {
  elements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 100) {
      el.style.animationPlayState = "running";
    }
  });
});




let arabic = false;

function toggleLanguage(){

if(!arabic){

document.querySelector("h1").innerHTML =
"حلول <br> الطباعة ثلاثية الأبعاد <br> المبتكرة";

document.querySelector(".hero p").innerHTML =
"أول شركة عمانية متخصصة في الطباعة ثلاثية الأبعاد بمحافظة الداخلية.";

document.querySelectorAll("nav a")[0].innerHTML="الرئيسية";
document.querySelectorAll("nav a")[1].innerHTML="الخدمات";
document.querySelectorAll("nav a")[2].innerHTML="الأعمال";
document.querySelectorAll("nav a")[3].innerHTML="تواصل";

document.body.style.direction="rtl";

arabic=true;

}else{

document.querySelector("h1").innerHTML =
"Innovative <br><span>3D Printing</span><br>Solutions";

document.querySelector(".hero p").innerHTML =
"The first Omani company specialized in 3D printing in Al Dakhiliyah Governorate.";

document.querySelectorAll("nav a")[0].innerHTML="Home";
document.querySelectorAll("nav a")[1].innerHTML="Services";
document.querySelectorAll("nav a")[2].innerHTML="Portfolio";
document.querySelectorAll("nav a")[3].innerHTML="Contact";

document.body.style.direction="ltr";

arabic=false;

}

}




