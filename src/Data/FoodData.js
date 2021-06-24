export const FoodItems = [
    {
        name: 'Cheese Pizza',
        img: '/img/cheese.jpg',
        section: 'pizza'
    },
    {
        name: 'Mini Pizza',
        img: '/img/minipizza.jpg',
        section: 'pizza'
    },
    {
        name: 'Family Pizza',
        img: '/img/family.jpg',
        section: 'pizza'
    },
    {
        name: 'Rucula Pizza',
        img: '/img/rucula.jpg',
        section: 'pizza'
    },
    {
        name: 'Pizza Slices',
        img: '/img/slices.jpg',
        section: 'pizza'
    },
    {
        name: 'Italian Pizza',
        img: '/img/italian.jpg',
        section: 'pizza'
    },
    {
        name: 'Roman Pizza',
        img: '/img/roman.jpg',
        section: 'pizza'
    },
    {
        name: 'Special Pizza',
        img: '/img/special.jpg',
        section: 'pizza'
    }
];

export const foods = FoodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = []
    }
    res[food.section].push(food)
    return res;
}, {});