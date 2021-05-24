import React, { useEffect } from "react";
import * as s from "./Versions.styles";

export default function Versions({ versionQueries = [], getVersion }) {
  useEffect(() => {
    getVersion();
  }, [getVersion]);

  const VersionJSX = versionQueries.map((item, i) => {
    return (
      <s.queryContainer key={i}>
        <>{item.query_string}:</>
      </s.queryContainer>
    );
  });

  return (
    <s.headerSection>
      <s.mainHeading>Query Versions</s.mainHeading>
      {VersionJSX}
    </s.headerSection>
  );
}
