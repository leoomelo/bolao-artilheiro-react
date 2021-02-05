import styled from 'styled-components';
import image from '../../img/gramado.jpeg';

const MenuStyled = styled.div`
    height: 20vh;
    width: 100%;
`
function Menu() {
    return(
        <MenuStyled>
            <div>
                <ul class="nav nav-pills nav-fill">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Longer nav link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul> 
            </div>
        </MenuStyled>
    )
}

export default Menu;