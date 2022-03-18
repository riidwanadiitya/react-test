import React from "react";
import { Button, Container } from "react-bootstrap";
import "./index.css";
import * as IoioIcons from "react-icons/io";


function ContentFooter(props) {
  const { nextPage, prevPage, dataLimit } = props;

  return (
    <Container className="footerContent">
      <Button disabled={dataLimit.start === 0? true:false} variant="outline" className="buttonPage" onClick={()=>prevPage()}>
        <IoioIcons.IoIosArrowBack style={{ marginRight: "5px" }} />
        Previous Page
      </Button>
      <Button disabled={dataLimit.end === 28? true:false} variant="outline" className="buttonPage"  onClick={()=>nextPage()}>
        Next Page
        <IoioIcons.IoIosArrowForward style={{ marginLeft: "5px" }} />
      </Button>
    </Container>
  );
}



export default (ContentFooter);
