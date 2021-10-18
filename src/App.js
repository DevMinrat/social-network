import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://clipart-best.com/img/earth/earth-clip-art-23.png"
          width="80px"
        ></img>
      </header>
      <aside className="aside">
        <nav>
          <a href="#">Profile</a>
          <a href="#">Messages</a>
          <a href="#">News</a>
          <a href="#">Music</a>
          <a href="#">Settings</a>
        </nav>
      </aside>
      <div className="content">
        <div className="profile">
          <div>
            <img
              className="profile__img"
              src="https://mebel-go.ru/mebelgoer/88741402242435-oboi-1920h1080.-davaj-ne-videt-melkogo-v-zerkalnom-otrazhenii-20.jpg"
            ></img>
          </div>
          <div>ava+descr</div>
          <div>
            All posts
            <div>New post</div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
