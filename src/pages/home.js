import { Row, Col, Text, Grid } from "@geist-ui/react";
import styled from "styled-components";
import me from "../static/me.jpg";

// UI components
import SearchFilter from "../components/SearchFilter";
import Card from "../components/Card";

// Styled Components
const Title = styled.h3`
  padding: 18px 18px 18px 14px;
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
      <Row style={{ padding: "1em" }}>
        <Col span={19}>
          <Title>Explora</Title>
        </Col>

        <Row gap={0.7} justify="end">
          <Col span={28} style={{ padding: "12px" }}>
            <ProfileImgContainer src={me} alt="profile-photo" />
          </Col>
        </Row>
      </Row>

      <SearchFilter />

      <Row justify="center" style={{ padding: "12px" }}>
        <Text p b size={"1.15em"}>
          Principales
        </Text>
      </Row>

      <Grid.Container gap={2} justify="center" style={{ padding: "30px" }}>
        <Row justify="center">
          <Col>
            <Grid>
              <Card />
            </Grid>
            <Grid>
              <Card />
            </Grid>
            <Grid>
              <Card />
            </Grid>
          </Col>
        </Row>
      </Grid.Container>
    </>
  );
};

export default Home;
