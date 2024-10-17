document.addEventListener("DOMContentLoaded", function () {
    const dateSelector = document.getElementById('date-selector');
    const openSelectorButton = document.getElementById('open-selector');
    const numberInputContainer = document.getElementById('number-input-container');
    const forwardbtn = document.getElementById("forwardbtn");

    let dateSelected = false; // Track if a date has been selected

    openSelectorButton.addEventListener('click', (event) => {
        event.stopPropagation();
        dateSelector.classList.toggle('hidden');
        generateWeekDates();
    });

    // Close the date selector if clicked outside
    document.addEventListener('click', (event) => {
        if (!dateSelector.contains(event.target) && event.target !== openSelectorButton) {
            dateSelector.classList.add('hidden');
        }
    });

    function generateWeekDates() {
        dateSelector.innerHTML = ''; // Clear previous dates
        const today = new Date();
        const dayOfWeek = today.getDay(); // Get the current day (0 = Sunday, 1 = Monday, ...)

        // Calculate the difference to get to the previous Monday
        const diffToMonday = (dayOfWeek + 6) % 7; // (0 = Sunday, 1 = Monday) => adjust to get Monday
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - diffToMonday); // Set to Monday

        // Generate dates from today to the end of the week (Sunday)
        for (let i = 0; i < 7 - (dayOfWeek === 0 ? 0 : diffToMonday); i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i); // Set to today + i
            
            // Create a date div
            const dateDiv = document.createElement('div');
            dateDiv.className = 'date';
            dateDiv.textContent = date.toDateString();
            
            // Add click event for date selection
            dateDiv.addEventListener('click', () => {
                document.querySelectorAll('.date').forEach(d => d.classList.remove('selected'));
                dateDiv.classList.add('selected');
                openSelectorButton.textContent = `${date.toDateString()}`;
                dateSelector.classList.add('hidden'); // Close the selector
                numberInputContainer.style.display = 'block'; // Show input after selection
                dateSelected = true; // Set date selected to true
                forwardbtn.disabled = false; // Enable the forward button
            });

            dateSelector.appendChild(dateDiv);
        }
    }

    // Initially disable the forward button
    forwardbtn.disabled = true;

    forwardbtn.onclick = function() {
        window.open("https://mikaelpl1.github.io/test/", "_blank");
    };
});


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



















