// src/components/VideoCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia } from '@mui/material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle } from '../utils/constants';

const VideoCard = ({ video }) => {

  const { id, snippet } = video;
  const videoId = id?.videoId;

  console.log("video",video);

  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title || demoVideoTitle}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
    </Card>
  );
};

export default VideoCard;
