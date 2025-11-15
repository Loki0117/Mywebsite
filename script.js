/* ---- particle background ---- */
const particles = document.getElementById('particles');
for(let i = 0; i < 60; i++){
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + '%';
  p.style.animationDelay = Math.random() * 20 + 's';
  p.style.animationDuration = (15 + Math.random() * 10) + 's';
  particles.appendChild(p);
}

/* ---- glow skills ---- */
let currentGlow = null;
function toggleGlow(el){
  if(currentGlow && currentGlow !== el) currentGlow.classList.remove('glow');
  el.classList.toggle('glow');
  currentGlow = el.classList.contains('glow') ? el : null;
}

/* ---- current year ---- */
document.getElementById('yr').textContent = new Date().getFullYear();