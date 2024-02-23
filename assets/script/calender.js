const mydoc = document; // Store the document object in a variable named mydoc

// Function to generate the calendar for a specific year and month
function generateCalendar(year, month) {
    // Calculate the number of days in the month and the day of the week of the first day
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    // Clear the existing content of the calendar container
    mydoc.getElementById('calendar').innerHTML = '';

    // Create and append the month header
    const monthHeader = mydoc.createElement('h2');
    monthHeader.textContent = new Date(year, month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    mydoc.getElementById('calendar').appendChild(monthHeader);

    // Create and append the table element for the calendar
    const table = mydoc.createElement('table');
    mydoc.getElementById('calendar').appendChild(table);

    // Create and append the table headers (days of the week)
    const thead = mydoc.createElement('thead');
    const tr = mydoc.createElement('tr');
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(day => {
        const th = mydoc.createElement('th');
        th.textContent = day;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);

    // Create and append the table body for the calendar days
    const tbody = mydoc.createElement('tbody');
    table.appendChild(tbody);

    // Calculate the number of rows needed for the calendar
    const numRows = Math.ceil((daysInMonth + firstDayOfMonth) / 7);
    let dayOfMonth = 1; // Initialize the day of the month counter

    // Loop to populate the table with calendar days
    for (let i = 0; i < numRows; i++) {
        const row = mydoc.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const cell = mydoc.createElement('td');
            if ((i === 0 && j < firstDayOfMonth) || dayOfMonth > daysInMonth) {
                // Create empty cells before the first day of the month and after the last day of the month
                cell.textContent = '';
                cell.classList.add('empty');
            } else {
                // Create cells with the day of the month
                cell.classList.remove('empty');
                const dateSpan = mydoc.createElement('span');
                dateSpan.textContent = dayOfMonth;
                dateSpan.classList.add('date');
                cell.appendChild(dateSpan);

                // Add click event listener to each cell
                cell.addEventListener('click', () => {
                    const clickedDay = parseInt(cell.textContent); // Get the clicked day from the cell content
                    checkJobScheduled(year, month, clickedDay); // Call function to check if job is scheduled
                });
                dayOfMonth++;
            }
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
}

// Function to check if a job is scheduled for the clicked day
function checkJobScheduled(year, month, dayOfMonth) {
    const jobScheduled = Math.random() < 0.5; // Simulate job scheduling status (true or false)
    if (jobScheduled) {
        alert(`Job information for ${year}-${month + 1}-${dayOfMonth}`); // Display job information if scheduled
    } else {
        // Create a custom modal
        const modal = mydoc.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <p>There is no job scheduled for ${year}-${month + 1}-${dayOfMonth}, would you like to schedule a job?</p>
                <div class="modal-buttons">
                    <button class="yes-btn">Yes</button>
                    <button class="no-btn">No</button>
                </div>
            </div>
        `;
        mydoc.body.appendChild(modal);

        // Add event listeners to the Yes and No buttons
        return new Promise((resolve, reject) => {
            const yesBtn = modal.querySelector('.yes-btn');
            yesBtn.addEventListener('click', () => {
                mydoc.body.removeChild(modal);
                resolve(true);
            });

            const noBtn = modal.querySelector('.no-btn');
            noBtn.addEventListener('click', () => {
                mydoc.body.removeChild(modal);
                resolve(false);
            });
        });
    }
}

generateCalendar(2024, 1); // Call the function to generate the calendar for January