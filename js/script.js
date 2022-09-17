// if(document.querySelector('.navbar')){
//     const navbar = document.querySelector('.navbar');

//     navbar.addEventListener('click',function(e){
//         navbar.classList.add("active");
//     })
// }

if(document.querySelector('.learn_more')){
    const click = document.querySelector('.learn_more');
    const service_block = document.querySelector('.menu_food_more');
    
    click.addEventListener('click',function(e){
        service_block.classList.toggle('hidden');
        service_block.classList.toggle('active');
        click.remove();
    })
}

// slider
// if(document.querySelector(".slider_line")){
//     let offset = 0;
// const sliderLine = document.querySelector(".slider_line");

// document.querySelector('.slider_next').addEventListener('click', function () {
//     offset = offset + 440;
//     if (offset > 880) {
//         offset = 0;
//     }
//     sliderLine.style.transform = `translateX(-${offset}px)`;
//     document.getElementById("next").style.opacity = "1";

//     document.getElementById("prev").style.opacity = "0.5";
// });

// document.querySelector('.slider_prev').addEventListener('click', function () {
//     offset = offset - 440;
//     if (offset < 0) {
//         offset = 880;
//     }
//     sliderLine.style.transform = `translateX(-${offset}px)`;
//     document.getElementById("prev").style.opacity = "1";

//     document.getElementById("next").style.opacity = "0.5";
// });
// }


// login-form modal
const loginForm = document.querySelector("form.login_form");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login_item");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup_link a");
const loginText = document.querySelector(".title_text .title_login");
const signupText = document.querySelector(".title_text .title_signUp");


signupBtn.onclick = (() =>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.onclick = (() =>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

signupLink.onclick = (() =>{
    signupBtn.click();
    return false;
});

// login-form modal onclick

if(document.querySelector('.modal_container_big')){
    const loginClick = document.querySelector('.login');
    const modalForm = document.querySelector('.modal_container_big');

    loginClick.addEventListener('click',function(e){
    // modalForm.classList.toggle('hidden');
    modalForm.classList.add('active');

    
})
    const closeClick = document.querySelector('.close');
    

    closeClick.addEventListener('click',function(e){
        modalForm.classList.remove('active');
        
    })
}

/* navbar sticky - open */

window.addEventListener('scroll', function(){
    var headerContent = document.querySelector(".header_content");
    headerContent.classList.toggle("sticky",window.scrollY > 0);
})

/* navbar sticky - close */


/* ----------- menu cards start control start ----------- */
if (document.querySelectorAll(".stars")) {
    const menuCardStars = document.querySelectorAll(".stars");
  
    function menuCardStarsFunction(event) {
      const icElementAttribute = event.target.getAttribute("data-star");
      const icParentElement = event.target.parentElement;
      const icElementChildrens = icParentElement.querySelectorAll(".ic_star");
      console.log(icParentElement);
      console.log(icElementChildrens);
      console.log(icElementAttribute);
  
      icElementChildrens.forEach((icElementChildren, i) => {
        icElementChildren.classList.remove("active_star");
  
        if (icElementAttribute === i.toString()) {
          for (let index = 0; index <= icElementAttribute; index++) {
            icElementChildrens[index].classList.add("active_star");
          }
        }
      });
    }
  
    for (let menuCardStar of menuCardStars) {
      menuCardStar.addEventListener("click", menuCardStarsFunction);
    }
  }
  /* ----------- menu cards start control end ----------- */
  

  /* scroll-to-top button - start */

  const toTop = document.querySelector(".to_top");

  window.addEventListener("scroll", () => {
      if(window.pageYOffset > 800){
          toTop.classList.add("active_up");
      }else{
          toTop.classList.remove("active_up");
      }
  })

  /* scroll-to-top button - end */

  /* Input-click focus animation - start */

  if(document.querySelector(".input_click")){
      const inputClick = document.querySelector(".input_click");
    
      inputClick.addEventListener('click',function(e){
        this.classList.add("active_input");
    })
  }

  /* Input-click focus animation - end */

  /* humburger menu - JS open*/
  const menuBtn = document.querySelector(".menu_btn");
		let menuOpen = false;

		menuBtn.addEventListener('click', () => {
			if (!menuOpen) {
				menuBtn.classList.add('open');
				menuOpen = true;
			}
			else{
				menuBtn.classList.remove('open');
				menuOpen = false;
			}
		});
    /* humburger menu - JS close*/


    // Tiny-Slider
    var slider = tns({
        container: '.slider_line',
        items: 1,   //nechta slide chiqishi
        // controls: false,  //next,prev ni o'chirish
        // nav: false    // pastki control nav ni o'chirish
        // gutter: 20,   //slide lar orasini 20px ajratish
        // edgePadding: 20,  //slider ni ikki chap va o'ng chegaradan 20px itarish
        // slideBy: 'page',   //bitta slide page ni to'liqligicha o'tkazib, keyingi page ni chiqarish
        // slideBy: 2    //slide dan 2 ta qismni o'tkazib slide ni davom etish, default:1 ya'ni default holatda u 1 ta qismni o'tkazib davom etadi
        // loop: false,    //slide page oxirgisiga keganda next yoki prev noactive holatga o'tishi 
        controlsPosition: 'bottom',  //control - bu next va prev ni ifadalayapti, so'ng uning joylashuvini ko'rsatib berayapti
        navPosition: 'bottom',   //nav - bu pastki slide control ni bildiradi, va bu joyda uning joylashuvi ko'rsatilayapti
        mouseDrag: true,   //cursor b-n surish imkonini beradi
        // autoplay: true,    //slide avtomatik o'tib turishini ta'minlaydi
        preventScrollOnTouch: 'auto',
        autoplayButtonOutput: false,  //slide avtomatik o'tishini to'xtatib turadigan bir tugma bor, bu amal o'sha tugmani ko'rinmay turishini ta'minlaydi
        controlsContainer: '#custom-control',   //bu next,prev arrow larga slide ni controlini berish
        // loop: false, 
        responsive: {
            0: {
                items: 1,
                autoplay: true,
            },
            768: {
                items: 1,
            },
            1024: {
                items: 1,
            }
        }

    })


    