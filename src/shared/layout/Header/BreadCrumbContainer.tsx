'use client';
import { usePathname } from 'next/navigation';
import BreadCrumb from '../../UI/BreadCrumb';
function BreadCrumbContainer() {
  const pathname = usePathname();
  const createRoute = pathname.includes('/content/create');
  const breadCrumbHandler = () => {
    if (createRoute) {
      return <BreadCrumb title="ایجاد محتوا" />;
    }
  };
  return <div>{breadCrumbHandler()}</div>;
}

export default BreadCrumbContainer;
