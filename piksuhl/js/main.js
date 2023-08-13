function fortnite() {
    var scrollDiv = document.getElementById("games").offsetTop - 55;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
};

fetch('/main.json')
  .then((lessgooo) => lessgooo.json())
  .then((games) => {
    games.forEach((game) => {
      const gamecontainmentchamber = document.createElement('div');
      const gamerdiv = document.querySelector('.frame-main');
      const gamesbutton = document.querySelector('.gamescotain');
      const gamerNavigaton = gamerdiv.querySelector('.frame-bar');
      const gamerframer = document.getElementById('homework');
      gamecontainmentchamber.className = 'class';
      gamecontainmentchamber.innerHTML = `
            <div class="image">
              <img src="${game.root + "/" + game.icon}" onerror="this.src='./imgs/group.png'"/>
            </div>
            <div class="context">
                <h1>${game.game}</h1>
                <p>${game.desc}</p>
                <br>
                <a>Play</a>
            </div>
    `;
      gamesbutton.appendChild(gamecontainmentchamber);
      const barrrr = document.querySelector('.bar');

      gamecontainmentchamber.onclick = (e) => {
        gamesbutton.classList.add('hidden');
        barrrr.classList.add('hidden');
        gamerdiv.classList.remove('hidden');
        gamerframer.src = `${game.root}`;
     };
      gamerNavigaton.querySelector('#close').addEventListener('click', (e) => {
        gamesbutton.classList.remove('hidden');
        gamerdiv.classList.add('hidden');
        gamerframer.src = '';
        barrrr.classList.remove('hidden');
      });
    });
  });