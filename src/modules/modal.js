import { animate } from './helpers';

const modal = () => {
    const modal = document.querySelector('.popup');
    const modalContent = document.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');

    let modalwidth = 0;
    let modalMove;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
        modal.style.display = 'block';

        if (window.innerHeight > 768 || window.innerWidth > 768) {
            animate({
                duration: 500,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    modalContent.style.position = "absolute";
                    modal.style.width = (progress * 100) + '%';
                }
              });
            }
        });
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    });

/*     function modalAnikmaiton() {
        modalwidth++;
        modalMove = requestAnimationFrame(modalAnikmaiton);

        if (modalwidth <= 20) {
            modalContent.style.position = "absolute";
            modal.style.width = modalwidth * 5 + '%';

        } else {
            cancelAnimationFrame(modalMove);
            modalwidth = 0;
        }
    } */

};

export default modal;
