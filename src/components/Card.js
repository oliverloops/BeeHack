import { Link } from "react-router-dom";
import { Row, Col, Text, Spacer, useTheme } from "@geist-ui/react";
import styled from "styled-components";
import ug from "../static/ug.jpg";

// Styled components
const Container = styled.div`
  height: 140px;
  border-radius: 12px;
  border: 3px rgb(218, 221, 225) solid;
  color: #000;
  cursor: pointer;
`;

const GroupImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 12px;
`;

const Card = ({ info }) => {
  const { palette } = useTheme();

  return (
    <Link to="/group/1">
      <Container style={{ backgroundColor: palette.accents_2 }}>
        <CardContent info={info} />
      </Container>
    </Link>
  );
};

const CardContent = ({ info }) => {
  return (
    <Row gap={0.8}>
      <Col span={6} style={{ padding: "12px" }}>
        <GroupImg src={ug} alt="Group_Logo" />
      </Col>
      <Col span={20}>
        <Row align="middle">
          <Text p b size={17}>
            {info.name}
          </Text>
          <Spacer x={1} />
          <Text p size={13}>
            tags
          </Text>
        </Row>
        <Row style={{ marginTop: "-20px" }} align="top">
          <Col>
            <p>{info.description}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Card;
