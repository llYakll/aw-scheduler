const mydoc = document;

//Event lostener for DOM load
mydoc.addEventListener('DOMContentLoaded', function loadCalendar() {
    //get current date (Day, Month, Year)
    const currentDate = new Date(); //get current date (Day, Month, Year)
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    //call function to generate html into the document body
    const calendarHTML = generateCalendarHTML(currentYear, currentMonth);
    //insert generated HTML into document body
    mydoc.body.innerHTML = calendarHTML;
    console.log('Calender generated successfully');
});

//function to generate HTML for Calendar
function generateCalendarHTML(year, month) {
    const firstDayOfMonth = new Date(year, month, 1); //create new Date object for 1st day of month
    const firstDayOfWeek = firstDayOfMonth.getDay(); //get the day of the week for 1st day in month. (0 = sun, 1 = mon, etc.)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); //get number of days in month
    const daysHTML = []; //array to store html markup for the days in the month
    //Generate HTML for each day of week
    for (let i = 1; i <= daysInMonth; i++) {
        daysHTML.push(`<div class="day">${i}</div>`);
    }
    // Generate HTML for Calendar
    const calendarHTML = `
    <div class="calendar">
        <div class="header">${getMonthName(month)} ${year}</div>
        <div class="weekdays">
            <div class="weekday">Sun</div>
            <div class="weekday">Mon</div>
            <div class="weekday">Tue</div>
            <div class="weekday">Wed</div>
            <div class="weekday">Thu</div>
            <div class="weekday">Fri</div>
            <div class="weekday">Sat</div>
        </div>
        <div class="days">
            ${daysHTML.join('')}
        </div>
    </div>
`;
    return calendarHTML;
}
//function to get the name of the month based on its index
function getMonthName(monthIndex) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthIndex];
}