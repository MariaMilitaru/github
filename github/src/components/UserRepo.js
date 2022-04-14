import Repository from "./Repository";
import TextField from "@mui/material/TextField";
import "../styles/UserRepo.css";

export default function UserRepo({
  repo,
  setSearchText,
  setRooting,
  setActiveRepo,
}) {
  return (
    <>
      <div className="test">
        <TextField
          id="standard-basic"
          label="search repo.."
          variant="standard"
          onChange={(ev) => setSearchText(ev.target.value)}
          style={{width:"20%", marginBottom: "20px"}}
        />
        <div className="repos_container">
          {repo.map((repo) => (
            <Repository
              key={repo.id}
              setRooting={setRooting}
              repo={repo}
              setActiveRepo={setActiveRepo}
            ></Repository>
          ))}
        </div>
      </div>
    </>
  );
}
