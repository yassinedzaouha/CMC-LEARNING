// Data for poles, fields, levels, and years
const data = {
    DIA: {
        nivo: ["technicien spécialisé"],
        field: ["Development Digital", "Infrastructure Digital"],
        years: ["1er année" , "2eme année"]
    },
    GC: {
        nivo: ["technicien spécialisé" , "technicien"],
        field: ["Business Management", "Commerce"],
        years: ["1er année" , "2eme année"]
    },
    BTP: {
        nivo: ["Construction", "Public Works"],
        field: ["Level 1", "Level 2"],
        years: ["1er année" , "2eme année"]
    },
    THR: {
        nivo: ["Tourism", "Hospitality", "Restaurant Management"],
        field: ["Basic", "Professional"],
        years: ["1er année" , "2eme année"]
    }
};

// DOM elements
const nivoelect = document.getElementById("choices-single-field");
const fieldelect = document.getElementById("choices-single-level");
const yearSelect = document.getElementById("choices-single-nivo");

// Get the pole from the URL (e.g., form.html?pole=DIA)
const urlParams = new URLSearchParams(window.location.search);
const selectedPole = urlParams.get('pole');

// Function to populate a dropdown
function populateDropdown(dropdown, options, placeholder) {
    dropdown.innerHTML = `<option value="" disabled selected>${placeholder}</option>`;
    if (options && options.length > 0) {
        options.forEach(option => {
            const opt = document.createElement("option");
            opt.value = option;
            opt.textContent = option;
            dropdown.appendChild(opt);
        });
        dropdown.disabled = false; // Enable the dropdown
    } else {
        dropdown.disabled = true; // Disable dropdown if no options available
    }
}

// Initialize the dropdowns on page load
function initializeDropdowns() {
    if (selectedPole && data[selectedPole]) {
        populateDropdown(nivoelect, data[selectedPole].nivo, "Select your field");
        fieldelect.innerHTML = `<option value="" disabled selected>Select a field first</option>`;
        yearSelect.innerHTML = `<option value="" disabled selected>Select a level first</option>`;
        fieldelect.disabled = true;
        yearSelect.disabled = true;
    } else {
        nivoelect.innerHTML = `<option value="" disabled selected>No pole selected</option>`;
        fieldelect.innerHTML = `<option value="" disabled selected>No pole selected</option>`;
        yearSelect.innerHTML = `<option value="" disabled selected>No pole selected</option>`;
        nivoelect.disabled = true;
        fieldelect.disabled = true;
        yearSelect.disabled = true;
    }
}

// Handle field selection
nivoelect.addEventListener("change", () => {
    const selectedField = nivoelect.value;
    if (selectedField && data[selectedPole]) {
        populateDropdown(fieldelect, data[selectedPole].field, "Select your level");
        yearSelect.innerHTML = `<option value="" disabled selected>Select a level first</option>`;
        yearSelect.disabled = true;
    }
});

// Handle level selection
fieldelect.addEventListener("change", () => {
    const selectedLevel = fieldelect.value;
    if (selectedLevel && data[selectedPole]) {
        populateDropdown(yearSelect, data[selectedPole].years, "Select your year");
    }
});

// Initialize the dropdowns
initializeDropdowns();