var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
     
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let b = document.querySelector("#mode");
  let body = document.querySelector("body");
  let curmode = "light";
  
  b.addEventListener('click',() => {
      if(curmode === 'light'){
          curmode='dark';
          body.classList.remove("light");
         body.classList.add("dark");
         
      
      }
      else{
          curmode='light';
          body.classList.remove("dark");
         body.classList.add("light");
         
      }});