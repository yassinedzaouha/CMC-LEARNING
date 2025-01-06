// Data for the dependent dropdowns
const optionsMap = {
    DIA: [
        { value: "tecspes", text: "Technician Specialized" }
    ],
    GC: [
        { value: "tecspes", text: "Technician Specialized" },
        { value: "tec", text: "Technician" },
        { value: "qualif", text: "Qualified" }
    ]
};

const subOptionsMap = {
    DIA: {
        tecspes: [
            { value: "dev", text: "Development digital" },
            { value: "infra", text: "Infrastructure digital" }
        ]
    },
    GC: {
        tecspes: [
            { value: "ge", text: "gestion" },
            { value: "co", text: "comerce" }
        ],
        tec: [
            { value: "hr", text: "Human Resources" },
            { value: "ops", text: "Operations" }
        ],
        qualif: [
            { value: "cloud", text: "Cloud Infrastructure" },
            { value: "network", text: "Networking" }
        ]
    }
};

const select1 = document.getElementById("choices-single-pole");
const select2 = document.getElementById("choices-single-level");
const select3 = document.getElementById("choices-single-filier");

// Event listener for select1
select1.addEventListener("change", function () {
    const selectedCategory = select1.value;
    // Clear previous options in select2 and select3
    select2.innerHTML = '<option value="">--Choose an option--</option>';
    select3.innerHTML = '<option value="">--Choose an option--</option>';
    select3.disabled = true;

    if (selectedCategory && optionsMap[selectedCategory]) {
        // Populate select2 with new options
        optionsMap[selectedCategory].forEach((option) => {
            const opt = document.createElement("option");
            opt.value = option.value;
            opt.textContent = option.text;
            select2.appendChild(opt);
        });

        select2.disabled = false;
    } else {
        // Disable select2 and select3 if no valid option is selected in select1
        select2.disabled = true;
        select3.disabled = true;
    }
});

// Event listener for select2
select2.addEventListener("change", function () {
    const selectedCategory = select1.value;
    const selectedSubCategory = select2.value;
    // Clear previous options in select3
    select3.innerHTML = '<option value="">--Choose an option--</option>';

    if (
        selectedCategory &&
        selectedSubCategory &&
        subOptionsMap[selectedCategory] &&
        subOptionsMap[selectedCategory][selectedSubCategory]
    ) {
        // Populate select3 with new options
        subOptionsMap[selectedCategory][selectedSubCategory].forEach((option) => {
            const opt = document.createElement("option");
            opt.value = option.value;
            opt.textContent = option.text;
            select3.appendChild(opt);
        });

        select3.disabled = false;
    } else {
        // Disable select3 if no valid option is selected in select2
        select3.disabled = true;
    }
});