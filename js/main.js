$(function(){
    $('.header__slider').slick({
        dots:true,
        prevArrow:'<button type="button" class="slick-prev"><img src="images/next.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/previos.svg" alt=""></button>',
        fade:true
    });
// second slider for header next
    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,       
         focusOnSelect: true,       
        asNavFor: '.product__content',
        vertical: true,
        prevArrow:'<button type="button" class="product-prev"><img src="images/product_next.png" alt=""></button>',
        nextArrow:'<button type="button" class="product-next"><img src="images/product_prev.png" alt=""></button>',
      }); 
      $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        arrow:false,
      });
//End second slider for header next


});