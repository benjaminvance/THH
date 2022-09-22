var catalog = [
    {
        _id: "00001",
        price: 50,
        stock: 12,
        title: "Chaga",
        image: "Chaga.webp",
        discount: 5,
        category: "Fruit",
    },
    {
        _id: "00002",
        price: 12,
        stock: 123,
        title: "Golden Teacher",
        image: "goldenteacher.jpeg",
        discount: 6,
        category: "Fruit",
    },
    {
        _id: "00003",
        price: 14,
        stock: 69,
        title: "Reishi",
        image: "reishi.jpeg",
        discount: 4,
        category: "Fruit",
    },
    {
        _id: "00004",
        price: 99,
        stock: 420,
        title: "Morel",
        image: "morel.jpeg",
        discount: 3,
        category: "Fruit",
    },
    {
        _id: "00005",
        price: 80,
        stock: 12,
        title: "Cordyceps",
        image: "cordyceps.jpeg",
        discount: 2,
        category: "Fruit",
    },
    {
        _id: "00006",
        price: 80,
        stock: 12,
        title: "Lion's Mane",
        image: "lionsmane.webp",
        discount: 2,
        category: "Fruit",
    },
    {
        _id: "00007",
        price: 80,
        stock: 12,
        title: "Agarikon",
        image: "agarikon.png",
        discount: 2,
        category: "Fruit",
    },
    {
        _id: "00007",
        price: 80,
        stock: 12,
        title: "Maitake",
        image: "maitake.jpeg",
        discount: 2,
        category: "Fruit",
    },
    {
        _id: "00009",
        price: 80,
        stock: 12,
        title: "Turkey Tail",
        image: "Turkeytail.jpeg",
        discount: 2,
        category: "Fruit",
    },
]

class DataService {
    getCatalog() {

        return catalog;
    }
}

export default DataService;