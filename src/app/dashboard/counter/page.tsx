import { Metadata } from 'next';

import { CartCounter } from '@/shopping-cart';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Contador',
};

export default function CounterPage() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Products in cart</span>

      <CartCounter value={20} />
    </div>
  );
}
