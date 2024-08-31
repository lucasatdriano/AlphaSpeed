// Arrays dos carros

const sedans = [
    {
        modelo: 'S60',
        preco: '338.000',
        tipo: 'Sedan',
        cor: 'Vermelho',
        marca: 'Volvo',
        ano: 2023,
        imagem: 'sedan/volvos60.png',
    },
    {
        modelo: 'A3',
        preco: '280.000',
        tipo: 'Sedan',
        cor: 'Azul',
        marca: 'Audi',
        ano: 2023,
        imagem: 'sedan/audia3.png',
    },
    {
        modelo: 'A4',
        preco: '300.000',
        tipo: 'Sedan',
        cor: 'Cinza',
        marca: 'Audi',
        ano: 2023,
        imagem: 'sedan/audia4.png',
    },
    {
        modelo: 'Serie 3E',
        preco: '308.000',
        tipo: 'Sedan',
        cor: 'Branco',
        marca: 'BMW',
        ano: 2023,
        imagem: 'sedan/bmwSeries3E.png',
    },
    {
        modelo: 'Civic',
        preco: '245.000',
        tipo: 'Sedan',
        cor: 'Preto Fosco',
        marca: 'Honda',
        ano: 2023,
        imagem: 'sedan/hondaCivic.png',
    },
];

const suvs = [
    {
        modelo: 'X6',
        preco: '812.000',
        tipo: 'Suv',
        cor: 'Cinza',
        marca: 'BMW',
        ano: 2023,
        imagem: 'suv/bmwX6.png',
    },
    {
        modelo: 'X3',
        preco: '448.000',
        tipo: 'Suv',
        cor: 'Preto',
        marca: 'BMW',
        ano: 2023,
        imagem: 'suv/bmwX3.png',
    },
    {
        modelo: 'Urus',
        preco: '3.785.000',
        tipo: 'Suv',
        cor: 'Azul',
        marca: 'Lamborghini',
        ano: 2023,
        imagem: 'suv/lamborghiniUrus.png',
    },
    {
        modelo: 'GLA',
        preco: '360.000',
        tipo: 'Suv',
        cor: 'Vermelho',
        marca: 'Mercedes',
        ano: 2023,
        imagem: 'suv/mercedesGla.png',
    },
    {
        modelo: 'Ranger',
        preco: '512.000',
        tipo: 'Suv',
        cor: 'Branca',
        marca: 'Land Rover',
        ano: 2023,
        imagem: 'suv/landRoverRanger.png',
    },
];

const hatchs = [
    {
        modelo: 'Classe-A',
        preco: '345.000',
        tipo: 'Hatch',
        cor: 'Preto Fosco',
        marca: 'Mercedes',
        ano: 2023,
        imagem: 'hatch/mercedesClasseA.png',
    },
    {
        modelo: 'Serie 1',
        preco: '314.000',
        tipo: 'Hatch',
        cor: 'Azul',
        marca: 'BMW',
        ano: 2023,
        imagem: 'hatch/bmwSerie1.png',
    },
    {
        modelo: 'City Hatchback Touring',
        preco: '128.000',
        tipo: 'Hatch',
        cor: 'Cinza',
        marca: 'Honda',
        ano: 2023,
        imagem: 'hatch/hondaCityhatchback.png',
    },
    {
        modelo: 'Cooper S',
        preco: '304.000',
        tipo: 'Hatch',
        cor: 'Azul',
        marca: 'Mini',
        ano: 2023,
        imagem: 'hatch/miniCooperS.png',
    },
    {
        modelo: 'Yaris',
        preco: '121.000',
        tipo: 'Hatch',
        cor: 'Cinza Fosco',
        marca: 'Toyota',
        ano: 2023,
        imagem: 'hatch/toyotaYaris.png',
    },
];

const sports = [
    {
        modelo: 'R8',
        preco: '1.549.000',
        tipo: 'Esportivo',
        cor: 'Laranja',
        marca: 'Audi',
        ano: 2023,
        imagem: 'esportivo/audiR8.png',
    },
    {
        modelo: 'Aventador',
        preco: '3.870.000',
        tipo: 'Esportivo',
        cor: 'Azul',
        marca: 'Lamborghini',
        ano: 2023,
        imagem: 'esportivo/aventador.png',
    },
    {
        modelo: '458',
        preco: '3.667.000',
        tipo: 'Esportivo',
        cor: 'Vermelho',
        marca: 'Ferrari',
        ano: 2023,
        imagem: 'esportivo/ferrari458.png',
    },
    {
        modelo: 'Artura',
        preco: '2.349.000',
        tipo: 'Esportivo',
        cor: 'Verde Lima',
        marca: 'McLaren',
        ano: 2023,
        imagem: 'esportivo/mcLarenArtura.png',
    },
    {
        modelo: 'Mustang GT',
        preco: '566.000',
        tipo: 'Esportivo',
        cor: 'Preto',
        marca: 'Ford',
        ano: 2023,
        imagem: 'esportivo/mustangGT.png',
    },
];

