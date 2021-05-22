import { Row, Col, Button } from "@geist-ui/react";
import styled from "styled-components";
import me from "../static/me.jpg";

// UI components
import SearchFilter from "../components/SearchFilter";

// Styled Components
const Title = styled.h3`
  padding: 18px 18px 18px 20px;
  font-size: 1.75rem;
`;

const ProfileImgContainer = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const Home = () => {
  const activeButton = () => {
    console.log("Click!");
  };

  return (
    <>
      <Row>
        <Col span={18}>
          <Title>Explora</Title>
        </Col>

        <Row gap={0.7} justify="end">
          <Col span={28} style={{ padding: "12px" }}>
            <ProfileImgContainer src={me} alt="profile-photo" />
          </Col>
        </Row>
      </Row>
      <Row justify="center">
        <SearchFilter />
      </Row>

      <Button onClick={() => activeButton()} auto type="success" ghost>
        Click me!
      </Button>
    </>
  );
};

export default Home;
