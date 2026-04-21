// Script para mostrar valor do input range

export function initPriceRange() {
    const priceOutput = document.querySelector('#priceOutput');
    const priceInput = document.querySelector('#priceInput');

    if (!priceInput || !priceOutput) {
        console.error('Elementos do range não encontrados');
        return;
    }

    const formatPriceValue = (value) => {
        const numericValue = parseInt(value) * 1000;
        return numericValue.toLocaleString('pt-BR');
    };

    const updatePriceDisplay = () => {
        const value = priceInput.value;
        priceOutput.textContent = formatPriceValue(value);
    };

    updatePriceDisplay();

    priceInput.addEventListener('input', updatePriceDisplay);
}