const allCars = [
    {
        modelo: 'S60',
        preco: 338,
        tipo: 'sedan',
        cor: 'Vermelho',
        marca: 'Volvo',
        ano: 2023,
        imagem: 'sedan/volvos60.png',
    },
    {
        modelo: 'A3',
        preco: 280,
        tipo: 'sedan',
        cor: 'Azul',
        marca: 'Audi',
        ano: 2023,
        imagem: 'sedan/audia3.png',
    },
    {
        modelo: 'A4',
        preco: 300,
        tipo: 'sedan',
        cor: 'Cinza',
        marca: 'Audi',
        ano: 2023,
        imagem: 'sedan/audia4.png',
    },
    {
        modelo: 'Serie 3E',
        preco: 308,
        tipo: 'sedan',
        cor: 'Branco',
        marca: 'BMW',
        ano: 2023,
        imagem: 'sedan/bmwSeries3E.png',
    },
    {
        modelo: 'Civic',
        preco: 245,
        tipo: 'sedan',
        cor: 'Preto Fosco',
        marca: 'Honda',
        ano: 2023,
        imagem: 'sedan/hondaCivic.png',
    },
    {
        modelo: 'X6',
        preco: 812,
        tipo: 'suv',
        cor: 'Cinza',
        marca: 'BMW',
        ano: 2023,
        imagem: 'suv/bmwX6.png',
    },
    {
        modelo: 'X3',
        preco: 448,
        tipo: 'suv',
        cor: 'Preto',
        marca: 'BMW',
        ano: 2023,
        imagem: 'suv/bmwX3.png',
    },
    {
        modelo: 'Urus',
        preco: 3785,
        tipo: 'suv',
        cor: 'Azul',
        marca: 'Lamborghini',
        ano: 2023,
        imagem: 'suv/lamborghiniUrus.png',
    },
    {
        modelo: 'GLA',
        preco: 360,
        tipo: 'suv',
        cor: 'Vermelho',
        marca: 'Mercedes',
        ano: 2023,
        imagem: 'suv/mercedesGla.png',
    },
    {
        modelo: 'Ranger',
        preco: 512,
        tipo: 'suv',
        cor: 'Branca',
        marca: 'Land Rover',
        ano: 2023,
        imagem: 'suv/landRoverRanger.png',
    },
    {
        modelo: 'Classe-A',
        preco: 345,
        tipo: 'hatch',
        cor: 'Preto Fosco',
        marca: 'Mercedes',
        ano: 2023,
        imagem: 'hatch/mercedesClasseA.png',
    },
    {
        modelo: 'Serie 1',
        preco: 314,
        tipo: 'hatch',
        cor: 'Azul',
        marca: 'BMW',
        ano: 2023,
        imagem: 'hatch/bmwSerie1.png',
    },
    {
        modelo: 'City Hatchback Touring',
        preco: 128,
        tipo: 'hatch',
        cor: 'Cinza',
        marca: 'Honda',
        ano: 2023,
        imagem: 'hatch/hondaCityhatchback.png',
    },
    {
        modelo: 'Cooper S',
        preco: 304,
        tipo: 'hatch',
        cor: 'Azul',
        marca: 'Mini',
        ano: 2023,
        imagem: 'hatch/miniCooperS.png',
    },
    {
        modelo: 'Yaris',
        preco: 121,
        tipo: 'hatch',
        cor: 'Cinza Fosco',
        marca: 'Toyota',
        ano: 2023,
        imagem: 'hatch/toyotaYaris.png',
    },
    {
        modelo: 'R8',
        preco: 1549,
        tipo: 'esportivo',
        cor: 'Laranja',
        marca: 'Audi',
        ano: 2023,
        imagem: 'esportivo/audiR8.png',
    },
    {
        modelo: 'Aventador',
        preco: 3870,
        tipo: 'esportivo',
        cor: 'Azul',
        marca: 'Lamborghini',
        ano: 2023,
        imagem: 'esportivo/aventador.png',
    },
    {
        modelo: '458',
        preco: 3667,
        tipo: 'esportivo',
        cor: 'Vermelho',
        marca: 'Ferrari',
        ano: 2023,
        imagem: 'esportivo/ferrari458.png',
    },
    {
        modelo: 'Artura',
        preco: 2349,
        tipo: 'esportivo',
        cor: 'Verde Lima',
        marca: 'McLaren',
        ano: 2023,
        imagem: 'esportivo/mcLarenArtura.png',
    },
    {
        modelo: 'Mustang GT',
        preco: 566,
        tipo: 'esportivo',
        cor: 'Preto',
        marca: 'Ford',
        ano: 2023,
        imagem: 'esportivo/mustangGT.png',
    },
];

const carros = [
    ...new Set(
        allCars.map((item) => {
            return item;
        }),
    ),
];

// Mostrar os carros dinamicamente

const showSedans = () => {
    const containerSedan = document.getElementById('sedan');

    sedans.map((carro) => {
        if (containerSedan != null) {
            containerSedan.innerHTML +=
                '<div class="carros">' +
                '<img src="src/images/' +
                carro.imagem +
                '" alt="' +
                carro.marca +
                ' ' +
                carro.modelo +
                '" loading="lazy" />' +
                '<h4>' +
                carro.marca +
                ' ' +
                carro.modelo +
                '</h4>' +
                '<span id="price">R$' +
                carro.preco +
                '</span>' +
                '</div>';
        }
    });
};
showSedans();

