const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');
    const dots = document.querySelectorAll('.dot');
    const dot = document.querySelector('.dot');

    const ulDots = document.querySelector('.portfolio-dots');
    const timerInterval = 2000;

    let currentSlide = 0; // counter for slides
    let interval;

/*     function removeDots () {
        dots.forEach(dot => dot.remove());
    }
    removeDots ();

     function addDots () {
        
        for (let i = 1; i <= slides.length; i++) {

            ulDots.insertAdjacentHTML('beforeend', '<li class ="dot"></li>'); 
            console.log('ulDots', ulDots, i);     
        }
    }
    addDots ();  */

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);        
    };

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };
                           
    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;    
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;    
        }
        
        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    };

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot, .portfolio-btn')) {
                return;
        }

        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        
        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;    
        }

        if (currentSlide < 0 ) {
            currentSlide = slides.length -1;    
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    });

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
    }
    }, true);

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timerInterval);
    }
    }, true);

    startSlide(timerInterval);
};

export default slider;
