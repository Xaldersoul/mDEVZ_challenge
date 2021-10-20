import React, {useState} from 'react';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import styled from 'styled-components';

const Main = styled.div`
  width: 25%;
  height: 20rem;
  margin: 1rem;
`;

const Image = styled.img`
  width: 100%;
  border-radius: .3rem;
`;

const Title = styled.h1`
  margin: .5rem 0;
  font-size: 1rem;
  text-align: center;
`;

const Name = styled.h2`
  font-size: .7rem;
  margin: 0;
`;

const NameDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Portrait = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 2rem;
  margin-right: .5rem;
`;

const FavButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ResourceComponent = ({ title, name }) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <Main>
      <Image src="/paisaje.jpg" alt="" />
      <Title>{title}</Title>
      <ProfileDiv>
        <NameDiv>
          <Portrait src="/paisaje.jpg" alt="" />
          <Name>{name}</Name>
        </NameDiv>
        <FavButton onClick={() => setFavorite(!favorite)} >
          {favorite ? <IoMdHeart/> : <IoMdHeartEmpty/>}
        </FavButton>
      </ProfileDiv>
    </Main>
  )
};

export default ResourceComponent;
