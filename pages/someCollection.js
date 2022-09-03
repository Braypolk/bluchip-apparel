import testImage from '../public/assets/test_sweatshirt.png'
import testHero from '../public/assets/test1.png'
import ItemGrid from '../utils/itemGrid'
import Header from '../utils/header'

export default function SomeCollection () {
  const imageList = [
    testImage,
    testImage,
    testImage,
    testImage,
    testImage,
    testImage,
    testImage,
    testImage
  ]
  return (
    <>
      <Header />
      <div className='landing'></div>
      <ItemGrid imageList={imageList} />
    </>
  )
}
