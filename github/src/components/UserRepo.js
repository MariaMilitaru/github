import Repository from "./Repository";
import TextField from "@mui/material/TextField";
import "../styles/UserRepo.css";

export default function UserRepo({ repo }) {
  return (
    <>
      <div className="test">
        <TextField
          id="standard-basic"
          label="search repo.."
          variant="standard"
        />
        <div className="repos_container">
        {repo.map((repo) => (
          <Repository key={repo.id} repo={repo}></Repository>
        ))}
        </div>
      </div>
    </>
  );
}
