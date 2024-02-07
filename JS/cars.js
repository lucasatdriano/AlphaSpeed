const sedans = [
    {
        modelo: 'S60',
        preco: '338.000',
        tipo: 'Sedan',
        cor: 'Vermelho',
        marca: 'Volvo',
        ano: 2023,
        imagem: 'sedan/volvos60.png'
    },
    {
        modelo: 'A3',
        preco: '280.000',
        tipo: 'Sedan',
        cor: 'Azul',
        marca: 'Audi',
        ano: 2023,
        imagem: 'sedan/audia3.png'
    },
    {
        modelo: 'A4',
        preco: '300.000',
        tipo: 'Sedan',
        cor: 'Cinza',
        marca: 'Audi',
        ano: 2023,
        imagem: 'sedan/audia4.png'
    },
    {
        modelo: 'Serie 3E',
        preco: '308.000',
        tipo: 'Sedan',
        cor: 'Branco',
        marca: 'BMW',
        ano: 2023,
        imagem: 'sedan/bmwSeries3E.png'
    },
    {
        modelo: 'Civic',
        preco: '245.000',
        tipo: 'Sedan',
        cor: 'Preto Fosco',
        marca: 'Honda',
        ano: 2023,
        imagem: 'sedan/hondaCivic.png'
    }
]

const suvs = [
    {
        modelo: 'X6',
        preco: '812.000',
        tipo: 'Suv',
        cor: 'Cinza',
        marca: 'BMW',
        ano: 2023,
        imagem: 'suv/bmwX6.png'
    },
    {
        modelo: 'X3',
        preco: '448.000',
        tipo: 'Suv',
        cor: 'Preto',
        marca: 'BMW',
        ano: 2023,
        imagem: 'suv/bmwX3.png'
    },
    {
        modelo: 'Urus',
        preco: '3.785.000',
        tipo: 'Suv',
        cor: 'Azul',
        marca: 'Lamborghini',
        ano: 2023,
        imagem: 'suv/lamborghiniUrus.png'
    },
    {
        modelo: 'GLA',
        preco: '360.000',
        tipo: 'Suv',
        cor: 'Vermelho',
        marca: 'Mercedes',
        ano: 2023,
        imagem: 'suv/mercedesGla.png'
    },
    {
        modelo: 'Ranger',
        preco: '512.000',
        tipo: 'Suv',
        cor: 'Branca',
        marca: 'Land Rover',
        ano: 2023,
        imagem: 'suv/landRoverRanger.png'
    },
]

const hatchs = [
    {
        modelo: 'Classe-A',
        preco: '345.000',
        tipo: 'Hatch',
        cor: 'Preto Fosco',
        marca: 'Mercedes',
        ano: 2023,
        imagem: 'hatch/mercedesClasseA.png'
    },
    {
        modelo: 'Serie 1',
        preco: '314.000',
        tipo: 'Hatch',
        cor: 'Azul',
        marca: 'BMW',
        ano: 2023,
        imagem: 'hatch/bmwSerie1.png'
    },
    {
        modelo: 'City Hatchback Touring',
        preco: '128.000',
        tipo: 'Hatch',
        cor: 'Cinza',
        marca: 'Honda',
        ano: 2023,
        imagem: 'hatch/hondaCityhatchback.png'
    },
    {
        modelo: 'Cooper S',
        preco: '304.000',
        tipo: 'Hatch',
        cor: 'Azul',
        marca: 'Mini',
        ano: 2023,
        imagem: 'hatch/miniCooperS.png'
    },
    {
        modelo: 'Yaris',
        preco: '121.000',
        tipo: 'Hatch',
        cor: 'Cinza Fosco',
        marca: 'Toyota',
        ano: 2023,
        imagem: 'hatch/toyotaYaris.png'
    }
]

