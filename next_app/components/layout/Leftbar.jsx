import Link from "next/link";

const Leftbar = () => {
  return (
    <>
      {/* ========== Left Sidebar Start ========== */}
      <div className="left-side-menu">
        <div className="slimScrollDiv">
          <div className="slimscroll-menu">
            <div className="user-box text-center">
              <img
                src="/static/assets/images/users/user-1.jpg"
                alt="user-img"
                title="Mat Helme"
                className="rounded-circle avatar-md"
              />
              <div className="dropdown">
                <a
                  href="javascript: void(0);"
                  className="text-dark dropdown-toggle h5 mt-2 mb-1 d-block"
                  data-bs-toggle="dropdown"
                >
                  Geneva Kennedy
                </a>
                <div className="dropdown-menu user-pro-dropdown">
                  {/* item*/}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item"
                  >
                    <i className="fe-user me-1" />
                    <span>My Account</span>
                  </a>
                  {/* item*/}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item"
                  >
                    <i className="fe-settings me-1" />
                    <span>Settings</span>
                  </a>
                  {/* item*/}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item"
                  >
                    <i className="fe-lock me-1" />
                    <span>Lock Screen</span>
                  </a>
                  {/* item*/}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item"
                  >
                    <i className="fe-log-out me-1" />
                    <span>Logout</span>
                  </a>
                </div>
              </div>
              <p className="text-muted">Admin Head</p>
            </div>

            {/*- Sidemenu */}
            <div id="sidebar-menu">
              <ul className="metismenu" id="side-menu">
                <li className="menu-title">Navigation</li>
                <li>
                  <Link href="/">
                    <a>
                      <i className="fe-airplay" />
                      <span className="badge badge-info badge-pill float-right">
                        4
                      </span>
                      <span> Dashboards </span>
                    </a>
                  </Link>
                </li>

                <li className="menu-title">Management</li>
                <li>
                  <a href="javascript: void(0);">
                    <i className="fe-users" />
                    <span> Users </span>
                    <span className="menu-arrow" />
                  </a>
                  <ul className="nav-second-level" aria-expanded="false">
                    <li>
                      <Link href="/user">
                        <a>Profile</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/user/add">
                        <a>Add New</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* End Sidebar */}
            <div className="clearfix" />
          </div>
          {/* Sidebar -left */}
        </div>
      </div>
      {/* Left Sidebar End */}
    </>
  );
};

export default Leftbar;
