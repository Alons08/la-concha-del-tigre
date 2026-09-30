// Array de productos actualizado según la nueva carta
const products = [
    // --- Ceviches ---
    {
        id: 1,
        name: "Ceviche Simple",
        category: "ceviches",
        price: 25,
        description: "Trozos de pescado blanco, choclo, camote, yuca y cancha.",
        image: "./images/menu/ceviche-simple.jpg",
        available: true
    },
    {
        id: 2,
        name: "Ceviche Mixto",
        category: "ceviches",
        price: 28,
        description: "Trozos de pescado blanco, pulpo, langostino, pota, choclo, camote y cancha.",
        image: "./images/menu/ceviche-mixto.jpg",
        available: true
    },
    {
        id: 3,
        name: "Ceviche de langostino",
        category: "ceviches",
        price: 30,
        description: "Langostinos frescos, choclo, camote, yuca y cancha.",
        image: "./images/menu/ceviche-de-langostino.jpg",
        available: true
    },
    {
        id: 4,
        name: "Ceviche de Conchas Negras",
        category: "ceviches",
        price: 30,
        description: "Conchas negras frescas, cebolla, choclo, camote y cancha.",
        image: "./images/menu/ceviche-de-conchas-negras.jpg",
        available: true
    },

    // --- Leche de tigre ---
    {
        id: 10,
        name: "Leche de Tigre Simple",
        category: "leche-de-tigre",
        price: 13,
        description: "Trozos de pescado blanco, choclo, chifle, cancha y chicharrón de pota.",
        image: "./images/menu/leche-de-tigre-simple.jpg",
        available: true
    },
    {
        id: 11,
        name: "Leche de Tigre Mixta",
        category: "leche-de-tigre",
        price: 15,
        description: "Pescado blanco, mixtura de mariscos, choclo, chifle, cancha y chicharrón de pota.",
        image: "./images/menu/leche-de-tigre-mixta.jpg",
        available: true
    },
    {
        id: 12,
        name: "Leche Pantera",
        category: "leche-de-tigre",
        price: 18,
        description: "Conchas negras, pescado blanco, choclo, chifle, cancha y chicharrón de pota.",
        image: "./images/menu/leche-pantera.jpg",
        available: true
    },
    {
        id: 13,
        name: "Copon Tigre",
        category: "leche-de-tigre",
        price: 20,
        description: "Copón de leche de tigre especial con pescado, mariscos, cancha y chicharrón de pota.",
        image: "./images/menu/copon-tigre.jpg",
        available: true
    },

    // --- Chicharrones ---
    {
        id: 20,
        name: "Chicharrón de Pescado",
        category: "chicharrones",
        price: 30,
        description: "Trozos de pescado blanco crocante, yuca frita, salsa criolla y tártara.",
        image: "./images/menu/chicharron-pescado.jpg",
        available: true
    },
    {
        id: 21,
        name: "Chicharrón Mixto",
        category: "chicharrones",
        price: 33,
        description: "Trozos de pescado blanco y mixtura de mariscos crocantes, yuca frita, salsa criolla y tártara.",
        image: "./images/menu/chicharron-mixto.jpg",
        available: true
    },
    {
        id: 22,
        name: "Chicharrón de Langostino",
        category: "chicharrones",
        price: 33,
        description: "Langostinos crocantes, yuca frita, salsa criolla y tártara.",
        image: "./images/menu/chicharron-de-langostino.jpg",
        available: true
    },

    // --- Combinados ---
    {
        id: 30,
        name: "Combinado",
        category: "combinados",
        price: 12,
        description: "Ceviche + Tallarín + Papa a la Huancaína.",
        image: "./images/menu/combinado.jpg",
        available: true
    },
    {
        id: 31,
        name: "Combinado Especial",
        category: "combinados",
        price: 15,
        description: "Ceviche + Patita + Tallarín + Papa a la Huancaína.",
        image: "./images/menu/combinado-especial.jpg",
        available: true
    },

    // --- Trios ---
    {
        id: 40,
        name: "Ceviche + Arroz con Mariscos + Chicharrón",
        category: "trios",
        price: 42,
        description: "Combinación de ceviche, arroz con mariscos y chicharrón de pescado.",
        image: "./images/menu/ceviche-chicharron-arroz-mariscos.jpg",
        available: true
    },
    {
        id: 41,
        name: "Ceviche + Chaufa de Mariscos + Chicharrón",
        category: "trios",
        price: 45,
        description: "Combinación de ceviche, chaufa de mariscos y chicharrón de pescado.",
        image: "./images/menu/ceviche-chicharron-chaufa-mariscos.jpg",
        available: true
    },
    {
        id: 42,
        name: "Arroz con Mariscos + Chaufa de Mariscos + Chicharrón",
        category: "trios",
        price: 45,
        description: "Combinación de arroz con mariscos, chaufa de mariscos y chicharrón de pescado.",
        image: "./images/menu/arroz-mariscos-chaufa-mariscos-chicharron.jpg",
        available: true
    },

    // --- Sudados ---
    {
        id: 50,
        name: "Sudado de Tramboyo",
        category: "sudados",
        price: 25,
        description: "Tramboyo entero, cebolla, tomate, ají amarillo en juliana, yuca y porción de arroz.",
        image: "./images/menu/sudado.jpg",
        available: true
    },
    {
        id: 51,
        name: "Sudado de Toyo",
        category: "sudados",
        price: 25,
        description: "Filete de toyo, cebolla, tomate, ají amarillo en juliana, yuca y porción de arroz.",
        image: "./images/menu/sudado.jpg",
        available: true
    },
    {
        id: 52,
        name: "Sudado de Cabrilla",
        category: "sudados",
        price: 25,
        description: "Cabrilla entera, cebolla, tomate, ají amarillo en juliana, yuca y porción de arroz.",
        image: "./images/menu/sudado.jpg",
        available: true
    },
    {
        id: 53,
        name: "Chilcano",
        category: "sudados",
        price: 15,
        description: "Concentrado de pescado caliente con cebolla china, culantro y cancha.",
        image: "./images/menu/chilcano.jpg",
        available: true
    },
    {
        id: 54,
        name: "Chilcano Mixto",
        category: "sudados",
        price: 18,
        description: "Concentrado de pescado y mariscos caliente con cebolla china y cancha.",
        image: "./images/menu/chilcano-mixto.jpg",
        available: true
    },

    // --- Parihuelas ---
    {
        id: 60,
        name: "Parihuela de Toyo",
        category: "parihuelas",
        price: 28,
        description: "Filete de toyo, mariscos, cangrejo, yuca y porción de arroz.",
        image: "./images/menu/parihuela-de-toyo.jpg",
        available: true
    },
    {
        id: 61,
        name: "Parihuela de Cabrilla",
        category: "parihuelas",
        price: 28,
        description: "Cabrilla entera, mariscos, cangrejo, yuca y porción de arroz.",
        image: "./images/menu/parihuela-de-cabrilla.jpg",
        available: true
    },
    {
        id: 62,
        name: "Parihuela de Tramboyo",
        category: "parihuelas",
        price: 28,
        description: "Tramboyo entero, mariscos, cangrejo, yuca y porción de arroz.",
        image: "./images/menu/parihuela-de-tramboyo.jpg",
        available: true
    },

    // --- Guisadas ---
    {
        id: 70,
        name: "Guisada de Toyo",
        category: "guisadas",
        price: 25,
        description: "Filete de toyo en guiso criollo tradicional, yuca y porción de arroz.",
        image: "./images/menu/guisada-de-toyo.jpg",
        available: true
    },
    {
        id: 71,
        name: "Guisada Mixta",
        category: "guisadas",
        price: 30,
        description: "Pescado y mixtura de mariscos en guiso criollo, yuca y porción de arroz.",
        image: "./images/menu/guisada-mixta.jpg",
        available: true
    },

    // --- Arroces ---
    {
        id: 80,
        name: "Arroz con Mariscos",
        category: "arroces",
        price: 30,
        description: "Arroz con mixtura de mariscos en salsa criolla especial.",
        image: "./images/menu/arroz-con-mariscos.jpg",
        available: true
    },
    {
        id: 81,
        name: "Arroz con Langostino",
        category: "arroces",
        price: 30,
        description: "Arroz aromatizado con frescos langostinos y especias de la casa.",
        image: "./images/menu/arroz-con-langostinos.jpg",
        available: true
    },
    {
        id: 82,
        name: "Chaufa de Mariscos",
        category: "arroces",
        price: 30,
        description: "Arroz salteado al wok con mixtura de mariscos y cebolla china.",
        image: "./images/menu/chaufa-de-mariscos.jpg",
        available: true
    },
    {
        id: 83,
        name: "Chaufa de Pescado",
        category: "arroces",
        price: 30,
        description: "Arroz salteado al wok con chicharrón de pescado y cebolla china.",
        image: "./images/menu/chaufa-pescado.jpg",
        available: true
    },

    // --- Fuentes ---
    {
        id: 90,
        name: "Fuente de Ceviche Simple",
        category: "fuentes",
        price: 55,
        description: "Porción familiar de ceviche de pescado blanco con sus guarniciones.",
        image: "./images/menu/fuente-de-ceviche-simple.jpg",
        available: true
    },
    {
        id: 91,
        name: "Fuente de Ceviche Mixto",
        category: "fuentes",
        price: 65,
        description: "Porción familiar de ceviche mixto con pescado y mariscos.",
        image: "./images/menu/fuente-de-ceviche-mixto.jpg",
        available: true
    },
    {
        id: 92,
        name: "Fuente de Chicharrón de Pescado",
        category: "fuentes",
        price: 60,
        description: "Porción familiar de chicharrón de pescado con yucas y salsa criolla.",
        image: "./images/menu/fuente-de-chicharron-de-pescado.jpg",
        available: true
    },
    {
        id: 93,
        name: "Fuente de Chicharrón Mixto",
        category: "fuentes",
        price: 65,
        description: "Porción familiar de chicharrón mixto con yucas y salsa criolla.",
        image: "./images/menu/fuente-de-chicharron-mixto.jpg",
        available: true
    },
    {
        id: 94,
        name: "Fuente de Arroz con Mariscos",
        category: "fuentes",
        price: 65,
        description: "Porción familiar de arroz con mariscos especial de la casa.",
        image: "./images/menu/fuente-de-arroz-con-mariscos.jpg",
        available: true
    },
    {
        id: 95,
        name: "Fuente de Chaufa de Mariscos",
        category: "fuentes",
        price: 65,
        description: "Porción familiar de chaufa de mariscos preparado al wok.",
        image: "./images/menu/fuente-de-chaufa-de-mariscos.jpg",
        available: true
    },

    // --- Platos a la Carta ---
    {
        id: 100,
        name: "Bisteck",
        category: "platos-a-la-carta",
        price: 25,
        description: "Filete de bistec a la plancha, acompañado de papas fritas y arroz.",
        image: "./images/menu/bisteck.jpg",
        available: true
    },
    {
        id: 101,
        name: "Pollo a la Plancha",
        category: "platos-a-la-carta",
        price: 25,
        description: "Filete de pechuga a la plancha con papas fritas, ensalada y arroz.",
        image: "./images/menu/pechuga-a-la-plancha.jpg",
        available: true
    },
    {
        id: 102,
        name: "Pollo Saltado",
        category: "platos-a-la-carta",
        price: 25,
        description: "Trozos de pollo salteados al wok con cebolla, tomate, papas y arroz.",
        image: "./images/menu/lomo-saltado-pollo.jpg",
        available: true
    },
    {
        id: 103,
        name: "Lomo Saltado",
        category: "platos-a-la-carta",
        price: 25,
        description: "Trozos de carne salteados al wok con cebolla, tomate, papas fritas y arroz.",
        image: "./images/menu/lomo-saltado.jpg",
        available: true
    },
    {
        id: 104,
        name: "Pato",
        category: "platos-a-la-carta",
        price: 28,
        description: "Presa de pato en salsa criolla tradicional con yuca o frijoles y arroz.",
        image: "./images/menu/pato.jpg",
        available: true
    },
    {
        id: 105,
        name: "Cabrito",
        category: "platos-a-la-carta",
        price: 28,
        description: "Seco de cabrito a la norteña con frijoles, yuca y arroz.",
        image: "./images/menu/cabrito.jpg",
        available: true
    },
    {
        id: 106,
        name: "Patita en fiambre",
        category: "platos-a-la-carta",
        price: 15,
        description: "Patita de cerdo marinada en salsa criolla tradicional norteña con yuca.",
        image: "./images/menu/patita-en-fiambre.jpg",
        available: true
    },

    // --- Ronda Marina ---
    {
        id: 110,
        name: "Ronda Marina",
        category: "ronda-marina",
        price: 80,
        description: "Ceviche + Arroz con Mariscos + Chicharrón de Pescado + 2 Opciones recomendadas por el chef.",
        image: "./images/menu/ronda-marina.jpg",
        available: true
    },

    // --- Duos ---
    {
        id: 120,
        name: "Ceviche + Arroz con Mariscos",
        category: "duos",
        price: 50,
        description: "Combinación de ceviche de pescado y arroz con mariscos.",
        image: "./images/menu/ceviche-arroz-marisco.jpg",
        available: true
    },
    {
        id: 121,
        name: "Ceviche + Chaufa de Mariscos",
        category: "duos",
        price: 50,
        description: "Combinación de ceviche de pescado y chaufa de mariscos.",
        image: "./images/menu/ceviche-chaufa-mariscos.jpg",
        available: true
    },
    {
        id: 122,
        name: "Chicharrón de Pescado + Arroz con Mariscos",
        category: "duos",
        price: 50,
        description: "Combinación de chicharrón de pescado y arroz con mariscos.",
        image: "./images/menu/chicharron-pescado-arroz-mariscos.jpg",
        available: true
    },

    // --- Bebidas ---
    {
        id: 130,
        name: "Agua San Carlos 600 ml",
        category: "bebidas",
        price: 3,
        description: "Agua de mesa sin gas 600 ml.",
        image: "./images/menu/agua-san-carlos-600ml.jpg",
        available: true
    },
    {
        id: 131,
        name: "Inka Cola 600 ml",
        category: "bebidas",
        price: 6,
        description: "Gaseosa Inka Cola personal de 600 ml.",
        image: "./images/menu/inka-cola-600ml.jpg",
        available: true
    },
    {
        id: 132,
        name: "Coca Cola 600 ml",
        category: "bebidas",
        price: 6,
        description: "Gaseosa Coca Cola personal de 600 ml.",
        image: "./images/menu/coca-cola-600ml.jpg",
        available: true
    },
    {
        id: 133,
        name: "Inka Cola 1L",
        category: "bebidas",
        price: 10,
        description: "Gaseosa Inka Cola de 1 litro.",
        image: "./images/menu/inka-cola-1l.jpg",
        available: true
    },
    {
        id: 134,
        name: "Coca Cola 1L",
        category: "bebidas",
        price: 10,
        description: "Gaseosa Coca Cola de 1 litro.",
        image: "./images/menu/coca-cola-1l.jpg",
        available: true
    },
    {
        id: 135,
        name: "Inka Cola 1.5L",
        category: "bebidas",
        price: 14,
        description: "Gaseosa Inka Cola de 1.5 litros.",
        image: "./images/menu/inka-cola-1-5l.jpg",
        available: true
    },
    {
        id: 136,
        name: "Coca Cola 1.5 L",
        category: "bebidas",
        price: 14,
        description: "Gaseosa Coca Cola de 1.5 litros.",
        image: "./images/menu/coca-cola-1-5l.jpg",
        available: true
    },
    {
        id: 137,
        name: "Pilsen Trujillo",
        category: "bebidas",
        price: 10,
        description: "Cerveza Pilsen Trujillo bien helada.",
        image: "./images/menu/cerveza-trujillo.jpg",
        available: true
    },
    {
        id: 138,
        name: "Pilsen Callao",
        category: "bebidas",
        price: 10,
        description: "Cerveza Pilsen Callao bien helada.",
        image: "./images/menu/cerveza-pilsen.jpg",
        available: true
    },
    {
        id: 139,
        name: "Cusqueña de Trigo",
        category: "bebidas",
        price: 12,
        description: "Cerveza Cusqueña de Trigo bien helada.",
        image: "./images/menu/cerveza-trigo.jpg",
        available: true
    },
    {
        id: 140,
        name: "Cusqueña Negra",
        category: "bebidas",
        price: 12,
        description: "Cerveza Cusqueña Negra bien helada.",
        image: "./images/menu/cerveza-negra.jpg",
        available: true
    },
    {
        id: 141,
        name: "Jarra de Limonada",
        category: "bebidas",
        price: 15,
        description: "Jarra de limonada natural refrescante.",
        image: "./images/menu/jarra-de-limonada.jpg",
        available: true
    },
    {
        id: 142,
        name: "Jarra de Chicha Morada",
        category: "bebidas",
        price: 15,
        description: "Jarra de chicha morada tradicional de la casa.",
        image: "./images/menu/jarra-chicha-morada.jpg",
        available: true
    },
    {
        id: 143,
        name: "Jarra de Cebada",
        category: "bebidas",
        price: 15,
        description: "Jarra de agua de cebada fresca y natural.",
        image: "./images/menu/jarra-de-cebada.jpg",
        available: true
    },
    {
        id: 144,
        name: "Jarra de Maracuyá",
        category: "bebidas",
        price: 15,
        description: "Jarra de jugo de maracuyá fresco y natural.",
        image: "./images/menu/jarra-de-maracuya.jpg",
        available: true
    }
];

