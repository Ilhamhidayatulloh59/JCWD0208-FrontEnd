import "./home.css"
import styled from "styled-components"

const StyledButton = styled.button`
    background-color: black;
    font-size: 32px;
    color: white
`

function Home (props) {
    return (
        <div>
            <h1 style={{color: "green"}}>Welcome {props.name}</h1>
            <h2 className="color-red">{props.email}</h2>
            <StyledButton>Submit</StyledButton>
        </div>
    )
}

export default Home
