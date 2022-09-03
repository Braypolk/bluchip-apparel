import Image from 'next/image'

export default function ItemGrid ({ imageList }) {
  return (
    <div className='itemGrid'>
      {imageList.map((img, key) => {
        return (
          <div className='imageBox'>
            <Image src={img} key={key} layout="fill"/>
          </div>
        )
      })}
    </div>
  )
}
