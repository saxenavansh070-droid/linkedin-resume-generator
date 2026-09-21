function generateResume() {

    // Personal information
    document.getElementById("r-name").innerText =
        getValue("name", "Your Name");

    document.getElementById("r-title").innerText =
        getValue("title", "Professional Title");

    document.getElementById("r-email").innerText =
        getValue("email", "email@example.com");

    document.getElementById("r-phone").innerText =
        getValue("phone", "Phone");

    document.getElementById("r-location").innerText =
        getValue("location", "Location");


    // LinkedIn
    let linkedin = document.getElementById("linkedin").value;

    if (linkedin.trim() !== "") {

        document.getElementById("r-linkedin").href = linkedin;

        document.getElementById("r-linkedin").innerText =
            "LinkedIn Profile";

    }


    // Summary
    document.getElementById("r-summary").innerText =
        getValue("summary", "Professional summary");


    // Education
    document.getElementById("r-education").innerText =
        getValue("education", "Education details");


    // Experience
    document.getElementById("r-experience").innerText =
        getValue("experience", "Experience details");


    // Projects
    document.getElementById("r-projects").innerText =
        getValue("projects", "Project details");


    // Certifications
    document.getElementById("r-certifications").innerText =
        getValue("certifications", "Certification details");


    // Skills
    let skills = document.getElementById("skills").value;

    let skillArray = skills
        .split(",")
        .map(skill => skill.trim())
        .filter(skill => skill !== "");

    let skillHTML = "";

    skillArray.forEach(skill => {

        skillHTML += `
            <span class="skill">
                ${escapeHTML(skill)}
            </span>
        `;

    });

    document.getElementById("r-skills").innerHTML = skillHTML;


    // Scroll to resume
    document.getElementById("resume")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* Get input value */

function getValue(id, defaultValue) {

    let value = document.getElementById(id).value.trim();

    return value !== "" ? value : defaultValue;
}


/* Basic HTML protection */

function escapeHTML(text) {

    let div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}