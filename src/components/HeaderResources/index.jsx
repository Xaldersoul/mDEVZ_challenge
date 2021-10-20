import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  padding: 0 1rem;
  border-bottom: 2px solid #DFDFDF ;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const Button = styled.button`
  border: none;
  padding: 0;
  color: #DFDFDF;
  background-color: transparent;
  margin: 0 .5rem;
  margin-bottom: -2px;
`;

const ButtonText = styled.h2`
  font-size: 1rem;
`;

const ButtonActive = styled.button`
  border: none;
  padding: 0;
  color: #31A0FC;
  background-color: transparent;
  margin-right: .5rem;
  border-bottom: 2px solid #31A0FC;
  margin-bottom: -2px;
`;

const HeaderResources = () => {

  return (
    <>
      <Header>
        <div>
          <Title>Resources</Title>
        </div>
        <div>
          <ButtonActive>
            <ButtonText>Explore resources</ButtonText>
          </ButtonActive>
          <Button>
            <ButtonText>Saved</ButtonText>
          </Button>
        </div>
      </Header>
    </>
  )
};

export default HeaderResources;
