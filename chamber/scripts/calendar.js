
// JavaScript for the calendar
document.addEventListener('DOMContentLoaded', function () {
    const calendarBody = document.querySelector('#calendar tbody');

    function generateCalendar(year, month) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        let day = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');
                if (i === 0 && j < firstDayOfMonth) {
                    cell.textContent = '';
                } else if (day > daysInMonth) {
                    break;
                } else {
                    cell.textContent = day;
                    cell.addEventListener('click', function () {
                        highlightSelectedDay(this);
                    });
                    day++;
                }

                row.appendChild(cell);
            }

            calendarBody.appendChild(row);
        }
    }

    function highlightSelectedDay(cell) {
        const selectedDay = document.querySelector('.selected-day');
        if (selectedDay) {
            selectedDay.classList.remove('selected-day');
        }
        cell.classList.add('selected-day');
    }

    // Display the current month's calendar
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    generateCalendar(currentYear, currentMonth);
});

    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = Date.now();
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    const visitMessageSpan = document.getElementById('visitMessage');

    if (!lastVisit) {
        visitMessageSpan.innerHTML = 'Welcome! Let us know if you have any questions.';
    } else {
        const daysDifference = Math.floor((currentDate - lastVisit) / oneDayInMilliseconds);

        if (daysDifference < 1) {
            visitMessageSpan.innerHTML = 'Back so soon! Awesome!';
        } else {
            const pluralizeDays = daysDifference === 1 ? 'day' : 'days';
            visitMessageSpan.innerHTML = `You last visited ${daysDifference} ${pluralizeDays} ago.`;
        }
    }

localStorage.setItem('lastVisit', currentDate);