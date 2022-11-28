import React from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export function Footer(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
            Kheda
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}