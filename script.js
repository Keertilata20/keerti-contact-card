
document.addEventListener('DOMContentLoaded', function() {

    var phoneSpan = document.getElementById('phone');
    var personalEmailSpan = document.getElementById('personal-email');
    var collegeEmailSpan = document.getElementById('college-email');

    phoneSpan.addEventListener('click', function() {
        window.location.href = 'tel:' + phoneSpan.textContent.trim();
    });

    personalEmailSpan.addEventListener('click', function() {
        window.location.href = 'mailto:' + personalEmailSpan.textContent.trim();
    });

});

document.querySelectorAll('.contact p').forEach(item => {
    item.addEventListener('click', () => {
        navigator.clipboard.writeText(item.innerText);
        alert("Copied to clipboard!");
    });
});
