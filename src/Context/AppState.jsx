import AppContext from "./AppContext";

const AppState = (props) => {
  const state = {
    data: "mothefucker",
  };
  return (
    <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
  );
};

export default AppState;
