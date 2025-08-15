import Link from 'next/link';

const BreadCrumb: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href={'/content/create'} className="text-base-content font-semibold">
            / {title}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
