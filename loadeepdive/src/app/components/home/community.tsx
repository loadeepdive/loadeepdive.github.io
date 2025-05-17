import { ListItemText } from '@mui/material';
import { ListItemButton } from '@mui/material';

export default function Community() {
    return (
      <div className='box'>
        <hr />
        <ListItemButton component="a" href="#simple-list">
          <ListItemText primary="커뮤니티" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemText primary="개발 github" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemText primary="개발 블로그" />
        </ListItemButton>
        <hr />
      </div>
    );
  }
  