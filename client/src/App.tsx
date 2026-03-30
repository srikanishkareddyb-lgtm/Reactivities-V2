import { useEffect, useState } from "react";
import axios from "axios";
import type { AxiosResponse } from "axios";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then((response: AxiosResponse<Activity[]>) => {
        setActivities(response.data);
      })
      .catch((error: unknown) => {
        console.error('Error fetching activities:', error);
      });
  }, []);
  return (
    <div>
      <h3 className="app" style={{ color: 'red' }}>Reactivities</h3>
      <ul>
        {activities.map((activity) => (
            <li key={activity.id}>{activity.title}</li>
        ))}
    </ul>
    </div>
  )
}

export default App
