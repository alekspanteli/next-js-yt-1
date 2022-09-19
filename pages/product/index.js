import Link from 'next/link';

function ProductList({productId = 100}){
  return (
    <>
      <Link href="/product/1"><a>Product 1</a></Link>
      <Link href={`/product/${productId}`} replace><a>Product 2</a></Link>
    </>
  )
}

export default ProductList;