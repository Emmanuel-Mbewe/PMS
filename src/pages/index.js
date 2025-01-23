import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const [data, setData] = useState(null);
  const [pastors, setPastors] = useState([]);
  const [churches, setChurches] = useState([]);
  const [presbyteries, setPresbyteries] = useState([]);
  const [studentPastors, setStudentPastors] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch the mock data from the JSON file
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data));

    // Fetch the pastors' data
    fetch("/pastors.json")
      .then((response) => response.json())
      .then((pastors) => setPastors(pastors));

    // Fetch the churches' data
    fetch("/churches.json")
      .then((response) => response.json())
      .then((churches) => setChurches(churches));

    // Fetch the presbyteries' data
    fetch("/presbyteries.json")
      .then((response) => response.json())
      .then((presbyteries) => setPresbyteries(presbyteries));

    // Fetch the student pastors' data
    fetch("/students.json")
      .then((response) => response.json())
      .then((studentPastors) => setStudentPastors(studentPastors));
  }, []);

  if (!data || pastors.length === 0 || churches.length === 0 || presbyteries.length === 0 || studentPastors.length === 0) {
    return <div>Loading...</div>; // Show loading message until data is fetched
  }

  const handleCardClick = (pageUrl) => {
    router.push(pageUrl);
  };

  // Update the total number of pastors, churches, presbyteries, and student pastors dynamically
  const updatedCards = data.cards.map((card) => {
    if (card.title === "Pastors") {
      const total = pastors.length > 10 ? `${pastors.length}+` : pastors.length.toString();
      return {
        ...card,
        total,
      };
    }
    if (card.title === "Churches") {
      const total = churches.length > 10 ? `${churches.length}+` : churches.length.toString();
      return {
        ...card,
        total,
      };
    }
    if (card.title === "Presbyteries") {
      const total = presbyteries.length > 10 ? `${presbyteries.length}+` : presbyteries.length.toString();
      return {
        ...card,
        total,
      };
    }
    if (card.title === "Student Pastors") {
      const total = studentPastors.length > 10 ? `${studentPastors.length}+` : studentPastors.length.toString();
      return {
        ...card,
        total,
      };
    }
    return card;
  });

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header Section with Background Image */}
      <header
        className="text-center mb-12 mt-11 bg-cover bg-center py-20"
        style={{
          backgroundImage: `url(${data.intro.backgroundImage})`,
        }}
      >
        <div className="bg-black bg-opacity-40 py-10 px-4 rounded-lg">
          <h1 className="text-4xl font-bold text-white">{data.intro.heading}</h1>
          <p className="text-lg text-gray-200 mt-4">{data.intro.description}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Dynamically render the cards */}
          {updatedCards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center cursor-pointer"
              onClick={() => handleCardClick(card.pageUrl)}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-20 h-20 mx-auto mb-4 rounded-full"
              />
              <h2 className="text-2xl font-semibold text-gray-700">{card.title}</h2>
              <p className="text-gray-500 mt-2">Total Number</p>
              <div className="text-4xl font-bold text-green-700 mt-4">{card.total}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
