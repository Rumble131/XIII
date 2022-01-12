$(function(){
   

   // Fixed Header 
    let header = $("#header");

    let intro = $("#intro");

    let introH = intro.innerHeight ();

    let scrollPos = $(window).scrollTop();

    $(window).on ("scroll load resize" , function(){
        introH = intro.innerHeight ();

             scrollPos = $(this).scrollTop ();

             if(scrollPos > introH ) {

                header.addClass ("fixed");

             } else {
                 
                header.removeClass ("fixed");

             }

             console.log (scrollPos);


    }) 

    console.log (scrollPos);

    console.log(introH);

    header.addClass ("fixed");



   //  Smooth Scroll


   $("[data-scroll]").on ("click" , function(event) {
      event.preventDefault ();

      nav.removeClass ("show") ;

      let blockID = $(this).data ('scroll');

      let blockOffset = $(blockID).offset().top;

      console.log (blockID);
      console.log (blockOffset);

      $("html, body").animate ({
        scrollTop : blockOffset -80
      }, 1000);

   });





   // NavToggle

   let nav = $("#nav");
   $("#NavToggle").on("click", function (event){
    
      event.preventDefault ();
 
      nav.toggleClass  ("show") ;


   })


   // Reviews : https://kenwheeler.github.io/slick/


   let slider = $("#reviewsSlider");

   slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade : false,
      arrows : false,
      dots : true 
      
    });

});