/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { NavContainer, Wrapper, LeftGrid, RigthGrid } from "Styles/GlobalStyles"

const index = () => {
  return (
    <>
      <Wrapper>
        <NavContainer>
          <LeftGrid>Left Collective</LeftGrid>
          <RigthGrid>
            <ul className="text-3xl">
              <li href="/about">ABOUT</li>
              <li href="/latestwork">LATEST WORK</li>
              <li href="/shop">SHOP</li>
              <li href="/contact">CONTACT</li>
            </ul>
          </RigthGrid>
        </NavContainer>
      </Wrapper>
    </>
  )
}

export default index
