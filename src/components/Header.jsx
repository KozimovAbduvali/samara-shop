import React from 'react';

function Header({ isFixed }) {
  return (
    <div className='border-b py-3'>
      <div className='max-w-6xl flex flex-wrap items-center gap-3 justify-center md:justify-between mx-auto px-4 text-sm'>
        <div className='flex flex-wrap items-center justify-center gap-y-3 gap-x-5'>
          <a href="#" className='flex items-center gap-1 hover:text-red-500'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>

            <span>
              Manzil: Andijon
            </span>
          </a>
          <a href="#" className='hover:text-red-500'>
            Hamkorlar
          </a>
          <a href="#" className='hover:text-red-500'>
            Biz haqimizda
          </a>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-y-3 gap-x-5'>
          <p className='flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-red-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            +998 91 603 97 97  +998 77 000 55 51
          </p>
          <a href="#" className='flex items-center gap-2 hover:text-red-500 capitalize'>
            <svg className='text-red-500 size-5' xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.654 3.303c-.298-.253-.729-.308-1.086-.14-2.04.957-19.55 8.719-20.96 9.381-.397.185-.644.551-.609.968.036.417.314.771.709.902 1.231.394 3.405 1.066 3.405 1.066s.839 2.657 1.272 4.026c.25.794 1.229.884 1.667.419.405-.426 3.704-3.519 3.704-3.519s2.8 2.05 3.55 2.594c.75.544 1.549.261 1.775-.83.221-1.068 3.464-16.181 3.864-18.066.074-.34-.035-.685-.309-.927zm-12.244 11.837-.479 4.888c-.034.347-.246.393-.343.056l-.996-3.384s6.717-5.881 7.165-6.315c.16-.154-.061-.245-.225-.098-1.192 1.07-5.122 4.192-5.122 4.192zm9.367 3.27c-.053.249-.201.303-.411.188-1.135-.65-3.31-2.228-3.31-2.228s-1.566 1.523-2.738 2.658c-.08.078-.154.147-.224.206l.453-4.628 6.382-5.678c.184-.162.317-.073.241.144l-.393 1.22-4.944 4.455c-.135.12-.276.36.059.594 1.13.82 3.166 2.291 3.166 2.291s.238.158.139.59z" />
            </svg>
            telegram grop
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
