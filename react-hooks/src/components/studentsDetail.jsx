import { useParams } from "react-router";

function StudentsDetail() {
  const { nama } = useParams();

  return (
    <div>
      <h1>INI PAGE {nama}</h1>
    </div>
  );
}

export default StudentsDetail;
