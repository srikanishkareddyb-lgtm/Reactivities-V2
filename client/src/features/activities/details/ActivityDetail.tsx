import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { useActivities } from '../../../lib/hooks/useActivities';

type Props = {
    selectedActivity: Activity
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}



export default function ActivityDetail({ selectedActivity, cancelSelectActivity, openForm }: Props) {
    
    const { activities } = useActivities();
    const activity = activities?.find(a => a.id === selectedActivity.id);
    
    if (!activity) return <Typography variant="h5">Loading...</Typography>;
 
  return (
    <Card sx={{ borderRadius: 3, width: '200%', margin: 1 }}>
        <CardMedia
            component="img"
            src={`/images/categoryImages/${activity.category}.jpg`}
        />
        <CardContent>
            <Typography variant="h5">
                {activity.title}
            </Typography>
            <Typography variant="subtitle1" fontWeight='light'>
                {activity.date}
            </Typography>
            <Typography variant="body2">
                {activity.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button color="primary" onClick={() => openForm(activity.id)}>
                Edit
            </Button>
            <Button onClick={cancelSelectActivity} color="inherit">
                Cancel
            </Button>
        </CardActions>
    </Card>
  )
}
