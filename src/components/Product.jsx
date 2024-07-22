import React, { useState, useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';

const productsData = [
  {
    id: 1,
    title: 'Samara',
    description: 'SAMARA brendi mahsulotlari KATALOGI va NARXLARI',
    image: 'https://backoffice.samarashop.uz/media/Category/samara_sayt_uchun_G403N7E.jpg',
  },
  {
    id: 2,
    title: 'Aksoy',
    description: 'Aksoy suvlari va narxlari bilan tanishing',
    image: 'https://backoffice.samarashop.uz/media/Category/aksoy2.jpg',
  },
  {
    id: 3,
    title: 'OXI - Fresh',
    description: 'OXI – Fresh mahsulotlari KATALOGI va NARXLARI',
    image: 'https://backoffice.samarashop.uz/media/Category/sayt_uchun_oxi_F1PgT2g.jpg',
  },
  {
    id: 1,
    title: 'Samara',
    description: 'SAMARA brendi mahsulotlari KATALOGI va NARXLARI',
    image: 'https://backoffice.samarashop.uz/media/Category/samara_sayt_uchun_G403N7E.jpg',
  },
  {
    id: 2,
    title: 'Aksoy',
    description: 'Aksoy suvlari va narxlari bilan tanishing',
    image: 'https://backoffice.samarashop.uz/media/Category/aksoy2.jpg',
  },
  {
    id: 3,
    title: 'OXI - Fresh',
    description: 'OXI – Fresh mahsulotlari KATALOGI va NARXLARI',
    image: 'https://backoffice.samarashop.uz/media/Category/sayt_uchun_oxi_F1PgT2g.jpg',
  },
];

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 2000); // 2 seconds delay for demonstration
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl text-black/80 font-bold text-center mb-2">Bizning mahsulotlar</h2>
      <p className="text-center text-gray-500 mb-10">Quyidagi bo'limlardan birini tanlang</p>
      <div className="grid items-center md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 lg:gap-24 text-center px-4 md:px-10 mt-4 md:mt-8">
        {loading
          ? Array.from(new Array(6)).map((_, index) => (
              <div key={index} className="bg-white flex flex-col justify-between items-center drop-shadow-xl rounded-lg overflow-hidden p-2.5 pb-6 w-[278px] min-h-[400px]">
                <div className='aspect-[278/248] w-full h-[248px] overflow-hidden rounded-xl'>
                  <Skeleton variant="rectangular" width="100%" height="100%" />
                </div>
                <div className='space-y-1 w-full px-4'>
                  <Skeleton variant="text" width="80%" height={30} />
                  <Skeleton variant="text" width="60%" height={20} />
                </div>
                <Skeleton variant="rectangular" width="50%" height={36} className="mt-auto" />
              </div>
            ))
          : products.map(product => (
              <div key={product.id} className="bg-white flex flex-col justify-between items-center drop-shadow-xl rounded-lg overflow-hidden p-2.5 pb-6 w-[278px] min-h-[400px]">
                <div className='aspect-[278/248] w-full h-[248px] overflow-hidden rounded-xl'>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className='space-y-1 w-full px-4'>
                  <h3 className="text-[22px] font-bold">{product.title}</h3>
                  <p className="text-center text-sm">{product.description}</p>
                </div>
                <button className="w-max bg-[#D50100] text-white font-semibold rounded-full button-animation mt-8 py-1 px-6">
                  <span>
                    Buyurtma berish
                  </span>
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Products;
