import React, {  useState } from "react";
import { Container } from "react-bootstrap";
import ContentBody from "../../atom/content/contentBody";
import ContentFooter from "../../atom/content/contentFooter";
import ContentHeader from "../../atom/content/contentHeaders";

function Content(props) {
  const { title } = props;
  const [limit, setLimit] = useState({ start: 0, end: 4 });

  const nextPage = () => {
    setLimit({ start: limit.start + 4, end: limit.end + 4 });
  };

  const prevPage = () => {
    setLimit({ start: limit.start - 4, end: limit.end - 4 });
  };
  return (
      <Container>
        <ContentHeader title={title} />
        <ContentBody dataLimit={limit} />
        <ContentFooter nextPage={()=>nextPage()} prevPage={()=>prevPage()} dataLimit={limit}/>
      </Container>
  );
}

export default Content;
