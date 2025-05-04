// Audio files setup
const correctSound = new Audio('data:audio/wav;base64,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');
const incorrectSound = new Audio('data:audio/wav;base64,UklGRkQFAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAFAAAAf39/f39/f39/f39/3t3d3d3d3d3dnJycnJycnJyczMzMzP39/f3b29vb2tra2tqZmZmZmZmZmZnw8PDw////Wnp6enp6enp68PDw8CIiIiLLy8vLysrKygAAAADR0dHRwcHBwVpaWlo6OjpDOjMhAAAAACIiIiI6Ojk6OzpDSmJaWlrR0dHRAAAAAMvKy8vLy8vL8PDw8P///9vb29vb29vbu7u7u3p6enp6enp6f39/f39/f39/f39/f39/f39/f3+7u7u7u7u7u7vLy8vL///8//Lx8vLy8vLywsHBwSMiIiIjIiIiWVpZWmFhWFhiWlRTVFRTVFtcW1xiYnp68PDw8PDw8PAAAAAAREZTU0ZFRkYAAAAAAAAAAP///////////////8HBwcHBwcHBWlpaWrq6urpFRUVFwcG6un9/f38AAAAAAAAAAAAjIiMjIyMjI////wCbm5ub2tra2v///wDb29vb29vb29vb29vi4uLim5ubm39/f39/f39/f38jIyMjIiIiIiIiIiL///7/YWFhYWFhYWHCwsLCbW5tbW1tbW3CwsLCwsLCwltbW1vi4tPTKCgoKCgoKCg6Ojo6Pj4+PllZWVljY2lpWVljY2JhYVpbWltjY2NjwcHBwcHBwcG7u7u7ent7e3p6enp+f39/f39/f39/f39/f39/f3t7e3vw8PDwqaenp39/f3/a2tra////////////xcTExImIgn+BhISFhIeHh4h/gICAhIeJicXFxcX///////+jo6Ojo6Ojo1RUVFTBwcHBW1hZWVtbW1tPT09PpaWlpQ0NDQ2lrKWlqa2srKysrKz///////////////////8AAAAAAAAAAAAAAADd3eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXlmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZAAABAP//AAABAAEA///+/Pz8+vr39fb18/Pz8fHw7+/v7e3t7Ovr6+jo6Ojm5ubl4+Li4uDg396cnJucnJybnJyZmZlxbmtqaGdmZWRiYmJfX11bW1lZWFhYU1JQTk5OTEtLSEdGQ0FBQTo4NzU0MzIwLiwrKCcmJSQiIiEfHx0cGxsaGBgWFhYWFBMTEREQDg0NDQwKCQkIBQT/AAAAAAAAAAD//wAA//8AAP////////////////////////////////8=');

// Global variables
let draggedElement = null;
let selectedCard = null;
let isMobileDevice = false;

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if it's a mobile device
    checkMobileDevice();
    
    // Initialize game components
    initDragAndDrop();
    initMeaningCheckboxes();
    
    // Add event listeners for buttons
    document.getElementById('resetBtn').addEventListener('click', resetGame);
    document.getElementById('shuffleBtn').addEventListener('click', shuffleAnswers);
    
    // Initial shuffle
    shuffleAnswers();
});

// Check if the device is mobile
function checkMobileDevice() {
    isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     (window.matchMedia && window.matchMedia('(max-width: 768px)').matches);
    
    if (isMobileDevice) {
        document.getElementById('mobileInstructions').style.display = 'block';
        initMobileTouch();
    }
}

// Initialize drag and drop functionality
function initDragAndDrop() {
    const answerCards = document.querySelectorAll('.answer-card');
    const dropZones = document.querySelectorAll('.drop-zone');

    answerCards.forEach(card => {
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);
        
        // Add click event for mobile
        card.addEventListener('click', cardClick);
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', dragOver);
        zone.addEventListener('dragleave', dragLeave);
        zone.addEventListener('drop', drop);
        
        // Add click event for mobile
        zone.addEventListener('click', zoneClick);
    });
}

// Initialize touch events for mobile devices
function initMobileTouch() {
    // Prevent default touch behaviors that might interfere
    document.addEventListener('touchstart', function(e) {
        if (e.target.classList.contains('answer-card') || e.target.classList.contains('drop-zone')) {
            e.preventDefault();
        }
    }, { passive: false });
    
    document.addEventListener('touchmove', function(e) {
        if (e.target.classList.contains('answer-card') || e.target.classList.contains('drop-zone')) {
            e.preventDefault();
        }
    }, { passive: false });
}

// Initialize meaning checkboxes
function initMeaningCheckboxes() {
    const checkboxes = document.querySelectorAll('.meaning-checkbox');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const explanation = this.closest('.question').querySelector('.explanation');
            if (this.checked) {
                explanation.classList.add('show');
            } else {
                explanation.classList.remove('show');
            }
        });
    });
}

// Handle card click for mobile devices
function cardClick(e) {
    if (!isMobileDevice) return;
    
    // Deselect previously selected card if any
    if (selectedCard) {
        selectedCard.classList.remove('selected');
    }
    
    // If clicking the same card, deselect it
    if (selectedCard === e.target) {
        selectedCard = null;
        return;
    }
    
    // Select the clicked card
    selectedCard = e.target;
    selectedCard.classList.add('selected');
}

