import React from 'react';
import styled from 'styled-components';
import HeaderEvents from '../components/HeaderEvents';
import MainEvents from '../components/MainEvents';
import SidebarEvents from '../components/SidebarEvents';

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const Events = () => {
  return (
    <>
      <div>
        <HeaderEvents />
        <MainDiv>
          <SidebarEvents />
          <MainEvents/>
        </MainDiv>
      </div>
    </>
  )
};

export default Events;
