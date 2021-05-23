import React from "react";
import { Link } from "react-router-dom";
import { Row, Text, Button, Spacer } from "@geist-ui/react";

// Layout components
import Header from "../layout/Header";
import NavBar from "../layout/NavBar";

const Profile = () => {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    let res = await fetch(
      `https://ug-groups.herokuapp.com/show-profile?id=60a98b27b16cdb718ed5fadf`,
      {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res
      .json()
      .catch((err) => {
        throw new Error("Request Failed :( " + "cause: " + err);
      })
      .then((data) => setUser(data));
  }

  return (
    <>
      <Header title={"Mi perfil"} />

      <Row gap={3}>
        <Text p b>
          Nombre: &nbsp;
        </Text>
        <Text p size={18}>{`${user.name} ${user.lastName}`}</Text>
      </Row>
      <Row gap={3}>
        <Text p b>
          Correo: &nbsp;
        </Text>
        <Text p size={18}>
          {user.email}
        </Text>
      </Row>
      <Row gap={3}>
        <Text p size={18}>
          {user.description}
        </Text>
      </Row>
      <Spacer y={4} />

      <Row gap={3}>
        <Button type="success" size="small">
          Editar
        </Button>
        <Spacer x={1.2} />
        <Link to="/login">
          <Button type="error" size="small">
            Cerrar Sesión
          </Button>
        </Link>
      </Row>
      <NavBar />
    </>
  );
};

export default Profile;
