import React from 'react';
import styled from 'styled-components';
import Radial from '../Radial';

const Main = styled.div`
  width: 20%;
  height: 100vh;
  border-right: 2px solid #DFDFDF ;
  padding: 2rem ;
`;

const SidebarEvents = () => {

  return (
    <Main>
      <Radial id='1' label='example' value='1' name='cosa'/>
      <Radial id='2' label='example' value='2' name='cosa'/>
      <Radial id='3' label='example' value='3' name='cosa'/>
      <Radial id='4' label='example' value='4' name='cosa'/>
      <Radial id='5' label='example' value='5' name='cosa'/>
    </Main>
  )
};

export default SidebarEvents;