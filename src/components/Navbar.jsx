import React, { useContext } from 'react'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserDataContext from "../context/userData";
//import Employee from '../models/userData'
// import AuthContext from "../context/AuthProvid;er";
// import { useNavigate, Link } from "react-router-dom";


import useAxiosPrivate from "../hooks/useAxiosPrivate";
import AuthContext from "../context/AuthProvider";
const GET_USER_URL = '/logout';

//const UserDataContext = createContext({});


const Navbar = () => {
    const { userData, setUserData } = useContext(UserDataContext);
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();

    //const aux = new Employee()


    

    const logout = async (e) => {
        const controller = new AbortController();
        try {
            const response = await axiosPrivate.get(GET_USER_URL, {
                signal: controller.signal
            });
            console.log(response);
            // localStorage.clear();
            // setAuth({});
            // setUserData({});
            // navigate('/');

        } catch (err) {
        }
    }
    return (<>
        <div className='header'>
            <div className='test'>
                <ul>
                    {!userData ? <li><span>Olá! <NavLink to="/login">Entre</NavLink> ou <NavLink
                        to="/register">cadastre-se</NavLink></span>
                    </li> :
                        <li><span>Olá! {userData.userData.firstName}</span>
                        </li>
                    }
                    <li> Ofertas do dia</li>
                    <li> Ajuda e contato</li>
                </ul>
                <ul>
                    <li>
                        <div><span>Idioma atual: BR Português</span>
                        </div>
                    </li>
                    <li>Vender</li>
                    <li>
                        <div> Lista de
                            itens observados
                        </div>
                    </li>
                    {!userData ? '' :
                        <li>
                            <NavLink to="/myAccount">Minha conta</NavLink>
                        </li>}
                    <li>
                        <div>
                            carrinho
                        </div>
                    </li>
                    <li>
                        <button onClick={logout}>sair</button>
                    </li>
                </ul>
            </div>
        </div>

        <Container className='container-serach'>
            <Row>
                <Col sm={2}>
                    <NavLink to="/">
                        <div className='test4'>
                            <span>Logo</span>
                            <img src='' />
                        </div>
                    </NavLink>
                </Col>
                <Col sm={9}>
                    <Row>
                        <Col sm={9}>
                            <input className='search'></input>
                        </Col>
                        <Col sm={3}>
                            <select className='select-categories'>
                                <option value="0">Todas as categorias</option>
                                <option value="20081">Antiguidades</option>
                                <option value="550">Arte</option>
                                <option value="14339">Artesanato</option>
                                <option value="1">Artigos colecionáveis</option>
                                <option value="888">Artigos esportivos</option>
                                <option value="1281">Artigos para animais</option>
                                <option value="2984">Bebê</option>
                                <option value="237">Bonecas e bichos de pelúcia</option>
                                <option value="220">Brinquedos e hobbies</option>
                                <option value="625">Câmeras e fotografia</option>
                                <option value="172008">Cartões de presente e cupons</option>
                                <option value="11700">Casa e jardim</option>
                                <option value="15032">Celulares e acessórios</option>
                                <option value="870">Cerâmica e vidro</option>
                                <option value="12576">Comércio e indústria</option>
                                <option value="58058">Computadores, tablets e redes</option>
                                <option value="6000">eBay Motors</option>
                                <option value="11232">Filmes e DVDs</option>
                                <option value="10542">Imóveis</option>
                                <option value="1305">Ingressos e experiências</option>
                                <option value="619">Instrumentos e equipamentos musicais</option>
                                <option value="281">Joias e relógios</option>
                                <option value="267">Livros</option>
                                <option value="64482">Memorabilia, cartões e itens para fãs de esportes</option>
                                <option value="45100">Memorabilia de cinema, TV e música</option>
                                <option value="11116">Moedas e cédulas</option>
                                <option value="11233">Música</option>
                                <option value="293">Produtos eletrônicos de consumo</option>
                                <option value="11450">Roupas, calçados e acessórios</option>
                                <option value="26395">Saúde e beleza</option>
                                <option value="260">Selos</option>
                                <option value="316">Serviços especializados</option>
                                <option value="3252">Viagem</option>
                                <option value="1249">Videogames e consoles</option>
                                <option value="99">Outros produtos</option>
                            </select>
                        </Col>
                    </Row>
                </Col>
                <Col sm={1}>
                    <div className='button-search'>
                        <Button>pesquisar</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </>)
}

export default Navbar
