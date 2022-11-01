import profile_img from './zainab.png';
import slack from './slack-icon.svg';
import git from './git-Icon.svg';
import I4G from './I4G.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="container">
        <div className="center">
            <div className="round">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <img src={profile_img} alt="my picture"/></div>
            <h3>Junaid Zainab</h3>
        </div>
        <div className="bg-clr">
            <div><a href="https://twitter.com/junaidzainab" target="_blank" >Twitter Link</a></div>
            <div><a href="https://training.zuri.team/" target="_blank">Zuri Team</a></div>
            <div><a href="http://books.zuri.team" target="_blank">Zuri Book</a></div>
            <div><a href="https://books.zuri.team" target="_blank">Python Book</a></div>
            <div><a href="https://background.zuri.team" target="_blank">Background Check</a></div>
            <div><a href="https://books.zuri.team/design-rules" target="_blank">Design Book</a></div>
        </div>
        <div>
            <div><img src={slack} alt="slack"/></div> 
            <div><img src={git} alt="git"/></div>
        </div>
        <div>
            <h3>Zuri<span>.</span>Internship</h3>
            <h5>HNG internship 9 frontend task</h5>
            <img src={I4G} alt="I4G"/>
        </div>
    </section>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
