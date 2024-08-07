document.addEventListener("DOMContentLoaded", function() {
    // Function to hide all sections
    function hideAllSections() {
        const sections = document.querySelectorAll('main section');
        sections.forEach(section => section.style.display = 'none');
    }

    // Function to show the selected section
    function showSection(id) {
        hideAllSections();
        const section = document.getElementById(id);
        if (section) {
            section.style.display = 'block';
        }
    }

    // Event listeners for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });

    // Show the first section by default
    showSection('addGuest');
});
