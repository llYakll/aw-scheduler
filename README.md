# aw-scheduler roadmap
1. **Display Current Month in Calendar Format**:
    
    - Create a grid layout to display the days of the current month.
    - Use JavaScript to populate the grid with the correct dates and highlight the current day.
2. **Clicking on a Day to View Job Details**:
    
    - Implement event listeners on each day of the calendar grid.
    - When a day is clicked, retrieve and display the job details on a separate web page.
    - Integrate weather API to fetch weather information based on the job location.
3. **Editing Schedule via Edit Button**:
    
    - Add an edit button on the job information page.
    - Implement functionality to allow users to edit the schedule.
4. **Completing a Job and Generating Work Order Form**:
    
    - Create a button or interface for marking a job as complete.
    - When a job is marked as complete, provide a form for generating a work order.
    - Include form fields for the required information: Customer Name, Location, Scope of Work, etc.
5. **Updating Calendar Block After Job Completion**:
    
    - Upon submission of the work order form, update the corresponding calendar block.
    - Use different colors (green for completed, yellow for return trip) based on the status of the job.
6. **Sending Email Notifications to Company Owner**:
    
    - Implement email functionality to notify the company owner when a job is completed or requires a return trip.
    - Include a link to the job information in the email.