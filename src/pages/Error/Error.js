import "./error.css";

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-message">
        <h1>No results found :(</h1>
        <p>Sorry, we couldn't find what you were looking for</p>
        <p>Please try different way</p>
      </div>
    </div>
  );
};

export default Error;
