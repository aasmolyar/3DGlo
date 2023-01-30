/* const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemainikng = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemainikng / 60 / 60 / 24); 
        let hours = Math.floor((timeRemainikng / 60 / 60)); 
        let minutes = Math.floor((timeRemainikng / 60) % 60); 
        let seconds = Math.floor(timeRemainikng % 60);
        
        return {timeRemainikng, hours, minutes, seconds, }
    };

    const updateClock = () => {
        let getTime = getTimeRemaining();

        if (getTime.hours <= 0) timerHours.textContent = '00';
        if (getTime.hours > 0) timerHours.textContent = getTime.hours;
        if (getTime.hours > 0 && getTime.hours < 10) timerHours.textContent = '0' + getTime.hours;

        if (getTime.minutes <= 0) timerMinutes.textContent =  '00';
        if (getTime.minutes > 0) timerMinutes.textContent = getTime.minutes;
        if (getTime.minutes > 0 && getTime.minutes < 10) timerMinutes.textContent = '0' + getTime.minutes;

        if (getTime.seconds <= 0) timerSeconds.textContent =  '00';
        if (getTime.seconds > 0) timerSeconds.textContent = getTime.seconds;
        if (getTime.seconds > 0 && getTime.seconds < 10) timerSeconds.textContent = '0' + getTime.seconds;

        if (getTime.timeRemainikng > 0) {
            setTimeout(updateClock, 1000)
        }
    };
    updateClock()
}; */

const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemainikng = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemainikng / 60 / 60 / 24); 
        let hours = Math.floor((timeRemainikng / 60 / 60)); 
        let minutes = Math.floor((timeRemainikng / 60) % 60); 
        let seconds = Math.floor(timeRemainikng % 60);
        
        return {timeRemainikng, hours, minutes, seconds, }
    };

    const updateClock = () => {
        let getTime = getTimeRemaining();

        if (getTime.hours <= 0) timerHours.textContent = '00';
        if (getTime.hours > 0) timerHours.textContent = getTime.hours;
        if (getTime.hours > 0 && getTime.hours < 10) timerHours.textContent = '0' + getTime.hours;

        if (getTime.minutes <= 0) timerMinutes.textContent =  '00';
        if (getTime.minutes > 0) timerMinutes.textContent = getTime.minutes;
        if (getTime.minutes > 0 && getTime.minutes < 10) timerMinutes.textContent = '0' + getTime.minutes;

        if (getTime.seconds <= 0) timerSeconds.textContent =  '00';
        if (getTime.seconds > 0) timerSeconds.textContent = getTime.seconds;
        if (getTime.seconds > 0 && getTime.seconds < 10) timerSeconds.textContent = '0' + getTime.seconds;
        }

    let getTimeSetInterval = getTimeRemaining();

    if (getTimeSetInterval.timeRemainikng > 0) {
        setInterval(updateClock, 1000) };
};

export default timer;
