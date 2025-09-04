(function(){
  // Theme toggle with persistence
  const root = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if(saved === 'light') root.classList.add('light');
  updateToggleIcon();
  toggleBtn.addEventListener('click',()=>{
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    updateToggleIcon();
  });
  function updateToggleIcon(){
    if(!toggleBtn) return;
    toggleBtn.textContent = root.classList.contains('light') ? '🌞' : '🌙';
  }

  // Highscore previews if present
  const setText = (id, val)=>{ const el=document.getElementById(id); if(el) el.textContent = val; };
  
  // Original Games
  const guessBest = localStorage.getItem('guess_best');
  if(guessBest) setText('guessBest', `Best: ${guessBest} attempts`);

  const rpsBest = localStorage.getItem('rps_best_streak');
  if(rpsBest) setText('rpsBest', `Best Streak: ${rpsBest}`);

  const memoryBest = localStorage.getItem('memory_best_moves');
  if(memoryBest) setText('memoryBest', `Best Moves: ${memoryBest}`);

  const tttW = parseInt(localStorage.getItem('ttt_wins')||'0',10);
  const tttL = parseInt(localStorage.getItem('ttt_losses')||'0',10);
  if(tttW+tttL>0) setText('tttStats', `W/L: ${tttW}/${tttL}`);

  // Added Games
  const snakeBest = localStorage.getItem('snake_best_score');
  if(snakeBest) setText('snakeBest', `High Score: ${snakeBest}`);
  
  const hangmanBest = localStorage.getItem('hangman_best_streak');
  if(hangmanBest) setText('hangmanBest', `Best Streak: ${hangmanBest}`);

  const whackamoleBest = localStorage.getItem('whackamole_best_score');
  if(whackamoleBest) setText('whackamoleBest', `High Score: ${whackamoleBest}`);

  const simonBest = localStorage.getItem('simon_best_level');
  if(simonBest) setText('simonBest', `Best Level: ${simonBest}`);
})();