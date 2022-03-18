import React, { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import "./index.css";
import * as HiIcons from "react-icons/hi";
import moment from "moment";
import { useMediaQuery } from "react-responsive";

function PersonnelCard(props) {
  const { data } = props;
  const [newDate, setNewDate] = useState("");
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const formatDate = () => {
    const lastDate = data.dob.date;
    const newDate = moment(lastDate).format("DD-MM");
    setNewDate(newDate);
  };

  useEffect(() => {
    formatDate();
  }, []);

  return (
    <>
      {isDesktopOrLaptop && (
        <Card style={{ width: "18rem" }}>
          <Card.Header
            className="d-flex justify-content-between align-items-center"
            style={{ backgroundColor: "white" }}
          >
            <div>
              Personnel ID: <span className="textPrimary">{data.id.value}</span>
            </div>
            <div>
              <HiIcons.HiDotsHorizontal size={25} />
            </div>
          </Card.Header>
          <Card.Body>
            <div className="imageContainer">
              <Image
                src={data.picture.large}
                className="imageProfileContainer"
              />
            </div>
            <div style={{ marginTop: 20 }}>
              <div className="personnelData">
                <span id="dataHeader">Name:</span>
                <br />
                <span>
                  {data.name.first} {data.name.last}
                </span>
              </div>
              <div className="personnelData">
                <span id="dataHeader">Telephone:</span>
                <br />
                <span>{data.phone}</span>
              </div>
              <div className="personnelData">
                <span id="dataHeader">Birthday:</span>
                <br />
                <span>{newDate}</span>
              </div>
              <div className="personnelData">
                <span id="dataHeader">Email:</span>
                <br />
                <span>{data.email}</span>
              </div>
            </div>
          </Card.Body>
        </Card>
      )}

      {isTabletOrMobile && (
        <Card style={{ width: "90vw", marginBottom: "15px" }}>
          <Card.Header
            className="d-flex justify-content-between align-items-center"
            style={{ backgroundColor: "white" }}
          >
            <div>
              Personnel ID: <span className="textPrimary">{data.id.value}</span>
            </div>
            <div>
              <HiIcons.HiDotsHorizontal size={25} />
            </div>
          </Card.Header>
          <Card.Body className="d-flex">
            <div style={{ width: "50%" }}>
              <Image
                src={data.picture.large}
                className="imageProfileContainer2"
              />
            </div>
            <div style={{ width: "50%" }}>
              <div className="personnelData">
                <span id="dataHeader">Name:</span>
                <br />
                <span>
                  {data.name.first} {data.name.last}
                </span>
              </div>
              <div className="personnelData">
                <span id="dataHeader">Telephone:</span>
                <br />
                <span>{data.phone}</span>
              </div>
            </div>
            {/* <div className="imageContainer">
              <Image
                src={data.picture.large}
                className="imageProfileContainer2"
              />
            </div>
            <div style={{ marginTop: 20 }}>
              <div className="personnelData">
                <span id="dataHeader">Name:</span>
                <br />
                <span>
                  {data.name.first} {data.name.last}
                </span>
              </div>
              <div className="personnelData">
                <span id="dataHeader">Telephone:</span>
                <br />
                <span>{data.phone}</span>
              </div>
            </div> */}
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default PersonnelCard;