const showSuvs = () => {
    const containerSuv = document.getElementById('suv');

    suvs.map((carro) => {
        if (containerSuv != null) {
            containerSuv.innerHTML +=
                '<div class="carros">' +
                '<img src="src/images/' +
                carro.imagem +
                '" alt="' +
                carro.marca +
                ' ' +
                carro.modelo +
                '" loading="lazy" />' +
                '<h4>' +
                carro.marca +
                ' ' +
                carro.modelo +
                '</h4>' +
                '<span id="price">R$' +
                carro.preco +
                '</span>' +
                '</div>';
        }
    });
};
showSuvs();

const showHatchs = () => {
    const containerHatch = document.getElementById('hatch');

    hatchs.map((carro) => {
        if (containerHatch != null) {
            containerHatch.innerHTML +=
                '<div class="carros">' +
                '<img src="src/images/' +
                carro.imagem +
                '" alt="' +
                carro.marca +
                ' ' +
                carro.modelo +
                '" loading="lazy" />' +
                '<h4>' +
                carro.marca +
                ' ' +
                carro.modelo +
                '</h4>' +
                '<span id="price">R$' +
                carro.preco +
                '</span>' +
                '</div>';
        }
    });
};
showHatchs();

const showSports = () => {
    const containerSport = document.getElementById('esportivo');

    sports.map((carro) => {
        if (containerSport != null) {
            containerSport.innerHTML +=
                '<div class="carros">' +
                '<img src="src/images/' +
                carro.imagem +
                '" alt="' +
                carro.marca +
                ' ' +
                carro.modelo +
                '" loading="lazy" />' +
                '<h4>' +
                carro.marca +
                ' ' +
                carro.modelo +
                '</h4>' +
                '<span id="price">R$' +
                carro.preco +
                '</span>' +
                '</div>';
        }
    });
};
showSports();

const displayItem = (items) => {
    const divCarrosFiltrados = document.getElementById('todosCarros');

    divCarrosFiltrados.innerHTML = items
        .map((item) => {
            let { modelo, preco, tipo, cor, marca, ano, imagem } = item;
            return `<div class="carros">
                <img src="src/images/${imagem}" alt="${marca} ${modelo}" loading="lazy" />
                <h4>${marca} ${modelo}</h4>
                <span id="price">R$${preco.toFixed(3)}</span>
            </div>`;
        })
        .join('');
};
displayItem(carros);

document.addEventListener('DOMContentLoaded', () => {
    // Chamar Inputs
    const modeloInput = document.getElementById('iModelo');
    const marcaInput = document.getElementById('selectMarca');
    const tipoInput = document.getElementById('selectTipo');
    const precoInput = document.getElementById('iPreco');

    if (!modeloInput || !marcaInput || !tipoInput || !precoInput) {
        console.error('Um ou mais elementos de entrada não foram encontrados.');
        return;
    }

    // Verifique se a variável 'carros' está definida e é um array
    if (!Array.isArray(carros)) {
        console.error(
            'A variável "carros" não está definida ou não é um array.',
        );
        return;
    }

    // Função para filtrar carros
    function filtrarCarros() {
        const valueModeloInput = modeloInput.value.toLowerCase();
        const valueMarcaSelect = marcaInput.value;
        const valueTipoSelect = tipoInput.value;
        const valuePrecoInput = parseFloat(precoInput.value);

        const resultado = carros.filter(
            (item) =>
                item.modelo.toLowerCase().includes(valueModeloInput) &&
                (valueMarcaSelect === '' || item.marca === valueMarcaSelect) &&
                (valueTipoSelect === '' || item.tipo === valueTipoSelect) &&
                (isNaN(valuePrecoInput) || item.preco <= valuePrecoInput),
        );

        exibirResultado(resultado);
    }

    // Função para exibir o resultado
    function exibirResultado(resultado) {
        const divCarrosFiltrados = document.getElementById('todosCarros');
        divCarrosFiltrados.innerHTML = '';

        if (resultado.length === 0) {
            divCarrosFiltrados.innerHTML =
                '<h2 style="padding: 80px;">Nenhum resultado encontrado.</h2>';
        } else {
            resultado.forEach((carro) => {
                divCarrosFiltrados.innerHTML += `
                    <div class="carros">
                        <img src="src/images/${carro.imagem}" alt="${
                    carro.marca
                } ${carro.modelo}" loading="lazy" />
                        <h4>${carro.marca} ${carro.modelo}</h4>
                        <span id="price">R$${carro.preco.toFixed(3)}</span>
                    </div>`;
            });
        }
    }

    // Adiciona ouvintes de eventos para filtrar em tempo real
    modeloInput.addEventListener('input', filtrarCarros);
    marcaInput.addEventListener('change', filtrarCarros);
    tipoInput.addEventListener('change', filtrarCarros);
    precoInput.addEventListener('input', filtrarCarros);

    // Chama a função de filtro inicialmente para mostrar todos os carros
    filtrarCarros();
});
