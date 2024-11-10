let experienceCount = 0;
let educationCount = 0;

document.getElementById('addExperience')?.addEventListener('click', () => {
    experienceCount++;
    const experienceContainer = document.getElementById('experienceContainer');
    if (experienceContainer) {
        const experienceDiv = document.createElement('div');
        experienceDiv.className = 'experience';
        experienceDiv.innerHTML = `
            <label for="jobTitle${experienceCount}">Job Title</label>
            <input type="text" id="jobTitle${experienceCount}" required>
            <label for="jobCompany${experienceCount}">Company</label>
            <input type="text" id="jobCompany${experienceCount}" required>
            <label for="jobDescription${experienceCount}">Description</label>
            <textarea id="jobDescription${experienceCount}" required></textarea>
            <button type="button" onclick="removeSection(this)">Remove</button>
        `;
        experienceContainer.appendChild(experienceDiv);
    }
});

document.getElementById('addEducation')?.addEventListener('click', () => {
    educationCount++;
    const educationContainer = document.getElementById('educationContainer');
    if (educationContainer) {
        const educationDiv = document.createElement('div');
        educationDiv.className = 'education';
        educationDiv.innerHTML = `
            <label for="degree${educationCount}">Degree</label>
            <input type="text" id="degree${educationCount}" required>
            <label for="school${educationCount}">School</label>
            <input type="text" id="school${educationCount}" required>
            <label for="eduDescription${educationCount}">Description</label>
            <textarea id="eduDescription${educationCount}" required></textarea>
            <button type="button" onclick="removeSection(this)">Remove</button>
        `;
        educationContainer.appendChild(educationDiv);
    }
});

function removeSection(button: HTMLButtonElement) {
    button.parentElement?.remove();
}

document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;

    const experienceArray: string[] = [];
    for (let i = 1; i <= experienceCount; i++) {
        const jobTitle = (document.getElementById(`jobTitle${i}`) as HTMLInputElement)?.value;
        const jobCompany = (document.getElementById(`jobCompany${i}`) as HTMLInputElement)?.value;
        const jobDescription = (document.getElementById(`jobDescription${i}`) as HTMLTextAreaElement)?.value;
        experienceArray.push(`${jobTitle} at ${jobCompany}: ${jobDescription}`);
    }

    const educationArray: string[] = [];
    for (let i = 1; i <= educationCount; i++) {
        const degree = (document.getElementById(`degree${i}`) as HTMLInputElement)?.value;
        const school = (document.getElementById(`school${i}`) as HTMLInputElement)?.value;
        const eduDescription = (document.getElementById(`eduDescription${i}`) as HTMLTextAreaElement)?.value;
        educationArray.push(`${degree} from ${school}: ${eduDescription}`);
    }

    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = `
            <h2>${name}</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <h3>Experience</h3>
            <p>${experienceArray.join('<br>')}</p>
            <h3>Education</h3>
            <p>${educationArray.join('<br>')}</p>
        `;
    }
});
