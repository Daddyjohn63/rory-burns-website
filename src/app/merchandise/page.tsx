import { InnerHeader } from '@/components/common/Inner-header';
import { ProductCard } from '@/components/merchandise/product-card';
import { Product } from '@/types/product';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Merchandise | Rory Burns Testimonial Year',
  description:
    'We have made a range of merchandise available through the shop at the Kia Oval.'
};

const productData: Product[] = [
  {
    id: 1,
    image: '/merch/t-shirt-adult-white.jpg',
    name: 'Rory Burns Adult White T-Shirt',
    price: '£22',
    sizes: 'Sm, Med, L, XL'
  },
  {
    id: 2,
    image: '/merch/t-shirt-kids-white.jpg',
    name: 'Rory Burns Kids White T-Shirt',
    price: '£20',
    sizes: '5/6yrs, 7/8yrs, 9/11yrs, 12/13yrs'
  },
  {
    id: 3,
    image: '/merch/hoodie-adult-grey.jpg',
    name: 'Rory Burns Adult Grey Hoodie',
    price: '£40',
    sizes: 'Sm, Med, L, XL'
  },
  {
    id: 4,
    image: '/merch/hoodie-kids-grey.jpg',
    name: 'Rory Burns Kids Grey Hoodie',
    price: '£38',
    sizes: '5/6yrs, 7/8yrs, 9/11yrs, 12/13yrs'
  },
  {
    id: 5,
    image: '/merch/sand-bucket-hat.jpg',
    name: 'Rory Burns Sand Bucket Hat',
    price: '£15',
    sizes: 'One Size'
  },
  {
    id: 6,
    image: '/merch/white-bucket-hat.jpg',
    name: 'Rory Burns White Bucket Hat',
    price: '£15',
    sizes: 'One Size'
  },
  {
    id: 7,
    image: '/merch/balls.jpg',
    name: 'Rory Burns Junior Cricket Balls (4.75oz)',
    price: '£15 for one ball',
    sizes: ''
  },
  {
    id: 8,
    image: '/merch/balls.jpg',
    name: 'Rory Burns Adult Cricket Balls (5.5oz)',
    price: '£15 for one ball',
    sizes: ''
  },
  {
    id: 9,
    image: '/merch/baseball-caps-placeholder.jpg',
    name: 'Rory Burns Baseball Caps',
    price: '£20',
    sizes: 'One Size'
  }
];

const Merchandise = () => {
  return (
    <section className="bg-gray-100">
      <InnerHeader
        title="Merchandise"
        description="Rory Burns Testimonial Merchandise"
      />
      <div className="container mx-auto px-4 py-8 justify-center items-center flex flex-col">
        {/* <h2 className="text-4xl font-bold text-center mb-8">Merchandise</h2> */}
        <p className="text-center mb-4 text-lg max-w-2xl">
          We have made a range of merchandise available through the shop at the
          Kia Oval.
        </p>
        <p className="text-center mb-8 text-lg max-w-2xl">
          However, if you live too far away to visit the shop, please email Lucy
          at Lucy Donovan{' '}
          <Link href="mailto:me@lucydonovan.com" target="blank">
            <span className="text-blue-500 underline text-lg">
              me@lucydonovan.com
            </span>
          </Link>{' '}
          and she will try to organise a delivery to you.
        </p>
        <div className="flex flex-wrap -mx-4">
          {productData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Merchandise;
