import {useRouter} from 'next/router'

function ProductDetail(){
  const router = useRouter();
  const id = router.query.id;
  return <h1>Blog Post page {id}</h1>
}

export default ProductDetail;