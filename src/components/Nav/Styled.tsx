import styled from 'styled-components'

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: white;
  padding: 1rem 0;
`

const NavLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`

const Links = styled.ul`
  list-style: none;
  display: inline-block;
  margin: 0;

  li {
    font-size: 0.8rem;
    display: inline-block;
    margin: 0 0.5rem;
  }
`

export default {
  Nav,
  Links,
  NavLayout,
}
