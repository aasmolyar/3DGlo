const menu = () => {

const menuBtn = document.querySelector('.menu'); 
let menu = document.querySelector('menu'); 
const closeBtn = menu.querySelector('.close-btn');
const menuItems = menu.querySelectorAll('ul>li>a');

const toggleMenu = () => { // переключаем класс
    menu.classList.toggle('active-menu');
};

menu.addEventListener('click', (e) => {
    if (e.target === closeBtn) {
        toggleMenu();
    } else if (e.target.tagName === 'A') {
        toggleMenu();
    } 
});

document.addEventListener('click', (e) => {
    menu = document.querySelector('menu'); // перечитываем класс после нажатия на документ
    if (menu.classList.contains('active-menu')) { // если содержит класс (активен)

        if (e.target != menu && !e.target.closest('.menu')) toggleMenu(); // если таргет не меню
                                                                          // и не кнопка меню,
                                                                          // переключаем класс        
    }

    if (e.target.closest('.menu')) toggleMenu(); // если таргет - кнопка меню, переключаем класс
});
};

export default menu;

