import Link from 'next/link'

export default function HeroVideo({url, timing}) {
  return (
    <div className="uk-cover-container uk-text-center uk-visible@s" uk-height-viewport="offset-bottom: 10">
      <video 
        data-video-slideshow="" 
        src="https://www.datocms-assets.com/42073/1612467588-nanostrikehomepageanimation.mp4" 
        autoplay="true" 
        muted="true" 
        playsinline="true"
        repeat="false" 
        uk-cover="" >            
      </video>
      <div className="uk-position-bottom-center uk-position-large">
          <button>Link</button>
      </div>
  </div>
  )
}
