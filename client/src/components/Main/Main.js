import * as s from "./Main.styles";
import Connection from "./../Connections/Connection";
import Table from "./../Tables/Tables";
import Queries from "./../Queries/Queries";
import Versions from "./../Versions/Versions";
import History from "./../History/History";

const Main = ({
  ActiveConnection = null,
  AllConnections = [],
  switchConnection,
  selectedMenuItem,
  tables,
  selectedTable,
  selectedTableRows,
  executeQuery,
  saveQuery,
  queryStatus,
  queryResults,
  onSubmit,
  deleteConnection,
  historicalQueries,
  getHistory,
  versionQueries,
  getVersion,
}) => {
  const menuItemsDisplay = () => {
    switch (selectedMenuItem) {
      case "Connections":
        return (
          <Connection
            AllConnections={AllConnections}
            TableData={AllConnections}
            TextColor="#000"
            ActiveConnection={ActiveConnection}
            switchConnection={switchConnection}
            onSubmit={onSubmit}
            deleteConnection={deleteConnection}
          />
        );
      case "Queries":
        return (
          <Queries
            executeQuery={executeQuery}
            saveQuery={saveQuery}
            queryStatus={queryStatus}
            queryResults={queryResults}
          />
        );
      case "Saved Version":
        return (
          <Versions versionQueries={versionQueries} getVersion={getVersion} />
        );
      case "History":
        return (
          <History
            historicalQueries={historicalQueries}
            getHistory={getHistory}
          />
        );

      default:
        return (
          <Table
            tables={tables}
            selectedTable={selectedTable}
            selectedTableRows={selectedTableRows}
          />
        );
    }
  };

  return (
    <s.MainContainer>
      <s.InnerContainer>{menuItemsDisplay()}</s.InnerContainer>
    </s.MainContainer>
  );
};

export default Main;
