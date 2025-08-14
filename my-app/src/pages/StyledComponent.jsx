import styled from "styled-components"
const StyledComponent =()=>{
    const Wrapper=styled.div`
        background-color:lightblue;
        width:95vw;
        `;
    const Title=styled.h1`
        color:red;`;
    return(
        <Wrapper>
            <Title>StyledComponent..</Title>
        </Wrapper>
    )
}
export default StyledComponent;