import { FadeLoader } from "react-spinners";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <FadeLoader color="red" height={15} width={3} />
    </div>
  );
}

export default Loader;