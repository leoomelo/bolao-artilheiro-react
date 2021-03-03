import styled from 'styled-components';

const MenuStyled = styled.div`
    height: 20vh;
    width: 100%;
    background: #3C99DC;
    color: white;
    // background: rgb(60,153,220);
    // background: linear-gradient(180deg, rgba(60,153,220,1) 0%, rgba(102,211,250,1) 55%, rgba(255,255,255,1) 100%);
`
function Menu() {
    return(
        <MenuStyled>
            Olá, Fulano
        </MenuStyled>
    )
}

export default Menu;