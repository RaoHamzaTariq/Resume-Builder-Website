// TypeScript code to manage the dynamic form and generate resume

// Template selection (unchanged)
const template1Button = document.getElementById('template1') as HTMLButtonElement;
const template2Button = document.getElementById('template2') as HTMLButtonElement;
const template3Button = document.getElementById('template3') as HTMLButtonElement;
const template4Button = document.getElementById('template4') as HTMLButtonElement;
const template5Button = document.getElementById('template5') as HTMLButtonElement;
const template6Button = document.getElementById('template6') as HTMLButtonElement;
const template7Button = document.getElementById('template7') as HTMLButtonElement;
const inputFields = document.getElementById('inputFields') as HTMLDivElement;

template1Button.addEventListener('click', () => {
    inputFields.style.display = 'block';
});
template2Button.addEventListener('click', () => {
    inputFields.style.display = 'block';
});
template3Button.addEventListener('click', () => {
    inputFields.style.display = 'block';
});
template4Button.addEventListener('click', () => {
    inputFields.style.display = 'block';
});
template5Button.addEventListener('click', () => {
    inputFields.style.display = 'block';
});
template6Button.addEventListener('click', () => {
    inputFields.style.display = 'block';
});
template7Button.addEventListener('click', () => {
    inputFields.style.display = 'block';
});

// Add Education, Experience, Skill, and Language fields (unchanged)
const addEducationButton = document.getElementById('addEducation') as HTMLButtonElement;
const educationFields = document.getElementById('educationFields') as HTMLDivElement;

addEducationButton.addEventListener('click', () => {
    const newEducation = document.createElement('div');
    newEducation.classList.add('education-entry');
    newEducation.innerHTML = `
        <input type="text" name="degree[]" placeholder="Degree">
        <input type="text" name="institute[]" placeholder="Institute">
        <input type="text" name="duration[]" placeholder="Duration">
        <button type="button" class="removeField">Remove Education</button>
    `;
    educationFields.appendChild(newEducation);
});

const addExperienceButton = document.getElementById('addExperience') as HTMLButtonElement;
const experienceFields = document.getElementById('experienceFields') as HTMLDivElement;

addExperienceButton.addEventListener('click', () => {
    const newExperience = document.createElement('div');
    newExperience.classList.add('experience-entry');
    newExperience.innerHTML = `
        <input type="text" name="role[]" placeholder="Role">
        <input type="text" name="company[]" placeholder="Company">
        <input type="text" name="durationExperience[]" placeholder="Duration">
        <input type="text" name="task[]" placeholder="Tasks">
        <button type="button" class="removeField">Remove Experience</button>
    `;
    experienceFields.appendChild(newExperience);
});

const addSkillButton = document.getElementById('addSkill') as HTMLButtonElement;
const skillsFields = document.getElementById('skillsFields') as HTMLDivElement;

addSkillButton.addEventListener('click', () => {
    const newSkill = document.createElement('div');
    newSkill.classList.add('skills-entry');
    newSkill.innerHTML = `
        <input type="text" name="skills[]" placeholder="Skill">
        <button type="button" class="removeField">Remove Skill</button>
    `;
    skillsFields.appendChild(newSkill);
});

const addLanguageButton = document.getElementById('addLanguage') as HTMLButtonElement;
const languageFields = document.getElementById('languageFields') as HTMLDivElement;

addLanguageButton.addEventListener('click', () => {
    const newLanguage = document.createElement('div');
    newLanguage.classList.add('language-entry');
    newLanguage.innerHTML = `
        <input type="text" name="language[]" placeholder="Language">
        <button type="button" class="removeField">Remove Language</button>
    `;
    languageFields.appendChild(newLanguage);
});

// Function to remove a field (education, experience, skills, or language)
document.body.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target && target.classList.contains('removeField')) {
        const parent = target.closest('div');
        parent?.remove();
    }
});

// Function to generate and display the resume after form submission
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeDisplaySection = document.getElementById('resumeDisplay') as HTMLDivElement;

resumeForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission to handle it manually

    // Collect the data from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const aboutUs = (document.getElementById('aboutUs') as HTMLTextAreaElement).value;

    // Collect dynamic fields (Education, Experience, Skills, Languages)
    const degrees = Array.from(document.querySelectorAll('input[name="degree[]"]')).map(input => input.value);
    const institutes = Array.from(document.querySelectorAll('input[name="institute[]"]')).map(input => input.value);
    const durations = Array.from(document.querySelectorAll('input[name="duration[]"]')).map(input => input.value);

    const roles = Array.from(document.querySelectorAll('input[name="role[]"]')).map(input => input.value);
    const companies = Array.from(document.querySelectorAll('input[name="company[]"]')).map(input => input.value);
    const experienceDurations = Array.from(document.querySelectorAll('input[name="durationExperience[]"]')).map(input => input.value);
    const tasks = Array.from(document.querySelectorAll('input[name="task[]"]')).map(input => input.value);

    const skills = Array.from(document.querySelectorAll('input[name="skills[]"]')).map(input => input.value);
    const languages = Array.from(document.querySelectorAll('input[name="language[]"]')).map(input => input.value);

    // Generate the resume content
    let resumeContent = `
        <h1>${name}</h1>
        <p>${phone} | ${email} | ${address}</p>
        <p><strong>About Me:</strong> ${aboutUs}</p>
        
        <h2>Education</h2>
        <ul>
            ${degrees.map((degree, index) => `
                <li><strong>${degree}</strong> at ${institutes[index]} (${durations[index]})</li>
            `).join('')}
        </ul>
        
        <h2>Experience</h2>
        <ul>
            ${roles.map((role, index) => `
                <li><strong>${role}</strong> at ${companies[index]} (${experienceDurations[index]}) - ${tasks[index]}</li>
            `).join('')}
        </ul>
        
        <h2>Skills</h2>
        <ul>
            ${skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
        
        <h2>Languages</h2>
        <ul>
            ${languages.map(language => `<li>${language}</li>`).join('')}
        </ul>
    `;

    // Display the resume content in the resume display section
    resumeDisplaySection.innerHTML = resumeContent;
    resumeDisplaySection.style.display = 'block';
});
