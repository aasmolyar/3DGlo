const modal = () => {
    const modal = document.querySelector('.popup');
    const modalContent = document.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');

    let height = document.documentElement.clientHeight;
    let width = document.documentElement.clientWidth;

    window.addEventListener('resize', () => {
    height = document.documentElement.clientHeight;
    width = document.documentElement.clientWidth;

    console.log('height',height);
    console.log('width', width);
    }); 

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
        modal.style.display = 'block';

        if (height > 768 || width > 768) {
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
