import styled from 'styled-components'
import {Title} from '../Styles/title'

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`
export const FoodLabel = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, .8);
    padding: 5px;
    border-radius: 5px;
`

export const Food = styled(Title)`
    height: 100px;
    padding: 10px;
    font-size: 20px;
    background-image: ${({img}) => `url(${img});`};
    background-position: center;
    background-repeat: no repeat;
    background-size: cover;
    filter: contrast(90%);
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px grey;
    &:hover {
      cursor: pointer;
      opacity: 0.7;  
    }
`
