import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Rows from "./Rows";

const ListPost = ({ posts }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        {/* table header */}
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>

        {/* table body */}
        <TableBody>
          {posts.map((post) => (
            <Rows post={post} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListPost;
