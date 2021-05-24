import * as s from "./Connection.styles";
import Popup from "./../Utils/Popup/Main";

const Connection = (props) => {
  const {
    TextColor = "#FFF",
    TableData = [],
    AllConnections,
    ActiveConnection,
    switchConnection,
    onSubmit,
    deleteConnection,
  } = props;

  const TableHeadings = [
    { id: 0, name: "ID" },
    { id: 1, name: "Name" },
    { id: 2, name: "Host" },
    { id: 3, name: "Port" },
    { id: 4, name: "Database" },
    { id: 6, name: "Actions" },
  ];

  const HeadingJSX = TableHeadings.map((heading, index) => {
    const n = heading.name;
    return (
      <s.TableHeading
        key={index}
        rightAlign={n === `Status` || n === `Actions`}
        fixedWidth={n === `Actions`}
      >
        {heading.name}
      </s.TableHeading>
    );
  });
  const TableHeadingJSX = (
    <s.TableHead>
      <s.TableHeadRow>{HeadingJSX}</s.TableHeadRow>
    </s.TableHead>
  );

  const TableDataJSX = TableData.map((item, index) => {
    return (
      <s.TableRow key={index} style={{ textAlign: "center" }}>
        <s.TableData>{item.id}</s.TableData>
        <s.TableData>{item.name}</s.TableData>
        <s.TableData>
          {item.host === "host.docker.internal" ? (
            <>{"localhost"}</>
          ) : (
            <>{item.host}</>
          )}
        </s.TableData>
        <s.TableData>{item.port}</s.TableData>
        <s.TableData>{item.db_name}</s.TableData>
        <s.TableData fixedWidth={true}>
          <div style={{ padding: "2px 25px", display: "flex" }}>
            {ActiveConnection === item.id ? (
              <s.DisconnectionPill>Connected</s.DisconnectionPill>
            ) : (
              <s.ConnectionPill
                onClick={() => {
                  switchConnection(item.id);
                }}
              >
                Connect
              </s.ConnectionPill>
            )}

            <s.RemovePill onClick={() => deleteConnection(item.id)}>
              Delete
            </s.RemovePill>
          </div>
        </s.TableData>
      </s.TableRow>
    );
  });

  return (
    <>
      <s.HeaderItem>
        <Popup
          onSubmit={(e) => {
            e.preventDefault(e);
            onSubmit(e);
          }}
        />
      </s.HeaderItem>
      <s.ConnectionsContainer>
        {AllConnections.length > 0 ? (
          <s.Table TextColor={TextColor}>
            {TableHeadingJSX}
            <s.TableBody>{TableDataJSX}</s.TableBody>
          </s.Table>
        ) : (
          <div>No Existing Connections. Please Create/Add New Connection</div>
        )}
      </s.ConnectionsContainer>
    </>
  );
};

export default Connection;
