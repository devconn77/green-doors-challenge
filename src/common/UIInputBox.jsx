import "./UiInputBox.css";
const InputBox = ({ value, onChange ,placeholder="Enter your text"}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input-box"
    />
  );
};

export default InputBox;
