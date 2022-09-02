import Link from 'next/link'
import { CartButton } from './svg'

export default function Header () {
  return (
    <div className='header'>
      <div className='centerNav'>
        <div id='navLeft'>
          <Link href='#'>Shop</Link>
        </div>
        <h1>BLUCHIP</h1> {/* change to logo */}
        <div id='navRight'>
          <Link href='#'>About</Link>
        </div>
      </div>
      <div className='cart'>
        <CartButton />
      </div>
    </div>
  )
}
