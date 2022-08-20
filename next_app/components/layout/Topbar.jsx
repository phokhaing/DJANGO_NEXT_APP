const Topbar = () => {
  return (
    <>
      {/* Topbar Start */}
      <div className="navbar-custom">
        <ul className="list-unstyled topnav-menu float-right mb-0">
          {/* start search */}
          <li className="d-none d-sm-block">
            <form className="app-search">
              <div className="app-search-box">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <div className="input-group-append">
                    <button className="btn" type="submit">
                      <i className="fe-search" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </li>
          {/* end search */}

          {/* language */}
          <li className="dropdown d-none d-lg-inline-block topbar-dropdown">
            <a
              className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img
                src="/static/assets/images/flags/us.jpg"
                alt="user-image"
                height={16}
              />
            </a>
            
            <div className="dropdown-menu dropdown-menu-end">
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">
                <img
                  src="/static/assets/images/flags/germany.jpg"
                  alt="user-image"
                  className="me-1"
                  height={12}
                />{" "}
                <span className="align-middle">German</span>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">
                <img
                  src="/static/assets/images/flags/italy.jpg"
                  alt="user-image"
                  className="me-1"
                  height={12}
                />{" "}
                <span className="align-middle">Italian</span>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">
                <img
                  src="/static/assets/images/flags/spain.jpg"
                  alt="user-image"
                  className="me-1"
                  height={12}
                />{" "}
                <span className="align-middle">Spanish</span>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">
                <img
                  src="/static/assets/images/flags/russia.jpg"
                  alt="user-image"
                  className="me-1"
                  height={12}
                />{" "}
                <span className="align-middle">Russian</span>
              </a>
            </div>
          </li>

          {/* start notificationi */}
          <li className="dropdown notification-list">
            <a
              className="nav-link dropdown-toggle  waves-effect waves-light"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="fe-bell noti-icon" />
              <span className="badge badge-danger rounded-circle noti-icon-badge">
                5
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-lg">
              {/* item*/}
              <div className="dropdown-item noti-title">
                <h5 className="m-0">
                  <span className="float-right">
                    <a href="#" className="text-dark">
                      <small>Clear All</small>
                    </a>
                  </span>
                  Notification
                </h5>
              </div>
              <div className="slimScrollDiv">
                <div className="slimscroll noti-scroll">
                  {/* item*/}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item active"
                  >
                    <div className="notify-icon">
                      <img
                        src="/static/assets/images/users/user-1.jpg"
                        className="img-fluid rounded-circle"
                        alt
                      />{" "}
                    </div>
                    <p className="notify-details">Cristina Pride</p>
                    <p className="text-muted mb-0 user-msg">
                      <small>
                        Hi, How are you? What about our next meeting
                      </small>
                    </p>
                  </a>
                  {/* item*/}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item"
                  >
                    <div className="notify-icon bg-primary">
                      <i className="mdi mdi-comment-account-outline" />
                    </div>
                    <p className="notify-details">
                      Caleb Flakelar commented on Admin
                      <small className="text-muted">1 min ago</small>
                    </p>
                  </a>
                  {/* item*/}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item"
                  >
                    <div className="notify-icon">
                      <img
                        src="/static/assets/images/users/user-4.jpg"
                        className="img-fluid rounded-circle"
                        alt
                      />{" "}
                    </div>
                    <p className="notify-details">Karen Robinson</p>
                    <p className="text-muted mb-0 user-msg">
                      <small>
                        Wow ! this admin looks good and awesome design
                      </small>
                    </p>
                  </a>
                  {/* item*/}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item"
                  >
                    <div className="notify-icon bg-warning">
                      <i className="mdi mdi-account-plus" />
                    </div>
                    <p className="notify-details">
                      New user registered.
                      <small className="text-muted">5 hours ago</small>
                    </p>
                  </a>
                  {/* item*/}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item"
                  >
                    <div className="notify-icon bg-info">
                      <i className="mdi mdi-comment-account-outline" />
                    </div>
                    <p className="notify-details">
                      Caleb Flakelar commented on Admin
                      <small className="text-muted">4 days ago</small>
                    </p>
                  </a>
                  {/* item*/}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item"
                  >
                    <div className="notify-icon bg-secondary">
                      <i className="mdi mdi-heart" />
                    </div>
                    <p className="notify-details">
                      Carlos Crouch liked
                      <b>Admin</b>
                      <small className="text-muted">13 days ago</small>
                    </p>
                  </a>
                </div>
              </div>
              {/* All*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item text-center text-primary notify-item notify-all"
              >
                View all
                <i className="fi-arrow-right" />
              </a>
            </div>
          </li>
          {/* end notification */}

          {/* start user profile */}
          <li className="dropdown notification-list">
            <a
              className="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img
                src="/static/assets/images/users/user-1.jpg"
                alt="user-image"
                className="rounded-circle"
              />
              <span className="pro-user-name ml-1">
                Geneva <i className="mdi mdi-chevron-down" />
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
              {/* item*/}
              <div className="dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome !</h6>
              </div>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <i className="fe-user" />
                <span>My Account</span>
              </a>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <i className="fe-settings" />
                <span>Settings</span>
              </a>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <i className="fe-lock" />
                <span>Lock Screen</span>
              </a>
              <div className="dropdown-divider" />
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <i className="fe-log-out" />
                <span>Logout</span>
              </a>
            </div>
          </li>
          <li className="dropdown notification-list">
            <a
              href="javascript:void(0);"
              className="nav-link right-bar-toggle waves-effect waves-light"
            >
              <i className="fe-settings noti-icon" />
            </a>
          </li>
          {/* end user profile */}
        </ul>

        {/* LOGO */}
        <div className="logo-box">
          <a href="index.html" className="logo text-center">
            <span className="logo-lg">
              {/* <img src="/static/assets/images/logo-light.png" alt height={18} /> */}
              <span class="logo-lg-text-light">FULL STACK APP</span>
            </span>
            <span className="logo-sm">
              {/* <span class="logo-sm-text-dark">U</span> */}
              <img src="/static/assets/images/logo-sm.png" alt height={24} />
            </span>
          </a>
        </div>
        <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
          <li>
            <button className="button-menu-mobile waves-effect waves-light">
              <i className="fe-menu" />
            </button>
          </li>

          {/* start top menu */}
          <li className="dropdown d-none d-lg-block">
            <a
              className="nav-link dropdown-toggle waves-effect waves-light"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              Create New
              <i className="mdi mdi-chevron-down" />
            </a>
            <div className="dropdown-menu">
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">
                <i className="fe-briefcase mr-1" />
                <span>New Projects</span>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">
                <i className="fe-user mr-1" />
                <span>Create Users</span>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">
                <i className="fe-bar-chart-line- mr-1" />
                <span>Revenue Report</span>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">
                <i className="fe-settings mr-1" />
                <span>Settings</span>
              </a>
              <div className="dropdown-divider" />
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">
                <i className="fe-headphones mr-1" />
                <span>Help &amp; Support</span>
              </a>
            </div>
          </li>
          {/* end top menu */}
        </ul>
      </div>
      {/* end Topbar */}
    </>
  );
};

export default Topbar;