const sports = [
    {
        modelo: 'R8',
        preco: '1.549.000',
        tipo: 'Esportivo',
        cor: 'Laranja',
        marca: 'Audi',
        ano: 2023,
        imagem: 'esportivo/audiR8.png'
    },
    {
        modelo: 'Aventador',
        preco: '3.870.000',
        tipo: 'Esportivo',
        cor: 'Azul',
        marca: 'Lamborghini',
        ano: 2023,
        imagem: 'esportivo/aventador.png'
    },
    {
        modelo: '458',
        preco: '3.667.000',
        tipo: 'Esportivo',
        cor: 'Vermelho',
        marca: 'Ferrari',
        ano: 2023,
        imagem: 'esportivo/ferrari458.png'
    },
    {
        modelo: 'Artura',
        preco: '2.349.000',
        tipo: 'Esportivo',
        cor: 'Verde Lima',
        marca: 'McLaren',
        ano: 2023,
        imagem: 'esportivo/mcLarenArtura.png'
    },
    {
        modelo: 'Mustang GT',
        preco: '566.000',
        tipo: 'Esportivo',
        cor: 'Preto',
        marca: 'Ford',
        ano: 2023,
        imagem: 'esportivo/mustangGT.png'
    }
]

mostrarSedans = () => {
    let containerSedan = document.getElementById('sedan')
    sedans.map((carro) => {
       if(containerSedan != null) {
        containerSedan.innerHTML += 
            '<div class="carros">' +
                '<img src="../imagens/' + carro.imagem + '" alt="' + carro.marca + ' ' + carro.modelo + '" />' +
                '<h4>' + carro.marca + ' ' + carro.modelo + '</h4>' +
                '<span id="price">R$' + carro.preco + '</span>' +
            '</div>'
       }
    })
}
mostrarSedans()

mostrarSuvs = () => {
    let containerSuv = document.getElementById('suv')
    suvs.map((carro) => {
       if(containerSuv != null) {
        containerSuv.innerHTML += 
            '<div class="carros">' +
                '<img src="../imagens/' + carro.imagem + '" alt="' + carro.marca + ' ' + carro.modelo + '" />' +
                '<h4>' + carro.marca + ' ' + carro.modelo + '</h4>' +
                '<span id="price">R$' + carro.preco + '</span>' +
            '</div>'
       }
    })
}
mostrarSuvs()

mostrarHatchs = () => {
    let containerHatch = document.getElementById('hatch')
    hatchs.map((carro) => {
       if(containerHatch != null) {
        containerHatch.innerHTML += 
            '<div class="carros">' +
                '<img src="../imagens/' + carro.imagem + '" alt="' + carro.marca + ' ' + carro.modelo + '" />' +
                '<h4>' + carro.marca + ' ' + carro.modelo + '</h4>' +
                '<span id="price">R$' + carro.preco + '</span>' +
            '</div>'
       }
    })
}
mostrarHatchs()

mostrarSports = () => {
    let containerSport = document.getElementById('esportivo')
    sports.map((carro) => {
       if(containerSport != null) {
        containerSport.innerHTML += 
            '<div class="carros">' +
                '<img src="../imagens/' + carro.imagem + '" alt="' + carro.marca + ' ' + carro.modelo + '" />' +
                '<h4>' + carro.marca + ' ' + carro.modelo + '</h4>' +
                '<span id="price">R$' + carro.preco + '</span>' +
            '</div>'
       }
    })
}
mostrarSports()

