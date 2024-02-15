import { videoComponentPropTypes } from '../../types/PropTypes';

import './VideoComponent.css';

const VideoComponent = ({ headline, subHeadline, videoUrl }) => {
  const getYouTubeVideoId = (url) => {
    const videoIdRegex = /(?:youtube\.com\/(?:[^]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\s]{11})/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : null;
  };

  const youTubeVideoId = getYouTubeVideoId(videoUrl);

  return (
    <div className="video-container-bg">
      <div className="video-container container">
        <h1>{headline}</h1>
        {subHeadline && <p>{subHeadline}</p>}
        {youTubeVideoId && (
          <iframe
            title="YouTube Video"
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${youTubeVideoId}`}
            allowFullScreen></iframe>
        )}
      </div>
    </div>
  );
};

VideoComponent.propTypes = videoComponentPropTypes;

export default VideoComponent;
