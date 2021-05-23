import { Link } from "react-router-dom";
import { Row, Col } from "@geist-ui/react";
import styled from "styled-components";
import me from "../static/me.jpg";

// Styled Components
const Title = styled.h3`
  padding: 18px 18px 18px 14px;
  font-size: 1.65rem;
`;

const ProfileImgContainer = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const Header = ({ title }) => (
  <>
    <Row style={{ padding: "1em" }}>
      <Col span={19}>
        <Title>{title}</Title>
      </Col>

      <Row gap={0.7} justify="end">
        <Col span={28} style={{ padding: "12px" }}>
          <Link to="/profile">
            <ProfileImgContainer src={me} alt="profile-photo" />
          </Link>
        </Col>
      </Row>
    </Row>
  </>
);

export default Header;
