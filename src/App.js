import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container p-3 pt-4 mt-3">
        <div className="heading py-2">
          <h1><b>Messaging ID</b></h1>
        </div>
        <div className="progress_bar">
          <div className="bar1_detail py-1">
            <h4>Your daily plan</h4>
            <h4>70%</h4>
          </div>
          <div className="bar2_detail">
            <div className="black_bar"></div>
            <div className="white_bar "></div>
          </div>
          <div className="bar3_detail py-2">
            <p>4 to 6 completed</p>
          </div>
          <div className="cards">
            <div className="card1">
              <h3>17</h3>
              <div className="card1_detail">
                <i></i>
                <p><i class="fa-solid fa-list-check"></i>Task finished</p>
              </div>
            </div>
            <div className="card2">
              <h3>3,2</h3>
              <div className="card2_detail">
                <i></i>
                <p><i class="fa-solid fa-clock"></i>Tracked hours</p>
              </div>
            </div>
          </div>
          <h4 className="pt-4"><b>Overview</b></h4>
          <p className="text-secondary">
            Messaging ID framework development for the marketing branch and the
            publicity bureau and implemeted a draft on the framework.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
