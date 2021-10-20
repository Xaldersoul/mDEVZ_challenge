import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { BsChevronDown, BsChevronUp, BsFillCalendarFill, BsBook } from "react-icons/bs";
import styled from 'styled-components';

const Main = styled.div`
  max-width: 15rem;
  min-width: 15rem;
  background-color: #111111;
  padding: 2rem;
`;

const ColMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.3rem;
`;

const MenuText = styled.h2`
  font-size: .8rem;
  color: #CBCBCB;
`;

const CollpaseB = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 1.3rem;
  color: #CBCBCB;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #CBCBCB;
  margin: .5rem 0;
`;

const Text = styled.h3`
  margin: 0;
  font-size: .8rem;
  margin-left: 1rem;
`;

const SideNav = () => {
  const [onShow, setOnShow] = useState(false);

  const ListStyles = {
    padding: 0,
    margin: 0,
    display: onShow ? 'block' : 'none'
  }

  return (
    <Main>
      <ColMenu>
        <MenuText>CATEGORIES</MenuText>
        <CollpaseB onClick={() => setOnShow(!onShow)} >
          {onShow ? <BsChevronUp/> : <BsChevronDown/>  }
        </CollpaseB>
      </ColMenu>
      <ul style={ListStyles} >
        <li style={{listStyleType: "none"}}>
          <Link to='/' style={{ textDecoration: 'none' }} >
            <NavItem>
              <BsBook />
              <Text>Resources</Text>
            </NavItem>
          </Link>
        </li>
        <li style={{listStyleType: "none"}}>
          <Link to='/events' style={{ textDecoration: 'none' }} >
            <NavItem>
              <BsFillCalendarFill />
              <Text>Events</Text>
            </NavItem>
          </Link>
        </li>
      </ul>
    </Main>
  )
}

export default SideNav
