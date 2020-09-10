import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import signInBgImg from '../../assets/background.png'


import logoimg from '../../assets/logo.svg'

import {Container, Content, Background} from './styles'

const SignIn: React.FC = () => (
    <Container>
        <Content> 
            <img src={logoimg} alt="Logo" />

            <form>
                <h1> Faça Seu Login </h1>
                <input placeholder="E-mail" />
                <input placeholder="Senha" type="password" />

                <button type="submit">Entrar</button>

                <a href="forgot">Esqueci minha senha</a>
            </form>
            <a href="#"> <FiLogIn /> Criar Conta</a>
        </Content>
        <img src={signInBgImg} style={{ flex:1, background: 'no-repeat center', backgroundSize: 'cover' }} alt="img de fundo"/>
        {/* <Background />  */}
    </Container>
)

export default SignIn;