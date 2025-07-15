import Header from "./Header"

function App() {  // This is the main App component
  // The App component renders the Header and some content
  // It also includes an Apple component and a sum function
  
  alert(sum())  // This will alert the sum of two numbers when the App component is rendered
  return (
    <div>
      <Header />
      <h1>Welcome to My App</h1>
      <p>This is a simple React application.</p>
      <Apple />
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
