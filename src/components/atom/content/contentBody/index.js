import React from "react";
import { Col,  Row } from "react-bootstrap";
import PersonnelCard from "../personnelCard";
import "./index.css";
import { connect } from "react-redux";
// import { fetchUsers } from "../../../../redux";

function ContentBody(props) {
  const { users, dataLimit } = props;

  return (
    <div className="contentBody-container">
      <Row>
        {users.slice(dataLimit.start,dataLimit.end).map((data, i) => {
          return (
            <Col key={i}>
              <PersonnelCard data={data} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users.users,
});

export default connect(mapStateToProps)(ContentBody);
