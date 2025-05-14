
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

function addWorkoutType(event){
    event.preventDefault();
    const workouttype_name = document.getElementById("workouttype_name").value;

    if(!workouttype_name ){
        alert("Workouttype Name are required!");
        return; 
    }


    fetch("http://localhost:3000/workouttypes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ workouttype_name })
    })
        .then(response => response.json())
        .then(data => {
            loadWorkouttypes();        // Reload workouts after adding a new one
            document.getElementById("workouttype_name").value = "";
        })  
}

document.addEventListener("DOMContentLoaded", () => {
    // Load workouttypes when the page is loaded
    loadWorkouttypes();

    // Add an event handler to the Add Workouttype button
    const addWorkouttypeBtn = document.getElementById("addWorkoutType");
    addWorkouttypeBtn.addEventListener("click", addWorkoutType);

});