import MultipleCondition from "./MultipleCondition";
import StudentProps from "./StudentProps";



function App() {  
    
  return (
    <div>
      <MultipleCondition />

      <StudentProps student={{ name: "John Doe", age: 20, grade: "A" }} />
      <StudentProps student={{ name: "Jane Smith", age: 22, grade: "B" }} />
      <StudentProps student={{ name: "Alice Johnson", age: 19, grade: "C" }} />
      <StudentProps student={{ name: "Bob Brown", age: 21, grade: "B+" }} />
      <StudentProps student={{ name: "Charlie White", age: 23, grade: "A-" }} />
      
    </div>
  );
}



export default App;
