import styled from 'styled-components';
import {shade } from 'polished';
import signInBgImg from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;

    width: 100%;
    max-width:700px;

    form{
        margin: 80px 0;
        width: 340px;
        text-align: center;
    }

    h1{
        margin-bottom: 24px;
    }

    input { 
        background: #232129;
        border-radius: 10px;
        border: 2px solid #232129;
        padding: 16px;
        width: 100%;
        color: #f4ede8;

        &::placeholder {
            color: '#663000'
        }

        & + input { 
            margin-top: 8px;
        }
    }

    button {
        background: #FF9000;
        height: 56px;
        border-radius: 10px;
        border: 0;
        padding: 0 16px;
        color: #312e38;
        width: 100%;
        font-weight: 500;
        margin-top: 16px;
        transition: background-color 0.3s;

        &:hover{
            background: ${shade(0.3, '#FF9000')}
        }
    }

    a {
        color: #f4ede8;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.3s;

        &:hover{
            color: ${shade(0.2, "#f4ede8")}
        }
    }

    > a {
        color: #f4ede8;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.3s;

        display: flex;
        align-items: center;

        svg {
         margin-right: 16px;
        }

        &:hover{
            color: ${shade(0.3, '#FF9000')}
        }
    }
`;

export const Background = styled.div`   
    flex: 1;
    background: url(${signInBgImg}) no-repeat center;
    background-size: cover;
`;