import Link from 'next/link'
import Image from 'next/image'
import { CartButton } from './svg'
import Logo from '../public/assets/logo.svg'
export default function Header () {
  return (
    <>
    <div className='header'>
      <div className='centerNav'>
        <div id='navLeft'>
          <Link href='/collections'>Collections</Link>
        </div>
        <Link href="/" ><a style={{cursor: "pointer", width: '160px'}}><Image src={Logo}/></a></Link> {/* todo: fix so color can be changed and on screen size change change logo size changes*/}
        <div id='navRight'>
          <Link href='/about'>About</Link>
        </div>
      </div>
      <div className='cart'>
        <CartButton />
      </div>
    </div>
      </>
  )
}
