import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavCont = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: black;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`;
export const Left = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  /* background-color: red; */
`;
export const Right = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  /* background-color: salmon; */
`;
export const NavExtended = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;
export const NavInner = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;
export const NavLinkCont = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 20px;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const Logo = styled.h1`
  height: auto;
  color: white;
  font-size: x-large;
  text-decoration: none;
  margin: 20px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 40px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;
export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;
