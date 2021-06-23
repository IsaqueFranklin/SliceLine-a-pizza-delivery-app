import React from 'react'
import styled from 'styled-components'
import { foods } from '../Data/FoodData'


const MenuStyled = styled.div`
    height: 1000px;
    margin: 0px 400px 50px 20px;
`

export function Menu(){
    return (
        <MenuStyled>
            {foods.map(food => (
                <div>{food.name}</div>
            ))}
        </MenuStyled>
    )
}