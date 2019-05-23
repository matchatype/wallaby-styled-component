import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) =>
    console.log(theme.breakpoints.lg) || theme.breakpoints.lg};
  margin-left: auto;
  margin-right: auto;
  padding: ${({ theme }) => theme.fontSizes.small};
`;

const Footer = ({ siteTitle }) => (
  <StyledFooter>
    {siteTitle} &ndash; © {new Date().getFullYear()}. All Rights Reserved.
  </StyledFooter>
);

export default Footer;
