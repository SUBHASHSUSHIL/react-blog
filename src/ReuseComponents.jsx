const ReuseComponent = ({ data }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{data.name}</h2>
      <p>Age: {data.age}</p>
    </div>
  );
}

export default ReuseComponent;