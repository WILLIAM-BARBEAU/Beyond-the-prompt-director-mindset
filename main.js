
// Scroll progress
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scrollProgress').style.width = scrolled + '%';
    
    // Back to top button
    const btn = document.getElementById('backToTop');
    if (btn) {
        btn.classList.toggle('visible', winScroll > 300);
    }
});

// Local storage for director info
function saveDirectorInfo(name, email) {
    localStorage.setItem('directorName', name);
    localStorage.setItem('directorEmail', email);
}

function getDirectorInfo() {
    return {
        name: localStorage.getItem('directorName') || '',
        email: localStorage.getItem('directorEmail') || ''
    };
}
