import * as s from "./Index.styles";
import { useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

// Components
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import Main from "../Main/Main";

// Utils
import sidebarMenuItems from "../Utils/SidebarMenuItems";

const BASE_URL = `http://localhost:5000`;
const Index = () => {
  // State
  const [selected, setSelectedMenuItem] = useState(sidebarMenuItems[0].name);
  const [refreshConnection, setRefreshConnection] = useState(0);
  const [AllConnections, setAllConnections] = useState([]);
  const [ActiveConnection, setActiveConnection] = useState(null);
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState("");
  const [selectedTableRows, setSelectedTableRows] = useState([]);
  const [historicalQueries, setHistoricalQueries] = useState([]);
  const [versionQueries, setVersionQueries] = useState([]);
  const [queryStatus, setQueryStatus] = useState(false);
  const [queryResults, setQueryResults] = useState({
    message: "",
    data: [],
  });

  const { enqueueSnackbar } = useSnackbar();

  // Handlers
  const updateMenuItem = (index) => {
    setSelectedMenuItem(sidebarMenuItems[index].name);
  };

  const switchConnection = (id) => {
    axios.get(`${BASE_URL}/connections/${id}`).then((res) => {
      const { success, message, data } = res.data;
      if (success) {
        setActiveConnection(id);
        setTables(data);
      } else
        enqueueSnackbar(message, {
          variant: "error",
        });
    });
  };

  const changeSelectedTable = (name) => {
    setSelectedMenuItem(`Tables`);
    setSelectedTable(name);
    const data = {
      query_string: `SELECT * from ${name}`,
    };
    axios.post(`${BASE_URL}/queries`, data).then((res) => {
      const { success, message, data } = res.data;
      if (success) setSelectedTableRows(data);
      else
        enqueueSnackbar(message, {
          variant: "error",
        });
    });
  };

  const executeQuery = (query) => {
    const data = { query_string: query };
    axios.post(`${BASE_URL}/queries`, data).then((res) => {
      const { success, data } = res.data;
      if (success) {
        setQueryStatus(success);
        setQueryResults({
          message: "",
          data: data,
        });
        switchConnection(ActiveConnection);
        enqueueSnackbar("Query Executed", {
          variant: "success",
        });
      } else {
        setQueryResults({
          message: data.message,
          data: data,
        });
        setQueryStatus(success);
        enqueueSnackbar(data.message, {
          variant: "error",
        });
      }
    });
  };

  const saveQuery = (query) => {
    const data = { query_string: query };
    axios.post(`${BASE_URL}/queries/versions`, data).then((res) => {
      const { success, message, data } = res.data;
      if (success) {
        setQueryStatus(success);
        setQueryResults({
          message: "",
          data: data,
        });
        switchConnection(ActiveConnection);
        enqueueSnackbar("Query Saved", {
          variant: "success",
        });
      } else {
        setQueryResults({
          message: message,
          data: data,
        });
        setQueryStatus(success);
        enqueueSnackbar(message, {
          variant: "error",
        });
      }
    });
  };

  const onSubmit = (e) => {
    e.preventDefault(e);
    let host = e.target.host.value;
    if (host === `localhost` || host === "127.0.0.1") {
      host = `host.docker.internal`;
    }

    const data = {
      user: e.target.user.value,
      host: host,
      port: e.target.port.valueAsNumber,
      password: e.target.password.value,
      database: e.target.database.value,
      name: e.target.name.value,
    };
    axios.post(`${BASE_URL}/connections`, data).then((res) => {
      const { success, message } = res.data;
      if (success) setRefreshConnection((prevCount) => prevCount + 1);
      else
        enqueueSnackbar(message, {
          variant: "error",
        });
    });
  };

  const deleteConnection = (id) => {
    axios.delete(`${BASE_URL}/connections/${id}`).then((res) => {
      const { success, message } = res.data;
      if (success) setRefreshConnection((prevCount) => prevCount - 1);
      else
        enqueueSnackbar(message, {
          variant: "error",
        });
    });
  };

  const getHistory = () => {
    axios.get(`${BASE_URL}/queries`).then((res) => {
      const { success, message, data } = res.data;
      if (success) setHistoricalQueries(data);
      else
        enqueueSnackbar(message, {
          variant: "error",
        });
    });
  };

  const getVersion = () => {
    axios.get(`${BASE_URL}/queries?version=true`).then((res) => {
      const {
        success,
        message = `Could not fetch Saved Queries`,
        data,
      } = res.data;
      if (success) setVersionQueries(data);
      else
        enqueueSnackbar(message, {
          variant: "error",
        });
    });
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/connections`).then((res) => {
      const { success, message, connections } = res.data;
      if (success) {
        setAllConnections(connections);
      } else
        enqueueSnackbar(message, {
          variant: "error",
        });
    });
  }, [enqueueSnackbar, refreshConnection]);

  return (
    <s.App>
      <Sidebar
        menuItems={sidebarMenuItems}
        selectedMenuItem={selected}
        updateMenuItem={updateMenuItem}
        ActiveConnection={ActiveConnection}
        switchConnection={switchConnection}
        AllConnections={AllConnections}
        tables={tables}
        selectedTable={selectedTable}
        changeSelectedTable={changeSelectedTable}
        selectedTableRows={selectedTableRows}
      />
      <Main
        selectedMenuItem={selected}
        updateMenuItem={updateMenuItem}
        ActiveConnection={ActiveConnection}
        switchConnection={switchConnection}
        AllConnections={AllConnections}
        tables={tables}
        selectedTable={selectedTable}
        changeSelectedTable={changeSelectedTable}
        selectedTableRows={selectedTableRows}
        executeQuery={executeQuery}
        saveQuery={saveQuery}
        queryStatus={queryStatus}
        queryResults={queryResults}
        onSubmit={onSubmit}
        deleteConnection={deleteConnection}
        historicalQueries={historicalQueries}
        getHistory={getHistory}
        versionQueries={versionQueries}
        getVersion={getVersion}
      />
    </s.App>
  );
};

export default Index;
