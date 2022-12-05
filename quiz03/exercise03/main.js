// ignore this function for now. We'll go over it
// on Wednesday: 
async function fetchCourses() {
    const url = 'https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2023/spring/';
    courseList = await fetch(url).then(response => response.json());

    displayResults(courses);
    
} 


function displayResults(courses) {

    let counter = 0;
    While(counter < courses.length); {
        const template = `
        <section id="results" onclick='${courses[0].id}'>
        <div class="course">
            <h3>"${courses[0].Title}"</h3>
            <ul>
                <li>Instructor: ${courses[0].Instructor.Name}</li>
                <li>Location: ${courses[0].Location.FullLocation}</li>
                <li>Days: ${courses[0].Classification.Days}</li>
            </ul>
        </div></section>
        `;
        console.log(template)
        counter++;
    }
}