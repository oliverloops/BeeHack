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

// Layout components
import Header from "../layout/Header";

// Styled components
const IconBox = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 18px;
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
              <Text p>Publicaciones</Text>
            </IconBox>
          </Col>
          <Col span={12}>
            <IconBox style={{ backgroundColor: palette.accents_2 }}>
              <Text p>Perfiles</Text>
            </IconBox>
          </Col>
        </Row>
        <Row gap={1} style={{ marginBottom: "1.25em" }}>
          <Col span={12}>
            <IconBox style={{ backgroundColor: palette.accents_2 }}></IconBox>
          </Col>
          <Col span={12}>
            <IconBox style={{ backgroundColor: palette.accents_2 }}></IconBox>
          </Col>
        </Row>
      </Grid.Container>
      <Spacer y={1} />
    </>
  );
};

export default GroupView;
