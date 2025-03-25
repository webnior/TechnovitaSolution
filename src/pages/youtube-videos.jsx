import { useEffect } from "react";
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import { circleText } from "@common/utilits";

const YouTubeVideos = () => {
  useEffect(() => {
    circleText();
  }, []);

  // Video data organized by platform
  const videoCategories = [
    {
      platform: "Flipkart",
      videos: [
        {
          url: "https://www.youtube.com/watch?v=-NMa3QOimhs",
          title: "Complete video of flipkart selling",
          thumbnail: `https://img.youtube.com/vi/-NMa3QOimhs/maxresdefault.jpg`
        },
        {
          url: "https://www.youtube.com/watch?v=-q4gTUFLSdw",
          title: "How to list products on flipkart",
          thumbnail: `https://img.youtube.com/vi/-q4gTUFLSdw/maxresdefault.jpg`
        },
        {
          url: "https://www.youtube.com/watch?v=DCKvexo_n6I",
          title: "How to create flipkart seller account",
          thumbnail: `https://img.youtube.com/vi/DCKvexo_n6I/maxresdefault.jpg`
        }
      ]
    },
    {
      platform: "AJIO",
      videos: [
        {
          url: "https://www.youtube.com/watch?v=KZt5z_N617o",
          title: "HOW TO CREATE AJIO SELLER ACCOUNT",
          thumbnail: `https://img.youtube.com/vi/KZt5z_N617o/maxresdefault.jpg`
        },
        {
          url: "https://www.youtube.com/watch?v=UeW62-Skez8",
          title: "HOW TO LIST PRODUCTS ON AJIO",
          thumbnail: `https://img.youtube.com/vi/UeW62-Skez8/maxresdefault.jpg`
        },
        {
          url: "https://www.youtube.com/watch?v=C_xl7crUH4o",
          title: "AJIO SELLER COMPLETE GUIDE",
          thumbnail: `https://img.youtube.com/vi/C_xl7crUH4o/maxresdefault.jpg`
        }
      ]
    },
    {
      platform: "Amazon",
      videos: [
        {
          url: "https://www.youtube.com/watch?v=PHQjBQ8mbAs",
          title: "How to create amazon seller account",
          thumbnail: `https://img.youtube.com/vi/PHQjBQ8mbAs/maxresdefault.jpg`
        },
        {
          url: "https://www.youtube.com/watch?v=rg-0V6yNaxg",
          title: "How to run ads on amazon",
          thumbnail: `https://img.youtube.com/vi/rg-0V6yNaxg/maxresdefault.jpg`
        },
        {
          url: "https://www.youtube.com/watch?v=EU9f32DJ1To",
          title: "How to calculate commissions on amazon",
          thumbnail: `https://img.youtube.com/vi/EU9f32DJ1To/maxresdefault.jpg`
        },
        {
          url: "https://www.youtube.com/watch?v=NC0xXh8TUX8",
          title: "Amazon complete selling guide",
          thumbnail: `https://img.youtube.com/vi/NC0xXh8TUX8/maxresdefault.jpg`
        },
        {
          url: "https://www.youtube.com/watch?v=ssLFNfI9Z9Y",
          title: "Amazon product listing",
          thumbnail: `https://img.youtube.com/vi/ssLFNfI9Z9Y/maxresdefault.jpg`
        }
      ]
    }
  ];

  // Function to extract video ID from YouTube URL
  const getVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Function to open YouTube video in a modal or new tab
  const openVideo = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Layouts>
      <PageBanner 
        pageTitle={"YouTube Videos"} 
        pageDesc={"Explore our educational videos on e-commerce selling across different platforms"} 
      />

      {/* YouTube Videos Section */}
      <section className="onovo-section gap-top-140 gap-bottom-140">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* Heading */}
              <div className="onovo-heading gap-bottom-60">
                <div className="onovo-subtitle-1">
                  <span>Our Video Resources</span>
                </div>
                <h2 className="onovo-title-2">
                  <span>Learn E-commerce Selling with Our YouTube Videos</span>
                </h2>
                <div className="onovo-text">
                  <p>Explore our comprehensive collection of tutorial videos to help you succeed on various e-commerce platforms.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Categories */}
          {videoCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="gap-bottom-60">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h3 className="text-uppercase gap-bottom-30">{category.platform}</h3>
                </div>
              </div>
              
              <div className="row">
                {category.videos.map((video, videoIndex) => (
                  <div key={videoIndex} className="col-xs-12 col-sm-6 col-md-4 col-lg-4 gap-bottom-30">
                    <div className="onovo-project-item" onClick={() => openVideo(video.url)} style={{cursor: 'pointer'}}>
                      <div className="image">
                        <a>
                          <img src={video.thumbnail} alt={video.title} />
                        </a>
                      </div>
                      <div className="desc">
                        <h5 className="title">
                          <a>{video.title}</a>
                        </h5>
                        <div className="text">
                          <div className="btn-play">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <polygon points="10 8 16 12 10 16 10 8"></polygon>
                            </svg>
                            <span>Watch Video</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layouts>
  );
};

export default YouTubeVideos;
