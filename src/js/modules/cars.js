import { fetchCarros } from '../../services/fetchData.js';

export function initCars() {
    const containerSport = document.getElementById('esportivo');
    const containerSedan = document.getElementById('sedan');
    const containerSuv = document.getElementById('suv');
    const containerHatch = document.getElementById('hatch');
    const divCarrosFiltrados = document.getElementById('todosCarros');

    const modeloInput = document.getElementById('iModelo');
    const marcaInput = document.getElementById('selectMarca');
    const tipoInput = document.getElementById('selectTipo');
    const precoInput = document.getElementById('iPreco');
    let carros = [];

    async function carregarCarros() {
        try {
            carros = await fetchCarros();

            displayItem(containerSport, carros, 'esportivo');
            displayItem(containerSedan, carros, 'sedan');
            displayItem(containerSuv, carros, 'suv');
            displayItem(containerHatch, carros, 'hatch');
            displayItem(divCarrosFiltrados, carros);

            initFilters(carros);
        } catch (error) {
            console.error('Erro ao carregar carros:', error);
        }
    }

    carregarCarros();

    function displayItem(div, carros, type) {
        const carrosFiltrados = type
            ? carros.filter((carro) => carro.tipo == type)
            : carros;

        div.innerHTML = carrosFiltrados
            .map(({ modelo, preco, tipo, cor, marca, ano, imagem }) => {
                return `<div class="carros">
                    <img src="src/assets/images/${imagem}" alt="${marca} ${modelo}" loading="lazy" />
                    <h4>${marca} ${modelo}</h4>
                    <span id="price">R$${preco.toFixed(3)}</span>
                    </div>`;
            })
            .join('');
    }

    function initFilters(carros) {
        const filtrarCarros = () => {
            const valueModeloInput = modeloInput.value.toLowerCase();
            const valueMarcaSelect = marcaInput.value;
            const valueTipoSelect = tipoInput.value;
            const valuePrecoInput = parseFloat(precoInput.value);

            const resultado = carros.filter(
                (item) =>
                    item.modelo.toLowerCase().includes(valueModeloInput) &&
                    (valueMarcaSelect === '' ||
                        item.marca === valueMarcaSelect) &&
                    (valueTipoSelect === '' || item.tipo === valueTipoSelect) &&
                    (isNaN(valuePrecoInput) || item.preco <= valuePrecoInput),
            );

            exibirResultado(resultado);
        };

        const exibirResultado = (resultado) => {
            if (resultado.length === 0) {
                divCarrosFiltrados.innerHTML =
                    '<h2 class="resultEmpty">Nenhum resultado encontrado.</h2>';
            } else {
                displayItem(divCarrosFiltrados, resultado);
            }
        };

        modeloInput.addEventListener('input', filtrarCarros);
        marcaInput.addEventListener('change', filtrarCarros);
        tipoInput.addEventListener('change', filtrarCarros);
        precoInput.addEventListener('input', filtrarCarros);

        filtrarCarros();
    }
}
