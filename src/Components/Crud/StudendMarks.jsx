import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataTable from "react-data-table-component";

const StudentMarks = () => {
  const { id } = useParams();

  const [marks, setMarks] = useState([]);
  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");

  // ✅ Fetch marks
  useEffect(() => {
    axios
      .get(`http://92.205.109.210:8051/api/getmarks/${id}`)
      .then(res => {
        setMarks(res.data.data || []);
      })
      .catch(err => console.error(err));
  }, [id]);

  // ✅ Add marks
  const submitHandler = (e) => {
    e.preventDefault();

    axios.post("http://92.205.109.210:8051/api/addmark", {
      studentId: id,
      subject1,
      subject2,
      subject3
    }).then(() => {
      setSubject1("");
      setSubject2("");
      setSubject3("");
      window.location.reload();
    });
  };

  const columns = [
    { name: "Student ID", selector: row => row.studentId },
    { name: "Subject 1", selector: row => row.subject1 },
    { name: "Subject 2", selector: row => row.subject2 },
    { name: "Subject 3", selector: row => row.subject3 }
  ];

  return (
    <div>
      <h3>Student Marks</h3>

      {/* ✅ ADD MARKS FORM */}
      <form onSubmit={submitHandler}>
        <input
          placeholder="Subject 1"
          value={subject1}
          onChange={(e) => setSubject1(e.target.value)}
        />
        <input
          placeholder="Subject 2"
          value={subject2}
          onChange={(e) => setSubject2(e.target.value)}
        />
        <input
          placeholder="Subject 3"
          value={subject3}
          onChange={(e) => setSubject3(e.target.value)}
        />
        <button type="submit">Save Marks</button>
      </form>

      {/* ✅ MARKS TABLE */}
      <DataTable
        data={marks}
        columns={columns}
      />
    </div>
  );
};

export default StudentMarks;
