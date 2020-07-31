import * as React from 'react';
import * as S from '../pages/Home/styled';

type MenuProps = {
    funcao: Function;    
    funcaoButton: Function;
}

export const Menu = ({ funcao, funcaoButton }: MenuProps) => {
    return (
        <S.Menu>
            <S.Input onChange={funcao} placeholder="Pesquise por fimes, séries..." />
            <S.ButtonStore onClick={funcaoButton}>Pesquisar</S.ButtonStore>            
        </S.Menu>
    )
}
