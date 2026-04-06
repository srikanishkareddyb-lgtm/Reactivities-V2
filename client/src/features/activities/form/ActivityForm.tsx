import { TextField } from '@mui/material'
import { Box, Button, Paper, Typography } from '@mui/material'


type Props = {
    activity?: Activity;
    closeForm: () => void;
    submitForm: (activity: Activity) => void;
}

export default function ActivityForm({ activity, closeForm, submitForm }: Props) {
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data: {[key: string]: FormDataEntryValue} = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        if(activity) data.id=activity.id
        submitForm(data as unknown as Activity);
    }
  return (
    <Paper sx={{ width: '200%', borderRadius: 3, padding: 3, margin: 1 }}>
        <Typography variant='h5' color='primary' gutterBottom>
            Create Activity
        </Typography>
          <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={2}>
            <TextField name='title' label='Title' defaultValue={activity?.title} />
            <TextField name='description' label='Description' multiline rows={3} defaultValue={activity?.description} />
            <TextField name='category' label='Category' defaultValue={activity?.category} />
            <TextField name='date' type='date' defaultValue={activity?.date} />
            <TextField name='city' label='City' defaultValue={activity?.city} />
            <TextField name='venue' label='Venue' defaultValue={activity?.venue} />
            <Box display='flex' justifyContent='end' gap={3}>
              <Button variant='outlined' color='inherit' onClick={closeForm}>
                Cancel
              </Button>
              <Button type='submit' variant='contained' color='primary'>
                Submit
              </Button>
            </Box>  
        </Box>  
    </Paper>
  )
}

