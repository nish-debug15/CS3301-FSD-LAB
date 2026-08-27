// 1. Select the relevant elements
const themeBtn = document.getElementById('theme-btn');
const mainHeading = document.getElementById('main-heading');
const taskInput = document.getElementById('task-input');
const feedbackSpan = document.getElementById('real-time-feedback');
const taskList = document.getElementById('task-list');

// 2. Attach a click event listener (Button Click)
// Toggles the 'dark-mode' class on the body to dynamically change styling
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Change displayed text based on current theme
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Toggle Light Mode';
        mainHeading.textContent = 'Interactive DOM Lab (Dark Mode)';
    } else {
        themeBtn.textContent = 'Toggle Dark Mode';
        mainHeading.textContent = 'Interactive DOM Lab';
    }
});

// 3. Attach an input event listener (Text Input)
// Displays the entered text somewhere on the page in real time
taskInput.addEventListener('input', (event) => {
    feedbackSpan.textContent = event.target.value;
});

// 4. Attach a keyboard event listener (Key Press)
// Adds functionality to create and append a new list item when 'Enter' is pressed
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const newTaskText = taskInput.value.trim();
        
        if (newTaskText !== '') {
            // Create a new list item element
            const newListItem = document.createElement('li');
            newListItem.textContent = newTaskText;
            
            // Append the new list item to the existing list
            taskList.appendChild(newListItem);
            
            // Clear the input and real-time feedback after adding
            taskInput.value = '';
            feedbackSpan.textContent = '';
        }
    }
});

// 5. Add functionality to remove a selected list item
// Using event delegation on the unordered list
taskList.addEventListener('click', (event) => {
    // Check if the clicked element is an <li>
    if (event.target.tagName === 'LI') {
        // Remove the clicked element from the DOM
        event.target.remove();
    }
});
