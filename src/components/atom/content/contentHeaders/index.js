import React from "react";
import { Button } from "react-bootstrap";
import "./index.css";
import * as FaIcons from "react-icons/fa";

import { useMediaQuery } from "react-responsive";

function ContentHeader(props) {
  const { title } = props;
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      {isDesktopOrLaptop && (
        <div className="cotentHeader-container">
          <div>
            <h1 className="textColor">{title}</h1>
            <h5 style={{ color: "gray" }}>List of all personnels</h5>
          </div>
          <div className="d-flex flex-row">
            <Button className="buttonsWhite">
              <FaIcons.FaSearch color="#38bcbc" className="icons" />
              Find Personnels
            </Button>
            <Button className="buttonsPrimary">
              Add Personnels
              <FaIcons.FaPlus className="iconsRight" />
            </Button>
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div>
          <div>
            <h1 className="textColor" style={{ fontSize: "50px" }}>
              {title}
            </h1>
            <h5 style={{ color: "gray", fontSize: "25px", fontWeight: 400 }}>
              List of all personnels
            </h5>
            <div>
              <div className="d-grid gap-2">
                <Button className="buttonsWhite mb-2 d-flex align-items-center">
                  <FaIcons.FaSearch color="#38bcbc" className="icons" />
                  Find Personnels
                </Button>
              </div>
              <div className="d-grid gap-2">
                <Button className="buttonsPrimary d-flex align-items-center justify-content-between">
                  Add Personnels
                  <FaIcons.FaPlus className="iconsRight" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContentHeader;
