import profile_img from './zainab.png';
import slack from './slack-icon.svg';
import git from './git-Icon.svg';
import I4G from './I4G.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="Container">
        <div className="center">
            <div className="round">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <img src={profile_img} alt="my picture"/></div>
            <h3>Junaid Zainab</h3>
        </div>
        <div className="Link">
            <div className='Mrg'><a href="https://twitter.com/junaidzainab" target="_blank" >Twitter Link</a></div>
            <div className='Mrg'><a href="https://training.zuri.team/" target="_blank">Zuri Team</a></div>
            <div className='Mrg'><a href="http://books.zuri.team" target="_blank">Zuri Book</a></div>
            <div className='Mrg'><a href="https://books.zuri.team" target="_blank">Python Book</a></div>
            <div className='Mrg'><a href="https://background.zuri.team" target="_blank">Background Check</a></div>
            <div className='Mrg'><a href="https://books.zuri.team/design-rules" target="_blank">Design Book</a></div>
        </div>
        <div className="Dflex">
            <div><img src={slack} alt="slack"/></div> 
            <div><img src={git} alt="git"/></div>
        </div>
        <div className='Dflex'>
            <h3>Zuri<span>.</span>Internship</h3>
            <h5>HNG internship 9 frontend task</h5>
            <img src={I4G} alt="I4G"/>
        </div>
      </section>
    </div>
  );
}

export default App;
