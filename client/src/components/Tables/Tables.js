import * as s from "./Tables.styles";
const Table = ({ tables = [], selectedTable, selectedTableRows = [] }) => {
  let headings = ["#"];
  let rowsCount = -1;

  const currentSchema = tables.find((e) => e.name === selectedTable).schema;

  const SchemaJSX = currentSchema.map((item, i) => {
    headings.push(item.column_name);
    return (
      <s.schemaContainer key={i}>
        <s.schemaHeading>{item.column_name}:</s.schemaHeading>
        <s.schemaText>{item.data_type}</s.schemaText>
      </s.schemaContainer>
    );
  });

  return (
    <s.headerSection>
      <s.mainHeading>Table: {selectedTable}</s.mainHeading>
      <s.mainHeading>Schema</s.mainHeading>
      <s.schemaMainContainer>{SchemaJSX}</s.schemaMainContainer>
      <s.TableContainer>
        <s.Table>
          <s.THead>
            <tr>
              {headings.map((heading, i) => (
                <s.TH>{heading}</s.TH>
              ))}
            </tr>
          </s.THead>
          <s.TBody>
            {selectedTableRows.map((item, i) => {
              rowsCount++;
              return (
                <tr key={i}>
                  {headings.map((heading, i) =>
                    item[heading] ? (
                      <s.TableData key={i}>
                        {item[heading] ? <>{item[heading]}</> : <></>}
                      </s.TableData>
                    ) : (
                      <s.TableDataRowCount key={i}>
                        {rowsCount}
                      </s.TableDataRowCount>
                    )
                  )}
                </tr>
              );
            })}
          </s.TBody>
        </s.Table>
      </s.TableContainer>
    </s.headerSection>
  );
};

export default Table;
