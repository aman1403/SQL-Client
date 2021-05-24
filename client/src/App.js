import { SnackbarProvider } from "notistack";
import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/RiseLoader";
import All from "./components/All";
import * as loader from "./components/All/loader";

const App = () => {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    let loaderTimer = setTimeout(() => setLoading(false), loader.delay * 1000);
    return () => {
      clearTimeout(loaderTimer);
    };
  }, []);

  return (
    <>
      {loading ? (
        <ClimbingBoxLoader
          color={loader.color}
          loading={loading}
          css={loader.override}
          size={15}
        />
      ) : (
        <SnackbarProvider
          maxSnack={2}
          autoHideDuration={3000}
          iconVariant={{
            success: "✅ ",
            error: "✖️ ",
            warning: "⚠️ ",
            info: "🟦 ",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          style={{ fontSize: 17 }}
        >
          <All />
        </SnackbarProvider>
      )}
    </>
  );
};

export default App;
