function Wrapper(children) {
  return (
    <div style={{ color:"green", border:"5px solid green", width:"100%", padding:"20px", margin:"10px" }}>
      {/* <h1>Welcome to the React App</h1> */}
      <children />
    </div>
  );
}

export default Wrapper;