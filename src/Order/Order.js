import React from 'react'
import styled from 'styled-components'
import { DialogContent, DialogFooter, ConfirmButton } from '../FoodDialog/FoodDialog'

const OrderStyled = styled.div`
    position: fixed;
    right: 0px;
    top: 50px;
    width: 340px;
    height: calc(100% - 48px);
    background-color: white;
    z-index: 10;
    box-shadow: 4px 0px 5px 5px grey;
    display: flex;
    flex-direction: column;
`

const OrderContent = styled(DialogContent)`
    padding: 20px;
    height: 100%;
`;


export function Order({orders}){
    return (
        <OrderStyled>
                {orders.length === 0 
                ? <OrderContent> 
                    Your order's looking pretty empty.
                </OrderContent> : <OrderContent>Found {orders.length} orders</OrderContent>}
                <DialogFooter>
                    <ConfirmButton>Checkout</ConfirmButton>
                </DialogFooter>
        </OrderStyled>
    )
}