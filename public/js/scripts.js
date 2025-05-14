function loadWorkouts() {
    fetch("http://localhost:3000/workouts/")
        .then(response => response.json())
        .then(data => {
            const workoutsList = document.getElementById("workoutsList");
            workoutsList.innerHTML = "";   // Clear the list before adding new workout
            data.forEach(workout => {
                const tr = document.createElement("tr");

                // Create first cell
                td = document.createElement("td");
                td.textContent = workout.workout_id;
                tr.appendChild(td);

                // Create second cell
                td = document.createElement("td");
                td.textContent = new Date(workout.workout_date).toLocaleDateString('sv-SE');
                tr.appendChild(td);

                // Create third cell
                td = document.createElement("td");
                td.textContent = workout.workout_name;
                tr.appendChild(td);

                // Create fourth cell
                td = document.createElement("td");
                td.textContent = workout.workout_length_total;
                tr.appendChild(td);

                // Create fifth cell
                td = document.createElement("td");
                td.textContent = workout.workout_comment;
                tr.appendChild(td);

                /*
                td = document.createElement("td");
                a = document.createElement("a");
                linkText = document.createTextNode("Lägg till träningssession");
                a.appendChild(linkText);

                a.setAttribute("href", "/traningspass/" + workout.workout_id);
                td.appendChild(a);
                tr.appendChild(td);
                */

                // Update
                td = document.createElement("td");
                a = document.createElement("a");
                linkText = document.createTextNode("Redigera");
                a.appendChild(linkText);
                a.setAttribute("href", "/traningspass/" + workout.workout_id);
                td.appendChild(a);
                tr.appendChild(td);

                // Delete
                td = document.createElement("td");
                a = document.createElement("a");
                linkText = document.createTextNode("Ta bort");
                a.appendChild(linkText);
                a.setAttribute("href", "/traningspass/" + workout.workout_id);
                td.appendChild(a);
                tr.appendChild(td);

                // Add the tr to the tbody
                workoutsList.appendChild(tr);

                // workoutsessions_length_total = workoutsessions_lenth_total + workoutsession_time;
                
            });
        });
}

function addWorkout(event){
    event.preventDefault();
    const workout_date = document.getElementById("workout_date").value;
    const workout_name = document.getElementById("workout_name").value;
    const workout_comment = document.getElementById("workout_comment").value;

    if(!workout_date || !workout_name ){
        alert("Workout Date and Name are required!");
        return; 
    }

    fetch("http://localhost:3000/workouts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // Should workout_total_length be added here?
        body: JSON.stringify({ workout_date, workout_name, workout_comment })
    })
        .then(response => response.json())
        .then(data => {
            loadWorkouts();        // Reload workouts after adding a new one
            document.getElementById("workout_date").value = "";
            document.getElementById("workout_name").value = "";
            document.getElementById("workout_comment").value = "";
        })  
}



function loadWorkoutSessions() {
    fetch("http://localhost:3000/workoutsessions/")
        .then(response => response.json())
        .then(data => {
            const workoutSessionsList = document.getElementById("workoutSessionsList");
            workoutSessionsList.innerHTML = "";   // Clear the list before adding new workout
            data.forEach(workoutsession => {
                const tr = document.createElement("tr");

                // Create first cell
                td = document.createElement("td");
                td.textContent = workoutsession.workoutsession_time;
                tr.appendChild(td);

                // Create second workouttype
                td = document.createElement("td");
                td.textContent = workoutsession.workouttype_id; 
                tr.appendChild(td);

                // Create cell for workout id
                td = document.createElement("td");
                td.textContent = workoutsession.workout_id; 
                tr.appendChild(td);

                // td = document.createElement("td");
                // td.textContent = 'Redigera';
                // tr.appendChild(td);

                // td = document.createElement("td");
                // td.textContent = 'Ta bort';
                // tr.appendChild(td);

                // Update
                td = document.createElement("td");
                a = document.createElement("a");
                linkText = document.createTextNode("Redigera");
                a.appendChild(linkText);
                a.setAttribute("href", "/workoutsession/" + workoutsession.workoutsession_id);
                td.appendChild(a);
                tr.appendChild(td);

                // Delete
                td = document.createElement("td");
                a = document.createElement("a");
                linkText = document.createTextNode("Ta bort");
                a.appendChild(linkText);
                a.setAttribute("href", "/workoutsession/" + workoutsession.workoutsession_id);
                td.appendChild(a);
                tr.appendChild(td);


                // Add the tr to the tbody
                workoutSessionsList.appendChild(tr);
                // Is it possible to run a function inside a function?
                // Add new fetch here - min / max function?
            });
        });
}

function addWorkoutSession(event){
    event.preventDefault();
    const workoutsession_time = document.getElementById("workoutsession_time").value;
    const workouttype_id = document.getElementById("workouttype_id").value;
    const workout_id = document.getElementById("workout_id").value;

    if(!workoutsession_time || !workouttype_id || !workout_id ){
        alert("Workoutsession Workouttype id and Workout id are required!");
        return; 
    }

    fetch("http://localhost:3000/workoutsessions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ workoutsession_time, workouttype_id, workout_id })
    })
        .then(response => response.json())
        .then(data => {
            loadWorkoutSessions();        // Reload workouts after adding a new one
            document.getElementById("workoutsession_time").value = "";
            document.getElementById("workouttype_id").value = "";
            document.getElementById("workouttype_id").value = "";
        })  
}


function loadWorkouttypes() {
    fetch("http://localhost:3000/workouttypes/")
        .then(response => response.json())
        .then(data => {
            const workouttypesList = document.getElementById("workouttypesList");
            workouttypesList.innerHTML = "";   // Clear the list before adding new users
            data.forEach(workouttype => {
                const tr = document.createElement("tr");

                // Create first cell - hidden
                // let td = document.createElement("td");
                // td.textContent = workouttype.workouttype_id;
                // tr.appendChild(td);
                
                // Create second cell
                td = document.createElement("td");
                td.textContent = workouttype.workouttype_name;
                tr.appendChild(td);

                // Update
                td = document.createElement("td");
                a = document.createElement("a");
                linkText = document.createTextNode("Redigera");
                a.appendChild(linkText);
                a.setAttribute("href", "/workouttype/" + workouttype.workout_id);
                td.appendChild(a);
                tr.appendChild(td);

                // Delete
                td = document.createElement("td");
                a = document.createElement("a");
                linkText = document.createTextNode("Ta bort");
                a.appendChild(linkText);
                a.setAttribute("href", "/workouttype/" + workouttype.workout_id);
                td.appendChild(a);
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
    // Load workouts
    loadWorkouts();

    // Add an event handler to the Add Workout button
    const addWorkoutBtn = document.getElementById("addWorkout");
    addWorkoutBtn.addEventListener("click", addWorkout);

    // Load workout seessions
    loadWorkoutSessions();

    // Add an event handler to the Add Workout Session button
    const addWorkoutSessionBtn = document.getElementById("addWorkoutSession");
    addWorkoutSessionBtn.addEventListener("click", addWorkoutSession);

    // Load workouttypes when the page is loaded
    loadWorkouttypes();

    // Add an event handler to the Add Workouttype button
    const addWorkouttypeBtn = document.getElementById("addWorkoutType");
    addWorkouttypeBtn.addEventListener("click", addWorkoutType);

});