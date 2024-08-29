'use client';

import { useEffect } from 'react';

import { init, decrement, increment } from '@/store/counter/counterSlice';
import { useAppSelector, useAppDispatch } from '@/store/store';

interface Props {
  value?: number;
}

interface CounterResponse {
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then((resp) => resp.json());

  return data;
};

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(init(count)));
  }, [dispatch]);

  return (
    <>
      <span className='text-9xl'> {count} </span>

      <div className='flex'>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
      </div>
    </>
  );
};
