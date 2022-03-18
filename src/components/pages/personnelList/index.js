import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Content from "../../molecule/content";
import Sidebars from "../../molecule/sidebars";
import { connect } from "react-redux";
import { fetchUsers } from "../../../redux";
import { useMediaQuery } from "react-responsive";
import ContentResponsive from "../../molecule/contentResponsive";

function PersonnelList(props) {
  const { fetchUsers, userData } = props;

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    fetchUsers(28);
  }, [fetchUsers]);

  return (
    <>
      {isDesktopOrLaptop && (
        <div style={{ backgroundColor: "#FAFAFB" }}>
          <Row>
            <Col sm={3}>
              <Sidebars />
            </Col>
            <Col sm={9}>
              {userData.loading ? (
                <h2>Loading</h2>
              ) : userData.error ? (
                <h2>{userData.error}</h2>
              ) : (
                <Content title="Personnel List" />
              )}

              {/* <Content title="Personnel List" /> */}
            </Col>
          </Row>
        </div>
      )}

      {isTabletOrMobile && <ContentResponsive title="Personnel List"/>}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.users.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (limit) => dispatch(fetchUsers(limit)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonnelList);
