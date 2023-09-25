import { Link } from "react-router-dom"

const styleLink = {
    display: 'block',
    color: 'red'
}

function StudentsPage () {
    return (
        <div>
            <h1>List Students</h1>
            <Link style={styleLink}>Andi</Link>
            <Link style={styleLink}>Budi</Link>
            <Link style={styleLink}>Cahyo</Link>
            <Link to="/">Back To Home</Link>
        </div>
    )
}

export default StudentsPage