import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const UserList = ({ users }) => {
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

  const arr = users;
  console.log(users.length);

  return (
    <>
      {users.results &&
        users.results.map((user) => (
          <tr key={user.pk}>
            <td>
              <b>#{user.pk}</b>
            </td>
            <td>
              <a href="javascript: void(0);" className="text-body">
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
        ))}
    </>
  );
};

export default UserList;
