import React from 'react';
import { BsReplyFill } from "react-icons/bs";
import styled from 'styled-components';

const Header = styled.header`
  padding: 0 1rem;
  width: 100%;
  border-bottom: 2px solid #DFDFDF ;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderEvents = () => {

  return (
    <>
      <Header>
        <Main>
          <BsReplyFill/>
          <Title>All events</Title>
        </Main>
      </Header>
    </>
  )
};

export default HeaderEvents;