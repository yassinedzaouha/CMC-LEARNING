// Data for the dependent dropdowns
const optionsMap = {
    DIA: [
        { value: "dev", text: "develepment digital" },
        { value: "id", text: "infrastractur digital" },
    ],
    GC: [
        { value: "ge", text: "gestion des intropris" },
        { value: "com", text: "comerce et marcoting" },
    ],
    };

    const select1 = document.getElementById("choices-single-pole");
    const select2 = document.getElementById("choices-single-filier");

    // Event listener for select1
    select1.addEventListener("change", function () {
    const selectedCategory = select1.value;
    // Clear previous options in select2
    select2.innerHTML = '<option value="">--Choose an option--</option>';

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
        // Disable select2 if no valid option is selected in select1
        select2.disabled = true;
    }
    });