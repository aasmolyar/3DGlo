const modal = () => {
    const modal = document.querySelector('.popup');
    const modalContent = document.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
        modal.style.display = 'block';

        if (window.innerHeight > 768 || window.innerWidth > 768) {
            modalAnikmaiton();
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    let modalwidth = 0;
    let modalMove;

    function modalAnikmaiton() {
        modalwidth++;
        modalMove = requestAnimationFrame(modalAnikmaiton);

        if (modalwidth <= 20) {
            modalContent.style.position = "absolute";
            modal.style.width = modalwidth * 5 + '%';

        } else {
            cancelAnimationFrame(modalMove);
            modalwidth = 0;
        }
    }
};

export default modal;
