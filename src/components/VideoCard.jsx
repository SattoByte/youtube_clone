import { Link } from 'react-router-dom';
import { Typography, Card, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

  return (
    <div style={{
      'padding': '10px',
      backgroundColor: 'white'
    }}>
    <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>

        <CardMedia image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: {
              xs: '100%', sm: '358px', md: '320px'
            }, height: 180
          }} />
      </Link>
          {/* <CardContent sx={{ backgroundColor: '#1e1e1e', height: '160px' }} /> */}

      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant='subtitle1' fontWeight='bold' color='black'>
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant='subtitle2' fontWeight='bold' color='gray'>
          {snippet?.demoChannelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
        </Typography>
      </Link>
    </Card>
    </div>
  )
}

export default VideoCard