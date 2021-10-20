import React from 'react';
import styled from 'styled-components';
import ResourceComponent from '../ResourceComponent';

const Main = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

const MainResources = () => {
  return (
    <Main>
      <ResourceComponent title='Title of the image 1' name='Benjamin Guerra' />
      <ResourceComponent title='Title of the image 1' name='Benjamin Guerra' />
      <ResourceComponent title='Title of the image 1' name='Benjamin Guerra' />
      <ResourceComponent title='Title of the image 1' name='Benjamin Guerra' />
      <ResourceComponent title='Title of the image 1' name='Benjamin Guerra' />
    </Main>
  )
};

export default MainResources;
