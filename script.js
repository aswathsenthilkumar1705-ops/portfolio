// Simple hover effect for cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.boxShadow = "0 8px 25px rgba(0,0,0,0.4)";
  });
  card.addEventListener('mouseout', () => {
    card.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
  });
});
