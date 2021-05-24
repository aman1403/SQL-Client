import React, { useEffect } from "react";
import * as s from "./History.styles";

export default function History({ historicalQueries = [], getHistory }) {
  useEffect(() => {
    getHistory();
  }, [getHistory]);

  const HistoryJSX = historicalQueries.map((item, i) => {
    return (
      <s.queryContainer key={i}>
        <>{item.query_string}:</>
      </s.queryContainer>
    );
  });

  return (
    <s.headerSection>
      <s.mainHeading>Query History</s.mainHeading>
      {HistoryJSX}
    </s.headerSection>
  );
}
