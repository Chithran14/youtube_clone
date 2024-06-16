import React from 'react';
import { Box, Stack } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos }) => {
  console.log("hellovenna",videos)
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos[0].map((item, idx) => (
        
        <Box key={idx}>
          {<VideoCard video={item} />}
          {item.id?.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
