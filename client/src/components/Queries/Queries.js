import * as s from "./Queries.styles";
import { useState } from "react";
import { useSnackbar } from "notistack";

const Queries = ({ executeQuery, queryResults, saveQuery }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [query, setQuery] = useState("");
  const queryResultsData = queryResults?.data;

  let headings = ["#"];
  let rowsCount = -1;

  if (queryResultsData?.length > 0) {
    Object.keys(queryResultsData[0]).map((heading) => headings.push(heading));
  }

  const sendQuery = () => {
    if (query === "") {
      enqueueSnackbar("Empty Query", {
        variant: "warning",
      });
    } else executeQuery(query);
  };
  const savingQuery = () => {
    if (query === "") {
      enqueueSnackbar("Cannot Save Empty Query", {
        variant: "warning",
      });
    } else saveQuery(query);
  };

  const clearQuery = () => {
    if (query === "") {
      enqueueSnackbar("Nothing to clear", {
        variant: "warning",
      });
    } else {
      setQuery("");
      enqueueSnackbar("Cleared", {
        variant: "info",
      });
    }
  };

  return (
    <>
      <s.headerSection>
        <s.SendPill onClick={sendQuery}>run</s.SendPill>
        <s.SavingPill onClick={savingQuery}>Save</s.SavingPill>
        <s.ClearPill onClick={clearQuery}>clear</s.ClearPill>
      </s.headerSection>
      <s.queryContainer>
        <s.textArea
          spellCheck="false"
          value={query}
          placeholder="Write your query...   |"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </s.queryContainer>

      <br />
      {queryResultsData?.length > 0 ? (
        <div
          style={{
            overflowX: "auto",
            paddingBottom: "10px",
          }}
        >
          <table
            style={{
              borderCollapse: "collapse",
              borderSpacing: 0,
              width: "100%",
            }}
          >
            <thead
              style={{
                marginBottom: "30px",
                textAlign: "left",
                color: "white",
              }}
            >
              <tr>
                {headings.map((heading, i) => (
                  <th
                    key={i}
                    style={{
                      width: "150px",
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody
              style={{
                marginBottom: "30px",
                textAlign: "left",
                color: "white",
              }}
            >
              {queryResultsData.map((item, i) => {
                rowsCount++;
                return (
                  <tr key={i}>
                    {headings.map((heading, i) =>
                      item[heading] ? (
                        <td
                          key={i}
                          style={{
                            width: "150px",
                            border: "1px solid #ddd",
                            padding: "8px",
                            marginLeft: "10px",
                          }}
                        >
                          {item[heading] ? <>{item[heading]}</> : <>{""}</>}
                        </td>
                      ) : (
                        <td
                          key={i}
                          style={{
                            width: "50px",
                            border: "1px solid #ddd",
                            padding: "8px",
                            marginLeft: "10px",
                          }}
                        >
                          {rowsCount}
                        </td>
                      )
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <>No Data to Display</>
      )}
    </>
  );
};

export default Queries;
