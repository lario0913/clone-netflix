import React from 'react'
import { Inner } from './styles/jumbotron'

const Jumbotron = ({children, direction = 'row', ...restProps}) => {
    return (
        <Inner direction={direction}>
            <p>Take a look at this</p>
        </Inner>
    )
}

export default Jumbotron
