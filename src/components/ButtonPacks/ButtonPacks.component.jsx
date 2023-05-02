import { useState } from "react";
import { ButtonBlack, ButtonWhite } from "./ButtonPacks.styles";

const ButtonPacks = () => {
  const [count, setCount] = useState(0);

  const increasementHanlder = () => setCount((count) => count + 1);
  const decreasementHanlder = () => setCount((count) => count - 1);

  return (
    <div className="button-container">
      <h3 className="text-2xl font-bold">Simple Counter App</h3>
      <h2>Count is {count}</h2>
      <ButtonWhite onClick={increasementHanlder}>Increasement</ButtonWhite>
      <ButtonBlack onClick={decreasementHanlder}>Decreasement</ButtonBlack>
    </div>
  );
};

export default ButtonPacks;
