import Username from './../features/User/Username'

const Header = () => {
  return (
    <header>
    <Link to="/">
      Fast React Pizza Co.
    </Link>
    <Username />
  </header>
  )
}

export default Header