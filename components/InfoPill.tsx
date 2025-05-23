import React from 'react'

const infoPill = ({text,image}:InfoPillProps) => {
  return (
    <figure className='info-pill'><img src={image}  alt={text} />
    <figcaption>
        {text}
    </figcaption>
    </figure>
  )
}

export default infoPill