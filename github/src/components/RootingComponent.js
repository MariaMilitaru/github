import RootingComponentStyle from "../styles/RootingComponent.css";

export default function RootingComponent({ file }) {
  return (
    <div className="rooting_component">
      <div>{file.path}</div>
    </div>
  );
}
