import React, {useState} from 'react';
import styled from 'styled-components';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Checkbox from '../Checkbox';

const Main = styled.div`
  width: 20%;
  height: 100vh;
  border-right: 2px solid #DFDFDF ;
  padding: 1rem ;
`;

const CollpaseB = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 1.3rem;
`;

const ColMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.3rem;
`;

const MenuText = styled.h2`
  font-size: .8rem;
  color: #929292;
`;

const SidebarResources = () => {
  const [onShow, setOnShow] = useState(false);
  const [onShow2, setOnShow2] = useState(false);
  const [onShow3, setOnShow3] = useState(false);

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
        <Checkbox
          id="Thecnical skills"
        />
        <Checkbox
          id="Finding a job"
        />
        <Checkbox
          id="Professional growth"
        />
        <Checkbox
          id="Startups"
        />
      </ul>
      <ColMenu>
        <MenuText>TYPES</MenuText>
        <CollpaseB onClick={() => setOnShow2(!onShow2)} >
          {onShow2 ? <BsChevronUp/> : <BsChevronDown/>  }
        </CollpaseB>
      </ColMenu>
      <ColMenu>
        <MenuText>TYPES</MenuText>
        <CollpaseB onClick={() => setOnShow3(!onShow3)} >
          {onShow3 ? <BsChevronUp/> : <BsChevronDown/>  }
        </CollpaseB>
      </ColMenu>
    </Main>
  )
};

export default SidebarResources;
