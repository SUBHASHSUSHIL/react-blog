import { useState } from "react";
import Header from "./Header";

function ToggleOrHideAndShow() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Content</button>
      {isVisible && <p>This is the content to show or hide.</p>}

      {!isVisible && <Header />}
    </div>
    
  );
}

export default ToggleOrHideAndShow;