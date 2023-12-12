
import styled from 'styled-components';
import {
  Spaces,
} from '../../shared/DesignTokens';


import { MenuOne } from "../../common-components/MenuOne/MenuOne"
import {Button} from "../../common-components/button/Button"
import { Link } from 'react-router-dom';
import photoprofile from "../../assets/images/danielribeiro.jpg";

const PhotoProfile = styled.img.attrs({
    src: photoprofile,
    alt: 'Profile"',
  })`
    height: 145px;
  `;
  

  export function MyAccount() {
    return (
        <>
            <MenuOne />
            <h1 style={titleStyle}>Minha Conta</h1>
            <div style={mainDivStyle} className="main_div">
                <div style={perfilContainerStyle}>
                    <div style={perfilStyle} className="perfil">
                        <PhotoProfile />
                    </div>
                    <Link to="/MyData" style={editLinkStyle}>
                        Editar meu perfil
                    </Link>
                </div>
                <div style={buttonContainerStyle}>
                    <Button style={sideBySideButtonStyle}>Meus Dados</Button>
                    <Button style={sideBySideButtonStyle}>Minhas Trocas</Button>
                    <Button style={sideBySideButtonStyle}>Minhas Participações</Button>
                    <Button style={sideBySideButtonStyle}>Text4</Button>
                    <Button style={sideBySideButtonStyle}>Text5</Button>
                </div>
            </div>
        </>
    );
}

// Estilos
const titleStyle = {
};

const mainDivStyle = {
    textAlign: 'center',
};

const perfilContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
};

const perfilStyle = {
};

const editLinkStyle = {
    color: '#fff',
    backgroundColor: '#9356DF',
    padding: '8px 16px',
    textDecoration: 'none',
    marginTop: '10px',
    borderRadius: '4px',
};

const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
};

const sideBySideButtonStyle = {
    backgroundColor: '#9356DF',
    color: '#fff',
    margin: '0 5px',
    padding: '10px 20px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
};
sideBySideButtonStyle[':hover'] = {
    backgroundColor: '#7643AB',
};

export default MyAccount;

