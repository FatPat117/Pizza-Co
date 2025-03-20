import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UseerName from '../features/users/UseerName';

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">
        Fast Pizza Co.
      </Link>

      <SearchOrder />
      <UseerName />
    </header>
  );
}

export default Header;
