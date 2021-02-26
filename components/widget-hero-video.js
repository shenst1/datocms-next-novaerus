import NavigationNode from '../components/navigation-node'
import { useState } from 'react'

export default function WidgetHeroVideo({widget: {button, slides, videoUrl, hideOnMobile}}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slidesLength = slides.length
  const isLastSlide = currentSlide + 1 === slidesLength

  function handleTimeUpdate(e) {
    if (!isLastSlide && e.target.currentTime > slides[currentSlide + 1].timing) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  function handleVideoEnded(e) {
    setCurrentSlide(0);
    e.target.play();
  }

  return (
    <div className={`uk-cover-container uk-text-center ${hideOnMobile && "uk-visible@s"}`} uk-height-viewport="offset-bottom: 10">
      <video onEnded={handleVideoEnded} onTimeUpdate={handleTimeUpdate} src={videoUrl} uk-cover="" />
      <div className="uk-position-cover uk-overlay-tertiary">
        <div className="uk-position-center uk-light">
          {
            slides.map((slide, i) => 
              <h1 key={i} className={`slide-text nov-text-shadow uk-animation-fade ${i !== currentSlide && 'uk-hidden' }` }>{slide.textOnly}</h1>
            )
          }
        </div>
      </div>
      <div className="uk-position-bottom-center uk-position-large">
        <NavigationNode className="uk-button uk-button-primary" node={button} />
      </div>
    </div>
  )
  
}