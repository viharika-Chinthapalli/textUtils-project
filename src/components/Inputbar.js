import { useState } from "react";


function Inputbar(props) {
  const [input, setInput] = useState("");

  const handleUpperClick = () => {
    const text = input.toUpperCase();
    setInput(text);
    props.showAlert("converted to uppercase", "success");
  };

  const handleLowerClick = () => {
    const text = input.toLowerCase();
    setInput(text);
    props.showAlert("converted to lowercase", "success");
  };

  const handleClearClick = () => {
    const text = "";
    setInput(text);
    props.showAlert("cleared text", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(input);
    props.showAlert("copied text to", "success");
  };

  const handleExtraSpaces = () => {
    const text = input.split(/[ ]+/);
    setInput(text.join(" "));
    props.showAlert("removed extra spaces", "success");
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  // ^ matches the beginning of the string.
  // \w matches any word character.
  // {1} takes only the first character.
  // Thus, ^\w{1} matches the first letter of the word.
  // | works like the boolean OR. It matches the expression after and before the |.
  // \s+ matches any amount of whitespace between the words (for example spaces, tabs, or line breaks).

  const handleCapitalizeClick = () => {
    const text = input.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );
    setInput(text);
    props.showAlert("capitalized the text", "success");
  };

  return (
    <>
      <div
        className="mb-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-4">Try TextUtils - Word Counter, Character Counter, Remove extra spaces</h1>
        <textarea
          className="form-control m-1"
          id="myBox"
          rows="8"
          onChange={handleOnChange}
          value={input}
          placeholder="enter text"
          style={{
            backgroundColor: props.mode === "dark" ? "#1b1d2f" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
        <button disabled={input.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpperClick}>
          convert to UPPERCASE
        </button>
        <button disabled={input.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>
          convert to LowerCase
        </button>
        <button disabled={input.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          clear text
        </button>
        <button disabled={input.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeClick}>
          Capitalize
        </button>
        <button disabled={input.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button disabled={input.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            input.split(/\s+/).filter(function (n) {
              return n !== "";
            }).length
          }{" "}
          words and {input.length} characters
        </p>
        <p>{0.008 * input.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {input.length > 0
            ? input
            : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}

export default Inputbar;
