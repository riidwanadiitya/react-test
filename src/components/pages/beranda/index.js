import { Col, Row } from "react-bootstrap";
import Sidebars from "../../molecule/sidebars";
import { useMediaQuery } from "react-responsive";

function Beranda() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {isDesktopOrLaptop && (
        <div style={{ backgroundColor: "#FAFAFB" }}>
          <Row>
            <Col sm={3}>
              <Sidebars />
            </Col>
            <Col sm={8}>
              <h1>Beranda</h1>
            </Col>
          </Row>
        </div>
      )}

      {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
    </>
  );
}

export default Beranda;
