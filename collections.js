const collection = [{
        image: "./assets/menu/cashew-chickenNoodles.png",
        name: "Cashew Chicken Noodles",
        price: "8.50€",
        description: "Sautéed chicken with asian sauce, cashew, vegetables and noodles.",
        tag: {
            name: "Lunch",
            class: "tag is-success"
        },
        veg: false

    },
    {
        image: "./assets/menu/soy-sauce-chicken-cn.jpg",
        name: "See Yao Gai (soy sauce chicken)",
        price: "9€",
        description: "Soy sauce chicken with rice, ginger, scallions, and lightly seasoned vegetables.",
        tag: {
            name: "Lunch",
            class: "tag is-success"
        },
        veg: false

    },
    {
        image: "./assets/menu/chicken-yakisoba.jpg",
        name: "Chicken Yakisoba Noodle Bowl",
        price: "8.20€",
        description: "Soba noodles with chicken, shredded carrots and cabbage.",
        tag: {
            name: "Most Popular",
            class: "tag is-primary"
        },
        veg: false

    },
    {
        image: "./assets/menu/tsukemen-noodle.jpg",
        name: "Tsukemen",
        price: "11€",
        description: "Cold ramen noodles with a separate bowl of broth, pork, shrimps, hard-boiled egg, nori, ginger, asian mushrooms.",
        tag: {
            name: "Most Popular",
            class: "tag is-primary"
        },
        veg: false

    },
    {
        image: "./assets/menu/TomatoEggDropSoup.jpg",
        name: "Egg Drop Soup With Tomato",
        price: "5.50€",
        description: "Egg drop soup with tomato scallions and coriander.",
        tag: {
            name: "Starters",
            class: "tag is-info"
        },
        veg: true

    },
    {
        image: "./assets/menu/Pan-fried-vegetarian-dumplings.jpg",
        name: "Pan-Fried Dumplings",
        price: "5.50€",
        description: "Dumplings with spinach, Pak Choi, carrot, shiitake mushroom, noodles, scallions, ginger, egg.",
        tag: {
            name: "Starters",
            class: "tag is-info"
        },
        veg: true
    },
    {
        image: "./assets/menu/Shrimp-yakisoba.jpg",
        name: "Shrimp Yakisoba",
        price: "8.80€",
        description: "Soba noodles with shrimps, onion, carrot, shiitake mushrooms, scallions and cabbage leaves.",
        tag: {
            name: "Main Dishes",
            class: "tag is-danger",
        },
        veg: false

    },
    {
        image: "./assets/menu/miso-katsu-ramen.jpg",
        name: "Miso Katsu Ramen",
        price: "8.90€",
        description: "Miso noodles with pork broth, breaded pork, hard-boiled egg, scallions and narutomaki.",
        tag: {
            name: "Main Dishes",
            class: "tag is-danger"
        },
        veg: false

    },
    {
        image: "./assets/menu/japanese_beef_yakisoba.jpeg",
        name: "Beef Yakisoba",
        price: "8.80€",
        description: "Soba noodles with beef, mushrooms, snap peas, ginger and scallions.",
        tag: {
            name: "Main Dishes",
            class: "tag is-danger"
        },
        veg: false

    },
    {
        image: "./assets/menu/bean-sprouts.jpg",
        name: "Stir-Fried Mung Sprouts",
        price: "8.50€",
        description: "Stir-fried mung bean sprouts with soy sauce, garlic, fresh chili, scallions and Sichuan peppercorns.",
        tag: {
            name: "Main Dishes",
            class: "tag is-danger"
        },
        veg: true

    },
    {
        image: "./assets/menu/cold-brewed-green-tea.jpg",
        name: "Cold Brewed Green Tea",
        price: "2€",
        description: "Cold brew sencha green tea. Served without sugar.",
        tag: {
            name: "Drinks",
            class: "tag is-warning"
        }
    },
    {
        image: "./assets/menu/water.jpg",
        name: "Water",
        price: "2€",
        description: "Need water, nothing more, nothing less? We have that too. High quality water, bottled in Belgium.",
        tag: {
            name: "Drinks",
            class: "tag is-warning"
        },
        veg: false

    },
    {
        image: "./assets/menu/Wine.jpg",
        name: "Wine of the day",
        price: "25€",
        description: "Make yourself a favor and taste one of the high quality wines carfully chosen by our specialist here at Omagi.",
        tag: {
            name: "Drinks",
            class: "tag is-warning"
        },
        veg: false

    },
    {
        image: "./assets/menu/soda.jpg",
        name: "Soda",
        price: "2.50€",
        description: "We have a big choice of soda ranging from Coke, Fanta and Sprite (diet or regular) to Japanese original Ramune soda.",
        tag: {
            name: "Drinks",
            class: "tag is-warning"
        },
        veg: false

    },
    {
        image: "./assets/menu/pineapple-buns.jpg",
        name: "Pineapple Buns",
        price: "1€",
        description: "Crispy and sweet pineapple pastry from Hong Kong. Sold individually.",
        tag: {
            name: "Desserts",
            class: "tag is-dark"
        },
        veg: false

    },
    {
        image: "assets/menu/tricolor-dango.jpg",
        name: "Tricolor Dango",
        price: "1.50€",
        description: "Japanese traditional sweetened rice flour dumplings, with natural food coloring",
        tag: {
            name: "Desserts",
            class: "tag is-dark"
        },
        veg: false

    }
];


const menuNav = [{
        link: "#lunch",
        name: "Lunch",
        class: "tag is-success"
    },
    {
        link: "#popular",
        name: "Most Popular",
        class: "tag is-primary"
    },
    {
        link: "#starters",
        name: "Starters",
        class: "tag is-info"
    },
    {
        link: "#main",
        name: "Main Dishes",
        class: "tag is-danger"
    },
    {
        link: "#drinks",
        name: "Drinks",
        class: "tag is-warning"
    },
    {
        link: "#dessert",
        name: "Desserts",
        class: "tag is-dark"
    }
];