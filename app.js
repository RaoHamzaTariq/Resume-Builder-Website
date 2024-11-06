"use strict";
// TypeScript code to manage the dynamic form and generate resume
// Template selection (unchanged)
const template1Button = document.getElementById('template1');
const template2Button = document.getElementById('template2');
const template3Button = document.getElementById('template3');
const template4Button = document.getElementById('template4');
const template5Button = document.getElementById('template5');
const template6Button = document.getElementById('template6');
const template7Button = document.getElementById('template7');
const inputFields = document.getElementById('inputFields');
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
const addEducationButton = document.getElementById('addEducation');
const educationFields = document.getElementById('educationFields');
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
const addExperienceButton = document.getElementById('addExperience');
const experienceFields = document.getElementById('experienceFields');
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
const addSkillButton = document.getElementById('addSkill');
const skillsFields = document.getElementById('skillsFields');
addSkillButton.addEventListener('click', () => {
    const newSkill = document.createElement('div');
    newSkill.classList.add('skills-entry');
    newSkill.innerHTML = `
        <input type="text" name="skills[]" placeholder="Skill">
        <button type="button" class="removeField">Remove Skill</button>
    `;
    skillsFields.appendChild(newSkill);
});
const addLanguageButton = document.getElementById('addLanguage');
const languageFields = document.getElementById('languageFields');
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
    const target = event.target;
    if (target && target.classList.contains('removeField')) {
        const parent = target.closest('div');
        parent === null || parent === void 0 ? void 0 : parent.remove();
    }
});
// Function to generate and display the resume after form submission
const resumeForm = document.getElementById('resumeForm');
const resumeDisplaySection = document.getElementById('resumeDisplay');
resumeForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission to handle it manually
    // Collect the data from the form
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const aboutUs = document.getElementById('aboutUs').value;
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
         <div class="resume">
        <div class="left">
            <img src="E:\Resume-Builder-Website\Images\Rao Hamza Tariq.png" alt="">
            <div class="sub-section">
                <h2>CONTACT ME</h2>
                <ul>
                    <p>${email}</p>
                    <p>${address}</p>
                    <p>${phone}</p>
                </ul>
            </div>
            <div class="sub-section">
                <h2>EDUCATION</h2>
                    ${degrees.map((degree, index) => `
                        <div>
                        <h3>${degree}</h3>
                        <h4>${institutes[index]}</h4>
                        <p>${durations[index]}</p>
                    </div>
                    `)}
                    
                </div>
            <div class="sub-section">
                <h2>SKILLS</h2>
                <ul>
${skills.map(skill => `<li>${skill}</li>`)}
                </ul>
            </div>
        </div>
        <div class="right">
            <div class="profile-name">
                <h1>Rao Hamza Tariq</h1>
                <h3>Data Analyst</h3>
            </div>
            <div class="sub-section">
                <h2>WORK EXPERIENCE</h2>
                <div class="job">
                    <div>
                        <p>Data Analyst</p>
                        <h4>2023 - 2024</h4>
                    </div>
                    <h4>Xeven Soluions</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolores culpa a laborum doloribus amet nostrum modi quasi animi voluptates? Excepturi quasi provident accusamus alias quisquam voluptate laborum ratione sequi.</p>
                </div>
                <div class="job">
                    <div>
                        <p>Data Analyst</p>
                        <h4>2023 - 2024</h4>
                    </div>
                    <h4>Xeven Soluions</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolores culpa a laborum doloribus amet nostrum modi quasi animi voluptates? Excepturi quasi provident accusamus alias quisquam voluptate laborum ratione sequi.</p>
                </div>
                <div class="job">
                    <div>
                        <p>Data Analyst</p>
                        <h4>2023 - 2024</h4>
                    </div>
                    <h4>Xeven Soluions</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolores culpa a laborum doloribus amet nostrum modi quasi animi voluptates? Excepturi quasi provident accusamus alias quisquam voluptate laborum ratione sequi.</p>
                </div>

            </div>
            <div class="sub-section">
                <h2>ABOUT ME</h2>
                <p>I am an data analyst, junior data scientist and front-end developer with a strong track record of creating impactful data analytics dashboards and projects. I am currently expanding my expertise in data science and machine learning, taking on diverse projects to solve complex problems using cutting-edge techniques and methodologies. My passion lies in deriving actionable insights from data and translating them into compelling visualizations and content.</p>
            </div>
            <div class="sub-section">
                <h2>LANGUAGES</h2>
                <ul>
                    <li>English</li>
                    <li>Urdu</li>
                    <li>French</li>
                </ul>
            </div>
        </div>
    </div>
    `;
    // Display the resume content in the resume display section
    resumeDisplaySection.innerHTML = resumeContent;
    resumeDisplaySection.style.display = 'block';
});
