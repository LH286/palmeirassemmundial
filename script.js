document.addEventListener('DOMContentLoaded', function() {
  // Código para lidar com o cadastro de jogadores
  const cadastroForm = document.getElementById('cadastro-form');
  cadastroForm.addEventListener('submit', async function(event) {
      event.preventDefault();
      const nome = document.getElementById('nome').value;
      const response = await fetch('/api/jogadores', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ nome })
      });
      const data = await response.json();
      alert('Jogador cadastrado com sucesso!');
      cadastroForm.reset();
  });

  // Código para registrar partidas
  const registroForm = document.getElementById('registro-form');
  registroForm.addEventListener('submit', async function(event) {
      event.preventDefault();
      const jogador = document.getElementById('jogador').value;
      const gols = document.getElementById('gols').value;
      const assistencias = document.getElementById('assistencias').value;
      const response = await fetch('/api/partidas', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ jogador, gols, assistencias })
      });
      const data = await response.json();
      alert('Partida registrada com sucesso!');
      registroForm.reset();
  });

  // Código para preencher a tabela de ranking
  const rankingTable = document.getElementById('ranking-table').querySelector('tbody');
  
  async function fetchRanking() {
      const response = await fetch('/api/jogadores');
      const jogadores = await response.json();
      rankingTable.innerHTML = '';
      jogadores.sort((a, b) => b.pontos - a.pontos);
      jogadores.forEach((jogador, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${index + 1}</td>
              <td>${jogador.nome}</td>
              <td>${jogador.gols}</td>
              <td>${jogador.assistencias}</td>
              <td>${jogador.pontos}</td>
          `;
          rankingTable.appendChild(row);
      });
  }

  fetchRanking();

  // Código para preencher o select de jogadores no formulário de registro de partidas
  const jogadorSelect = document.getElementById('jogador');
  async function fetchJogadores() {
      const response = await fetch('/api/jogadores');
      const jogadores = await response.json();
      jogadorSelect.innerHTML = '';
      jogadores.forEach(jogador => {
          const option = document.createElement('option');
          option.value = jogador.nome;
          option.textContent = jogador.nome;
          jogadorSelect.appendChild(option);
      });
  }

  fetchJogadores();
});
