import "./FormView.css";
import Card from "../common/Card";
import UIButton from "../common/UIButton";
import UIDropdown from "../common/UiDropdown";
import UiInputBox from "../common/UIInputBox";
import { useState } from "react";
import { makes, colors } from "../constants/options-list";

export default function FormView() {
  const [makeList] = useState(makes);
  const [colorsList] = useState(colors);
  const [itemDetails, setItemSetails] = useState({
    make: "",
    color: "",
    code: "",
  });
  const [step, setStep] = useState(0);

  const getDetailsHandler = (option, value) => {
    setItemSetails((oldDetails) => {
      return { ...oldDetails, ...{ [option]: value } };
    });
  };

  const stepHandler = (option, value) => {
    if (!value) {
      alert(`Please Select value for ${option}`);
      return;
    }
    setStep((oldState) => {
      return oldState + 1;
    });
  };

  return (
    <div className="form-container">
      <div className="form">
        {step === 0 && (
          <Card>
            <div className="step-container">
              <UIDropdown
                label="Select Make"
                options={makeList}
                onChange={(value) => {
                  getDetailsHandler("make", value);
                }}
              />
              <div className="self-end">
                <UIButton
                  label="Next"
                  onClick={() => {
                    stepHandler("make", itemDetails.make);
                  }}
                />
              </div>
            </div>
          </Card>
        )}
        {step === 1 && (
          <Card>
            <div className="step-container">
              <UIDropdown
                label="Select Color"
                options={colorsList}
                onChange={(value) => {
                  getDetailsHandler("color", value);
                }}
              />
              <div className="self-end">
                <UIButton
                  label="Next"
                  onClick={() => {
                    stepHandler("color", itemDetails.color);
                  }}
                />
              </div>
            </div>
          </Card>
        )}
        {step === 2 && (
          <Card>
            <div className="step-container">
              <UiInputBox
                placeholder="Enter Code"
                value={itemDetails.code}
                onChange={(e) => {
                  getDetailsHandler("code", e.target.value);
                }}
              />
              <div className="self-end">
                <UIButton
                  label="Done"
                  onClick={() => {
                    stepHandler("code", itemDetails.code);
                  }}
                />
              </div>
            </div>
          </Card>
        )}
        {step > 2 && (
          <Card>
            <div className="details">
              <div>
                <div>
                  I have a {itemDetails.make} and the color is{" "}
                  {itemDetails.color}
                </div>
                {itemDetails.color === "Red" && (
                  <div>The car is {itemDetails.color}! NICE!!</div>
                )}
                <div>REF: {itemDetails.code}</div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
