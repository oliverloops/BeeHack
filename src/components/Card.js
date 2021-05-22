import { Row, Col, Text, Spacer, useTheme } from "@geist-ui/react";
import styled from "styled-components";
import python from "../static/python_logo.png";

// Styled components
const Container = styled.div`
  height: 120px;
  border-radius: 12px;
  border: 3px rgb(218, 221, 225) solid;
`;

const GroupImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Card = () => {
  const { palette } = useTheme();

  return (
    <Container style={{ backgroundColor: palette.accents_2 }}>
      <CardContent />
    </Container>
  );
};

const CardContent = () => {
  const { palette } = useTheme();
  return (
    <Row gap={0.8}>
      <Col span={6} style={{ padding: "12px" }}>
        <GroupImg src={python} alt="Group_Logo" />
      </Col>
      <Col span={20}>
        <Row align="middle">
          <Text p b size={18}>
            Título
          </Text>
          <Spacer x={5} />
          <span>Label</span>
        </Row>
        <Row align="top">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Row>
      </Col>
    </Row>
  );
};

export default Card;
