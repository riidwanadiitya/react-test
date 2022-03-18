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
        <Link
          to="/"
          name="beranda"
          className={
            showPage === "beranda" ? "sidebars-primary" : "sidebars-link"
          }
          onClick={(e) => changePage(e.target.name)}
        >
          <span className="icons">
            <FaIcons.FaHome />
          </span>
          Beranda
        </Link>
        <Link
          to="/personnel-list"
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
        <Link
          to="/daily-attendence"
          name="daily-attendence"
          className={
            showPage === "daily-attendence"
              ? "sidebars-primary"
              : "sidebars-link"
          }
          onClick={(e) => changePage(e.target.name)}
        >
          <span className="icons">
            <FaIcons.FaRegCalendarAlt />
          </span>
          Daily Attendance
        </Link>
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
