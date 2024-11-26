
const button = document.querySelector('.button1') as HTMLButtonElement;
const skillsSection = document.querySelector('.Skills') as HTMLDivElement;

skillsSection.style.display = 'none';
skillsSection.style.transition = '1s ease-in-out';
button.innerHTML = 'Show Skills';

const toggleSkillsDisplay = () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'flex';
        button.innerHTML = 'Hide Skills';
        button.blur();
    } else {
        skillsSection.style.display = 'none';
        button.innerHTML = 'Show Skills';
        button.blur();
    }
};
button.addEventListener('click', toggleSkillsDisplay);
