// Script para realizar filtros em tempo real

export function initCarFilter(cars, onFilterChange) {
    const elements = {
        modelInput: document.getElementById('modelInput'),
        brandSelect: document.getElementById('brandSelect'),
        typeSelect: document.getElementById('typeSelect'),
        priceInput: document.getElementById('priceInput'),
    };

    const filters = {
        model: '',
        brand: '',
        type: '',
        maxPrice: Infinity,
    };

    const updateFilters = () => {
        filters.model = elements.modelInput?.value.toLowerCase() || '';
        filters.brand = elements.brandSelect?.value || '';
        filters.type = elements.typeSelect?.value || '';
        filters.maxPrice =
            parseFloat(elements.priceInput?.value || 4000) * 1000;
    };

    const applyFilters = (carsToFilter) => {
        return carsToFilter.filter((car) => {
            const matchesModel = car.model
                .toLowerCase()
                .includes(filters.model);
            const matchesBrand = !filters.brand || car.brand === filters.brand;
            const matchesType = !filters.type || car.type === filters.type;
            const matchesPrice = car.price <= filters.maxPrice;

            return matchesModel && matchesBrand && matchesType && matchesPrice;
        });
    };

    const handleFilter = () => {
        updateFilters();
        const filteredCars = applyFilters(cars);
        onFilterChange(filteredCars);
    };

    const setupEventListeners = () => {
        elements.modelInput?.addEventListener('input', handleFilter);
        elements.brandSelect?.addEventListener('change', handleFilter);
        elements.typeSelect?.addEventListener('change', handleFilter);
        elements.priceInput?.addEventListener('input', handleFilter);
    };

    setupEventListeners();

    return { getFilters: () => ({ ...filters }), handleFilter };
}
