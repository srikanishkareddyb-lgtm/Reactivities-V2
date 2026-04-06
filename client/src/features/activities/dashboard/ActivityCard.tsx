import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

type Props = {
    activity: Activity
    onSelectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}



export default function ActivityCard({activity, onSelectActivity, deleteActivity}: Props ) {
  return (
    <Card sx={{borderRadius: 3}}>
        <CardContent>
            <Typography variant="h5">
                {activity.title}
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
                {activity.date}
            </Typography>
            <Typography variant="body2">
                {activity.description}
            </Typography>
            <Typography variant="subtitle1">
                {activity.city}/{activity.venue}
            </Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'space-between', pb: 2}}>
              <Chip label={activity.category} />
              <Box display='flex' gap={2}>
                    <Button onClick={()=>onSelectActivity(activity.id)} size="medium" variant="contained">
                        View
                    </Button>
                    <Button onClick={()=>deleteActivity(activity.id)} size="medium" variant="contained" color="error">
                        Delete
                    </Button>
              </Box>
        </CardActions>
    </Card>
  )
}
