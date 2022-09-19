import Link from 'next/link';

function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Link href="/blog"><a>Blog</a></Link>
    </>
  );
}

export default Home;
