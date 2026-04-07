import Box from '@mui/material/Box';
import ActivityCard from './ActivityCard';
//import { Activity } from './types'; // Ensure Activity is imported if it's in another file

type Props = {
  activities: Activity[];
  onSelectActivity: (id: string) => void;

}

// Add { activities } here to receive the props
export default function ActivityList({ activities, onSelectActivity }: Props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {activities.map(activity => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            onSelectActivity={onSelectActivity}
          />
        ))}
    </Box>
  )
}