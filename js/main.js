// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';


// let randomNumber = Math.floor(Math.random() * imageArray.length );


// let randomOption = true;


// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );
    
//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';
    
//     }, 4000);
    
//   }
// }
// randomizeImgs();


window.addEventListener("scroll", function () {
  const navbar = document.getElementById("header");
  const logo = document.getElementById("logo");

  if (window.scrollY > 0) {
    navbar.classList.add("bg-white", "shadow-md");
    navbar.classList.remove("bg-transparent");
    
    logo.classList.add("text-black"); // تغيير اللون إلى الأسود
    logo.classList.remove("text-white");
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-white", "shadow-md");

    logo.classList.add("text-white"); // إعادة اللون للأبيض
    logo.classList.remove("text-black");
  }
});

document.getElementById("menu-icon").addEventListener("click", function () {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("hidden");
  navMenu.classList.toggle("flex");
  navMenu.classList.toggle("flex-col");
  navMenu.classList.toggle("items-center");
  navMenu.classList.toggle("p-5");
});