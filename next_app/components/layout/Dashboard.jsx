import { useSelector } from "react-redux";
import { dashboardInfo } from "../../services/dashboardSlice";

const Dashboard = () => {
  const { pageTitle } = useSelector(dashboardInfo);
  return (
    <>
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
    </>
  );
};

export default Dashboard;
