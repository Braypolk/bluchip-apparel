export const CartButton = () => {
  return (
    <svg viewBox='0 0 111 106' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M5 28.5H2.5V31V101V103.5H5H106H108.5V101V31V28.5H106H89.3232C87.7513 22.5935 84.6453 17.1478 80.2487 12.7513C73.685 6.18749 64.7826 2.5 55.5 2.5C46.2174 2.5 37.315 6.18749 30.7513 12.7513C26.3547 17.1478 23.2487 22.5935 21.6768 28.5H5ZM69.8189 23.1811C71.3876 24.7498 72.6724 26.5494 73.6401 28.5H37.3599C38.3276 26.5494 39.6124 24.7498 41.1811 23.1811C44.9787 19.3835 50.1294 17.25 55.5 17.25C60.8706 17.25 66.0213 19.3835 69.8189 23.1811Z'
        stroke='#fff'
        strokeWidth='5'
      />
    </svg>
  )
}

export const PrevButton = ({ enabled, onClick }) => (
  <button className='embla__button embla__button--prev' onClick={onClick}>
    <svg className='embla__button__svg' viewBox='137.718 -1.001 366.563 644'>
      <path d='M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z' />
    </svg>
  </button>
)

export const NextButton = ({ enabled, onClick }) => (
  <button className='embla__button embla__button--next' onClick={onClick}>
    <svg className='embla__button__svg' viewBox='0 0 238.003 238.003'>
      <path d='M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z' />
    </svg>
  </button>
)