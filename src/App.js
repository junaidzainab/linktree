import profile_img from './zainab.png';
import slack from './slack-icon.svg';
import git from './git-Icon.svg';
import I4G from './I4G.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="Container">
        <div className="">
          <img src={profile_img} alt="my picture"className="Profile_img"/>
            <h3 className='Twiter'>Junaid Zainab</h3>
            <h3 className='Slack'>junaidzainab</h3>
        </div>
        <div className="">
            <div className='Mrg'><a href="https://twitter.com/junaidzainab" target="_blank" >Twitter Link</a></div>
            <div className='Mrg' id="btn-zuri"><a href="https://training.zuri.team/" target="_blank">Zuri Team</a></div>
            <div className='Mrg' id="book"><a href="http://books.zuri.team" target="_blank">Zuri Book</a></div>
            <div className='Mrg' id="book_python"><a href="https://books.zuri.team" target="_blank">Python Book</a></div>
            <div className='Mrg' id="pitch"><a href="https://background.zuri.team" target="_blank">Background Check</a></div>
            <div className='Mrg' id="book_design"><a href="https://books.zuri.team/design-rules" target="_blank">Design Book</a></div>
        </div>
        <div className='Dflex Wit'>
            <div><img src={slack} alt="slack"/></div> 
            <div><img src={git} alt="git"/></div>
        </div>
        <div className='Dflex'>
            <h3 className='Font-18'>Zuri<span className='Clr-red'>.</span>Internship</h3>
            <p className='Font-13'>HNG Internship 9 Frontend Task</p>
            <img src={I4G} alt="I4G"/>
        </div>
      </section>
    </div>
  );
}

export default App;
