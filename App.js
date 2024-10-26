import React, { useState } from 'react';
import { Container, Typography, Button, ButtonGroup, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';
//queflojera
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ff9800',
        },
        secondary: {
            main: '#ff5722',
        },
        background: {
            default: '#303030',
            paper: '#424242',
        },
    },
    typography: {
        h1: {
            fontSize: '2rem',
            marginBottom: '1rem',
        },
    },
    spacing: 8,
});

function App() {
    const [tareas, setTareas] = useState([]);
    const [filtro, setFiltro] = useState("Todas");
    const [orden, setOrden] = useState("asc");

    const agregarTarea = (texto) => {
        setTareas([...tareas, { texto, completada: false, fecha: new Date() }]);
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = [...tareas];
        nuevasTareas.splice(index, 1);
        setTareas(nuevasTareas);
    };

    const editarTarea = (index, nuevoTexto) => {
        const nuevasTareas = [...tareas];
        nuevasTareas[index].texto = nuevoTexto;
        setTareas(nuevasTareas);
    };

    const toggleCompletada = (index) => {
        const nuevasTareas = [...tareas];
        nuevasTareas[index].completada = !nuevasTareas[index].completada;
        setTareas(nuevasTareas);
    };

    const filtrarTareas = (filtro) => {
        setFiltro(filtro);
    };

    const ordenarTareas = (orden) => {
        setOrden(orden);
    };

    let tareasFiltradas = tareas;
    if (filtro === "Pendientes") {
        tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
    } else if (filtro === "Completadas") {
        tareasFiltradas = tareas.filter((tarea) => tarea.completada);
    }

    tareasFiltradas.sort((a, b) => {
        if (orden === "asc") {
            return new Date(a.fecha) - new Date(b.fecha);
        } else {
            return new Date(b.fecha) - new Date(a.fecha);
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Typography variant="h1">Lista de Tareas</Typography>
                <TareaForm agregarTarea={agregarTarea} />
                <Filtros filtrarTareas={filtrarTareas} />
                <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ marginBottom: 2 }}>
                    <Button onClick={() => ordenarTareas("asc")}>Ascendente</Button>
                    <Button onClick={() => ordenarTareas("desc")}>Descendente</Button>
                </ButtonGroup>
                <ListaTareas
                    tareas={tareasFiltradas}
                    eliminarTarea={eliminarTarea}
                    editarTarea={editarTarea}
                    toggleCompletada={toggleCompletada}
                />
            </Container>
        </ThemeProvider>
    );
}

export default App;