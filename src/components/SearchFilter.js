import React from "react";
import { AutoComplete, Row, Col } from "@geist-ui/react";

const SearchFilter = ({ getField }) => {
  const allOptions = [
    { label: "London", value: "london" },
    { label: "Sydney", value: "sydney" },
    { label: "Shanghai", value: "shanghai" },
  ];
  const [options, setOptions] = React.useState();
  const searchHandler = (currentValue) => {
    if (!currentValue) return setOptions([]);
    const relatedOptions = allOptions.filter((item) =>
      item.value.includes(currentValue)
    );
    setOptions(relatedOptions);
  };

  return (
    // <div className="search-container">
    //   <form>
    //     <IoMdSearch className="search-icon" size={20} />
    //     <input
    //       type="text"
    //       placeholder="Search for NASA patents"
    //       onChange={(e) => getField(e)}
    //     />
    //   </form>
    // </div>
    <Row gap={0.8} style={{ padding: "20px" }}>
      <Col span={32}>
        <AutoComplete
          size="large"
          options={options}
          placeholder="Buscar grupo..."
          onSearch={searchHandler}
        />
      </Col>
    </Row>
  );
};

export default SearchFilter;
