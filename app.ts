// TypeScript code to manage the dynamic form and generate resume

let profilePicDataURL: string = '';
let activeTemplate :string="";
let resumeDownload: string = ""


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
    activeTemplate = "template1";
    resumeDownload = "resume1";
});
template2Button.addEventListener('click', () => {
    inputFields.style.display = 'block';
    activeTemplate = "template2";
    resumeDownload = "resume";
});
template3Button.addEventListener('click', () => {
    inputFields.style.display = 'block';
    activeTemplate = "template3";
    resumeDownload = "resume3";
});
template4Button.addEventListener('click', () => {
    inputFields.style.display = 'block';
    activeTemplate = "template4";
    resumeDownload = "resume4";
});
template5Button.addEventListener('click', () => {
    inputFields.style.display = 'block';
    activeTemplate = "template5";
    resumeDownload = "resume5";
});
template6Button.addEventListener('click', () => {
    inputFields.style.display = 'block';
    activeTemplate = "template6";
    resumeDownload = "resume6";
});
template7Button.addEventListener('click', () => {
    inputFields.style.display = 'block';
    activeTemplate = "template7";
    resumeDownload = "resume7";
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
    const Mainrole = (document.getElementById('mainRole') as HTMLInputElement).value;

    // Collect dynamic fields (Education, Experience, Skills, Languages)
    const degrees = Array.from(document.querySelectorAll('input[name="degree[]"]')).map(input => (input as HTMLInputElement).value);
const institutes = Array.from(document.querySelectorAll('input[name="institute[]"]')).map(input => (input as HTMLInputElement).value);
const durations = Array.from(document.querySelectorAll('input[name="duration[]"]')).map(input => (input as HTMLInputElement).value);

const roles = Array.from(document.querySelectorAll('input[name="role[]"]')).map(input => (input as HTMLInputElement).value);
const companies = Array.from(document.querySelectorAll('input[name="company[]"]')).map(input => (input as HTMLInputElement).value);
const experienceDurations = Array.from(document.querySelectorAll('input[name="durationExperience[]"]')).map(input => (input as HTMLInputElement).value);
const tasks = Array.from(document.querySelectorAll('input[name="task[]"]')).map(input => (input as HTMLInputElement).value);

const skills = Array.from(document.querySelectorAll('input[name="skills[]"]')).map(input => (input as HTMLInputElement).value);
const languages = Array.from(document.querySelectorAll('input[name="language[]"]')).map(input => (input as HTMLInputElement).value);

const profilePic = profilePicDataURL;

     let resumeContent = ''
    // Generate the resume content
    switch (activeTemplate) {
        case 'template1':
            resumeContent = `<div class="resume1">
        <div class="left1">
        ${profilePic ? `<img src="${profilePic}" alt="Profile Picture" />` :
        ''}          
          <div class="profile-name1" >
                <h1>${name}</h1>
                <h3 >${Mainrole}</h3>
            </div>
            <div class="contactus1">
                    <p>${email}</p>
                    <p>${address}</p>
                    <p>${phone}</p>
            </div>
            <div class="sub-section1">
                <h2>RELEVENT SKILLS</h2>
                <ul>
                ${skills.map(skill=> 
                    `<li>${skill}</li>`
                ).join('')}
                </ul>
            </div>
            <div class="sub-section1 ">
                <h2>ABOUT US</h2>
                <p>${aboutUs}</p>
            </div>
            <div class="sub-section1">
                <h2>LANGUAGES</h2>
                <ul>
                  ${languages.map(language=> 
                    `<li>${language}</li>`
                ).join('')}
                </ul>
            </div>
        </div>
        <div class="right1">
            <div class="sub-section1">
                <h2>WORK EXPERIENCE</h2>
                ${roles.map((role,index)=> 
                    `<div class="subsubsection1">
                    <p style="font-weight: 800;">${role}</p>                    
                    <p>${companies[index]}</p>
                    <p>${experienceDurations[index]}</p>
                    <p>${tasks[index]}</p>
                </div>`
                ).join('')}

                
                
                
        </div>
        <div class="sub-section1">
            <h2>EDUCATION HISTORY</h2>
            ${degrees.map((degree,index)=> 
                    `<div class="subsubsection1">
                    <p style="font-weight: 800;">${degree}</p>                    
                    <p>${institutes[index]}</p>
                    <p>${durations[index]}</p>
                    
                </div>`
                ).join('')}
            
            
    </div>
    </div>`
            break;

        case 'template2':
            resumeContent = `
    <div class="resume">
        <div class="left">
            ${profilePic ? `<img src="${profilePic}" alt="Profile Picture" />` :
        ''}
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
                `).join('')}  
            </div>
            <div class="sub-section">
                <h2>SKILLS</h2>
                <ul>
                    ${skills.map(skill => `<li>${skill}</li>`).join('')}  <!-- Use join('') here as well -->
                </ul>
            </div>
        </div>
        <div class="right">
            <div class="profile-name">
                <h1>${name}</h1>
                <h3>${Mainrole}</h3>
            </div>
            <div class="sub-section">
                <h2>WORK EXPERIENCE</h2>
                ${roles.map((role: string, index: number) => `
                    <div class="job">
                        <div>
                            <p>${role}</p>
                            <h4>${experienceDurations[index]}</h4>
                        </div>
                        <h4>${companies[index]}</h4>
                        <p>${tasks[index]}</p>
                    </div>
                `).join('')}  <!-- Ensure this is joined too -->
            </div>
            <div class="sub-section">
                <h2>ABOUT ME</h2>
                <p>${aboutUs}</p>
            </div>
            <div class="sub-section">
                <h2>LANGUAGES</h2>
                <ul>
                    ${languages.map((language: string) => `<li>${language}</li>`).join('')}  <!-- Join the languages list -->
                </ul>
            </div>
        </div>
    </div>
`;
            break

        case 'template3':
            resumeContent = `<div>template3</div>`
            break

        case 'template4':
            resumeContent = `<div>template4</div>`
            break
        
        case 'template5':
                resumeContent = `<div>template5</div>`
                break

        case 'template6':
                    resumeContent = `<div>template6</div>`
                    break

        case 'template7':
                        resumeContent = `<div>template7</div>`
                        break
        // Add other cases for template3, template4, etc.
        
        default:
            resumeContent = '<p>Please select a template.</p>';
    }


    // Display the resume content in the resume display section
    resumeDisplaySection.innerHTML = resumeContent;
    resumeDisplaySection.style.display = 'flex';
});

// Profile picture upload event
(document.getElementById('profilePic') as HTMLInputElement).addEventListener('change', (e: Event) => {
    const input = e.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;
    if (file) {
        const reader = new FileReader();
        reader.onload = (event: ProgressEvent<FileReader>) => {
            profilePicDataURL = event.target?.result as string;
        };
        reader.readAsDataURL(file);
    }
});

// Download PDF button event
(document.getElementById('download-pdf-btn') as HTMLButtonElement).addEventListener('click', () => {
    // Check if resume content is available
    const resumeContent = document.getElementById("resumeDisplay") as HTMLDivElement;
    if (!resumeContent || resumeContent.innerHTML.trim() === "") {
        alert("Please generate the resume first.");
        return;
    }

    // Options for html2pdf
    const options = {
        margin: 0.5,
        filename: 'Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    // Generate and save the PDF
    html2pdf().set(options).from(resumeContent).save();
});
