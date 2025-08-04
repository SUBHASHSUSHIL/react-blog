import PassFunction from "./PassFunction";

function App() {
  
  const displayName=(name)=>{
    alert(name)
  }

  return (
    <div>
      <h1>Call Parent component Function from child component</h1>
    <PassFunction displayName={displayName} name="Sushil Thakur" />
    <PassFunction displayName={displayName} name="Sandeep Thakur" />
    <PassFunction displayName={displayName} name="Pradip Thakur" />
    <PassFunction displayName={displayName} name="Subhash Thakur" />
    <PassFunction displayName={displayName} name="Baijunath Thakur" />
    <PassFunction displayName={displayName} name="Nandkishor Thakur" />

    </div>
  ); 
}

export default App;