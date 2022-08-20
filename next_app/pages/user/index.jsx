import Head from "next/head";
import User from "../../components/user";
import Swal from "sweetalert2";
import {
  fetchUsers,
  addPost,
  fetchAsyncUsers,
  listAllUsers,
  fetchAllUsers,
} from "../../services/user/userSlice";
import { wrapper } from "../../services/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

import {
  dashboardInfo,
  setDashboard,
} from "../../services/dashboardSlice";

import Dashboard from "../../components/layout/Dashboard";

const listUsers = () => {
  const { users, loading } = useSelector(listAllUsers);
  const { pageTitle } = useSelector(getDashboardInfo);
  const dispatch = useDispatch();

  const confirmDelete = (e, id) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      // showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#28a745",
      showDenyButton: true,
      denyButtonText: "No",
      denyButtonColor: "#5A6268",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(fetchAllUsers());
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <>
      {loading ? (
        <center className="mt-10">Loading data...</center>
      ) : (
        <>
          <Head>
            <title>{pageTitle} - FTB</title>
          </Head>
          {/* page title */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="javascript: void(0);">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="javascript: void(0);">Users</a>
                    </li>
                    <li className="breadcrumb-item active">Profile</li>
                  </ol>
                </div>
                <h4 className="page-title">{pageTitle}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="widget-rounded-circle card-box">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-lg rounded-circle bg-primary">
                      <i className="fe-tag font-22 avatar-title text-white" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-right">
                      <h3 className="text-dark mt-1">
                        <span data-plugin="counterup">{users.length}</span>
                      </h3>
                      <p className="text-muted mb-1 text-truncate">
                        Total Users
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end row*/}
              </div>{" "}
              {/* end widget-rounded-circle*/}
            </div>{" "}
            {/* end col*/}
            <div className="col-md-6 col-xl-3">
              <div className="widget-rounded-circle card-box">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-lg rounded-circle bg-warning">
                      <i className="fe-clock font-22 avatar-title text-white" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-right">
                      <h3 className="text-dark mt-1">
                        <span data-plugin="counterup">624</span>
                      </h3>
                      <p className="text-muted mb-1 text-truncate">
                        Pending Users
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end row*/}
              </div>{" "}
              {/* end widget-rounded-circle*/}
            </div>{" "}
            {/* end col*/}
            <div className="col-md-6 col-xl-3">
              <div className="widget-rounded-circle card-box">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-lg rounded-circle bg-success">
                      <i className="fe-check-circle font-22 avatar-title text-white" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-right">
                      <h3 className="text-dark mt-1">
                        <span data-plugin="counterup">3195</span>
                      </h3>
                      <p className="text-muted mb-1 text-truncate">
                        Closed Users
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end row*/}
              </div>{" "}
              {/* end widget-rounded-circle*/}
            </div>{" "}
            {/* end col*/}
            <div className="col-md-6 col-xl-3">
              <div className="widget-rounded-circle card-box">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-lg rounded-circle bg-danger">
                      <i className="fe-trash-2 font-22 avatar-title text-white" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-right">
                      <h3 className="text-dark mt-1">
                        <span data-plugin="counterup">128</span>
                      </h3>
                      <p className="text-muted mb-1 text-truncate">
                        Deleted Users
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end row*/}
              </div>{" "}
              {/* end widget-rounded-circle*/}
            </div>{" "}
            {/* end col*/}
          </div>
          {/* end row */}

          {/* table */}
          <div className="row">
            <div className="col-12">
              <div className="card-box">
                <div class="row mb-2">
                  <div className="col-lg-8">
                    <form className="form-inline">
                      <div className="form-group mb-2">
                        <label htmlFor="inputPassword2" className="sr-only">
                          Search
                        </label>
                        <input
                          type="search"
                          className="form-control"
                          id="inputPassword2"
                          placeholder="Search..."
                        />
                      </div>

                      <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="status-select" className="mr-2">
                          Status
                        </label>
                        <select className="custom-select" id="status-select">
                          <option selected>Choose...</option>
                          <option value={1}>Paid</option>
                          <option value={2}>Awaiting Authorization</option>
                          <option value={3}>Payment failed</option>
                          <option value={4}>Cash On Delivery</option>
                          <option value={5}>Fulfilled</option>
                          <option value={6}>Unfulfilled</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4">
                    <div className="text-lg-right">
                      <Link href="/user/add" replace>
                        <button
                          type="button"
                          className="btn btn-danger waves-effect waves-light mb-2"
                        >
                          <i className="mdi mdi-basket mr-1" /> Add New
                        </button>
                      </Link>
                    </div>
                  </div>
                  {/* end col*/}
                </div>

                <table
                  className="table table-hover m-0 table-centered dt-responsive nowrap w-100"
                  id="tickets-table"
                >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Profile</th>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Gender</th>
                      <th>Status</th>
                      <th>Created Date</th>
                      <th className="hidden-sm">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => {
                      return (
                        <tr key={user.pk}>
                          <td>
                            <b>#{user.pk}</b>
                          </td>
                          <td>
                            <a
                              href="javascript: void(0);"
                              className="text-body"
                            >
                              <img
                                src="/static/assets/images/users/user-2.jpg"
                                alt="contact-img"
                                title="contact-img"
                                className="rounded-circle avatar-xs"
                              />
                              <span className="ml-2">{user.name}</span>
                            </a>
                          </td>
                          <td>
                            {user.last_name} {user.first_name}
                          </td>
                          <td>{user.email}</td>
                          <td>{user.gender == "M" ? "Male" : "Femal"}</td>
                          <td>
                            <span className="badge badge-success">Open</span>
                          </td>
                          <td>2017/04/28</td>
                          <td>
                            <div className="btn-group dropdown">
                              <a
                                href="javascript: void(0);"
                                className="table-action-btn dropdown-toggle arrow-none btn btn-light btn-sm"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="mdi mdi-dots-horizontal" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  <i className="mdi mdi-pencil mr-2 text-warning font-18 vertical-middle" />
                                  Edit Ticket
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="mdi mdi-check-all mr-2 text-muted font-18 vertical-middle" />
                                  Close
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  onClick={(e) => confirmDelete(e, user.id)}
                                >
                                  <i className="mdi mdi-delete mr-2 font-18 vertical-middle text-danger" />
                                  Remove
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="mdi mdi-star mr-2 font-18 text-primary vertical-middle" />
                                  Mark as Unread
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* <!-- Sweet Alerts js --> */}
        </>
      )}
    </>
  );
};

// export const getStaticProps = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   return {
//     props: {
//       users: data,
//     },
//   };
// };

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     await store.dispatch(fetchAllUsers());
//   }
// );
export default listUsers;
