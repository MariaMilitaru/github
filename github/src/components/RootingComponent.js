import RootingComponentStyle from "../styles/RootingComponent.css";

export default function RootingComponent({ file, repoLang }) {
  return (
    <div className="rooting_component" key={file.path}>
      <div>{file.path}</div>
    </div>
  );
}
