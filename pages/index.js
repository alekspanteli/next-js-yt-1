import Link from 'next/link';
import {useRouter} from 'next/router'

function Home() {
  const router = useRouter();
  const handleCLick = () => {
    console.log('Your order was placed successfully!')
    // router.push('/product')
    // router.replace('/product')
  }
  return (
    <>
      <h1>Home page</h1>
      <Link href="/blog"><a>Blog</a></Link>
      <Link href="/product"><a>Product</a></Link>
      <button onClick={handleCLick}>Place order</button>
    </>
  );
}

export default Home;
