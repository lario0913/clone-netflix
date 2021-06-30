import React from 'react'
import { FaqsContainer } from '../containers/FaqsContainer'
import { FooterContainer } from '../containers/FooterContainer'
import { OptForm, Feature } from '../components'
import HeaderContainer from '../containers/HeaderContainer'
import JumbotronContainer from '../containers/JumbotronContainer'

export default function Home(){
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited Films, TV programmes and more</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email address" /> 
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}