function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    document.getElementById('star').replaceWith(star);
  }

  function toggleStarVisibility() {
    const star = document.querySelector('.star');
    star.style.opacity = star.style.opacity === '0' ? '1' : '0';
  }

  // Erstelle einen Stern zu Beginn
  createStar();

  // Blinke den Stern alle 5 Minuten
  setInterval(toggleStarVisibility, 1 * 60 * 1000); // 5 Minuten in Millisekunden umrechnen
