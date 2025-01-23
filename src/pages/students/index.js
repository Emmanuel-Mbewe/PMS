import { useEffect, useState } from "react";

const StudentPastors = () => {
  const [studentPastors, setStudentPastors] = useState([]);

  useEffect(() => {
    // Fetch the student pastors' data from the JSON file
    fetch("/student-pastors.json")
      .then((response) => response.json())
      .then((studentPastors) => setStudentPastors(studentPastors));
  }, []);

  if (studentPastors.length === 0) {
    return <div>Loading...</div>; // Show loading message until data is fetched
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="text-center mb-12 mt-11">
        <h1 className="text-4xl font-bold text-gray-800">Our Student Pastors</h1>
      </header>

      <main className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dynamically render the student pastors */}
          {studentPastors.map((studentPastor) => (
            <div key={studentPastor.id} className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src={studentPastor.profilePic}
                alt={`${studentPastor.firstName} ${studentPastor.lastName}`}
                className="w-20 h-20 mx-auto mb-4 rounded-full"
              />
              <h2 className="text-2xl font-semibold text-gray-700">{`${studentPastor.firstName} ${studentPastor.lastName}`}</h2>
              <p className="text-gray-500 mt-2">Status: {studentPastor.status}</p>
              <p className="text-gray-500 mt-2">Age: {studentPastor.age}</p>
              <p className="text-gray-700 mt-4">{studentPastor.biography}</p>
              <p className="text-gray-500 mt-4">Institution: {studentPastor.institution}</p>
              <p className="text-gray-500 mt-4">Program: {studentPastor.program}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentPastors;
