import { videoComponentPropTypes } from '../../../types/PropTypes';

import './VideoComponent.css';

const VideoComponent = ({ video_headline, video_sub_headline, video_url }) => {
  const getYouTubeVideoId = (url) => {
    const videoIdRegex = /(?:youtube\.com\/(?:.+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\s]{11})/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : null;
  };

  const youTubeVideoId = getYouTubeVideoId(video_url);

  return (
    <div className="video-container container">
      <h1>{video_headline}</h1>
      {video_sub_headline && <p>{video_sub_headline}</p>}
      {youTubeVideoId && (
        <iframe
          title="YouTube Video"
          src={`https://www.youtube.com/embed/${youTubeVideoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      )}
    </div>
  );
};

VideoComponent.propTypes = videoComponentPropTypes;

export default VideoComponent;
