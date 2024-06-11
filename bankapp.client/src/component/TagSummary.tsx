import { Tag } from "../types/Types";
import {
  Box,
  Button,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { DeleteOutline } from "@mui/icons-material";
import { pink } from "@mui/material/colors";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export type AppProps = {
  tag: Tag; //Tag property is tag type
};
export default function TagSummary({ tag }: AppProps): JSX.Element {
  //destructure that exact propery & use in our code
  return (
    <>
      <Box textAlign="right">
        <Button style={{ textAlign: "end" }} color="primary">
          <Link to="/tag/add-tag" className="btn btn-primary">
              Add(+)
          </Link>
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Tag Name</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tag
              ? tag.map((tag) => (
                  <StyledTableRow key={tag.name}>
                    <StyledTableCell component="th" scope="row">
                      {tag.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Link
                        to={"/tag/edit-tag/" + tag.id}
                        className="btn btn-sm"
                        style={{ marginRight: "6px" }}
                      >
                        <EditIcon fontSize="small"></EditIcon>
                      </Link>

                      <DeleteOutline
                        fontSize="small"
                        sx={{ color: pink[500] }}
                      ></DeleteOutline>
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
