import { useState } from 'react'

export function useToppings(defaultTopping){
    const [toppings, setToppings] = useState(defaultTopping || geDefaultToppings())

    function checkTopping(index){
        const newToppings = [...toppings];
        newToppings[index].checked = !newToppings[index].checked;
        setToppings(newToppings)

        return {
            checkTopping,
            toppings
        }
    }
}

const toppingsList = [
    "Extra cheese",
    "Calabresa",
    "Catupiry",
    "bacon",
    "Onions",
    "Olives",
    "Cheddar",
    "Parmesan",
    "Chicken",
    "Border filled with catupiry"
]

function geDefaultToppings(){
    return toppingsList.map(topping => ({
       name: topping,
       checked: false 
    }))
}