// Hacer el array accesible globalmente
window.restaurantProducts = products;

const menuState = {
    category: 'all',
    search: ''
};

function normalizeText(text) {
    return (text || '').toLowerCase().trim();
}

function getFilteredProducts(category, searchText) {
    const normalizedSearch = normalizeText(searchText);

    return products.filter(product => {
        const matchesCategory = category === 'all' || product.category === category;
        const matchesSearch = !normalizedSearch || normalizeText(product.name).includes(normalizedSearch);

        return matchesCategory && matchesSearch;
    });
}

function updateActiveFilterButton(category) {
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.classList.toggle('active', button.dataset.category === category);
    });
}

function renderProducts(category = menuState.category, searchText = menuState.search) {
    const menuItemsContainer = document.getElementById('menu-items');
    if (!menuItemsContainer) return;

    menuItemsContainer.innerHTML = '';

    const filteredProducts = getFilteredProducts(category, searchText);
    const hasSearchText = Boolean(normalizeText(searchText));

    const noResultsMessage = hasSearchText
        ? category === 'all'
            ? 'No se encontraron productos con ese nombre'
            : 'No se encontraron productos con ese nombre en esta categoría'
        : 'No hay productos disponibles en esta categoría';

    if (filteredProducts.length === 0) {
        menuItemsContainer.innerHTML = `
            <div class="no-products">
                <i class="fas fa-utensils"></i>
                <p>${noResultsMessage}</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'menu-item';
        productElement.innerHTML = `
            <div class="item-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${!product.available ? '<span class="sold-out">Agotado</span>' : ''}
            </div>
            <div class="item-info">
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <span class="price">S/ ${product.price.toFixed(2)}</span>
                ${product.available ? `
                <div class="item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${product.id}">-</button>
                        <input type="number" class="quantity-input" value="1" min="1" data-id="${product.id}">
                        <button class="quantity-btn plus" data-id="${product.id}">+</button>
                    </div>
                    <button class="add-to-cart" data-id="${product.id}">
                        Añadir al carrito
                    </button>
                </div>
                ` : ''}
            </div>
        `;
        menuItemsContainer.appendChild(productElement);
    });
}

function setupFilters() {
    const menuFilters = document.querySelector('.menu-filters');
    const searchInput = document.getElementById('menu-search');

    if (menuFilters) {
        menuFilters.addEventListener('click', function(event) {
            const button = event.target.closest('.filter-btn');
            if (!button) return;

            menuState.category = button.dataset.category || 'all';
            menuState.search = '';

            if (searchInput) {
                searchInput.value = '';
            }

            updateActiveFilterButton(menuState.category);
            button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            renderProducts();
        });

        // Soporte de arrastre con el mouse en desktop
        let isDown = false;
        let startX;
        let scrollLeft;

        menuFilters.addEventListener('mousedown', (e) => {
            isDown = true;
            menuFilters.style.cursor = 'grabbing';
            startX = e.pageX - menuFilters.offsetLeft;
            scrollLeft = menuFilters.scrollLeft;
        });

        menuFilters.addEventListener('mouseleave', () => {
            isDown = false;
            menuFilters.style.cursor = 'default';
        });

        menuFilters.addEventListener('mouseup', () => {
            isDown = false;
            menuFilters.style.cursor = 'default';
        });

        menuFilters.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - menuFilters.offsetLeft;
            const walk = (x - startX) * 1.5;
            menuFilters.scrollLeft = scrollLeft - walk;
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            menuState.search = this.value;
            renderProducts();
        });
    }
}

function setupProductEvents() {
    // Evento delegado para controles de cantidad
    document.addEventListener('click', function(e) {
        // Control de cantidad
        const quantityBtn = e.target.closest('.quantity-btn');
        if (quantityBtn) {
            const input = quantityBtn.parentElement.querySelector('.quantity-input');
            let value = parseInt(input.value);
            
            if (quantityBtn.classList.contains('minus') && value > 1) {
                input.value = value - 1;
            } else if (quantityBtn.classList.contains('plus')) {
                input.value = value + 1;
            }
            return; // Salir para no procesar el clic como add-to-cart
        }
        
        // Evento para añadir al carrito
        const addToCartBtn = e.target.closest('.add-to-cart');
        if (addToCartBtn) {
            const productId = parseInt(addToCartBtn.dataset.id);
            const product = window.restaurantProducts.find(p => p.id === productId);
            
            if (product) {
                const quantityInput = addToCartBtn.closest('.item-actions').querySelector('.quantity-input');
                const quantity = parseInt(quantityInput.value) || 1;
                
                // Disparar evento personalizado con la cantidad correcta
                const event = new CustomEvent('productAddedToCart', {
                    detail: { product, quantity }
                });
                document.dispatchEvent(event);
                
                // Mostrar feedback visual
                const notification = document.createElement('div');
                notification.className = 'add-to-cart-feedback';
                notification.textContent = `+${quantity}`;
                addToCartBtn.appendChild(notification);
                
                setTimeout(() => {
                    notification.remove();
                }, 1000);
            }
        }
    });
}

function initProducts() {
    menuState.category = 'all';
    menuState.search = '';

    updateActiveFilterButton(menuState.category);
    renderProducts();
    setupFilters();
    setupProductEvents();
}

document.addEventListener('DOMContentLoaded', initProducts);