import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faTasks, faSearch, faClock, faCloudSun, faCalendarDay, faSun, faSuitcase, faScaleBalanced, faCheckSquare, faFileText, faTv, faArchive } from "@fortawesome/free-solid-svg-icons";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function CardsContainer() {
  const navigate = useNavigate()
  const clickHandler = () => { navigate('/members') }

  const items = [
    {
      title: "MEMBER",
      description: "Lorem ipsum dolor sit amet,consectetur adipising elit."
    },
    {
      title: "HOUSE BUSINESS",
      description: "Lorem ipsum dolor sit amet,consectetur adipising elit."
    },
    {
      title: "COMITTEE",
      description: "Lorem ipsum dolor sit amet,consectetur adipising elit."
    },
   
    {
      title: "BOARD",
      description: "Lorem ipsum dolor sit amet,consectetur adipising elit."
    }
    ,
    {
      title: "REMOTE ACCESS",
      description: "Lorem ipsum dolor sit amet,consectetur adipising elit."
    }
  ]
  return (
    <div className="card-container">
      {items.map((item) => (
        <div className="card">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
      {/* <div className="card">
        <h2>Member</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button onClick={clickHandler}>Learn More</button>
      </div>
      <div className="card">
        <h2>Session</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Learn More</button>
      </div>
      <div className="card">
        <h2>Board</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Learn More</button>
      </div> */}
    </div>
  )
}




export function HomePage() {
  console.log("homepage is loaded")
  return (
    <div className="container">
      <nav className="sidebar">
        
        <ul>
          <li>
            <Link to="/members">
              <FontAwesomeIcon icon={faUsers} />
              <span>User Authentication</span>
            </Link>
          </li>
          <li>
            <Link to="/session">
              <FontAwesomeIcon icon={faClock} />
              <span>Agenda Management</span>
            </Link>
          </li>
          <li>
            <Link to="/Document">
              <FontAwesomeIcon icon={faSuitcase} />
              <span>Document Management</span>
            </Link>
          </li>
          <li>
            <Link to="/MeetingPreparation">
              <FontAwesomeIcon icon={faTasks} />
              <span>Meeting Preparation</span>
            </Link>
          </li>
          <li>
            <Link to="/Debate">
              <FontAwesomeIcon icon={faScaleBalanced} />
              <span>Real Time Debates and Discussions</span>
            </Link>
            </li>
            <li>
            <Link to="/Board">
              <FontAwesomeIcon icon={faCheckSquare} />
              <span>Voting and polling</span>
            </Link>
            <li>
              </li>
            <Link to="/Board">
              <FontAwesomeIcon icon={faFileText} />
              <span>Transcript Genereation</span>
            </Link>
            <li>
              </li>
            <Link to="/Board">
              <FontAwesomeIcon icon={faTv} />
              <span>Collaboration and Communication</span>
            </Link>
            </li>
            <li>
            <Link to="/Board">
              <FontAwesomeIcon icon={faArchive} />
              <span>Archiving and Retrival</span>
            </Link>
            </li>
          </ul>
      </nav>

      <div className="content">
        <Header />
        <div className="section">
          <h1>ANNOUNCEMENT</h1>
        </div>
        <br></br>
        <div className="session-container">
          <div className="session-item">
            <p>NEXT SESSION</p>
          </div>
          <hr style={{color: "red"}}></hr>
          <div className="session-house">House
            <ul>
              <li><FontAwesomeIcon icon={faCloudSun} /><span></span>Morning Session</li>
              <li><FontAwesomeIcon icon={faCalendarDay} />MON,JAN 2022</li>
              <li><FontAwesomeIcon icon={faClock} />8:AM</li>
            </ul>
          </div>
          <hr ></hr>
          <div className="session-comittee">Comittee
            <ul>
              <li><FontAwesomeIcon icon={faSun} /><span></span>Afternoon Session</li>
              <li><FontAwesomeIcon icon={faCalendarDay} />MON,JAN 2022</li>
              <li><FontAwesomeIcon icon={faClock} />12:noon</li>
            </ul>
          </div>

          <hr></hr>
          <div className="session-joint">Joint
            <ul>
              <li><FontAwesomeIcon icon={faUsers} /><span></span>Budget</li>
              <li><FontAwesomeIcon icon={faCalendarDay} />MON,JAN 2022</li>
              <li><FontAwesomeIcon icon={faClock} />8:AM</li>
            </ul></div>
        </div>
        <br></br>
        <CardsContainer />
      </div>
    </div>
  );
}

export default HomePage;
