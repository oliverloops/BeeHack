import { Row, Col, Text, Grid } from "@geist-ui/react";

// UI components
import SearchFilter from "../components/SearchFilter";
import Card from "../components/Card";

// Layout components
import Header from "../layout/Header";
import NavBar from '../layout/NavBar';

const Home = () => {
  return (
    <>
      <Header title={"Explora"} />
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
      <NavBar />
    </>
  );
};

export default Home;
