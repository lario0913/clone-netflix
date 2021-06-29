import React from 'react'
import { FaqsContainer } from '../containers/FaqsContainer'
import { FooterContainer } from '../containers/FooterContainer'
import HeaderContainer from '../containers/HeaderContainer'
import JumbotronContainer from '../containers/JumbotronContainer'

export default function Home(){
    return (
        <>
            <HeaderContainer />
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}