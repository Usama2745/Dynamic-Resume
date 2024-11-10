var resume = {
    name: '',
    email: '',
    phone: '',
    experience: [],
    skills: [],
};
var experienceSection = document.getElementById('experience-section');
var skillsSection = document.getElementById('skills-section');
var output = document.getElementById('output');
document.getElementById('add-experience').addEventListener('click', function () {
    var experienceDiv = document.createElement('div');
    experienceDiv.innerHTML = "\n        <input type=\"text\" placeholder=\"Job Title\" />\n        <input type=\"text\" placeholder=\"Company\" />\n        <input type=\"date\" placeholder=\"Start Date\" />\n        <input type=\"date\" placeholder=\"End Date\" />\n        <textarea placeholder=\"Description\"></textarea>\n    ";
    experienceSection.appendChild(experienceDiv);
});
document.getElementById('add-skill').addEventListener('click', function () {
    var skillDiv = document.createElement('div');
    skillDiv.innerHTML = "<input type=\"text\" placeholder=\"Skill Name\" />";
    skillsSection.appendChild(skillDiv);
});
document.getElementById('generate-resume').addEventListener('click', function () {
    resume.name = document.getElementById('name').value;
    resume.email = document.getElementById('email').value;
    resume.phone = document.getElementById('phone').value;
    var experienceInputs = experienceSection.querySelectorAll('div');
    resume.experience = Array.from(experienceInputs).map(function (expDiv) {
        var inputs = expDiv.querySelectorAll('input, textarea');
        return {
            jobTitle: inputs[0].value,
            company: inputs[1].value,
            startDate: inputs[2].value,
            endDate: inputs[3].value,
            description: inputs[4].value,
        };
    });
    var skillInputs = skillsSection.querySelectorAll('input');
    resume.skills = Array.from(skillInputs).map(function (input) { return ({ name: input.value }); });
    output.textContent = JSON.stringify(resume, null, 2);
});
