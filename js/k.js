$(document).ready(function(){
 

  let hamberger = document.querySelector('.hamberger');
  let times= document.querySelector('.times');
  let mobileNav = document.querySelector('.mob-nav')
  
 
  hamberger.addEventListener('click',function(){
  mobileNav.classList.add('open');
  
  });

  // ===================================
  

    // var color=["red-green"];
    var color=["#1D2D50","#44000D","#3B2C85","#522546","#0F4C75","#044343","#83142C","#00818A","#b89f5d",""];
    var i=0;
    document.querySelector(".ghost").addEventListener("click",
         function(){
         i=i<color.length ? ++i : 0;
         document.querySelector("header").style.background=color[i];
         document.querySelector("section.skill").style.background=color[i];
         document.querySelector("section.resume").style.background=color[i];
        //  document.querySelector("scrollbar").style.background=color[i];
         })
  // ===================================
 times.addEventListener('click',function(){
 
   mobileNav.classList.remove('open');
 
  });
 
 });