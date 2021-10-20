import React from 'react';
import styled from 'styled-components';
import HeaderResources from '../components/HeaderResources';
import SidebarResources from '../components/SidebarResources';
import MainResources from '../components/MainResources';

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Resources = () => {
  return (
    <>
        <div>
          <HeaderResources />
          <MainDiv>
            <SidebarResources />
            <MainResources/>
          </MainDiv>
        </div>
    </>
  )
};

export default Resources;
