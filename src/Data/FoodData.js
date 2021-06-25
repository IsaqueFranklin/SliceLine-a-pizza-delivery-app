export function formatPrice(price){
    return price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'brl'
    })
}

export const FoodItems = [
    {
        name: 'Cheese Pizza',
        img: '/img/cheese.jpg',
        section: 'pizza',
        price: 56
    },
    {
        name: 'Mini Pizza',
        img: '/img/minipizza.jpg',
        section: 'pizza',
        price: 23
    },
    {
        name: 'Family Pizza',
        img: '/img/family.jpg',
        section: 'pizza',
        price: 69
    },
    {
        name: 'Rucula Pizza',
        img: '/img/rucula.jpg',
        section: 'pizza',
        price: 55
    },
    {
        name: 'Pizza Slices',
        img: '/img/slices.jpg',
        section: 'pizza',
        price: 22
    },
    {
        name: 'Italian Pizza',
        img: '/img/italian.jpg',
        section: 'pizza',
        price: 70
    },
    {
        name: 'Roman Pizza',
        img: '/img/roman.jpg',
        section: 'pizza',
        price: 61
    },
    {
        name: 'Special Pizza',
        img: '/img/special.jpg',
        section: 'pizza',
        price: 78
    }
];

export const foods = FoodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = []
    }
    res[food.section].push(food)
    return res;
}, {});