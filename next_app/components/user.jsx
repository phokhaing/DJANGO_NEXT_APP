import Head from "next/head";
import React from "react";

const User = ({ user }) => {
  return (
    <tr>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  );
};

export default User;
