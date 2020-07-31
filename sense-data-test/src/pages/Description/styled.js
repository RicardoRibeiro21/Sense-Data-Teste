import styled from 'styled-components';

export const Menu = styled.div`
    width: 82%;
    height: 3rem;
    margin-top: 0;
    background: #333;
    dispay: flex;        
`;

export const Titulo = styled.h1`     
    text-align: left;
    font-size: 2rem;
    margin: 2% 0 0;
`;

// Carrinho 
export const Input = styled.input`
    height: 1.5rem;    
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    margin: .5rem 5%;
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
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;    
    justify-content: center;    
    flex-direction: row;    
    margin: 1% 0 0 -1%;
    background-color: #15151A;     
`;

export const Card = styled.div`
    width: 80%;        
    display: flex;   
    justify-content: center; 
    align-items: center;
    padding: 12px;  
    color: white;  
    font-family: "Segoe UI";  

    @media(max-width: 800px) {
        flex-direction: column;
        position: relative;
      }
`;

export const CardDesc = styled.div`
    width: 50%;
    margin-left: 5%; 
    @media(max-width: 800px) {
        width: 70%;
      }   
`;
export const Img = styled.img`
    width:100%;    
`;

export const Button = styled.button`
    border: 1px solid #333;
    border-radius: .25rem ;    
    height: 2rem;    
    width: 140px;
    color: #fff;
    background: #EB2049;
    cursor: pointer;
    margin: 5% 0;
`;
