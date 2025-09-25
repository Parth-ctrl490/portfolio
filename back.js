// Example: Button click events
document.querySelectorAll('.btn-3d').forEach(btn => {
  btn.addEventListener('click', function() {
    btn.classList.add('active');
    setTimeout(() => btn.classList.remove('active'), 150);
    
  });
});
