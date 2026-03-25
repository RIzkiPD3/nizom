import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1A1F6B',
            light: '#2D3DBA',
        },
        secondary: {
            main: '#FF6B35',
        },
        background: {
            default: '#FFFFFF',
            paper: '#F5F7FC',
        },
        text: {
            primary: '#0D0D2B',
            secondary: '#6B7280',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 800,
            fontSize: '2.8rem',
            lineHeight: 1.15,
        },
        h2: {
            fontWeight: 700,
            fontSize: '2rem',
        },
        h3: {
            fontWeight: 700,
            fontSize: '1.5rem',
        },
        h4: {
            fontWeight: 700,
            fontSize: '1.2rem',
        },
        h5: {
            fontWeight: 600,
            fontSize: '1rem',
        },
        body1: {
            fontSize: '0.95rem',
            lineHeight: 1.7,
        },
        body2: {
            fontSize: '0.85rem',
            lineHeight: 1.6,
        },
    },
    shape: {
        borderRadius: 16,
    },
    spacing: 8,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 50,
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                },
            },
        },
    },
});

export default theme;
