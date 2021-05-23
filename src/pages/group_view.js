import { Link } from "react-router-dom";
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

import NavBar from '../layout/NavBar';

// Layout components
import Header from "../layout/Header";

// Styled components
const IconBox = styled.div`
  width: 125px;
  height: 125px;
  border-radius: 18px;
  padding: 1em 0 1em 0;
`;

const GroupView = () => (
  <>
    <Header title={"Título del Grupo"} />
    <GroupContent />
  </>
);

const GroupContent = () => {
  const { palette } = useTheme();

  return (
    <>
      <Row gap={3} justify="center">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit amet, consectetur
          adipiscing elit
        </Text>
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
            <IconBox style={{ backgroundColor: palette.accents_2 }}>
              <Row justify="center">
                <BsPeopleFill size={32} />
              </Row>
              <Text p align="center">
                Perfiles
              </Text>
            </IconBox>
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
      <NavBar />
    </>
  );
};

export default GroupView;
