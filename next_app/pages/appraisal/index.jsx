const index = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">UBold</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Apps</a>
                </li>
                <li className="breadcrumb-item active">Tickets</li>
              </ol>
            </div>
            <h4 className="page-title">Tickets</h4>
          </div>
        </div>
      </div>
      {/* end page title */}
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
                    <span data-plugin="counterup">3,947</span>
                  </h3>
                  <p className="text-muted mb-1 text-truncate">Total Tickets</p>
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
                    Pending Tickets
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
                    Closed Tickets
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
                    Deleted Tickets
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
      <div className="row">
        <div className="col-12">
          <div className="card-box">
            <button
              type="button"
              className="btn btn-sm btn-blue waves-effect waves-light float-right"
            >
              <i className="mdi mdi-plus-circle" /> Add Ticket
            </button>
            <h4 className="header-title mb-4">Manage Tickets</h4>
            <table
              className="table table-hover m-0 table-centered dt-responsive nowrap w-100"
              id="tickets-table"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Requested By</th>
                  <th>Subject</th>
                  <th>Assignee</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Created Date</th>
                  <th>Due Date</th>
                  <th className="hidden-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>#1256</b>
                  </td>
                  <td>
                    <a href="javascript: void(0);" className="text-body">
                      <img
                        src="assets/images/users/user-2.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                      <span className="ml-2">George A. Llanes</span>
                    </a>
                  </td>
                  <td>Support for theme</td>
                  <td>
                    <a href="javascript: void(0);">
                      <img
                        src="assets/images/users/user-10.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                    </a>
                  </td>
                  <td>
                    <span className="badge bg-soft-secondary text-secondary">
                      Low
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-success">Open</span>
                  </td>
                  <td>2017/04/28</td>
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
                          <i className="mdi mdi-pencil mr-2 text-muted font-18 vertical-middle" />
                          Edit Ticket
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-check-all mr-2 text-muted font-18 vertical-middle" />
                          Close
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-delete mr-2 text-muted font-18 vertical-middle" />
                          Remove
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-star mr-2 font-18 text-muted vertical-middle" />
                          Mark as Unread
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>#2542</b>
                  </td>
                  <td>
                    <a href="javascript: void(0);" className="text-body">
                      <img
                        src="assets/images/users/user-3.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                      <span className="ml-2">Jose D. Delacruz</span>
                    </a>
                  </td>
                  <td>New submission on your website</td>
                  <td>
                    <a href="javascript: void(0);">
                      <img
                        src="assets/images/users/user-9.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                    </a>
                  </td>
                  <td>
                    <span className="badge bg-soft-warning text-warning">
                      Medium
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-secondary">Closed</span>
                  </td>
                  <td>2008/04/25</td>
                  <td>2008/04/25</td>
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
                          <i className="mdi mdi-pencil mr-2 text-muted font-18 vertical-middle" />
                          Edit Ticket
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-check-all mr-2 text-muted font-18 vertical-middle" />
                          Close
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-delete mr-2 text-muted font-18 vertical-middle" />
                          Remove
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-star mr-2 font-18 text-muted vertical-middle" />
                          Mark as Unread
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>#320</b>
                  </td>
                  <td>
                    <a href="javascript: void(0);" className="text-body">
                      <img
                        src="assets/images/users/user-5.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                      <span className="ml-2">Phyllis K. Maciel</span>
                    </a>
                  </td>
                  <td>Verify your new email address!</td>
                  <td>
                    <a href="javascript: void(0);">
                      <img
                        src="assets/images/users/user-10.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                    </a>
                  </td>
                  <td>
                    <span className="badge bg-soft-danger text-danger">
                      High
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-success">Open</span>
                  </td>
                  <td>2017/04/20</td>
                  <td>2017/04/25</td>
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
                          <i className="mdi mdi-pencil mr-2 text-muted font-18 vertical-middle" />
                          Edit Ticket
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-check-all mr-2 text-muted font-18 vertical-middle" />
                          Close
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-delete mr-2 text-muted font-18 vertical-middle" />
                          Remove
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-star mr-2 font-18 text-muted vertical-middle" />
                          Mark as Unread
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>#1254</b>
                  </td>
                  <td>
                    <a href="javascript: void(0);" className="text-body">
                      <img
                        src="assets/images/users/user-8.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                      <span className="ml-2">Margeret V. Ligon</span>
                    </a>
                  </td>
                  <td>Your application has been received!</td>
                  <td>
                    <a href="javascript: void(0);">
                      <img
                        src="assets/images/users/user-10.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                    </a>
                  </td>
                  <td>
                    <span className="badge bg-soft-danger text-danger">
                      High
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-secondary">Closed</span>
                  </td>
                  <td>01/04/2017</td>
                  <td>21/05/2017</td>
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
                          <i className="mdi mdi-pencil mr-2 text-muted font-18 vertical-middle" />
                          Edit Ticket
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-check-all mr-2 text-muted font-18 vertical-middle" />
                          Close
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-delete mr-2 text-muted font-18 vertical-middle" />
                          Remove
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-star mr-2 font-18 text-muted vertical-middle" />
                          Mark as Unread
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>#1020</b>
                  </td>
                  <td>
                    <a href="javascript: void(0);" className="text-body">
                      <img
                        src="assets/images/users/user-9.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                      <span className="ml-2">Erwin E. Brown</span>
                    </a>
                  </td>
                  <td>A new rating has been received</td>
                  <td>
                    <a href="javascript: void(0);">
                      <img
                        src="assets/images/users/user-1.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                    </a>
                  </td>
                  <td>
                    <span className="badge bg-soft-warning text-warning">
                      Medium
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-secondary">Closed</span>
                  </td>
                  <td>2013/08/11</td>
                  <td>2013/08/30</td>
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
                          <i className="mdi mdi-pencil mr-2 text-muted font-18 vertical-middle" />
                          Edit Ticket
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-check-all mr-2 text-muted font-18 vertical-middle" />
                          Close
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-delete mr-2 text-muted font-18 vertical-middle" />
                          Remove
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-star mr-2 font-18 text-muted vertical-middle" />
                          Mark as Unread
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>#854</b>
                  </td>
                  <td>
                    <a href="javascript: void(0);" className="text-body">
                      <img
                        src="assets/images/users/user-2.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                      <span className="ml-2">William L. Trent</span>
                    </a>
                  </td>
                  <td>Your Profile has been accepted</td>
                  <td>
                    <a href="javascript: void(0);">
                      <img
                        src="assets/images/users/user-10.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                    </a>
                  </td>
                  <td>
                    <span className="badge bg-soft-danger text-danger">
                      High
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-success">Open</span>
                  </td>
                  <td>01/04/2017</td>
                  <td>21/05/2017</td>
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
                          <i className="mdi mdi-pencil mr-2 text-muted font-18 vertical-middle" />
                          Edit Ticket
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-check-all mr-2 text-muted font-18 vertical-middle" />
                          Close
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-delete mr-2 text-muted font-18 vertical-middle" />
                          Remove
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-star mr-2 font-18 text-muted vertical-middle" />
                          Mark as Unread
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>#9501</b>
                  </td>
                  <td>
                    <a href="javascript: void(0);" className="text-body">
                      <img
                        src="assets/images/users/user-10.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                      <span className="ml-2">Amy R. Barnaby</span>
                    </a>
                  </td>
                  <td>Homeworth for your property increased</td>
                  <td>
                    <a href="javascript: void(0);">
                      <img
                        src="assets/images/users/user-3.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                    </a>
                  </td>
                  <td>
                    <span className="badge bg-soft-secondary text-secondary">
                      Low
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-success">Open</span>
                  </td>
                  <td>01/04/2017</td>
                  <td>21/05/2017</td>
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
                          <i className="mdi mdi-pencil mr-2 text-muted font-18 vertical-middle" />
                          Edit Ticket
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-check-all mr-2 text-muted font-18 vertical-middle" />
                          Close
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-delete mr-2 text-muted font-18 vertical-middle" />
                          Remove
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-star mr-2 font-18 text-muted vertical-middle" />
                          Mark as Unread
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>#3652</b>
                  </td>
                  <td>
                    <a href="javascript: void(0);" className="text-body">
                      <img
                        src="assets/images/users/user-3.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                      <span className="ml-2">Jessica T. Phillips</span>
                    </a>
                  </td>
                  <td>Item Support Message sent</td>
                  <td>
                    <a href="javascript: void(0);">
                      <img
                        src="assets/images/users/user-9.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                    </a>
                  </td>
                  <td>
                    <span className="badge bg-soft-warning text-warning">
                      Medium
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-secondary">Closed</span>
                  </td>
                  <td>01/04/2017</td>
                  <td>21/05/2017</td>
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
                          <i className="mdi mdi-pencil mr-2 text-muted font-18 vertical-middle" />
                          Edit Ticket
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-check-all mr-2 text-muted font-18 vertical-middle" />
                          Close
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-delete mr-2 text-muted font-18 vertical-middle" />
                          Remove
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-star mr-2 font-18 text-muted vertical-middle" />
                          Mark as Unread
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>#9852</b>
                  </td>
                  <td>
                    <a href="javascript: void(0);" className="text-body">
                      <img
                        src="assets/images/users/user-5.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                      <span className="ml-2">Debra J. Wilson</span>
                    </a>
                  </td>
                  <td>Your item has been updated!</td>
                  <td>
                    <a href="javascript: void(0);">
                      <img
                        src="assets/images/users/user-10.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                    </a>
                  </td>
                  <td>
                    <span className="badge bg-soft-danger text-danger">
                      High
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-success">Open</span>
                  </td>
                  <td>01/04/2017</td>
                  <td>21/05/2017</td>
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
                          <i className="mdi mdi-pencil mr-2 text-muted font-18 vertical-middle" />
                          Edit Ticket
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-check-all mr-2 text-muted font-18 vertical-middle" />
                          Close
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-delete mr-2 text-muted font-18 vertical-middle" />
                          Remove
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-star mr-2 font-18 text-muted vertical-middle" />
                          Mark as Unread
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>#3652</b>
                  </td>
                  <td>
                    <a href="javascript: void(0);" className="text-body">
                      <img
                        src="assets/images/users/user-4.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                      <span className="ml-2">Luke J. Sain</span>
                    </a>
                  </td>
                  <td>Your password has been reset</td>
                  <td>
                    <a href="javascript: void(0);">
                      <img
                        src="assets/images/users/user-10.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                    </a>
                  </td>
                  <td>
                    <span className="badge bg-soft-secondary text-secondary">
                      Low
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-success">Open</span>
                  </td>
                  <td>01/04/2017</td>
                  <td>21/05/2017</td>
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
                          <i className="mdi mdi-pencil mr-2 text-muted font-18 vertical-middle" />
                          Edit Ticket
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-check-all mr-2 text-muted font-18 vertical-middle" />
                          Close
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-delete mr-2 text-muted font-18 vertical-middle" />
                          Remove
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-star mr-2 font-18 text-muted vertical-middle" />
                          Mark as Unread
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>#1352</b>
                  </td>
                  <td>
                    <a href="javascript: void(0);" className="text-body">
                      <img
                        src="assets/images/users/user-5.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                      <span className="ml-2">Karen R. Doyle</span>
                    </a>
                  </td>
                  <td>Question regarding your Bootstrap Theme</td>
                  <td>
                    <a href="javascript: void(0);">
                      <img
                        src="assets/images/users/user-8.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                    </a>
                  </td>
                  <td>
                    <span className="badge bg-soft-danger text-danger">
                      High
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-success">Open</span>
                  </td>
                  <td>01/04/2017</td>
                  <td>21/05/2017</td>
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
                          <i className="mdi mdi-pencil mr-2 text-muted font-18 vertical-middle" />
                          Edit Ticket
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-check-all mr-2 text-muted font-18 vertical-middle" />
                          Close
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-delete mr-2 text-muted font-18 vertical-middle" />
                          Remove
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-star mr-2 font-18 text-muted vertical-middle" />
                          Mark as Unread
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>#3562</b>
                  </td>
                  <td>
                    <a href="javascript: void(0);" className="text-body">
                      <img
                        src="assets/images/users/user-8.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                      <span className="ml-2">Freddie J. Plourde</span>
                    </a>
                  </td>
                  <td>Security alert for my account</td>
                  <td>
                    <a href="javascript: void(0);">
                      <img
                        src="assets/images/users/user-2.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                    </a>
                  </td>
                  <td>
                    <span className="badge bg-soft-secondary text-secondary">
                      Low
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-success">Open</span>
                  </td>
                  <td>01/04/2017</td>
                  <td>21/05/2017</td>
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
                          <i className="mdi mdi-pencil mr-2 text-muted font-18 vertical-middle" />
                          Edit Ticket
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-check-all mr-2 text-muted font-18 vertical-middle" />
                          Close
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-delete mr-2 text-muted font-18 vertical-middle" />
                          Remove
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-star mr-2 font-18 text-muted vertical-middle" />
                          Mark as Unread
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>#3658</b>
                  </td>
                  <td>
                    <a href="javascript: void(0);" className="text-body">
                      <img
                        src="assets/images/users/user-9.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                      <span className="ml-2">Darrell J. Cook</span>
                    </a>
                  </td>
                  <td>Christopher S. Ahmad</td>
                  <td>
                    <a href="javascript: void(0);">
                      <img
                        src="assets/images/users/user-10.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                    </a>
                  </td>
                  <td>
                    <span className="badge bg-soft-warning text-warning">
                      Medium
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-secondary">Closed</span>
                  </td>
                  <td>01/04/2017</td>
                  <td>21/05/2017</td>
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
                          <i className="mdi mdi-pencil mr-2 text-muted font-18 vertical-middle" />
                          Edit Ticket
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-check-all mr-2 text-muted font-18 vertical-middle" />
                          Close
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-delete mr-2 text-muted font-18 vertical-middle" />
                          Remove
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-star mr-2 font-18 text-muted vertical-middle" />
                          Mark as Unread
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>#2251</b>
                  </td>
                  <td>
                    <a href="javascript: void(0);" className="text-body">
                      <img
                        src="assets/images/users/user-8.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                      <span className="ml-2">Mark C. Diaz</span>
                    </a>
                  </td>
                  <td>Verify your new email address!</td>
                  <td>
                    <a href="javascript: void(0);">
                      <img
                        src="assets/images/users/user-10.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                    </a>
                  </td>
                  <td>
                    <span className="badge bg-soft-danger text-danger">
                      High
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-success">Open</span>
                  </td>
                  <td>01/04/2017</td>
                  <td>21/05/2017</td>
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
                          <i className="mdi mdi-pencil mr-2 text-muted font-18 vertical-middle" />
                          Edit Ticket
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-check-all mr-2 text-muted font-18 vertical-middle" />
                          Close
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-delete mr-2 text-muted font-18 vertical-middle" />
                          Remove
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-star mr-2 font-18 text-muted vertical-middle" />
                          Mark as Unread
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>#3654</b>
                  </td>
                  <td>
                    <a href="javascript: void(0);" className="text-body">
                      <img
                        src="assets/images/users/user-2.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                      <span className="ml-2">Robert K. Joseph</span>
                    </a>
                  </td>
                  <td>Support for theme</td>
                  <td>
                    <a href="javascript: void(0);">
                      <img
                        src="assets/images/users/user-10.jpg"
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle avatar-xs"
                      />
                    </a>
                  </td>
                  <td>
                    <span className="badge bg-soft-secondary text-secondary">
                      Low
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-success">Open</span>
                  </td>
                  <td>01/04/2017</td>
                  <td>21/05/2017</td>
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
                          <i className="mdi mdi-pencil mr-2 text-muted font-18 vertical-middle" />
                          Edit Ticket
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-check-all mr-2 text-muted font-18 vertical-middle" />
                          Close
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-delete mr-2 text-muted font-18 vertical-middle" />
                          Remove
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-star mr-2 font-18 text-muted vertical-middle" />
                          Mark as Unread
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* end col */}
      </div>
    </>
  );
};

export default index;
