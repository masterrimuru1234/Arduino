import React, { useState } from "react";
import {
  NavCont,
  Left,
  Right,
  NavExtended,
  NavInner,
  NavLinkCont,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./style";
function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavCont extendNavbar={extendNavbar}>
      <NavInner>
        <Left>
          <NavLinkCont>
            <NavbarLink to="/">Dashboard</NavbarLink>
            <NavbarLink to="/Team">Team</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavLinkCont>
        </Left>
        <Right>
          <Logo>MUSHROOM</Logo>
        </Right>
      </NavInner>
      {extendNavbar && (
        <NavExtended>
          <NavbarLinkExtended to="/">Dashboard</NavbarLinkExtended>
          <NavbarLinkExtended to="/Team">Team</NavbarLinkExtended>
        </NavExtended>
      )}
    </NavCont>
  );
}

export default Navbar;
