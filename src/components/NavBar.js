const NavBar = () => {
  const links = ['Home', 'Calculator', 'Quote'];
  return (
    <nav className="nav-bar">
      <h2>Math Magicians</h2>
      <ul>
        {links.map((link) => (<li key={link.id}>{link}</li>))}
      </ul>
    </nav>
  );
};

export default NavBar;
