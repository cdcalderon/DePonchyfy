import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      {/*<StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0xce84867c3c02b05dc570d0135103d3fb9cc19433"
      >
        SushiSwap SUSHI-ETH
      </StyledLink> */}
      <StyledLink
        target="_blank"
        href="https://app.uniswap.org/#/add/v2/0x2899a03ffDab5C90BADc5920b4f53B0884EB13cC/ETH"
      >
        DAI-ETH LP Uniswap-V2
      </StyledLink>
      <StyledLink target="_blank" href="https://v2-app.compound.finance/#">
        Compound faucets V2
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://app.uniswap.org/#/add/v2/0x2899a03ffDab5C90BADc5920b4f53B0884EB13cC/0x79C950C7446B234a6Ad53B908fBF342b01c4d446"
      >
        USDT-ETH SLP Uniswap-V2
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://app.uniswap.org/#/add/v2/ETH/0x07865c6E87B9F70255377e024ace6630C1Eaa37F"
      >
        USDC-ETH SLP Uniswap-V2
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
