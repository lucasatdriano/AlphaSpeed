// Script pra mostrar o catálogo de carros dinamicamente

import { fetchCars } from '../../../services/fetchData.js';
import { initCarFilter } from './carFilter.js';

export function initCarCatalog() {
    const elements = {
        sedanContainer: document.getElementById('sedanContainer'),
        suvContainer: document.getElementById('suvContainer'),
        hatchContainer: document.getElementById('hatchContainer'),
        sportsContainer: document.getElementById('sportsContainer'),
        allCarsContainer: document.getElementById('allCars'),
    };

    let cars = [];
    let filterModule = null;

    const VEHICLE_TYPES = {
        SEDAN: 'sedan',
        SUV: 'suv',
        HATCH: 'hatch',
        SPORT: 'sport',
    };

    async function init() {
        try {
            cars = await fetchCars();
            displayAllCategories();
            initFilter();
        } catch (error) {
            console.error('Erro ao carregar carros:', error);
            showErrorMessage();
        }
    }

    function initFilter() {
        filterModule = initCarFilter(cars, (filteredCars) => {
            renderCars(elements.allCarsContainer, filteredCars);
        });

        renderCars(elements.allCarsContainer, cars);
    }

    function displayAllCategories() {
        displayCarsByType(elements.sedanContainer, VEHICLE_TYPES.SEDAN);
        displayCarsByType(elements.suvContainer, VEHICLE_TYPES.SUV);
        displayCarsByType(elements.hatchContainer, VEHICLE_TYPES.HATCH);
        displayCarsByType(elements.sportsContainer, VEHICLE_TYPES.SPORT);
    }

    function displayCarsByType(container, type) {
        if (!container) return;
        const filteredCars = cars.filter((car) => car.type === type);
        renderCars(container, filteredCars);
    }

    function renderCars(container, carsToRender) {
        if (!container) return;

        if (!carsToRender || carsToRender.length === 0) {
            container.innerHTML =
                '<h2 class="emptyMessage">Nenhum carro encontrado.</h2>';
            return;
        }

        container.innerHTML = carsToRender
            .map((car) => createCarCard(car))
            .join('');
    }

    function formatPrice(price) {
        return price.toLocaleString('pt-BR');
    }

    function createCarCard({ brand, model, year, price, image }) {
        return `
            <div class="car">
                <img src="src/assets/images/${image}" alt="${brand} ${model}" loading="lazy" />
                <h4>${brand} ${model} - ${year}</h4>
                <span class="car-price">R$ ${formatPrice(price)}</span>
            </div>
        `;
    }

    function showErrorMessage() {
        const message =
            '<h2 class="error-message">Erro ao carregar carros. Tente novamente mais tarde.</h2>';

        Object.values(elements).forEach((container) => {
            if (container && container.tagName === 'DIV') {
                container.innerHTML = message;
            }
        });
    }

    init();
}
