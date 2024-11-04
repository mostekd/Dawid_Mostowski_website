// Animacja przy najechaniu na ikony
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = "#8be88a";
    });
    link.addEventListener('mouseout', () => {
        link.style.color = "#51ca52";
    });
});
