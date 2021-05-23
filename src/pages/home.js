import React, { useContext } from "react";
import { Row, Col, Text, Grid } from "@geist-ui/react";

// UI components
import SearchFilter from "../components/SearchFilter";
import Card from "../components/Card";

// Layout components
import Header from "../layout/Header";

// Context API
import { AppContext } from "../App";

const Home = () => {
  const consumer = useContext(AppContext);
  const [storedItems, setStoredItems] = React.useState([]);
  const [filteredItems, setFilteredItems] = React.useState("");

  const getField = (e) => {
    setFilteredItems(e.target.value.toLowerCase());
  };

  const getData = async () => {
    await fetch(
      "https://ug-groups.herokuapp.com/search-groups?tag=programacion"
    )
      .catch((err) => {
        throw new Error(`Something Failed - Reason: ${err}`);
      })
      .then((res) => res.json())
      .then((data) => {
        setStoredItems([data.groups]);
        consumer.setContent(data.groups);
      });
  };

  const filtered = storedItems.map((elem) => {
    return elem.filter((items) =>
      items.name.toLowerCase().includes(filteredItems)
    );
  });

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header title={"Explora"} />
      <SearchFilter getField={getField} />

      <Row justify="center" style={{ padding: "12px" }}>
        <Text p b size={"1.15em"}>
          Principales
        </Text>
      </Row>

      <Grid.Container gap={2} justify="center" style={{ padding: "30px" }}>
        <Row justify="center">
          <Col>
            {filtered.map((elem) =>
              elem.map((item) => (
                <Grid key={item.id}>
                  <Card info={item} id={item.id} />
                </Grid>
              ))
            )}
          </Col>
        </Row>
      </Grid.Container>
    </>
  );
};

export default Home;
