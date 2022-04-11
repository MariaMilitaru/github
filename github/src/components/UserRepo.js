import UserRepoStyle from "../styles/UserRepoStyle.css";
import Repository from "./Repository";
import TextField from "@mui/material/TextField";

export default function UserRepo({ repo }) {
  return (
    <>
      <div className="test">
        <TextField
          id="standard-basic"
          label="search repo.."
          variant="standard"
        />
        {repo.map((repo) => (
          <Repository key={repo.id} repo={repo}></Repository>
        ))}
      </div>
    </>
  );
}
