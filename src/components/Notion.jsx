import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import { useState, useEffect } from "react";
import axios from "axios";

function Notion({ value }) {
  const [response, setResponse] = useState({});
  useEffect(() => {
    if (value !== "") {
      // const NOTION_PAGE_ID = 'Jira-f0a58af0975141848f364b86aa33ce61';
      axios.get(`https://notion-api.splitbee.io/v1/page/${value}`).then(({ data }) => {
        setResponse(data);
      });
    }
  }, [value]);

  // return Object.keys(response).length && <NotionRenderer blockMap={response} fullPage={true} />;
  return Object.keys(response).length ? (
    <NotionRenderer blockMap={response} fullPage={true} />
  ) : (
    <></>
  );
}

export default Notion;
