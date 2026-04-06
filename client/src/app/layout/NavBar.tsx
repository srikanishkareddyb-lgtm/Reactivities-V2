import { AppBar, Toolbar, Container, MenuItem, Typography, Box, Button } from '@mui/material';
import { Group } from '@mui/icons-material';

type Props = {
  openForm: (id?: string) => void;
}

export default function NavBar({ openForm }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundImage: 'linear-gradient(to right, #ff7e5f, #feb47b)'}}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                  <MenuItem sx={{ display: 'flex', gap: 2 }}>
                      <Group fontSize='large' />
                      <Typography variant='h4' fontWeight='bold'>Reactivities</Typography>
                  </MenuItem>
              </Box>
              <Box sx={{display: 'flex'}}>
                <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'}}>
                    Activities
                </MenuItem>
                <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'}}>
                    About
                </MenuItem>
                <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'}}>
                    Contact
                </MenuItem>
              </Box>
            <Button
              variant='contained'
              size='large'
              color='warning'
              onClick={() => openForm()}
              >
              Create Activity</Button>
            </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}