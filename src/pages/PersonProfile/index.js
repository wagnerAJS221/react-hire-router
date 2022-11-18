import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import HireForm from "./components/HireForm";

function PersonProfile(props) {
  // props: hiredPeople, setHiredPeople
  const [person, setPerson] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setPerson(location.state.person);
  }, [location]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm
        person={person}
        hiredPeople={props.hiredPeople}
        setHiredPeople={props.setHiredPeople}
      />
    </article>
  );
}

export default PersonProfile;
