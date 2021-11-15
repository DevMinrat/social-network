import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route } from "react-router-dom";

function App(props) {
  debugger;
  return (
    <div className="app-wrapper">
      <Header />
      <Aside />
      <div className="content">
        <Route
          path="/dialogs"
          render={() => <DialogsContainer store={props.store} />}
        />
        <Route path="/profile" render={() => <Profile store={props.store} />} />
      </div>
    </div>
  );
}

export default App;
