
document.addEventListener('DOMContentLoaded', function () {

    const phone = document.getElementById('phone');
    const email = document.getElementById('personal-email');

    phone.addEventListener('click', () => {
        window.location.href = 'tel:+917002370310';
    });

    email.addEventListener('click', () => {
        window.location.href = 'mailto:keerti.lc05@gmail.com';
    });
});

document.querySelectorAll('.contact p').forEach(item => {
    item.addEventListener('click', () => {
        navigator.clipboard.writeText(item.innerText);
        alert("Copied to clipboard!");
    });
});
