const MARKETPLACE_DATA = {
  website: {
    name: "MyMarketplace",
    description: "An online marketplace similar to MercadoLibre",
    categorySector: {
      tipoOferta: [
        {
          id: 1,
          name: "Oferta del día",
          quantity: 1744,
          href: "/oferta-del-dia",
        },
        {
          id: 2,
          name: "Oferta relámpago",
          quantity: 75,
          href: "/oferta-relampago",
        },
      ],
      categorias: [
        {
          id: 101,
          name: "Accesorios para Vehículos",
          quantity: 1007,
          href: "/accesorios-vehiculos",
        },
        {
          id: 102,
          name: "Alimentos y Bebidas",
          quantity: 251,
          href: "/alimentos-bebidas",
        },
        {
          id: 103,
          name: "Animales y Mascotas",
          quantity: 34,
          href: "/animales-mascotas",
        },
        {
          id: 104,
          name: "Antigüedades y Colecciones",
          quantity: 9,
          href: "/antiguedades-colecciones",
        },
        {
          id: 105,
          name: "Arte, Librería y Mercería",
          quantity: 196,
          href: "/arte-libreria-merceria",
        },
        { id: 106, name: "Bebés", quantity: 504, href: "/bebes" },
        {
          id: 107,
          name: "Belleza y Cuidado Personal",
          quantity: 948,
          href: "/belleza-cuidado-personal",
        },
        {
          id: 108,
          name: "Cámaras y Accesorios",
          quantity: 62,
          href: "/camaras-accesorios",
        },
        {
          id: 109,
          name: "Celulares y Teléfonos",
          quantity: 236,
          href: "/celulares-telefonos",
        },
        { id: 110, name: "Computación", quantity: 466, href: "/computacion" },
        {
          id: 111,
          name: "Consolas y Videojuegos",
          quantity: 68,
          href: "/consolas-videojuegos",
        },
        { id: 112, name: "Construcción", quantity: 593, href: "/construccion" },
        {
          id: 113,
          name: "Deportes y Fitness",
          quantity: 1880,
          href: "/deportes-fitness",
        },
        {
          id: 114,
          name: "Electrodomésticos y Aires Ac.",
          quantity: 735,
          href: "/electrodomesticos-aires",
        },
        {
          id: 115,
          name: "Electrónica, Audio y Video",
          quantity: 412,
          href: "/electronica-audio-video",
        },
        { id: 116, name: "Herramientas", quantity: 629, href: "/herramientas" },
        {
          id: 117,
          name: "Hogar, Muebles y Jardín",
          quantity: 2784,
          href: "/hogar-muebles-jardin",
        },
        {
          id: 118,
          name: "Industrias y Oficinas",
          quantity: 380,
          href: "/industrias-oficinas",
        },
        {
          id: 119,
          name: "Instrumentos Musicales",
          quantity: 240,
          href: "/instrumentos-musicales",
        },
        {
          id: 120,
          name: "Joyas y Relojes",
          quantity: 212,
          href: "/joyas-relojes",
        },
        {
          id: 121,
          name: "Juegos y Juguetes",
          quantity: 1690,
          href: "/juegos-juguetes",
        },
        {
          id: 122,
          name: "Libros, Revistas y Comics",
          quantity: 150,
          href: "/libros-revistas-comics",
        },
        {
          id: 123,
          name: "Otras categorías",
          quantity: 3,
          href: "/otras-categorias",
        },
        {
          id: 124,
          name: "Ropa y Accesorios",
          quantity: 2735,
          href: "/ropa-accesorios",
        },
        {
          id: 125,
          name: "Salud y Equipamiento Médico",
          quantity: 364,
          href: "/salud-equipamiento-medico",
        },
        {
          id: 126,
          name: "Souvenirs, Cotillón y Fiestas",
          quantity: 57,
          href: "/souvenirs-cotillon-fiestas",
        },
      ],
      costoEnvio: [
        { id: 201, name: "Gratis", quantity: 10000, href: "/gratis-envio" },
      ],
      pago: [
        {
          id: 301,
          name: "Mismo precio en cuotas",
          quantity: 2307,
          href: "/mismo-precio-cuotas",
        },
      ],
      precio: [
        {
          id: 401,
          name: "Hasta $ 20.000",
          quantity: 4481,
          href: "/hasta-20000",
        },
        {
          id: 402,
          name: "$20.000 a $45.000",
          quantity: 4441,
          href: "/20000-45000",
        },
        { id: 403, name: "Más de $45.000", quantity: 5242, href: "/mas-45000" },
      ],
    },

    products: [
      {
        id: 101,
        name: "iPhone 13",
        category: "Electronics",
        subcategory: "Smartphones",
        brand: "Apple",
        priceWithoutDiscount: 999.99,
        description: "The latest iPhone with advanced features.",
        image_url:
          "https://http2.mlstatic.com/D_Q_NP_630618-MLA53007856355_122022-W.jpg",
        deal_of_the_day: true,
        free_shipping: false,
        discount: true,
        discount_percentage: 10,
      },
      {
        id: 102,
        name: "Dell XPS 13",
        category: "Electronics",
        subcategory: "Laptops",
        brand: "",
        priceWithoutDiscount: 1299.99,
        description: "Powerful and lightweight laptop for professionals.",
        image_url:
          "https://http2.mlstatic.com/D_Q_NP_630618-MLA53007856355_122022-W.jpg",
        deal_of_the_day: false,
        free_shipping: true,
        discount: false,
        discount_percentage: 0,
      },
      {
        id: 201,
        name: "Men's Leather Jacket",
        category: "Fashion",
        subcategory: "Clothing",
        brand: "FashionBrand",
        priceWithoutDiscount: 149.99,
        description: "Stylish leather jacket for men.",
        image_url:
          "https://http2.mlstatic.com/D_Q_NP_630618-MLA53007856355_122022-W.jpg",
        deal_of_the_day: true,
        free_shipping: true,
        discount: true,
        discount_percentage: 15,
      },
      {
        id: 301,
        name: "Modern Coffee Table",
        category: "Home & Living",
        subcategory: "Furniture",
        brand: "FurnitureCo",
        priceWithoutDiscount: 199.99,
        description: "Sleek and modern coffee table for your living room.",
        image_url:
          "https://http2.mlstatic.com/D_Q_NP_630618-MLA53007856355_122022-W.jpg",
        deal_of_the_day: false,
        free_shipping: false,
        discount: false,
        discount_percentage: 0,
      },
      {
        id: 402,
        name: "LG 55-inch 4K OLED TV",
        category: "Electronics",
        subcategory: "TVs",
        brand: "LG",
        priceWithoutDiscount: 1499.99,
        description: "Immersive 4K OLED TV with stunning visuals.",
        image_url:
          "https://http2.mlstatic.com/D_Q_NP_948414-MLA44201880423_112020-W.jpg",
        deal_of_the_day: true,
        free_shipping: true,
        discount: true,
        discount_percentage: 10,
      },
      {
        id: 403,
        name: "Nike React Infinity Run Flyknit",
        category: "Fashion",
        subcategory: "Shoes",
        brand: "",
        priceWithoutDiscount: 159.99,
        description:
          "Cushioned running shoes for a smooth and comfortable run.",
        image_url:
          "https://http2.mlstatic.com/D_Q_NP_794237-MLA46015793887_052021-W.jpg",
        deal_of_the_day: false,
        free_shipping: false,
        discount: false,
        discount_percentage: 0,
      },
      {
        id: 404,
        name: "Sony WH-1000XM4 Wireless Headphones",
        category: "Electronics",
        subcategory: "Audio",
        brand: "Sony",
        priceWithoutDiscount: 349.99,
        description:
          "Premium wireless headphones with industry-leading noise cancellation.",
        image_url:
          "https://http2.mlstatic.com/D_Q_NP_908944-MLA46438889154_062021-W.jpg",
        deal_of_the_day: true,
        free_shipping: true,
        discount: true,
        discount_percentage: 15,
      },
      {
        id: 405,
        name: "Calvin Klein Men's Watch",
        category: "Fashion",
        subcategory: "Watches",
        brand: "Calvin Klein",
        priceWithoutDiscount: 199.99,
        description: "Elegant and stylish watch for men.",
        image_url:
          "https://http2.mlstatic.com/D_Q_NP_925012-MLA46015637054_052021-W.jpg",
        deal_of_the_day: true,
        free_shipping: false,
        discount: false,
        discount_percentage: 0,
      },
      {
        id: 406,
        name: "Breville Barista Express Espresso Machine",
        category: "Home & Living",
        subcategory: "Appliances",
        brand: "Breville",
        priceWithoutDiscount: 599.99,
        description:
          "Professional-grade espresso machine for coffee enthusiasts.",
        image_url:
          "https://http2.mlstatic.com/D_Q_NP_764197-MLA46338177484_062021-W.jpg",
        deal_of_the_day: false,
        free_shipping: true,
        discount: true,
        discount_percentage: 8,
      },
      {
        id: 407,
        name: "ASUS ROG Strix Gaming Laptop",
        category: "Electronics",
        subcategory: "Laptops",
        brand: "ASUS",
        priceWithoutDiscount: 1699.99,
        description:
          "High-performance gaming laptop for immersive gaming experiences.",
        image_url:
          "https://http2.mlstatic.com/D_Q_NP_791170-MLA44815742838_022021-W.jpg",
        deal_of_the_day: false,
        free_shipping: false,
        discount: false,
        discount_percentage: 0,
      },
      {
        id: 408,
        name: "Kate Spade Crossbody Bag",
        category: "Fashion",
        subcategory: "Accessories",
        brand: "",
        priceWithoutDiscount: 129.99,
        description: "Chic and compact crossbody bag for everyday style.",
        image_url:
          "https://http2.mlstatic.com/D_Q_NP_734671-MLA46015788941_052021-W.jpg",
        deal_of_the_day: true,
        free_shipping: true,
        discount: true,
        discount_percentage: 12,
      },
      {
        id: 409,
        name: "Amazon Echo Dot (4th Gen)",
        category: "Electronics",
        subcategory: "Smart Home",
        brand: "",
        priceWithoutDiscount: 49.99,
        description:
          "Smart speaker with Alexa for voice control and smart home integration.",
        image_url:
          "https://http2.mlstatic.com/D_Q_NP_760167-MLA44201951315_112020-W.jpg",
        deal_of_the_day: true,
        free_shipping: true,
        discount: true,
        discount_percentage: 10,
      },
      {
        id: 410,
        name: "Levi's 501 Original Fit Jeans",
        category: "Fashion",
        subcategory: "Clothing",
        brand: "Levi's",
        priceWithoutDiscount: 79.99,
        description: "Classic and timeless jeans for a casual look.",
        image_url: "https://http2.mlstatic.com/D_Q",
        deal_of_the_day: true,
        free_shipping: true,
        discount: true,
        discount_percentage: 10,
      },
    ],

    users: [
      {
        id: 1,
        username: "john_doe",
        email: "john@example.com",
      },
      {
        id: 2,
        username: "jane_smith",
        email: "jane@example.com",
      },
    ],
  },
};

export default MARKETPLACE_DATA;
