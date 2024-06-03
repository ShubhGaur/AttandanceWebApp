import React from "react";
import { useState } from "react";
import "./App.css";
import students from "./Students";

function Attandance() {
  const faculty = ["Rohit Jain", "Somesh Sharma"];
  const [facultyNames, setFacultyNames] = useState(faculty);
  const [sortedStudents, setSortedStudents] = useState([]);
  const [attendance, setAttendance] = useState({});


  function handleFacultyChange(e) {
    const faculty = e.target.value;
    const studentNames = students.find((obj) => obj.faculty === faculty);
    setSortedStudents(studentNames.names.sort());
    const initialAttendance = {};
    studentNames.names.forEach((name, index) => {
      const uniqueKey = `${name}-${index}`;
      initialAttendance[uniqueKey] = false;
    });
    setAttendance(initialAttendance);

  }
  function handleAttandance(uniqueKey) {
    setAttendance(prev => ({
      ...prev,
      [uniqueKey]: !prev[uniqueKey]

    }));
  }

//  ` // function yayproxy(e){
//   //   if(e.target.innerhtml = "A"){
//   //       e.target.innerhtml = "P"
//   //   }
//   //   else{
//   //       e.target.innerhtml = "P"
//   //   }
//   // } `

  function handleAllAttendance(toMark) {
    const students = Object.keys(attendance)
    console.log(students);
    const newAttendance = {}
    if (toMark) {
      students.forEach((student) => {
        newAttendance[student] = true
      })
    }
    else {
      students.forEach((student) => {
        newAttendance[student] = false
      })
    }
    setAttendance(newAttendance)
  }

  return (
    <>
      <header>
        <h1>Tcsion</h1>
      </header>
      <div className="facultyChooser">
        <select name="faculty" id="" required onChange={handleFacultyChange}>
          <option value="" defaultValue="">
            Select Faculty
          </option>
          {facultyNames.map((name, index) => {
            return (
              <option key={index} value={name}>
                {name}
              </option>
            );
          })}
        </select>
        <button onClick={() => handleAllAttendance(true)}>All Present</button>
        <button onClick={() => handleAllAttendance(false)}>All Absent</button>


      </div>

      <div className="attendanceGrid">
        {sortedStudents && sortedStudents.length > 0 ? (
          <>
            <div>
              {sortedStudents.map((student, index) => {
                 const uniqueKey = `${student}-${index}`;

                return (
                  <div key={uniqueKey} className="bacche">
                    
                      <span className="marker1">{student}</span>
                      <span className="marker" onClick={() => handleAttandance(uniqueKey)} >
                        {
                          attendance[uniqueKey] ? "P" : "A"
                        }
                      </span>

                      
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}



export default Attandance;
