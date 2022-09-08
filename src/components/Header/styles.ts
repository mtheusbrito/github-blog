import styled from "styled-components";

interface HeaderContainerProps {
  banner: string
}
export const HeaderContainer = styled.header<HeaderContainerProps>`
width: 100%;
height: 18rem;
background-image: ${props => `url(${props.banner})`};
text-align: center;
img{
  margin-top: 4rem;
  width: 148px;
}
`