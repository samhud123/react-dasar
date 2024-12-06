import { Link } from 'react-router-dom';

const Navigation = ({ listItem }) => {
  return (
    <nav className="flex justify-between bg-blue-200">
      <h1 className="text-2xl font-bold text-blue-500 flex items-center">
        Logo
      </h1>
      <ul className="flex flex-row gap-8 p-5">
        {listItem.map((item) => (
          <li className="hover:text-blue-500" key={item.id}>
            <Link to={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
