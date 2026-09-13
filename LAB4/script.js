// --- 1. APPLICATION STATE ---
// The 'state' is the single source of truth for our application.
let notesState = [];

// --- 2. DOM ELEMENTS ---
const noteInput = document.getElementById('note-input');
const addBtn = document.getElementById('add-btn');
const notesContainer = document.getElementById('notes-container');
const noteCount = document.getElementById('note-count');

// --- 3. STATE MODIFICATION FUNCTIONS ---
function addNote(text) {
    if (!text.trim()) return;
    
    const newNote = {
        id: Date.now(), // Unique ID based on timestamp
        text: text
    };
    
    // Update the state
    notesState.push(newNote);
    
    // Refresh UI
    render();
}

function deleteNote(id) {
    // Update the state by filtering out the deleted note
    notesState = notesState.filter(note => note.id !== id);
    
    // Refresh UI
    render();
}

// --- 4. RENDER FUNCTION (UI Updates based on State) ---
// This function clears the display and rebuilds it entirely from the 'notesState' array.
function render() {
    // Clear current UI
    notesContainer.innerHTML = '';
    
    // Loop through the state array and build UI elements
    notesState.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note-card';
        
        const noteText = document.createElement('span');
        noteText.textContent = note.text;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        
        // Attach event listener that calls our state modifier
        deleteBtn.addEventListener('click', () => {
            deleteNote(note.id);
        });
        
        noteElement.appendChild(noteText);
        noteElement.appendChild(deleteBtn);
        notesContainer.appendChild(noteElement);
    });
    
    // Update stats based on state
    noteCount.textContent = notesState.length;
}

// --- 5. EVENT LISTENERS (User Actions) ---
addBtn.addEventListener('click', () => {
    addNote(noteInput.value);
    noteInput.value = ''; // Clear input field
});

noteInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addNote(noteInput.value);
        noteInput.value = '';
    }
});

// Initial render to ensure UI matches empty state on load
render();
