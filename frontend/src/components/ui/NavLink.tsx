import { Link } from 'react-router-dom';
import { Button } from './button';
type NavLinkProps = {
  to: string;
  label: string;
};

const NavLink = ({ to, label }:NavLinkProps) => {
  return (
    <Link to={to} className="hover:text-blue-500">
      <Button variant="outline">{label}</Button>
    </Link>
  );
};

export default NavLink;