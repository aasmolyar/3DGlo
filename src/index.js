import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import calculator from "./modules/calculator";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import sendForm from "./modules/sendForm";

timer('21 april 2023');
menu();
modal();
calculator(100);
tabs();
slider();
sendForm({ 
    formId: 'form1', 
    someElem: [
        {
            type: 'block',
            id: 'total',
        }
    ],
});
sendForm({ 
    formId: 'form2', 
    someElem: [
        {
            type: 'block',
            id: 'total',
        },
        {
            type: 'input',
            id: 'form2-message',
        },
    ],
});
sendForm({ 
    formId: 'form3', 
    someElem: [
        {
            type: 'block',
            id: 'total',
        }
    ],
});
