import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Progress() {
  let progress = 10;
  return (
    <div>
      <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${progress}%`}</Typography>
      </Box>
    </Box>
    </div>
  );
}

export default Progress;