
/* ---------- active Nav icon ---------- */
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop;
    const sectionId = current.getAttribute("id");
    if (scrollY >= (sectionTop - sectionHeight/2) && scrollY < sectionTop + (sectionHeight/2)){
      document.querySelector(".navigation ."+sectionId).classList.add("active");
    } else {
      document.querySelector(".navigation ."+sectionId).classList.remove("active");
      /* console.log("removed "+sectionId); */
    }
  });
}

/* ---------- hide logo on scroll ---------- */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("logo").style.left = "1rem";
    // document.getElementById("navbar").style.top = "0.65rem";
  } else {
    document.getElementById("logo").style.left = "0.5rem";
    // document.getElementById("navbar").style.top = "-3rem";
  }
  prevScrollpos = currentScrollPos;
}

/* Move-Left items animation on scroll */
const move_left_observer = new IntersectionObserver(
  move_left_entries => {
    move_left_entries.forEach(move_left_entry => {
      move_left_entry.target.classList.toggle("show", move_left_entry.isIntersecting)
    })
  },
  {
    threshold: 0,
    rootMargin: "-10px",
  }
)
const move_left_Elements = document.querySelectorAll('.move-left');

move_left_Elements.forEach(move_left_Element => {
  move_left_observer.observe(move_left_Element)
})

/* Move-Right items animation on scroll */
const move_right_observer = new IntersectionObserver(
  move_right_entries => {
    move_right_entries.forEach(move_right_entry => {
      move_right_entry.target.classList.toggle("show", move_right_entry.isIntersecting)
    })
  },
  {
    threshold: 0,
    rootMargin: "-10px",
  }
)
const move_right_Elements = document.querySelectorAll('.move-right');

move_right_Elements.forEach(move_right_Element => {
  move_right_observer.observe(move_right_Element)
})

/* Active Work Experience */

var tablinks = document.getElementsByClassName("company");
var tabcontents = document.getElementsByClassName("work-details");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-company");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-company-details");
    }
    event.currentTarget.classList.add("active-company");
    document.getElementById(tabname).classList.add("active-company-details");
}

/* Expand on click */

/* function expand(spanname){
  console.log(spanname);
  

  const detailspans = document.querySelectorAll(".about-details span"); 


switch(spanname){
  case "1": document.querySelector(".about-details .skill").classList.add("active-details");
            document.querySelector(".about-details .experience").classList.remove("active-details");
            document.querySelector(".about-details .education").classList.remove("active-details");
  case "2": document.querySelector(".about-details .skill").classList.remove("active-details");
            document.querySelector(".about-details .experience").classList.add("active-details");
            document.querySelector(".about-details .education").classList.remove("active-details");
  case "3": document.querySelector(".about-details .skill").classList.remove("active-details");
            document.querySelector(".about-details .experience").classList.remove("active-details");
            document.querySelector(".about-details .education").classList.add("active-details");
}

} */