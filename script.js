
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
       const showToast = (text) => {
    const toast = document.createElement("div");
    toast.innerText = text;
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#00f5d4";
    toast.style.color = "#000";
    toast.style.padding = "10px 15px";
    toast.style.borderRadius = "8px";
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 1500);
};

showToast("Copied!");
    });
});
