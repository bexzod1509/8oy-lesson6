import React, { useEffect, useState } from "react";
import "./Home.css";
import Hero from "../../components/hero/Hero";
import Main from "../../components/main/Main";
import Users from "../../components/users/Users";
import axios from "axios";
interface UsersScheme {
  id: string;
  phone: string;
  firstName: string;
  lastName: string;
  image: string;
}
const Home: React.FC = () => {
  const [data, setData] = useState<null | UsersScheme[]>(null);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users?limit=4")
      .then((res) => setData(res.data.users))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Hero />
      <Main />
      <Users data={data} />
    </div>
  );
};

export default Home;
