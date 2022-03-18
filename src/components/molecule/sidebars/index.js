import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
import * as FaIcons from "react-icons/fa";
import { connect } from "react-redux";
import { showPage } from "../../../redux";

function Sidebars(props) {
  const { showPage, changePage } = props;
  return (
    <Container className="sidebars-container d-flex">
      <Nav defaultActiveKey="/home" className="flex-column">
        <span
          className={
            showPage === "beranda" ? "sidebars-primary" : "sidebars-link"
          }
        >
          <span className="icons">
            <FaIcons.FaHome />
          </span>
          Beranda
        </span>
        <Link
          to="/"
          name="personnel-list"
          className={
            showPage === "personnel-list" ? "sidebars-primary" : "sidebars-link"
          }
          onClick={(e) => changePage(e.target.name)}
        >
          <span className="icons">
            <FaIcons.FaUsers />
          </span>
          Personnel List
        </Link>
        <span
          className={
            showPage === "daily-attendence"
              ? "sidebars-primary"
              : "sidebars-link"
          }
        >
          <span className="icons">
            <FaIcons.FaRegCalendarAlt />
          </span>
          Daily Attendance
        </span>
      </Nav>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  showPage: state.showPage.pages,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (pageName) => dispatch(showPage(pageName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebars);
