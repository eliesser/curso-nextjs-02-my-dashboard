'use client';

import { IoCafeOutline } from 'react-icons/io5';

import { useAppSelector } from '@/store/store';
import { SimpleWidget } from './SimpleWidget';

export const WidgetGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className='flex flex-wrap p-2 items-center justify-center'>
      <SimpleWidget
        {...{
          title: `${count}`,
          subtitle: 'Paid products',
          label: 'Counter',
          icon: <IoCafeOutline size={50} className='text-blue-500' />,
          href: '/dashboard/counter',
        }}
      />
    </div>
  );
};
