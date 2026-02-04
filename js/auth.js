// js/auth.js ─ debug version

console.log("auth.js loaded");

function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

function getCurrentUser() {
    const email = localStorage.getItem('userEmail');
    if (!email) return null;
    return {
        email,
        name: localStorage.getItem('userName') || email.split('@')[0],
        age: localStorage.getItem('userAge') || '—'
    };
}

function updateAuthUI() {
    console.log("updateAuthUI called ─ logged in?", isLoggedIn());

    const loginBtn  = document.querySelector('.log-in-btn');
    const signupBtn = document.querySelector('.sign-up-btn');
    const profileBtn = document.querySelector('.profile-menu-trigger');

    if (!loginBtn || !signupBtn) {
        console.log("Auth buttons not found on this page");
        return;
    }

    if (isLoggedIn()) {
        console.log("Hiding login/signup ─ showing profile");
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        if (profileBtn) {
            profileBtn.style.display = 'inline-block';
            const user = getCurrentUser();
            if (user && user.name) {
                profileBtn.textContent = user.name + " ♡";
            }
        }
    } else {
        console.log("Showing login/signup ─ hiding profile");
        loginBtn.style.display = 'inline-block';
        signupBtn.style.display = 'inline-block';
        if (profileBtn) {
            profileBtn.style.display = 'none';
        }
    }
}

// Run when page is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded fired");
    updateAuthUI();
});