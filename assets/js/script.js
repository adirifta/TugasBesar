const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if(window.scrollY > 1){
        navbar.classList.replace('bg-transparent', 'nav-color')
    } else if (this.window.scrollY <= 0){
        navbar.classList.replace('nav-color', 'bg-transparent')
    }
});

$(function() {
    var slides = $('.slides'),
    images = slides.find('img');

    images.each(function(i) {
        $(this).attr('data-id', i + 1);
    })

    var typed = new Typed('.typed-words', {
        strings: ["San Francisco."," Paris."," New Zealand.", " Maui.", " London."],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 4000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        preStringTyped: (arrayPos, self) => {
            arrayPos++;
            console.log(arrayPos);
            $('.slides img').removeClass('active');
            $('.slides img[data-id="'+arrayPos+'"]').addClass('active');
        }

    });
})