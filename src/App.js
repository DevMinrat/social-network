import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Aside />
        <div className="content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogs={props.state.dialogsPage.dialogs}
                messages={props.state.dialogsPage.messages}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                posts={props.state.profilePage.posts}
                addPost={props.addPost}
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
