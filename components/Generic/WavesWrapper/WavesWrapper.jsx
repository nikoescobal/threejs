import Image from 'next/image'
import PropTypes from 'prop-types'

function WavesWrapper({children}) {
  return (
    <div>
      {/* <img src="/backgrounds/wave-shape-dark.svg#svgView(viewBox(600, 00, 2000, 1050))" className="waves-bg" alt="" /> */}
      <img src="/backgrounds/wave-shape-dark-2.svg" className="waves-bg" alt="" />
      { children }
      {/* <Image objectFit='fill' src="/backgrounds/wave-shape-light.svg#svgView(viewBox(600, 00, 2000, 1050))" className="waves-bg" alt="" /> */}
    </div>
  )
}

export default WavesWrapper