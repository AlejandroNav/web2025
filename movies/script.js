// -------------------
// DOM references
// -------------------

const openDialogBtn = document.getElementById('open-dialog-btn');
const dialog = document.getElementById('item-dialog');
const closeDialogBtn = document.getElementById('close-dialog-btn');
const itemForm = document.getElementById('item-form');
const clearAllBtn = document.getElementById('clear-all-btn');
const watchlistContainer = document.getElementById('watchlist-container');

// -------------------
// WatchlistItem class
// -------------------

class WatchlistItem {
    constructor(title, type, genre, rating, status) {
        // your code here
    }

    cycleStatus() {
        // your code here
    }
}

// -------------------
// Watchlist class
// -------------------

class Watchlist {
    #items = [];

    addItem(title, type, genre, rating, status) {
        // your code here
    }

    removeItem(id) {
        // your code here
    }

    cycleItemStatus(id) {
        // your code here
    }

    clear() {
        // your code here
    }

    getItems() {
        // your code here
    }
}

// -------------------
// localStorage helpers
// -------------------

function saveToStorage() {
    // your code here
}

function loadFromStorage() {
    // your code here
}

// -------------------
// Display
// -------------------

function displayItems() {
    // your code here
}

// -------------------
// Event listeners
// -------------------

// Open dialog

// Close dialog

// Form submit

// Clear all

// Card buttons (delegated)

// -------------------
// Init
// -------------------

const watchlist = new Watchlist();
loadFromStorage();
displayItems();