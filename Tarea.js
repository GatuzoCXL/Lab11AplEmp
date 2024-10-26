import React, { useState } from 'react';
import { ListItem, ListItemText, IconButton, Checkbox, TextField, Box } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

function Tarea({ tarea, completada, onDelete, onEdit, onToggleCompletada }) {
    const [editando, setEditando] = useState(false);
    const [nuevoTexto, setNuevoTexto] = useState(tarea);

    const handleEdit = () => {
        setEditando(true);
    };

    const handleSave = () => {
        onEdit(nuevoTexto);
        setEditando(false);
    };

    return (
        <ListItem
            secondaryAction={
                <>
                    <IconButton edge="end" aria-label="edit" onClick={handleEdit}>
                        <Edit />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={onDelete}>
                        <Delete />
                    </IconButton>
                </>
            }
        >
            <Checkbox
                edge="start"
                checked={completada}
                tabIndex={-1}
                disableRipple
                onChange={onToggleCompletada}
            />
            {editando ? (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        value={nuevoTexto}
                        onChange={(e) => setNuevoTexto(e.target.value)}
                        variant="outlined"
                        size="small"
                        sx={{ marginRight: 1 }}
                    />
                    <IconButton edge="end" aria-label="save" onClick={handleSave}>
                        <Edit />
                    </IconButton>
                </Box>
            ) : (
                <ListItemText primary={tarea} />
            )}
        </ListItem>
    );
}

export default Tarea;