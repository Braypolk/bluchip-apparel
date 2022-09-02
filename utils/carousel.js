// embla carousel: https://www.embla-carousel.com/examples/basic/

import React, { useState, useEffect, useCallback } from 'react'
import { NextButton, PrevButton } from './svg'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const SLIDE_COUNT = 3
const slides = Array.from(Array(SLIDE_COUNT).keys())
// todo: loop isn't working correctly
export default function Carousel () {
  const options = { delay: 4000 }
  const autoplay = Autoplay(options)
  const images = [
    'https://img.freepik.com/free-photo/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.jpg?w=2000',
    'https://static01.nyt.com/images/2021/09/24/fashion/24TODS-missoni/24TODS-missoni-mediumSquareAt3X.jpg',
    'https://www.byrdie.com/thmb/BnrPu3RcF930Fv5gbe3MulOXyqk=/1000x800/filters:fill(auto,1)/fashionbloggersprimary-2210aaad71a0454a899fa4345bef529f.jpg'
  ]
  // const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
  const [viewportRef, embla] = useEmblaCarousel(
    { loop: true, skipSnaps: false },
    [autoplay]
  )
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  useEffect(() => {
    if (!embla) return
    embla.on('select', onSelect)
    onSelect()
  }, [embla, onSelect])

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={viewportRef}>
        <div className='embla__container'>
          {slides.map(index => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__inner'>
                <img className='embla__slide__img' src={images[index]} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='buttons'>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="scrollTitle">
        Some Collection
      </div>
    </div>
  )
}
