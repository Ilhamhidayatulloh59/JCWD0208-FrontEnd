import { Link, useLocation } from "react-router-dom";

function StudentsList() {
  const location = useLocation();
  const data = ["ahmad", "budi", "cinta"];

  console.log(location)
  return (
    <div>
      {data.map((item) => {
        return (
          <Link style={{ display: "block" }} to={item}>
            {item}
          </Link>
        );
      })}
    </div>
  );
}

export default StudentsList;
