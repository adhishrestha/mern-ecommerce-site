import { Link } from 'react-router-dom';

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav aria-label="Breadcrumb" className="mt-5">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-semibold text-[#3A3845]"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="transition-colors hover:text-black"
                >
                  {item.label}
                </Link>
              )}

              {!isLast && (
                <span aria-hidden="true" className="text-gray-400">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
