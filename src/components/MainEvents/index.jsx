import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  width: 72vw;
  height: 100%;
  padding: 2rem 1rem;
`;

const Form = styled.div`
  width: 65%;
`;

const Title = styled.h1`
  font-size: 1rem;
  color: #DFDFDF;
  margin: 0;
`;

const SubTitle = styled.h2`
  margin: .5rem 0 1rem 0;
`;

const Text = styled.h3`
  font-size: .8rem;
`;

const Textare1 = styled.textarea`
  resize: none;
  width: 100%;
  height: 15rem;
  border: 2px solid #DFDFDF;
  border-radius: .3rem;
  font-size: 1rem;
  &:focus{
    outline: none;
  }
`;

const Input = styled.input`
  border: 2px solid #DFDFDF;
  border-radius: .3rem;
  width: 100%;
  font-size: 1rem;
  padding: .5rem;
`;

const Textare2 = styled.textarea`
  resize: none;
  width: 100%;
  height: 10rem;
  border: 2px solid #DFDFDF;
  border-radius: .3rem;
  font-size: 1rem;
  &:focus{
    outline: none;
  }
`;

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: .5rem;
`;

const Button1 = styled.input`
  border: none;
  background: transparent;
  color: gray;
  padding: 1rem;
  font-size: 1.3rem;
`;

const Button2 = styled.input`
  border: none;
  background: blue;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.3rem;
  border-radius: .3rem;
`;

const MainEvents = () => {
  return (
    <Main>
      <Form>
        <Title>Create new event</Title>
        <SubTitle>Details</SubTitle>
        <Text>About event</Text>
        <Textare1 name="" id="" cols="30" rows="10"></Textare1>
        <div>

        </div>
        <Text>Enter event link</Text>
        <Input type="text" placeholder='Copy and paste link here.' />
        <Text>Add any adition even link info</Text>
        <Textare2 name="" id="" cols="30" rows="10"></Textare2>
        <ButtonsDiv>
          <Button1 type="button" value='Save draft' />
          <Button2 type="button" value='Next'/>
        </ButtonsDiv>
      </Form>
    </Main>
  )
};

export default MainEvents;