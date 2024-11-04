document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = "#8be88a";
    });
    link.addEventListener('mouseout', () => {
        link.style.color = "#51ca52";
    });
});
window.addEventListener('scroll', function() {
    const mainSection = document.querySelector('.main');
    const offset = mainSection.getBoundingClientRect().top;
    
    if (offset < window.innerHeight / 2) {
        mainSection.style.color = "#8be88a";
    } else {
        mainSection.style.color = "#d3d3d3";
    }
});