const allCars = [
    {
        modelo: 'S60',
        preco: '338.000',
        tipo: 'Sedan',
        cor: 'Vermelho',
        marca: 'Volvo',
        ano: 2023,
        imagem: 'sedan/volvos60.png'
    },
    {
        modelo: 'A3',
        preco: '280.000',
        tipo: 'Sedan',
        cor: 'Azul',
        marca: 'Audi',
        ano: 2023,
        imagem: 'sedan/audia3.png'
    },
    {
        modelo: 'A4',
        preco: '300.000',
        tipo: 'Sedan',
        cor: 'Cinza',
        marca: 'Audi',
        ano: 2023,
        imagem: 'sedan/audia4.png'
    },
    {
        modelo: 'Serie 3E',
        preco: '308.000',
        tipo: 'Sedan',
        cor: 'Branco',
        marca: 'BMW',
        ano: 2023,
        imagem: 'sedan/bmwSeries3E.png'
    },
    {
        modelo: 'Civic',
        preco: '245.000',
        tipo: 'Sedan',
        cor: 'Preto Fosco',
        marca: 'Honda',
        ano: 2023,
        imagem: 'sedan/hondaCivic.png'
    },
    {
        modelo: 'X6',
        preco: '812.000',
        tipo: 'Suv',
        cor: 'Cinza',
        marca: 'BMW',
        ano: 2023,
        imagem: 'suv/bmwX6.png'
    },
    {
        modelo: 'X3',
        preco: '448.000',
        tipo: 'Suv',
        cor: 'Preto',
        marca: 'BMW',
        ano: 2023,
        imagem: 'suv/bmwX3.png'
    },
    {
        modelo: 'Urus',
        preco: '3.785.000',
        tipo: 'Suv',
        cor: 'Azul',
        marca: 'Lamborghini',
        ano: 2023,
        imagem: 'suv/lamborghiniUrus.png'
    },
    {
        modelo: 'GLA',
        preco: '360.000',
        tipo: 'Suv',
        cor: 'Vermelho',
        marca: 'Mercedes',
        ano: 2023,
        imagem: 'suv/mercedesGla.png'
    },
    {
        modelo: 'Ranger',
        preco: '512.000',
        tipo: 'Suv',
        cor: 'Branca',
        marca: 'Land Rover',
        ano: 2023,
        imagem: 'suv/landRoverRanger.png'
    },
    {
        modelo: 'Classe-A',
        preco: '345.000',
        tipo: 'Hatch',
        cor: 'Preto Fosco',
        marca: 'Mercedes',
        ano: 2023,
        imagem: 'hatch/mercedesClasseA.png'
    },
    {
        modelo: 'Serie 1',
        preco: '314.000',
        tipo: 'Hatch',
        cor: 'Azul',
        marca: 'BMW',
        ano: 2023,
        imagem: 'hatch/bmwSerie1.png'
    },
    {
        modelo: 'City Hatchback Touring',
        preco: '128.000',
        tipo: 'Hatch',
        cor: 'Cinza',
        marca: 'Honda',
        ano: 2023,
        imagem: 'hatch/hondaCityhatchback.png'
    },
    {
        modelo: 'Cooper S',
        preco: '304.000',
        tipo: 'Hatch',
        cor: 'Azul',
        marca: 'Mini',
        ano: 2023,
        imagem: 'hatch/miniCooperS.png'
    },
    {
        modelo: 'Yaris',
        preco: '121.000',
        tipo: 'Hatch',
        cor: 'Cinza Fosco',
        marca: 'Toyota',
        ano: 2023,
        imagem: 'hatch/toyotaYaris.png'
    },
    {
        modelo: 'R8',
        preco: '1.549.000',
        tipo: 'Esportivo',
        cor: 'Laranja',
        marca: 'Audi',
        ano: 2023,
        imagem: 'esportivo/audiR8.png'
    },
    {
        modelo: 'Aventador',
        preco: '3.870.000',
        tipo: 'Esportivo',
        cor: 'Azul',
        marca: 'Lamborghini',
        ano: 2023,
        imagem: 'esportivo/aventador.png'
    },
    {
        modelo: '458',
        preco: '3.667.000',
        tipo: 'Esportivo',
        cor: 'Vermelho',
        marca: 'Ferrari',
        ano: 2023,
        imagem: 'esportivo/ferrari458.png'
    },
    {
        modelo: 'Artura',
        preco: '2.349.000',
        tipo: 'Esportivo',
        cor: 'Verde Lima',
        marca: 'McLaren',
        ano: 2023,
        imagem: 'esportivo/mcLarenArtura.png'
    },
    {
        modelo: 'Mustang GT',
        preco: '566.000',
        tipo: 'Esportivo',
        cor: 'Preto',
        marca: 'Ford',
        ano: 2023,
        imagem: 'esportivo/mustangGT.png'
    }
] 

mostrarAllCars = () => {
    let containerCars = document.getElementById('todosCarros')
    allCars.map((carro) => {
       if(containerCars != null) {
        containerCars.innerHTML += 
            '<div class="carros">' +
                '<img src="../imagens/' + carro.imagem + '" alt="' + carro.marca + ' ' + carro.modelo + '" />' +
                '<h4>' + carro.marca + ' ' + carro.modelo + '</h4>' +
                '<span id="price">R$' + carro.preco + '</span>' +
            '</div>'
       }
    })
}
mostrarAllCars()