import Header from "../layout/Header";
import ProfileCard from "../components/profileCard";
import styled from "styled-components";
import NavBar from "../layout/NavBar";

const ProfileListCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  span {
    font-weight: bold;
    font-size: 20px;
    color: #333333;
  }
`;

const ListMainCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  div {
    margin-top: 20px;
    div {
      margin: 0;
    }
    &:first-child {
      margin-top: 0;
    }
  }
`;

const ProfileList = () => {
  const profiles = [
    {
      name: "Mark Zuckerberg",
      img: "mark.jpg",
    },
    {
      name: "Bill Gates",
      img: "bill.jpg",
    },
    {
      name: "Elon Musk",
      img: "elon.jpg",
    },
    {
      name: "Cepillin",
      img: "cepillin.jpg",
    },
    {
      name: "El bicho",
      img: "bisho.jpg",
    },
  ];

  return (
    <div>
      <Header title={"Perfiles"} />
      <ProfileListCont>
        <span>Miembros del grupo:</span>
        <ListMainCont>
          {profiles.map((profile, id) => {
            return (
              <ProfileCard key={id} name={profile.name} img={profile.img} />
            );
          })}
        </ListMainCont>
      </ProfileListCont>
      <NavBar />
    </div>
  );
};

export default ProfileList;
