const PRODUCTS = [{
    id: 90,
    name: 'Calvin Clein unity sack',
    price: 299,
    image: require('../assets/products/calvinclein.jpg'),
    description: 'Calvin Klein Jeans Utility Grid Reporter , Shoulder Bags , black  Item No.: P.TA15N12301 Manufacturer item no.: K50K507202BDS'
},{
    id: 91,
    name: 'JWork from Home',
    price: 299,
    image: require('../assets/products/homeoffice.jpeg'),
    description: 'Designed with expert tailoring and all the right polish, you\'ll find everything from covetable dressy jeans to denim trousers. From classic blue denim jeans to ...'
},{
    id: 92,
    name: 'alexa',
    price: 299,
    image: require('../assets/products/alexa.jpeg'),
    description: 'Designed with expert tailoring and all the right polish, you\'ll find everything from covetable dressy jeans to denim trousers. From classic blue denim jeans to ...'
},{
    id: 93,
    name: 'blow',
    price: 299,
    image: require('../assets/products/blow.jpeg'),
    description: 'Designed with expert tailoring and all the right polish, you\'ll find everything from covetable dressy jeans to denim trousers. From classic blue denim jeans to ...'
},{
    id: 94,
    name: 'pastery',
    price: 299,
    image: require('../assets/products/pastery.jpeg'),
    description: 'Designed with expert tailoring and all the right polish, you\'ll find everything from covetable dressy jeans to denim trousers. From classic blue denim jeans to ...'
},{
    id: 95,
    name: 'sportsandleisure',
    price: 299,
    image: require('../assets/products/sportsleisure.jpeg'),
    description: 'Designed with expert tailoring and all the right polish, you\'ll find everything from covetable dressy jeans to denim trousers. From classic blue denim jeans to ...'
},{
    id: 96,
    name: 'Jean Trousers',
    price: 299,
    image: require('../assets/products/jeans.jpg'),
    description: 'Designed with expert tailoring and all the right polish, you\'ll find everything from covetable dressy jeans to denim trousers. From classic blue denim jeans to ...'
},{
    id: 97,
    name: 'Ladies blouse',
    price: 150,
    image: require('../assets/products/blouse.jpg'),
    description: 'Great Quality with Big Discounts, New women\'s styles at SHEIN, Say Hello To Them. Feed Your Need for Fashion, Next-Level Quality & Style, Shop Online Now. Bonus Point.'
},{
    id: 98,
    name: 'Exquisite ladies gown',
    price: 200,
    image: require('../assets/products/gown.jpg'),
    description: 'Shop short and long red dresses 2022, sexy red prom, cocktail, homecoming, formal and evening party dresses at Couture Candy Dark red wine.'
},{
    id: 99,
    name: 'Trainer shoes',
    price: 270,
    image: require('../assets/products/Trainers.jpg'),
    description: 'A pair of sporting black shoes. Super comfortable with silicone soles. They are waterproof, ideal for sprint and other sporting activities.'
},{
        id: 100,
        name: 'ReactProX Headset',
        price: 350,
        image: require('../assets/products/headset-100.jpg'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 101,
        name: 'FastLane Toy Car',
        price: 600,
        image: require('../assets/products/car-101.jpg'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 102,
        name: 'SweetHome Cupcake',
        price: 2,
        image: require('../assets/products/cake-102.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    }
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}