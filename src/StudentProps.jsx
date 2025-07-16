function StudentProps({ student }) {
  return (
    <>
        <hr />
      <h2>Student Information</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Grade:</strong> {student.grade}</p>
    </>
  );
}

export default StudentProps;
