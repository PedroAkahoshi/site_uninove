const originalItems = Array.from(document.querySelectorAll('.item')); // Guarda os itens originais

function filterItems(category) {
    const contentDiv = document.getElementById('content');
    
    // Limpa todos os itens do content
    contentDiv.innerHTML = '';

    // Filtra os itens pela categoria selecionada
    const filteredItems = category === 'all'
        ? originalItems
        : originalItems.filter(item => item.classList.contains(category));
    
    // Adiciona os itens filtrados de volta ao DOM
    filteredItems.forEach(item => contentDiv.appendChild(item));
}