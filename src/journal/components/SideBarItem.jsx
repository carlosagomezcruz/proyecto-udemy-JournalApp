import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { setActiveNote } from '../../store/journal';


export const SideBarItem = ({ body, title, date, id, imageUrls = [] }) => {

    const dispatch = useDispatch()

    const newTitle = useMemo(() => {
        return title.length > 7
            ? title.substring(0, 17) + '...'
            : title;
    }, [title])


    const seeNote = () => {
        dispatch(setActiveNote({ body, title, date, id, imageUrls }));
    }

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={seeNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />

                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
