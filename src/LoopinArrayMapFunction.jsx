

function LoopinArrayMapFunction() {
  
  const userData=[
    {
      id: 1,
      name: "Alice",
      age: 25
    },
    {
      id: 2,
      name: "Bob",
      age: 30
    },
    {
      id: 3,
      name: "Charlie",
      age: 28
    },
    {
      id: 4,
      name: "David",
      age: 22
    }
  ]
  
  return (
    <div>
      <h1>Looped Array Example dynamic data</h1>
      <table border={'1'}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
            {userData.map((user) => (
              <tr key={user.id}>  
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          
        </tbody>
      </table>

      <h2>Dommy Data ("Static")</h2>
      <table border={"1"}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>35</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>28</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Sam Wilson</td>
            <td>40</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Lisa Brown</td>
            <td>32</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LoopinArrayMapFunction;