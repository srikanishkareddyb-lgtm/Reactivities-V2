import { useState } from "react";
import { CssBaseline, Container } from "@mui/material"; // Added for better layout
import NavBar from "./NavBar"; 
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import Box from '@mui/material/Box';
import { useActivities } from "../../lib/hooks/useActivities";

function App() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const {activities, isPending} = useActivities();
  

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities?.find(activity => activity.id === id));
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }

  const handleFormOpen = (id?: string) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  return (
    <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
      <CssBaseline />
      <NavBar openForm={handleFormOpen} />
      <Container maxWidth="xl" sx={{ marginTop: '2em' }}>
        {!activities || isPending? (<p>Loading activities...</p>) : (
          <ActivityDashboard
            activities={activities}
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handleCancelSelectActivity}
            selectedActivity={selectedActivity}
            editMode={editMode}
            openForm={handleFormOpen}
            closeForm={handleFormClose}
          />
        )}
      </Container>
    </Box>
  );
}

export default App;