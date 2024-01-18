document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');

    toggleSwitch.addEventListener('change', function () {
        // Toggle dark mode class on the body
        body.classList.toggle('dark-mode', toggleSwitch.checked);
        header.classList.toggle('dark-mode', toggleSwitch.checked);
        nav.classList.toggle('dark-mode', toggleSwitch.checked);
        sections.forEach(section => {
            section.classList.toggle('dark-mode', toggleSwitch.checked);
        });

        footer.classList.toggle('dark-mode', toggleSwitch.checked);


        // Handle additional actions based on the toggle state if needed
        if (toggleSwitch.checked) {
            console.log('Toggle is ON (Dark Mode)');
        } else {
            console.log('Toggle is OFF (Light Mode)');
        }
    });
});
