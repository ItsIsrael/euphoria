import React from 'react'
import styled from 'styled-components'

const FooterEuphoria = () => {
  return (
          <Footer>
        <p>© 2022 EUPHORIA S.L. All rights reserved</p>
      </Footer>
  )
}

export default FooterEuphoria

const Footer = styled.footer`
  text-align: center;
  background-color: #0e1129;
  color: white;
  padding: 40px;
`;
