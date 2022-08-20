import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
import Link from "next/link";

const Rows = ({ post }) => {
  return (
    <TableRow key={post.id}>
      <TableCell align="center">
        <Link href={`posts/${post.id}`}>
          <a>{post.id}</a>
        </Link>
      </TableCell>
      <TableCell component="th">{post.title}</TableCell>
      <TableCell>
        <Button size="small" variant="contained">
          VIEW
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default Rows;
