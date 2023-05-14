const calculator = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const total = document.getElementById('total');

    const square = document.querySelector('.calc-square');
    const count = document.querySelector('.calc-count');
    const day = document.querySelector('.calc-day');

    const form1 = document.getElementById('form1');
    const form1Name = document.getElementById('form1-name');
    const form1Email = document.getElementById('form1-email');
    const form1Phone = document.getElementById('form1-phone');

    const form2 = document.getElementById('form2');
    const form2Name = document.getElementById('form2-name');
    const form2Email = document.getElementById('form2-email');
    const form2Phone = document.getElementById('form2-phone');
    const form2Message = document.getElementById('form2-message');

    const form3 = document.getElementById('form3');
    const form3Name = document.getElementById('form3-name');
    const form3Email = document.getElementById('form3-email');
    const form3Phone = document.getElementById('form3-phone');

    const regExpNumbers = /\D+/;
    const regExpName = /[^а-яА-я]/g;
    const regExpEmail = /[\-\.\w]+@([\w]+\.)+[\w]+/gi;
    const regExpPhone = /[^\d]/g;

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = square.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let dayValue = 1;

        if (count.value > 1) {
            calcCountValue += +count.value / 10;
        }

        if (day.value && day.value < 5) {
            dayValue = 2;
        } else if (day.value && day.value < 10) {
            dayValue = 1.5;
        }
    
        if (calcType.value && square.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * dayValue;
        } else {
            totalValue = 0;
        }

        total.textContent = totalValue;
    };

    calcBlock.addEventListener('input', (e) => {

        if (e.target === calcType || e.target === square ||
            e.target === count || e.target === day) {
            countCalc();
        }
    });

    square.addEventListener('input', (e) => {
        checkingNumbers(e);
    }); 

    count.addEventListener('input', (e) => {
        checkingNumbers(e);
    }); 

    day.addEventListener('input', (e) => {
        checkingNumbers(e);
    }); 

    form1.addEventListener('submit', (e) => {
        e.preventDefault();
        formChecking(e);
     })

    form2.addEventListener('submit', (e) => {
        e.preventDefault();
        formChecking(e);
     })

    form3.addEventListener('submit', (e) => {
        e.preventDefault();
        formChecking(e);
     })

    function checkingNumbers(arg) {
        arg.target.value = arg.target.value.replace(regExpNumbers, ""); // ф-ия проверки полей числа
    };

    function formChecking(form) {
        let formNameValue;
        let formEmailValue;
        let formPhoneValue;
        let formMessageValue;

        let isError = false;

        if (/form1/.test(form.target.id)) {
            formNameValue = form1Name.value;
            formEmailValue = form1Email.value;
            formPhoneValue = form1Phone.value;
        }
        if (/form2/.test(form.target.id)) {
            formNameValue = form2Name.value;
            formEmailValue = form2Email.value;
            formPhoneValue = form2Phone.value;
            formMessageValue = form2Message.value;
        }
        if (/form3/.test(form.target.id)) {
            formNameValue = form3Name.value;
            formEmailValue = form3Email.value;
            formPhoneValue = form3Phone.value;
        }

       /*  if (!regExpName.test(formNameValue) && formNameValue !== '') {
            alert('Кирилица')
       } else {
            isError = true;
            alert('Заполните корректно поля, кроме тех, что увидите или увидели')
       }

       if (regExpEmail.test(formEmailValue) && formEmailValue !== '') {
            alert('email')
       } else {
            isError = true;
            alert('Заполните корректно поля, кроме тех, что увидите или увидели')
       }

       if (!regExpPhone.test(formPhoneValue) && formPhoneValue !== '') {
            alert('Цифры')
       } else {
        isError = true;
        alert('Заполните корректно поля, кроме тех, что увидите или увидели')
        }

        if (!regExpName.test(formMessageValue) && formMessageValue !== '') {
            alert('Кирилица')
       } else {
            isError = true;
            alert('Заполните корректно поля, кроме тех, что увидите или увидели')
       }    

        if (!isError) {
            alert('Данные отправлены');
        }  */
    }
};

export default calculator;
