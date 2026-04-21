export async function fetchCars() {
    try {
        const response = await fetch('src/assets/data/cars.json');

        if (!response.ok) {
            throw new Error('Erro ao carregar os dados');
        }

        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
