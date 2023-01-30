const weekDay = document.querySelector('.weekDay'); 
const days = document.querySelector('.days'); 
const hours = document.querySelector('.hours'); 
const minutes = document.querySelector('.minutes'); 
const seconds = document.querySelector('.seconds'); 

let today = new Date(); // сегодняшняя дата полная
const newYear = new Date(2024, 0, 01);

setInterval(() => {
    setWeekDay();
    setDateValues();
}, 1000);

// ф-я получения дней недели
function setWeekDay() {
    let todayWeekday = today.getDay(); // Получаем цифру дня недели

    switch (todayWeekday) {
        case 2: weekDay.textContent = 'Сегодня ' + 'Вторник'; break; 
        case 1: weekDay.textContent = 'Сегодня ' + 'Понедельник'; break;
        case 0: weekDay.textContent = 'Сегодня ' + 'Воскресенье'; break;
        case 3: weekDay.textContent = 'Сегодня ' + 'Среда'; break;
        case 4: weekDay.textContent = 'Сегодня ' + 'Четверг'; break;
        case 5: weekDay.textContent = 'Сегодня ' + 'Пятница'; break;
        case 6: weekDay.textContent = 'Сегодня ' + 'Суббота'; break;
}
};

function setDateValues () {
    let todayWatch = new Date(); // сегодняшняя дата полная

    let remainingTime = (newYear.getTime() - todayWatch.getTime()) / 1000; // разница в секундах
    
    timeDays = Math.floor(remainingTime / 60 / 60 / 24);
    timeHours = Math.floor((remainingTime / 60) % 24);
    timeMinutes = Math.floor((remainingTime / 60) % 60);
    timeSeconds = Math.floor(remainingTime % 60);

    days.textContent = timeDays + ' дней';
    hours.textContent = timeHours + ' часов';
    minutes.textContent = timeMinutes + ' минут';
    seconds.textContent = timeSeconds + ' секунд';
}
