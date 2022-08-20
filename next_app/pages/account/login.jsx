import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { authLogin } from "../../services/auth/authSlice";

const login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const initialState = {
    username: "",
    password: "",
  };

  const [formLogin, setFormLogin] = useState(initialState);
  const { username, password } = initialState;

  const validateForm = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateForm),
  });

  const handleLogin = (credentials) => {
    dispatch(authLogin(credentials))
      .unwrap()
      .then((res) => {
        router.push("/");
      })
      .catch((err) => {
        // Swal.fire("Fail!", "Something went wrong!", "error");
        console.log(err);
        setFormLogin({
          errors: err,
        });
      });
  };

  return (
    <div className="account-pages mt-5 mb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-pattern">
              <div className="card-body p-4">
                <div className="text-center w-75 m-auto">
                  <a href="index.html">
                    <span>
                      <img
                        src="/static/assets/images/logo-dark.png"
                        alt
                        height={22}
                      />
                    </span>
                  </a>
                  <p className="text-muted mb-4 mt-3">
                    Enter your email address and password to access admin panel.
                  </p>
                </div>
                <form onSubmit={handleSubmit(handleLogin)}>
                  <div className="form-group mb-3">
                    <label htmlFor="emailaddress">Email address</label>
                    <input
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      type="text"
                      {...register("username")}
                      id="emailaddress"
                      required
                      placeholder="Enter your email"
                    />
                    {errors.username && (
                      <ul class="parsley-errors-list filled" id="parsley-id-73">
                        <li class="parsley-minlength">{errors.username}</li>
                      </ul>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      {...register("password")}
                      required
                      id="password"
                      placeholder="Enter your password"
                    />
                    {errors.password && (
                      <ul class="parsley-errors-list filled" id="parsley-id-73">
                        <li class="parsley-minlength">{errors.password}</li>
                      </ul>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="checkbox-signin"
                        defaultChecked
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="checkbox-signin"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="form-group mb-0 text-center">
                    <button className="btn btn-info btn-block" type="submit">
                      {" "}
                      Log In{" "}
                    </button>
                  </div>
                </form>
                <div className="text-center">
                  <h5 className="mt-3 text-muted">Sign in with</h5>
                  <ul className="social-list list-inline mt-3 mb-0">
                    <li className="list-inline-item">
                      <a
                        href="javascript: void(0);"
                        className="social-list-item border-primary text-primary"
                      >
                        <i className="mdi mdi-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="javascript: void(0);"
                        className="social-list-item border-danger text-danger"
                      >
                        <i className="mdi mdi-google" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="javascript: void(0);"
                        className="social-list-item border-info text-info"
                      >
                        <i className="mdi mdi-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="javascript: void(0);"
                        className="social-list-item border-secondary text-secondary"
                      >
                        <i className="mdi mdi-github-circle" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              {/* end card-body */}
            </div>
            {/* end card */}
            <div className="row mt-3">
              <div className="col-12 text-center">
                <p>
                  {" "}
                  <a href="pages-recoverpw.html" className="text-white-50 ml-1">
                    Forgot your password?
                  </a>
                </p>
                <p className="text-white-50">
                  Don't have an account?{" "}
                  <a href="pages-register.html" className="text-white ml-1">
                    <b>Sign Up</b>
                  </a>
                </p>
              </div>{" "}
              {/* end col */}
            </div>
            {/* end row */}
          </div>{" "}
          {/* end col */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </div>
  );
};

export default login;
