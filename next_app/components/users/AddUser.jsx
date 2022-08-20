import { useState } from "react";
import userService from "../services/services/userService";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { createUser, listAllUsers } from "../services/slices/userSlice";
import Swal from "sweetalert2";
import { isRejectedWithValue } from "@reduxjs/toolkit";

const AddUser = () => {
  const initialUserState = {
    email: null,
    password: null,
    re_password: null,
  };

  const [formUser, setFormUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);
  const { email, password, re_password } = formUser;
  const dispatch = useDispatch();

  /* validate form */
  const validateSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    re_password: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateSchema),
  });

  const saveUser = () => {
    const data = {
      email: email,
      password: password,
    };
    dispatch(createUser(data))
      .unwrap()
      .then((res) => {
        setFormUser({
          email: res.data.email,
          password: res.data.password,
        });
        setSubmitted(true);
        Swal.fire("Success!", "Your record has been saved.", "success");
      })
      .catch((err) => {
        // Swal.fire("Fail!", "Something went wrong!", "error");
        // console.log(err);
        setFormUser({
          err: err,
        });
      });
  };

  const newUser = () => {
    setFormUser(initialUserState);
    setSubmitted(false);
  };

  return (
    <>
      {/* {errors.phone_number.map(e=>)} */}

      {submitted ? (
        <>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newUser}>
            NEW
          </button>
        </>
      ) : (
        <div className="row">
          {/* profile upload */}
          <div className="col-lg-4">
            <div className="card-box">
              <h4 className="header-title m-t-0">Profile</h4>
              <div className="mt-3">
                <input
                  type="file"
                  className="dropify"
                  data-default-file="/static/assets/images/small/img-2.jpg"
                />
                <p className="text-muted text-center mt-2 mb-0">
                  Drop file here or click to upload.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card-box">
              <h4 className="header-title m-t-0">User Info</h4>
              <p className="text-muted font-14 m-b-20"></p>
              <form
                onSubmit={handleSubmit(saveUser)}
                role="form"
                className="parsley-examples"
              >
                <div className="form-group row">
                  <label htmlFor="inputEmail3" className="col-4 col-form-label">
                    Email<span className="text-danger">*</span>
                  </label>
                  <div className="col-7">
                    <input
                      type="email"
                      name="email"
                      {...register("email")}
                      // ref={register}
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      required
                      parsley-type="email"
                      placeholder="Email"
                    />

                    {errors.email && (
                      <ul class="parsley-errors-list filled" id="parsley-id-73">
                        <li class="parsley-minlength">{errors.email}</li>
                      </ul>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="hori-pass1" className="col-4 col-form-label">
                    Password<span className="text-danger">*</span>
                  </label>
                  <div className="col-7">
                    <input
                      type="password"
                      {...register("password")}
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      name="password"
                      placeholder="Password"
                      required
                    />
                    {errors.password && (
                      <ul class="parsley-errors-list filled" id="parsley-id-73">
                        <li class="parsley-minlength">
                          {errors.password.message}
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="hori-pass2" className="col-4 col-form-label">
                    Confirm Password
                    <span className="text-danger">*</span>
                  </label>
                  <div className="col-7">
                    <input
                      data-parsley-equalto="#hori-pass1"
                      type="password"
                      {...register("re_password")}
                      className={`form-control ${
                        errors.re_password ? "is-invalid" : ""
                      }`}
                      name="re_password"
                      required
                      placeholder="Password"
                      id="hori-pass2"
                    />
                    {errors.re_password && (
                      <ul class="parsley-errors-list filled" id="parsley-id-73">
                        <li class="parsley-minlength">
                          {errors.re_password.message}
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-8 offset-4">
                    <div className="checkbox checkbox-purple">
                      <input id="checkbox6" type="checkbox" />
                      <label htmlFor="checkbox6">Remember me</label>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-8 offset-4">
                    <button
                      type="submit"
                      className="btn btn-primary waves-effect mr-1 waves-light"
                    >
                      Register
                    </button>
                    <button
                      type="reset"
                      className="btn btn-secondary waves-effect m-l-15"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>{" "}
            {/* end card-box */}
          </div>{" "}
          {/* end col */}
        </div>
      )}
    </>
  );
};

export default AddUser;
