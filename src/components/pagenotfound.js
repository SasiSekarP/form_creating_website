import { Link } from "react-router-dom";

const PageNotfound = () => {
  return (
    <div className="pagenotfound">
      <div className="errornumber">404</div>
      <h1>Oops!</h1>
      <h1>Page not found</h1>

      <div className="pagenotfoundlink">
        Back to Home page? <Link to="/">Home page</Link>
      </div>
    </div>
  );
};

export default PageNotfound;
