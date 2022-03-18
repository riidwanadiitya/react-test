import React from "react";
import { Container, Image,  Navbar } from "react-bootstrap";
import "./index";
import { useMediaQuery } from "react-responsive";
import Sidebars from "../sidebars";

function Headbars() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {isDesktopOrLaptop && (
        <div
          className="d-flex justify-content-between px-5 align-items-center"
          style={{ boxShadow: "0px 4px 4px 0px #61C6E51A", height: "20vh" }}
        >
          <div>
            <Image
              src="https://d1.awsstatic.com/events/aws-hosted-events/2018/ASEAN/logo_gadjian.668caaac8c73023ab107fbc256ef31345f5d53a2.png"
              style={{ width: "150px" }}
            />
          </div>
          <div className="d-flex align-items-center">
            <div>
              <span>
                Hallo,{" "}
                <span className="textPrimary" style={{ fontWeight: 500 }}>
                  Gadjian User
                </span>
              </span>
            </div>
            <div className="imageProfileContainers">
              <Image
                src="https://picsum.photos/id/1011/367/267"
                roundedCircle
                width="50px"
                height="50px"
                style={{ objectFit: "cover", marginLeft: "10px" }}
              />
            </div>
          </div>
        </div>
      )}

      {isTabletOrMobile && (
        <div>
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <div className="d-flex align-items-center">
                <Navbar.Toggle
                  aria-controls="navbarScroll"
                  style={{ marginRight: "10px" }}
                />
                <Image
                  src="https://d1.awsstatic.com/events/aws-hosted-events/2018/ASEAN/logo_gadjian.668caaac8c73023ab107fbc256ef31345f5d53a2.png"
                  style={{ width: "100px" }}
                />
              </div>

              <div className="imageProfileContainers">
                <Image
                  src="https://picsum.photos/id/1011/367/267"
                  roundedCircle
                  width="50px"
                  height="50px"
                  style={{ objectFit: "cover", marginLeft: "10px" }}
                />
              </div>
              <Navbar.Collapse id="navbarScroll">
                <Sidebars />
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      )}
    </>
  );
}

export default Headbars;
