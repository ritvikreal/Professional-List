
import './App.css';
import doctor from "./assets/doctor.jpg";
import engineer from "./assets/engineer.jpg";
import teacher from "./assets/teacher.jpg";
import lawyer from "./assets/lawyer.jpg";
import police from "./assets/police.jpg";
import chef from "./assets/chef.jpg";
import nurse from "./assets/nurse.jpg";
import architect from "./assets/architect.jpg";
import pilot from "./assets/pilot.jpg";
import software from "./assets/software.jpg";

function App() {

  const professional = [
    {
      id: 1,
      name: "Dr. Rahul Sharma",
      email: "rahul@gmail.com",
      mobile: "9876543210",
      address: "Delhi",
      image: doctor,
    },
    {
      id: 2,
      name: "Aman Verma",
      email: "aman@gmail.com",
      mobile: "9876543211",
      address: "Mumbai",
      image: engineer,
    },
    {
      id: 3,
      name: "Amit Singh",
      email: "amit@gmail.com",
      mobile: "9876543212",
      address: "Lucknow",
      image: teacher,
    },
    {
      id: 4,
      name: "Sneha Gupta",
      email: "sneha@gmail.com",
      mobile: "9876543213",
      address: "Jaipur",
      image: lawyer,
    },
    {
      id: 5,
      name: "Rohit Yadav",
      email: "rohit@gmail.com",
      mobile: "9876543214",
      address: "Patna",
      image: police,
    },
    {
      id: 6,
      name: "Karan Mehta",
      email: "karan@gmail.com",
      mobile: "9876543215",
      address: "Pune",
      image: chef,
    },
    {
      id: 7,
      name: "Neha Kapoor",
      email: "neha@gmail.com",
      mobile: "9876543216",
      address: "Chandigarh",
      image: nurse,
    },
    {
      id: 8,
      name: "Vikas Jain",
      email: "vikas@gmail.com",
      mobile: "9876543217",
      address: "Ahmedabad",
      image: architect,
    },
    {
      id: 9,
      name: "Anjali Roy",
      email: "anjali@gmail.com",
      mobile: "9876543218",
      address: "Kolkata",
      image: pilot,
    },
    {
      id: 10,
      name: "Ritvik Chandrikapure",
      email: "ritvik@gmail.com",
      mobile: "9876543219",
      address: "Hyderabad",
      image: software,
    },

  ]
  return (
    <>

      <h2>Professionals List</h2>

      <table>

        <thead>

          <tr>
            <th>Sr. No</th>
            <th>Profile Pic</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Address</th>
          </tr>

        </thead>


        <tbody>
          {professional.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>
                <img src={person.image} alt={person.name} />
              </td>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>{person.mobile}</td>
              <td>{person.address}</td>
            </tr>

          ))}


        </tbody>

      </table>

    </>
  )
}

export default App;