// Handle drop zone click for mobile devices
function zoneClick(e) {
    if (!isMobileDevice || !selectedCard) return;
    
    // If the drop zone is already filled, do nothing
    if (e.target.classList.contains('filled')) {
        return;
    }
    
    const droppedAnswer = selectedCard.dataset.answer;
    const correctAnswer = e.target.dataset.answer;
    
    // Check if the answer is correct
    if (droppedAnswer === correctAnswer) {
        // Set the text content and add the correct class
        e.target.textContent = droppedAnswer;
        e.target.classList.add('filled', 'correct');
        e.target.classList.add('correct-answer');
        
        // Hide the selected card
        selectedCard.style.display = 'none';
        
        // Play correct sound
        correctSound.play();
        
        // Deselect the card
        selectedCard.classList.remove('selected');
        selectedCard = null;
        
        // Check if all questions are completed
        checkCompletion();
    } else {
        // Set the text content temporarily and add the incorrect class
        e.target.textContent = droppedAnswer;
        e.target.classList.add('filled', 'incorrect');
        
        // Play incorrect sound
        incorrectSound.play();
        
        // Add shake animation
        e.target.style.animation = 'shake 0.5s';
        
        // Deselect the card
        selectedCard.classList.remove('selected');
        selectedCard = null;
        
        // Reset after a short delay
        setTimeout(() => {
            e.target.textContent = '';
            e.target.classList.remove('filled', 'incorrect');
            e.target.style.animation = '';
        }, 1000);
    }
}

// Drag start event handler
function dragStart(e) {
    draggedElement = e.target;
    e.target.classList.add('dragging');
    e.dataTransfer.setData('text/plain', e.target.dataset.answer);
}

// Drag end event handler
function dragEnd(e) {
    e.target.classList.remove('dragging');
}

// Drag over event handler
function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

// Drag leave event handler
function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

// Drop event handler
function drop(e) {
    e.preventDefault();
    e.target.classList.remove('drag-over');
    
    // Get the dropped answer and the correct answer
    const droppedAnswer = e.dataTransfer.getData('text/plain');
    const correctAnswer = e.target.dataset.answer;
    
    // Check if the drop zone is already filled
    if (e.target.classList.contains('filled')) {
        return;
    }
    
    // Check if the answer is correct
    if (droppedAnswer === correctAnswer) {
        // Set the text content and add the correct class
        e.target.textContent = droppedAnswer;
        e.target.classList.add('filled', 'correct');
        e.target.classList.add('correct-answer');
        
        // Hide the dragged element
        draggedElement.style.display = 'none';
        
        // Play correct sound
        correctSound.play();
        
        // Check if all questions are completed
        checkCompletion();
    } else {
        // Set the text content temporarily and add the incorrect class
        e.target.textContent = droppedAnswer;
        e.target.classList.add('filled', 'incorrect');
        
        // Play incorrect sound
        incorrectSound.play();
        
        // Add shake animation
        e.target.style.animation = 'shake 0.5s';
        
        // Reset after a short delay
        setTimeout(() => {
            e.target.textContent = '';
            e.target.classList.remove('filled', 'incorrect');
            e.target.style.animation = '';
        }, 1000);
    }
}

// Shuffle the answer cards
function shuffleAnswers() {
    const answersPool = document.getElementById('answersPool');
    const answerCards = Array.from(answersPool.querySelectorAll('.answer-card'));
    
    // Only shuffle visible cards (cards that haven't been used yet)
    const visibleCards = answerCards.filter(card => card.style.display !== 'none');
    
    // Apply shuffling animation to the answers pool
    answersPool.classList.add('shuffling');
    
    // Remove the animation class after it completes
    setTimeout(() => {
        answersPool.classList.remove('shuffling');
    }, 500);
    
    // Fisher-Yates shuffle algorithm
    for (let i = visibleCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements
        answersPool.insertBefore(visibleCards[j], visibleCards[i]);
    }
}

// Check if all questions are completed
function checkCompletion() {
    const allDropZones = document.querySelectorAll('.drop-zone');
    const filledCorrectZones = document.querySelectorAll('.drop-zone.filled.correct');
    
    if (allDropZones.length === filledCorrectZones.length) {
        document.getElementById('message').textContent = '🎉 Chúc mừng! Bạn đã hoàn thành!';
        document.getElementById('message').className = 'message correct';
        
        // Show all explanations
        const checkboxes = document.querySelectorAll('.meaning-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
            const explanation = checkbox.closest('.question').querySelector('.explanation');
            explanation.classList.add('show');
        });
    }
}

// Reset the game
function resetGame() {
    const answerCards = document.querySelectorAll('.answer-card');
    const dropZones = document.querySelectorAll('.drop-zone');
    const explanations = document.querySelectorAll('.explanation');
    const checkboxes = document.querySelectorAll('.meaning-checkbox');
    
    // Reset answer cards
    answerCards.forEach(card => {
        card.style.display = 'block';
        card.classList.remove('selected');
    });
    
    // Reset drop zones
    dropZones.forEach(zone => {
        zone.textContent = '';
        zone.classList.remove('filled', 'correct', 'incorrect');
        zone.style.animation = '';
    });
    
    // Reset explanations and checkboxes
    explanations.forEach(exp => {
        exp.classList.remove('show');
    });
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset selected card
    selectedCard = null;
    
    // Reset completion message
    document.getElementById('message').textContent = '';
    document.getElementById('message').className = 'message';
    
    // Shuffle the answers after reset for a new game experience
    shuffleAnswers();
}

// Handle window resize to update mobile detection
window.addEventListener('resize', function() {
    checkMobileDevice();
});