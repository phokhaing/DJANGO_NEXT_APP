export default function Home() {
  return (
    <>
      {/* start page title */}
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">UBold</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">CRM</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
            <h4 className="page-title">Dashboard</h4>
          </div>
        </div>
      </div>
      {/* end page title */}
      <div className="row">
        <div className="col-md-4">
          <div className="card-box bg-pattern">
            <div className="row">
              <div className="col-6">
                <div className="avatar-md bg-blue rounded">
                  <i className="fe-layers avatar-title font-22 text-white" />
                </div>
              </div>
              <div className="col-6">
                <div className="text-right">
                  <h3 className="text-dark my-1">
                    <span data-plugin="counterup">120</span>
                  </h3>
                  <p className="text-muted mb-0 text-truncate">Active Deals</p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end card-box*/}
        </div>{" "}
        {/* end col */}
        <div className="col-md-4">
          <div className="card-box bg-pattern">
            <div className="row">
              <div className="col-6">
                <div className="avatar-md bg-success rounded">
                  <i className="fe-award avatar-title font-22 text-white" />
                </div>
              </div>
              <div className="col-6">
                <div className="text-right">
                  <h3 className="text-dark my-1">
                    <span data-plugin="counterup">741</span>
                  </h3>
                  <p className="text-muted mb-0 text-truncate">Won Deals</p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end card-box*/}
        </div>{" "}
        {/* end col */}
        <div className="col-md-4">
          <div className="card-box bg-pattern">
            <div className="row">
              <div className="col-6">
                <div className="avatar-md bg-danger rounded">
                  <i className="fe-delete avatar-title font-22 text-white" />
                </div>
              </div>
              <div className="col-6">
                <div className="text-right">
                  <h3 className="text-dark my-1">
                    <span data-plugin="counterup">256</span>
                  </h3>
                  <p className="text-muted mb-0 text-truncate">Lost Deals</p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end card-box*/}
        </div>{" "}
        {/* end col */}
      </div>
      {/* end row*/}
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body" dir="ltr">
              <div className="card-widgets">
                <a href="javascript: void(0);" data-toggle="reload">
                  <i className="mdi mdi-refresh" />
                </a>
                <a
                  data-toggle="collapse"
                  href="#cardCollpase1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="cardCollpase1"
                >
                  <i className="mdi mdi-minus" />
                </a>
                <a href="javascript: void(0);" data-toggle="remove">
                  <i className="mdi mdi-close" />
                </a>
              </div>
              <h4 className="header-title mb-0">Deals Analytics</h4>
              <div id="cardCollpase1" className="collapse pt-3 show">
                <div
                  id="deals-analytics"
                  style={{ height: 350 }}
                  className="morris-chart"
                />
              </div>
            </div>
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col*/}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body" dir="ltr">
              <div className="card-widgets">
                <a href="javascript: void(0);" data-toggle="reload">
                  <i className="mdi mdi-refresh" />
                </a>
                <a
                  data-toggle="collapse"
                  href="#cardCollpase2"
                  role="button"
                  aria-expanded="false"
                  aria-controls="cardCollpase2"
                >
                  <i className="mdi mdi-minus" />
                </a>
                <a href="javascript: void(0);" data-toggle="remove">
                  <i className="mdi mdi-close" />
                </a>
              </div>
              <h4 className="header-title mb-0">Average Time for Deal</h4>
              <div id="cardCollpase2" className="collapse pt-3 show">
                <div
                  id="morris-bar-example"
                  style={{ height: 350 }}
                  className="morris-chart"
                />
              </div>
            </div>
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col*/}
      </div>
      {/* end row*/}
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <div className="card-widgets">
                <a href="javascript: void(0);" data-toggle="reload">
                  <i className="mdi mdi-refresh" />
                </a>
                <a
                  data-toggle="collapse"
                  href="#cardCollpase3"
                  role="button"
                  aria-expanded="false"
                  aria-controls="cardCollpase3"
                >
                  <i className="mdi mdi-minus" />
                </a>
                <a href="javascript: void(0);" data-toggle="remove">
                  <i className="mdi mdi-close" />
                </a>
              </div>
              <h4 className="header-title mb-0">Recent Contacts</h4>
              <div id="cardCollpase3" className="collapse pt-3 show">
                <div className="table-responsive">
                  <table className="table table-centered table-hover mb-0">
                    <thead>
                      <tr>
                        <th>Basic Info</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Created Date</th>
                        <th style={{ width: 82 }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="table-user">
                          <img
                            src="assets/images/users/user-4.jpg"
                            alt="table-user"
                            className="mr-2 rounded-circle"
                          />
                          <a
                            href="javascript:void(0);"
                            className="text-body font-weight-semibold"
                          >
                            Paul J. Friend
                          </a>
                        </td>
                        <td>937-330-1634</td>
                        <td>pauljfrnd@jourrapide.com</td>
                        <td>Vine Corporation</td>
                        <td>07/07/2018</td>
                        <td>
                          <a href="javascript:void(0);" className="action-icon">
                            {" "}
                            <i className="mdi mdi-square-edit-outline" />
                          </a>
                          <a href="javascript:void(0);" className="action-icon">
                            {" "}
                            <i className="mdi mdi-delete" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-user">
                          <img
                            src="assets/images/users/user-3.jpg"
                            alt="table-user"
                            className="mr-2 rounded-circle"
                          />
                          <a
                            href="javascript:void(0);"
                            className="text-body font-weight-semibold"
                          >
                            Bryan J. Luellen
                          </a>
                        </td>
                        <td>215-302-3376</td>
                        <td>bryuellen@dayrep.com</td>
                        <td>Blue Motors</td>
                        <td>09/12/2018</td>
                        <td>
                          <a href="javascript:void(0);" className="action-icon">
                            {" "}
                            <i className="mdi mdi-square-edit-outline" />
                          </a>
                          <a href="javascript:void(0);" className="action-icon">
                            {" "}
                            <i className="mdi mdi-delete" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-user">
                          <img
                            src="assets/images/users/user-3.jpg"
                            alt="table-user"
                            className="mr-2 rounded-circle"
                          />
                          <a
                            href="javascript:void(0);"
                            className="text-body font-weight-semibold"
                          >
                            Kathryn S. Collier
                          </a>
                        </td>
                        <td>828-216-2190</td>
                        <td>collier@jourrapide.com</td>
                        <td>Arcanetworks</td>
                        <td>06/30/2018</td>
                        <td>
                          <a href="javascript:void(0);" className="action-icon">
                            {" "}
                            <i className="mdi mdi-square-edit-outline" />
                          </a>
                          <a href="javascript:void(0);" className="action-icon">
                            {" "}
                            <i className="mdi mdi-delete" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-user">
                          <img
                            src="assets/images/users/user-1.jpg"
                            alt="table-user"
                            className="mr-2 rounded-circle"
                          />
                          <a
                            href="javascript:void(0);"
                            className="text-body font-weight-semibold"
                          >
                            Timothy Kauper
                          </a>
                        </td>
                        <td>(216) 75 612 706</td>
                        <td>thykauper@rhyta.com</td>
                        <td>Boar Records</td>
                        <td>09/08/2018</td>
                        <td>
                          <a href="javascript:void(0);" className="action-icon">
                            {" "}
                            <i className="mdi mdi-square-edit-outline" />
                          </a>
                          <a href="javascript:void(0);" className="action-icon">
                            {" "}
                            <i className="mdi mdi-delete" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-user">
                          <img
                            src="assets/images/users/user-5.jpg"
                            alt="table-user"
                            className="mr-2 rounded-circle"
                          />
                          <a
                            href="javascript:void(0);"
                            className="text-body font-weight-semibold"
                          >
                            Zara Raws
                          </a>
                        </td>
                        <td>(02) 75 150 655</td>
                        <td>austin@dayrep.com</td>
                        <td>Bearings</td>
                        <td>07/15/2018</td>
                        <td>
                          <a href="javascript:void(0);" className="action-icon">
                            {" "}
                            <i className="mdi mdi-square-edit-outline" />
                          </a>
                          <a href="javascript:void(0);" className="action-icon">
                            {" "}
                            <i className="mdi mdi-delete" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>{" "}
                {/* end table-responsive*/}
              </div>{" "}
              {/* end .collapse*/}
            </div>{" "}
            {/* end card-body*/}
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col*/}
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <div className="card-widgets">
                <a href="javascript: void(0);" data-toggle="reload">
                  <i className="mdi mdi-refresh" />
                </a>
                <a
                  data-toggle="collapse"
                  href="#cardCollpase4"
                  role="button"
                  aria-expanded="false"
                  aria-controls="cardCollpase4"
                >
                  <i className="mdi mdi-minus" />
                </a>
                <a href="javascript: void(0);" data-toggle="remove">
                  <i className="mdi mdi-close" />
                </a>
              </div>
              <h4 className="header-title mb-0">Sales by Product Group</h4>
              <div id="cardCollpase4" className="collapse pt-3 show">
                <div
                  id="morris-donut-example"
                  style={{ height: 310 }}
                  className="morris-chart"
                />
                <div className="text-center">
                  <p className="text-muted font-15 font-family-secondary mb-0">
                    <span className="mx-2">
                      <i className="mdi mdi-checkbox-blank-circle text-info" />{" "}
                      Group 1
                    </span>
                    <span className="mx-2">
                      <i className="mdi mdi-checkbox-blank-circle text-primary" />{" "}
                      Group 2
                    </span>
                    <span className="mx-2">
                      <i className="mdi mdi-checkbox-blank-circle text-light" />{" "}
                      Group 3
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col*/}
      </div>
      {/* end row*/}
      
      {/* <!-- Vendor js --> */}
      <script src="assets/js/vendor.min.js"></script>
      {/* <!--Morris Chart--> */}
      <script src="assets/libs/morris-js/morris.min.js"></script>
      <script src="assets/libs/raphael/raphael.min.js"></script>
      {/* <!-- CRM Dashboard init js--> */}
      <script src="assets/js/pages/crm-dashboard.init.js"></script>
    </>
  );
}
