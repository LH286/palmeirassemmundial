// Adiciona um ouvinte de evento para o botão de busca
document.getElementById('fetchCharacterButton').addEventListener('click', async () => {
    // Obtém o valor do campo de entrada, removendo espaços em branco
    const characterInput = document.getElementById('characterInput').value.trim();
    // Obtém a referência ao elemento onde os detalhes do personagem serão exibidos
    const characterDetails = document.getElementById('characterDetails');

    // Verifica se o campo de entrada está vazio
    if (characterInput === '') {
        // Exibe uma mensagem de erro se o campo estiver vazio
        characterDetails.innerHTML = '<p>Por favor, insira um nome ou ID do personagem.</p>';
        return; // Interrompe a execução se o campo estiver vazio
    }

    try {
        // Faz uma solicitação para a API de Rick and Morty com o ID ou nome do personagem
        const response = await fetch(`https://rickandmortyapi.com/api/character/${characterInput}`);
        // Converte a resposta em JSON
        const data = await response.json();

        // Verifica se a resposta contém um erro (ex: personagem não encontrado)
        if (data.error) {
            // Exibe uma mensagem de erro se o personagem não for encontrado
            characterDetails.innerHTML = `<p>Personagem não encontrado.</p>`;
        } else {
            // Exibe os detalhes do personagem se encontrado
            characterDetails.innerHTML = `
                <h2>${data.name}</h2>
                <p><strong>Status:</strong> ${data.status}</p>
                <p><strong>Espécie:</strong> ${data.species}</p>
                <p><strong>Gênero:</strong> ${data.gender}</p>
                <p><strong>Origem:</strong> ${data.origin.name}</p>
                <p><strong>Localização:</strong> ${data.location.name}</p>
                <img src="${data.image}" alt="${data.name}" style="width: 200px; height: auto;">
            `;
        }
    } catch (error) {
        // Exibe uma mensagem de erro se ocorrer uma falha na solicitação
        characterDetails.innerHTML = `<p>Erro ao buscar os dados. Tente novamente.</p>`;
    }
});
