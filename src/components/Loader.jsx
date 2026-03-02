import "../style/loader.css";

const Loader = ({ page }) => {
  const text = "VERTEXPRO";

  return (
    <div className="global-loader">
      <div className="loader-wrapper">
        {text.split("").map((char, index) => (
          <span className="loader-letter" key={index}>
            {char}
          </span>
        ))}

        <div className="loader"></div>
      </div>

      <p className="loader-page-text">Loading {page}</p>
    </div>
  );
};

export default Loader;
