
function loadWorkouttypes() {
    fetch("http://localhost:3000/workouttypes/")
        .then(response => response.json())
        .then(data => {
            const workouttypesList = document.getElementById("workouttypesList");
            workouttypesList.innerHTML = "";   // Clear the list before adding new users
            data.forEach(workouttype => {
                const tr = document.createElement("tr");

                // Create first cell
                let td = document.createElement("td");
                td.textContent = workouttype.workouttype_id;
                tr.appendChild(td);
                
                // Create second cell
                td = document.createElement("td");
                td.textContent = workouttype.workouttype_name;
                tr.appendChild(td);
                
                // Add the tr to the tbody
                workouttypesList.appendChild(tr);

            });
        });
}

document.addEventListener("DOMContentLoaded", () => {
    // Load users when the page is loaded
    loadWorkouttypes();

});