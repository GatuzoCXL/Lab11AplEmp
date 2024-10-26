import React, { useState } from 'react';
import { TextField, Button, Alert, Box } from '@mui/material';

function TareaForm({ agregarTarea }) {
    const [texto, setTexto] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (texto.trim() === '') {
            setError('La tarea no puede estar vacía');
            return;
        }
        if (texto.length > 100) {
            setError('La tarea no puede tener más de 100 caracteres');
            return;
        }
        agregarTarea(texto);
        setTexto('');
        setError('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ marginBottom: 2 }}>
            {error && <Alert severity="error" sx={{ marginBottom: 2 }}>{error}</Alert>}
            <TextField
                label="Nueva Tarea"
                variant="outlined"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                fullWidth
                sx={{ marginBottom: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Agregar Tarea
            </Button>
        </Box>
    );
}

export default TareaForm;