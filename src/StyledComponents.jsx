import styled from "styled-components"

function StyledComponents(){

    // const Heading = styled.h1`
    // color:white;
    // border:1px solid green;
    // background-color: navy;
    // border-radius:5px;
    // `

    const Heading = styled.h1({
        color:'red',
        border:'1px solid green',
        backgroundColor: 'purple',
        borderRadius:'5px'
    })

    const StyleBtn = styled.button`
    color:white;
    background-color: yellow;
    border-radius: 5px;
    margin:20px;`

    return (
        <>
        <h1>Use in Styled Components.</h1>
        <Heading>Sushil Thakur</Heading>
        <Heading>Software Developer</Heading>
        <StyleBtn>Login</StyleBtn>
        <StyleBtn>Logout</StyleBtn>
        
        </>
    )
}

export default StyledComponents;