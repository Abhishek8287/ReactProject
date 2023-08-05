function Navbar() {
  return (
    <nav>
      <div className="image">
        <img src="/Images/1.png" alt="logo" />
      </div>
      <div className="list">
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <button>Log In</button>
    </nav>
  );
}

export default Navbar;
