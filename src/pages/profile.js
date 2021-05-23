import { Row, Col, Text, Button, Spacer } from "@geist-ui/react";
import styled from "styled-components";

// Layout components
import Header from "../layout/Header";

const Profile = () => {
  return (
    <>
      <Header title={"Mi perfil"} />

      <Row gap={3}>
        <Text p>Nombre de Usuario</Text>
      </Row>
      <Row gap={3}>
        <Text p>correo@ugto.mx</Text>
      </Row>
      <Row gap={3}>
        <Text p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Row>
      <Spacer y={4} />

      <Row gap={3}>
        <Button type="success" size="small">
          Editar
        </Button>
        <Spacer x={1.2} />
        <Button type="error" size="small">
          Cerrar Sesión
        </Button>
      </Row>
    </>
  );
};

export default Profile;
