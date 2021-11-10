import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Aside />
      <div className="content">
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              dispatch={props.dispatch}
              dialogsPage={props.state.dialogsPage}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              dispatch={props.dispatch}
              profilePage={props.state.profilePage}
            />
          )}
        />
      </div>
    </div>
  );
}

export default App;
