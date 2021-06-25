import React from 'react'
import { FaqsContainer } from '../containers/FaqsContainer'
import { FooterContainer } from '../containers/FooterContainer'
import JumbotronContainer from '../containers/JumbotronContainer'

export default function Home(){
    return (
        <>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}