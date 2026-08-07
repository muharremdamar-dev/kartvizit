/* ==========================================
   MODERN OTOMASYON
   script.js
========================================== */

// Sayfa yüklendiğinde
document.addEventListener("DOMContentLoaded", () => {

    initSmoothScroll();
    initScrollReveal();
    initHeaderEffect();
    initActiveMenu();

});


/* ==========================================
   Smooth Scroll
========================================== */

function initSmoothScroll(){

    document.querySelectorAll('nav a').forEach(link=>{

        link.addEventListener('click',function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute('href'));

            if(target){

                target.scrollIntoView({

                    behavior:'smooth',
                    block:'start'

                });

            }

        });

    });

}


/* ==========================================
   Header Scroll Effect
========================================== */

function initHeaderEffect(){

    const header=document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>80){

            header.style.padding="10px 26px";
            header.style.background="rgba(255,255,255,.82)";
            header.style.boxShadow="0 18px 45px rgba(0,0,0,.12)";

        }

        else{

            header.style.padding="16px 32px";
            header.style.background="rgba(255,255,255,.65)";
            header.style.boxShadow="0 15px 35px rgba(0,0,0,.08)";

        }

    });

}


/* ==========================================
   Scroll Reveal
========================================== */

function initScrollReveal(){

    const items=document.querySelectorAll("section,.gallery img,.contact-grid a");

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    items.forEach(item=>{

        item.classList.add("fade");

        observer.observe(item);

    });

}


/* ==========================================
   Active Menu
========================================== */

function initActiveMenu(){

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll("nav a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-180;

            if(pageYOffset>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

}


/* ==========================================
   Parallax Hero
========================================== */

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    if(hero){

        hero.style.backgroundPositionY=(window.scrollY*0.3)+"px";

    }

});


/* ==========================================
   Hover Scale
========================================== */

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});


/* ==========================================
   Lazy Loading Images
========================================== */

document.querySelectorAll("img").forEach(img=>{

    img.loading="lazy";

});


/* ==========================================
   Footer Year
========================================== */

const footer=document.querySelector("footer");

if(footer){

    footer.innerHTML="© "+new Date().getFullYear()+" Modern Otomasyon";

}


/* ==========================================
   Scroll To Top
========================================== */

const topButton=document.createElement("div");

topButton.innerHTML="↑";

topButton.id="topButton";

document.body.appendChild(topButton);

topButton.style.cssText=`
position:fixed;
right:25px;
bottom:25px;
width:48px;
height:48px;
background:#0071e3;
color:white;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
font-size:22px;
opacity:0;
transition:.3s;
z-index:9999;
box-shadow:0 10px 30px rgba(0,0,0,.25);
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.style.opacity="1";

    }else{

        topButton.style.opacity="0";

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
