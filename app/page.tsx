import Image from 'next/image'
import Link from 'next/link'
import Product from './components/Product'

export default function Home() {
  return (
    <main>

      goodmorning
      <br/>
      {/* <a href='/users'>users</a> */}
      <Link href='/users'>users</Link>
      {/* <a href='/about'>About</a> */}
      <Link href='/about'>About</Link>
      <Product/>
          </main>
  )
}
