import React from 'react';
import { Link } from 'react-router-dom';
import { MenuOne } from "../../common-components/MenuOne/MenuOne";
import photoprofile from "../../assets/images/danielribeiro.jpg";
import styled from 'styled-components';

const PhotoProfile = styled.img.attrs({
    src: photoprofile,
    alt: 'Profile"',
})`
    height: 145px;
`;

const titleStyle = {
    // Adicione estilos para o título, se necessário
};

const mainDivStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
};

const rowContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '20px 0',
};

const dataItemStyle = {
    margin: '0 20px',
};

const dataTitleStyle = {
    marginBottom: '5px',
    fontSize: '18px',
};

const dataTextStyle = {
    fontSize: '16px',
};

const editLinkStyle = {
    color: '#fff',
    backgroundColor: '#9356DF',
    padding: '8px 16px',
    textDecoration: 'none',
    marginTop: '10px',
    borderRadius: '4px',
};

const closeAccountStyle = {
    marginTop: '20px',
};

const closeAccountLinkStyle = {
    color: '#FF0000',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
};

export function MyData() {
    return (
        <>
            <MenuOne />
            <h1 style={titleStyle}>Minha Conta</h1>
            <div style={mainDivStyle} className="main_div">
                <div style={dataItemStyle}>
                <Link to="/EditPhoto" style={editLinkStyle}>
                        Editar
                    </Link>
                    <br/>
                    <br/><div style={dataTitleStyle}>Foto</div>
                    <PhotoProfile />
                    
                </div>

                <div style={rowContainer}>
                    <div style={dataItemStyle}>
                        <div style={dataTitleStyle}>Nome</div>
                        <p style={dataTextStyle}>Daniel Ribeiro</p>
                        <Link to="/EditName" style={editLinkStyle}>
                            Editar
                        </Link>
                    </div>

                    <div style={dataItemStyle}>
                        <div style={dataTitleStyle}>CPF</div>
                        <p style={dataTextStyle}>450.920.038-735</p>
                        <Link to="/EditCPF" style={editLinkStyle}>
                            Editar
                        </Link>
                    </div>

                    <div style={dataItemStyle}>
                        <div style={dataTitleStyle}>Celular</div>
                        <p style={dataTextStyle}>(19) 954222841</p>
                        <Link to="/EditCelular" style={editLinkStyle}>
                            Editar
                        </Link>
                    </div>

                    <div style={dataItemStyle}>
                        <div style={dataTitleStyle}>Email</div>
                        <p style={dataTextStyle}>d.ribeiro@gmail.com</p>
                        <Link to="/EditEmail" style={editLinkStyle}>
                            Editar
                        </Link>
                    </div>

                    <div style={dataItemStyle}>
                        <div style={dataTitleStyle}>Endereço</div>
                        <p style={dataTextStyle}>Avenida Tocantins 256</p>
                        <Link to="/EditAddress" style={editLinkStyle}>
                            Editar
                        </Link>
                    </div>
                </div>

                <div style={closeAccountStyle}>
                    <Link to="/CloseAccount" style={closeAccountLinkStyle}>
                        Encerrar conta
                    </Link>
                </div>
            </div>
        </>
    );
}

export default MyData;
