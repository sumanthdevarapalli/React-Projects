function CurrentDate(){
const now = new Date();

const dayOfMonth = now.getDate();
const dayOfWeekIndex = now.getDay(); // 0-6, where 0 = Sunday
const monthIndex = now.getMonth(); // 0-11, where 0 = January
const year = now.getFullYear();

// Arrays to map index to day of the week and month
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Function to add "st", "nd", "rd", "th" to the date
function getDaySuffix(day) {
    if (day === 1 || day === 21 || day === 31) return 'st';
    if (day === 2 || day === 22) return 'nd';
    if (day === 3 || day === 23) return 'rd';
    return 'th';
}

// Get formatted date
const dayOfWeek = daysOfWeek[dayOfWeekIndex];
const month = months[monthIndex];
const daySuffix = getDaySuffix(dayOfMonth);
const output = ''
// Output the result
return(<>
<p>Today : {dayOfWeek} </p>
<p>Date: {dayOfMonth}{daySuffix}</p>
<p>Month: {month}</p>
<p>Year: {year}</p>
</>
)
}
export default CurrentDate;