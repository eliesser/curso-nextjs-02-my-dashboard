'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}

export const SidebarMenuItem = ({ path, icon, title, subTitle }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${
        pathname === path ? 'bg-blue-800' : ''
      } w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3  hover:bg-white/5 transition ease-linear duration-150`}
      href={path}
    >
      <div>{icon}</div>
      <div className='flex flex-col'>
        <span
          className={`${
            pathname === path ? 'text-white' : 'text-slate-300 '
          } text-lg font-bold leading-5`}
        >
          {title}
        </span>
        <span
          className={`${
            pathname === path ? 'text-white/50' : 'text-slate-500 '
          } text-sm hidden md:block`}
        >
          {subTitle}
        </span>
      </div>
    </Link>
  );
};
