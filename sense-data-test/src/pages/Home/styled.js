import styled from 'styled-components';

const a = document.getElementById('root').style = `
    margin-top: -7px;    
`

export const Menu = styled.div`
    width: 100%;
    margin-left: -1%;
    height: 4rem;
    margin-top: 0;
    background: #333;
    dispay: flex;   
    align-items: center;     
`

export const Titulo = styled.h1`     
    text-align: left;
    font-size: 2rem;
    margin: 2% 0 0;
`
// Carrinho 
export const Input = styled.input`
    height: 1.5rem;  
    width: 20%;  
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    margin: 16px 1% 0 5%;    
    &:focus,
    &:active {
    outline: none;
    box-shadow: none;
}
`;

export const Body = styled.div`
    width: 100vw;    
    display: flex;        
    justify-content: center;
    flex-direction: column;   
    align-items: center;
`

// Seção dos Cards
export const Content = styled.div`
    width: 100vw;
    display: flex;    
    justify-content: center;    
    flex-direction: row;    
    margin: 1% 0 0 -1%;
    background-color: #333;   
    @media(max-width: 800px) {
        flex-direction: column;
        align-items: center;                
      } 
`;

export const Card = styled.div`
    width: 25%;    
    heigth: 40%;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;  
    color: white;
    &:hover {        
        transition: 0.5s;
        opacity: 0.75;
        background-color: black;
    }
    @media(max-width: 800px) {
        width: 60%;
      }
`;

export const Img = styled.img`
    width: 50%;  
    @media(max-width: 800px) {
        width: 80%;
      }  
`;


export const Button = styled.button`
    border: 1px solid #333;
    border-radius: .25rem ;    
    height: 2rem;    
    width: 140px;
    color: #fff;
    background: #EB2049;
    cursor: pointer;
    // &:active {
    //     outline: none;
    //     box-shadow: none;        
    // }
`;

export const ButtonStore = styled.button`
    border: 1px solid #333;
    border-radius: .25rem ;    
    height: 2rem;    
    color: #fff;
    background: #EB2049;
    cursor: pointer;
    &:active {
        outline: none;
        box-shadow: none;                
    };
    &:hover {
        transition: 0.2s;
        height: 2.5rem;        
    };
`;