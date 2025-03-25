import { useEffect, useState } from "react";
import Data from "@data/sections/video.json";
import { circleText } from "@common/utilits";

const VideoSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
	circleText();
  }, []);

  const clickedVideoButton = (e) => {
    e.preventDefault();

	e.target.parentNode.classList.add('active');
	let videoIframe = e.target.parentNode.querySelector('.js-video-iframe');
	let videoUrl = videoIframe.dataset.src;
	videoIframe.setAttribute('src', videoUrl);
  }

  const handleMouseEnter = (e) => {
    e.preventDefault();
    
    const videoContainer = e.currentTarget;
    videoContainer.classList.add('active');
    const videoIframe = videoContainer.querySelector('.js-video-iframe');
    // Make sure to include autoplay=1 and mute=1 (YouTube requires muted videos for autoplay)
    const videoUrl = videoIframe.dataset.src;
    videoIframe.setAttribute('src', videoUrl);
    setIsHovered(true);
  }

  const handleMouseLeave = (e) => {
    e.preventDefault();
    
    if (isHovered) {
      const videoContainer = e.currentTarget;
      const videoIframe = videoContainer.querySelector('.js-video-iframe');
      videoIframe.setAttribute('src', '');
      videoContainer.classList.remove('active');
      setIsHovered(false);
    }
  }

  return (
    <>
      	{/* Technovita Video */}
		<section className="onovo-section">
			<div className="container">

				{/* video */}
				<div 
          className="onovo-video" 
          data-onovo-overlay 
          data-onovo-scroll
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
					<div className="image" onClick={ (e) => clickedVideoButton(e) } style={{"backgroundImage": "url("+Data.bg_image+")"}} />
					<iframe 
            className="js-video-iframe" 
            loading="lazy" 
            data-src={"https://www.youtube.com/embed/"+Data.yt_video_id+"?showinfo=0&rel=0&autoplay=1&mute=1"} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
					<div className="play onovo-circle-text" onClick={ (e) => clickedVideoButton(e) }>
						<div className="arrow" />
						<div className="label onovo-text-black onovo-circle-text-label">{Data.label}</div>
					</div>
				</div>

			</div>
		</section>
    </>
  );
};

export default VideoSection;