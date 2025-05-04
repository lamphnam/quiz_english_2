// Audio files setup - using local audio files with relative paths
const correctSound = new Audio('correct.mp3');
const incorrectSound = new Audio('incorrect.mp3');

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
        // Standard drag events for desktop
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);
        
        // Touch events for mobile
        card.addEventListener('touchstart', touchStart);
        card.addEventListener('touchend', touchEnd);
        card.addEventListener('click', cardClick);
    });

    dropZones.forEach(zone => {
        // Standard drag events for desktop
        zone.addEventListener('dragover', dragOver);
        zone.addEventListener('dragleave', dragLeave);
        zone.addEventListener('drop', drop);
        
        // Touch events for mobile
        zone.addEventListener('touchstart', zoneTouchStart);
        zone.addEventListener('touchend', zoneTouchEnd);
        zone.addEventListener('click', zoneClick);
    });
}

// Initialize touch events for mobile devices
function initMobileTouch() {
    // Make answer cards non-draggable on mobile to prevent browser's default drag behavior
    document.querySelectorAll('.answer-card').forEach(card => {
        card.setAttribute('draggable', 'false');
    });
    
    // Prevent default touch behaviors that might interfere
    document.addEventListener('touchstart', function(e) {
        if (e.target.classList.contains('answer-card') || e.target.classList.contains('drop-zone')) {
            // Don't prevent default here to allow scrolling
        }
    }, { passive: true });
    
    document.addEventListener('touchmove', function(e) {
        // Allow default touch move for scrolling
    }, { passive: true });
}

// Touch start handler for answer cards
function touchStart(e) {
    if (!isMobileDevice) return;
    // Just mark this card as being touched
    e.target.dataset.touched = 'true';
}

// Touch end handler for answer cards
function touchEnd(e) {
    if (!isMobileDevice) return;
    // Clear the touched state
    e.target.dataset.touched = 'false';
}

// Touch start handler for drop zones
function zoneTouchStart(e) {
    if (!isMobileDevice) return;
    // Just mark this zone as being touched
    e.target.dataset.zoneTouched = 'true';
}

// Touch end handler for drop zones
function zoneTouchEnd(e) {
    if (!isMobileDevice) return;
    
    // If we have a selected card and this zone was touched
    if (selectedCard && e.target.dataset.zoneTouched === 'true') {
        handleCardPlacement(selectedCard, e.target);
    }
    
    // Clear the touched state
    e.target.dataset.zoneTouched = 'false';
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
    if (selectedCard === e.currentTarget) {
        selectedCard = null;
        return;
    }
    
    // Select the clicked card
    selectedCard = e.currentTarget;
    selectedCard.classList.add('selected');
}

// Handle drop zone click for mobile devices
function zoneClick(e) {
    if (!isMobileDevice || !selectedCard) return;
    
    handleCardPlacement(selectedCard, e.currentTarget);
}

// Common function to handle card placement (for both drag-drop and touch)
function handleCardPlacement(card, zone) {
    // If the drop zone is already filled, do nothing
    if (zone.classList.contains('filled')) {
        return;
    }
    
    const droppedAnswer = card.dataset.answer;
    const correctAnswer = zone.dataset.answer;
    
    // Check if the answer is correct
    if (droppedAnswer === correctAnswer) {
        // Set the text content and add the correct class
        zone.textContent = droppedAnswer;
        zone.classList.add('filled', 'correct');
        zone.classList.add('correct-answer');
        
        // Hide the selected card
        card.style.display = 'none';
        
        // Play correct sound
        playSound(correctSound);
        
        // Deselect the card
        if (card.classList.contains('selected')) {
            card.classList.remove('selected');
        }
        selectedCard = null;
        
        // Check if all questions are completed
        checkCompletion();
    } else {
        // Set the text content temporarily and add the incorrect class
        zone.textContent = droppedAnswer;
        zone.classList.add('filled', 'incorrect');
        
        // Play incorrect sound
        playSound(incorrectSound);
        
        // Add shake animation
        zone.style.animation = 'shake 0.5s';
        
        // Deselect the card
        if (card.classList.contains('selected')) {
            card.classList.remove('selected');
        }
        selectedCard = null;
        
        // Reset after a short delay
        setTimeout(() => {
            zone.textContent = '';
            zone.classList.remove('filled', 'incorrect');
            zone.style.animation = '';
        }, 1000);
    }
}

// Safe sound playing function
function playSound(sound) {
    // Reset the sound to the beginning
    sound.currentTime = 0;
    
    // Create a promise to play the sound
    const playPromise = sound.play();
    
    // Handle potential play() promise rejection
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Audio play error:", error);
            // Auto-play might be blocked, we could show a play button here
        });
    }
}

// Drag start event handler
function dragStart(e) {
    if (isMobileDevice) return; // Skip on mobile
    
    draggedElement = e.target;
    e.target.classList.add('dragging');
    e.dataTransfer.setData('text/plain', e.target.dataset.answer);
}

// Drag end event handler
function dragEnd(e) {
    if (isMobileDevice) return; // Skip on mobile
    
    e.target.classList.remove('dragging');
}

// Drag over event handler
function dragOver(e) {
    if (isMobileDevice) return; // Skip on mobile
    
    e.preventDefault();
    e.target.classList.add('drag-over');
}

// Drag leave event handler
function dragLeave(e) {
    if (isMobileDevice) return; // Skip on mobile
    
    e.target.classList.remove('drag-over');
}

// Drop event handler
function drop(e) {
    if (isMobileDevice) return; // Skip on mobile
    
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
        playSound(correctSound);
        
        // Check if all questions are completed
        checkCompletion();
    } else {
        // Set the text content temporarily and add the incorrect class
        e.target.textContent = droppedAnswer;
        e.target.classList.add('filled', 'incorrect');
        
        // Play incorrect sound
        playSound(incorrectSound);
        
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