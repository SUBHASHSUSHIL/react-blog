import Appl from "./ExplainJSX";
import Header from "./Header"
import Login, { Dashboard, Profile, Settings } from "./UserComponent";    // Importing the Header component and the Login component as default,

function App() {  // This is the main App component
  
  //alert(sum())  // This will alert the sum of two numbers when the App component is rendered
  return (
    <div>
      <Header />
      <Apple />
      <Login />
      <Profile />
      <Settings />
      <Dashboard />

      <Appl />  {/* This is the ExplainJSX component that demonstrates JSX syntax */}
    </div>
  );
}

function Apple() {   // This is an additional component named Apple
  return (
    <div>
      <h1>Apple Component {sum()}</h1>
      <p>This is an additional component for demonstration.</p>
    </div>
  );
}

function sum(){       // This function returns the sum of two numbers
  return 10 + 50
}

export default App;
