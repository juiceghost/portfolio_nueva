import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const HeaderStyles = styled.div`
    display: flex;
    flex-direction: row;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    &>ul {
        display: flex;
        flex-direction: row;
        width: 200px;
        list-style-type: none;
        justify-content: space-around; 
        align-items: center;
        margin-right: 10px;
    }
    &>h1 {
        margin-left: 10px;
    }

`;


const Header = () => (
    <HeaderStyles>
        <h1>Kristian Kjeldsen</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul>
    </HeaderStyles>
);

export default Header;



