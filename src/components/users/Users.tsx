import React from "react";
import "./Users.css";
interface UsersScheme {
  id: string;
  phone: string;
  firstName: string;
  lastName: string;
  image: string;
}
const Users: React.FC<{ data: UsersScheme[] | null }> = ({ data }) => {
  let users: JSX.Element[] | undefined = data?.map((el: UsersScheme) => (
    <div key={el.id} className="d2">
      <img src={el.image} alt="" />
      <h2>
        {el.firstName} {el.lastName}
      </h2>
      <p>{el.phone}</p>
    </div>
  ));
  return (
    <div className="container">
      <div className="d">
        <h1>Meet our team</h1>
        <div className="d1">{users}</div>
      </div>
    </div>
  );
};

export default Users;
