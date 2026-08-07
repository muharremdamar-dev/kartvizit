/* ==========================================
   MODERN OTOMASYON
   gallery.js
========================================== */

const galleryImages = Array.from(document.querySelectorAll(".gallery img"));

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

let currentIndex = 0;


/* ==========================================
   Aç
========================================== */

function openLightbox(image){

    currentIndex = galleryImages.indexOf(image);

    if(currentIndex < 0) currentIndex = 0;

    lightboxImage.src = galleryImages[currentIndex].src;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* ==========================================
   Kapat
========================================== */

function closeLightbox(){

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


/* ==========================================
   Sonraki
========================================== */

function nextImage(){

    currentIndex++;

    if(currentIndex >= galleryImages.length){

        currentIndex = 0;

    }

    lightboxImage.src = galleryImages[currentIndex].src;

}


/* ==========================================
   Önceki
========================================== */

function previousImage(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = galleryImages.length - 1;

    }

    lightboxImage.src = galleryImages[currentIndex].src;

}


/* ==========================================
   Boş alana tıklayınca kapat
========================================== */

lightbox.addEventListener("click",(e)=>{

    if(e.target === lightbox){

        closeLightbox();

    }

});


/* ==========================================
   ESC / Sağ / Sol
========================================== */

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    switch(e.key){

        case "Escape":

            closeLightbox();

        break;

        case "ArrowRight":

            nextImage();

        break;

        case "ArrowLeft":

            previousImage();

        break;

    }

});


/* ==========================================
   Mobil Swipe
========================================== */

let touchStartX = 0;

let touchEndX = 0;

lightbox.addEventListener("touchstart",(e)=>{

    touchStartX = e.changedTouches[0].screenX;

});

lightbox.addEventListener("touchend",(e)=>{

    touchEndX = e.changedTouches[0].screenX;

    if(touchStartX - touchEndX > 50){

        nextImage();

    }

    if(touchEndX - touchStartX > 50){

        previousImage();

    }

});


/* ==========================================
   Mouse Wheel
========================================== */

lightbox.addEventListener("wheel",(e)=>{

    if(e.deltaY > 0){

        nextImage();

    }else{

        previousImage();

    }

});


/* ==========================================
   Preload
========================================== */

galleryImages.forEach(img=>{

    const preload = new Image();

    preload.src = img.src;

});
