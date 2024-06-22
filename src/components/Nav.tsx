import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className='flex gap-6 justify-end'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
