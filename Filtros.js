import React from 'react';
import { Button, ButtonGroup, Box } from '@mui/material';

function Filtros({ filtrarTareas }) {
  return (
    <Box sx={{ marginBottom: 2 }}>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={() => filtrarTareas("Todas")}>Todas</Button>
        <Button onClick={() => filtrarTareas("Pendientes")}>Pendientes</Button>
        <Button onClick={() => filtrarTareas("Completadas")}>Completadas</Button>
      </ButtonGroup>
    </Box>
  );
}

export default Filtros;