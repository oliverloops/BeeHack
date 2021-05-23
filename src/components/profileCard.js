import React from 'react';
import styled from 'styled-components';

const ProfileCardCont = styled.div`
    background: #eaeaea;
    width: 90%;
    border-radius: 35px;
    display: grid;
    grid-template: 1fr / 40px 1fr;
    grid-column-gap: 10px;
    align-items: center;
    justify-content: center;
    padding: 5px 20px;
    box-sizing: border-box;
    h2 {
        color: #333333;
        font-size: 20px;
        margin: 0;
    }
`;

const ProfileImageCont = styled.div`
    height: 40px;
    width: 40px;
    background: #333333;
    border-radius: 30px;
    margin: 0;
    overflow: hidden;
    position: relative;
    img {
        position: absolute;
        width: 100%;
    }
`;

const ProfileCard = ({name, img}) => {
    return ( 
        <ProfileCardCont>
            <ProfileImageCont>
                { img ? <img src={`/images/${img}`} alt={`${name} Profile picture`} /> : null }
            </ProfileImageCont>
            <h2>{name}</h2>
        </ProfileCardCont>
     );
}
 
export default ProfileCard;