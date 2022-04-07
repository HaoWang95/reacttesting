import * as React from "react";

interface ButtonProp {
  buttonText: string;
  color?: string;
}

const Button: React.VFC<ButtonProp> = ({
  buttonText,
  color,
}: ButtonProp) => {
  return (
    <React.Fragment>
      <button style={{ color: color ? color : "blueviolet" }}>
        {buttonText ? buttonText : "Text"}
      </button>
    </React.Fragment>
  );
};

export default Button