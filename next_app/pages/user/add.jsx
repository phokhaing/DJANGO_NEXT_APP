import Head from "next/head";
import { useSelector } from "react-redux";
import { listAllUsers } from "../services/slices/userSlice";
import Script from "next/script";
import { useState } from "react";
import AddUser from "../../components/users/AddUser";

const addUser = () => {
  // const { users } = useSelector(listAllUsers);

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   re_password: "",
  // });

  // const { email, password, re_password } = formData;

  // const handleChange = (e) => {
  //   console.log(e);
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log();
  // };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="">FTB</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="">Users</a>
                </li>
                <li className="breadcrumb-item active">Profile</li>
              </ol>
            </div>
            <h4 className="page-title">Tickets</h4>
          </div>
        </div>
      </div>
      <AddUser />
    </>
  );
};

export default addUser;
