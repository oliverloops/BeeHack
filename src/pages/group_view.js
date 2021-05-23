import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Grid,
  Text,
  Spacer,
  Divider,
  useTheme,
} from "@geist-ui/react";
import styled from "styled-components";
// Icons
import { ImNewspaper } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import { MdQuestionAnswer } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";

// Layout components
import Header from "../layout/Header";

// Styled components
const IconBox = styled.div`
  width: 125px;
  height: 125px;
  border-radius: 18px;
  padding: 1em 0 1em 0;
  color: #000;
  cursor: pointer;
`;

const GroupView = ({ data }) => (
  <>
    <Header title={data.name} />
    <GroupContent data={data} />
  </>
);

const GroupContent = ({ data }) => {
  const { palette } = useTheme();

  return (
    <>
      <Row gap={3} justify="center">
        <Text>{data.description}</Text>
      </Row>
      <Spacer y={1} />
      <Divider x={5} volume={2} />
      <Spacer y={2} />
      <Grid.Container gap={2} justify="center" style={{ padding: "1em" }}>
        <Row gap={1} style={{ marginBottom: "1.25em" }}>
          <Col span={12}>
            <IconBox style={{ backgroundColor: palette.accents_2 }}>
              <Row justify="center">
                <ImNewspaper size={32} />
              </Row>
              <Text p align="center">
                Publicaciones
              </Text>
            </IconBox>
          </Col>
          <Col span={12}>
            <Link to="/">
              <IconBox style={{ backgroundColor: palette.accents_2 }}>
                <Row justify="center">
                  <BsPeopleFill size={32} />
                </Row>
                <Text p align="center">
                  Perfiles
                </Text>
              </IconBox>
            </Link>
          </Col>
        </Row>
        <Row gap={1} style={{ marginBottom: "1.25em" }}>
          <Col span={12}>
            <IconBox style={{ backgroundColor: palette.accents_2 }}>
              <Row justify="center">
                <IoIosRocket size={32} />
              </Row>
              <Text p align="center">
                Proyectos
              </Text>
            </IconBox>
          </Col>
          <Col span={12}>
            <IconBox style={{ backgroundColor: palette.accents_2 }}>
              <Row justify="center">
                <MdQuestionAnswer size={32} />
              </Row>
              <Text p align="center">
                Preguntas
              </Text>
            </IconBox>
          </Col>
        </Row>
      </Grid.Container>
      <Spacer y={1} />
    </>
  );
};

export default GroupView;
