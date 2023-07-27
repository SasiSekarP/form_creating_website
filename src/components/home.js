import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepagecontainer">
      <div className="homecontainerrow newformcontainer">
        <div>Start a new form</div>
        <div className="formcard">
          <Link to="/createnewformpage" className="newformbtn">
            +
          </Link>
          <div className="formtitle">Blank</div>
        </div>
      </div>
      <div className="homecontainerrow recentformscontainer">
        <div>Recent forms</div>
        <div className="formcardcontainer">
          <div className="formcard">
            <button type="button" className="newformbtn">
              +
            </button>
            <div className="formtitle">Blank</div>
          </div>
          <div className="formcard">
            <button type="button" className="newformbtn">
              +
            </button>
            <div className="formtitle">Blank</div>
          </div>
          <div className="formcard">
            <button type="button" className="newformbtn">
              +
            </button>
            <div className="formtitle">Blank</div>
          </div>
          <div className="formcard">
            <button type="button" className="newformbtn">
              +
            </button>
            <div className="formtitle">Blank</div>
          </div>
          <div className="formcard">
            <button type="button" className="newformbtn">
              +
            </button>
            <div className="formtitle">Blank</div>
          </div>
          <div className="formcard">
            <button type="button" className="newformbtn">
              +
            </button>
            <div className="formtitle">Blank</div>
          </div>
          <div className="formcard">
            <button type="button" className="newformbtn">
              +
            </button>
            <div className="formtitle">Blank</div>
          </div>
          <div className="formcard">
            <button type="button" className="newformbtn">
              +
            </button>
            <div className="formtitle">Blank</div>
          </div>
          <div className="formcard">
            <button type="button" className="newformbtn">
              +
            </button>
            <div className="formtitle">Blank</div>
          </div>

          {/* <div>No forms yet</div>
        <div>Click to create new form</div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
