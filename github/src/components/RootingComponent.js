import RootingComponentStyle from "../styles/RootingComponent.css";
import FolderIcon from "@mui/icons-material/Folder";
import ArticleIcon from "@mui/icons-material/Article";

export default function RootingComponent({ file, repoLang }) {
  return (
    <div className="rooting_component" key={file.path}>
      {file.type == "tree" ? (
        <FolderIcon
          sx={{
            fontSize: 40,
          }}
        />
      ) : (
        <ArticleIcon
          sx={{
            fontSize: 40,
          }}
        />
      )}

      <div className="rooting_file_name">{file.path}</div>
    </div>
  );
}
