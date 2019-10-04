(() => {

    const   button         =      document.querySelector("#button"),
            navLightbox    =      document.querySelector(".navLightbox"),
            lbCLose        =      document.querySelector(".lightbox-close");


        function openLightbox(e){
            console.log("fired");
            navLightbox.classList.add("navLightboxOn");

            TweenLite.from(navLightbox, 1, {x:550, opacity: 0.6});       
        }

        function closeLightbox(e){
            navLightbox.classList.remove("navLightboxOn"); 

        }

        button.addEventListener("click", openLightbox);
        lbCLose.addEventListener("click", closeLightbox);
 })();