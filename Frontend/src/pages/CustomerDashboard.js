import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, Button, Box, Grid, Typography, Paper } from '@mui/material';
import { LocalShipping as LocalShippingIcon, Inventory as InventoryIcon, Notifications as NotificationsIcon, Speed as SpeedIcon } from '@mui/icons-material';

export default function CustomerDashboard() {
  const navigate = useNavigate();

  const features = [
    { icon: <LocalShippingIcon sx={{ fontSize: 40 }} />, title: 'Fast Pickup', desc: 'Schedule pickup at your convenience' },
    { icon: <InventoryIcon sx={{ fontSize: 40 }} />, title: 'Track Orders', desc: 'Real-time order status updates' },
    { icon: <NotificationsIcon sx={{ fontSize: 40 }} />, title: 'Notifications', desc: 'Get SMS/email when ready' },
    { icon: <SpeedIcon sx={{ fontSize: 40 }} />, title: 'Quick Process', desc: 'Fast turnaround time' },
  ];

  return (
    <Box>
      <Card sx={{ mb: 4, background: 'linear-gradient(to right, #1976d2, #1565c0)', color: 'white', borderRadius: 2 }}>
        <CardContent sx={{ py: 6, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>Welcome to LaundryPro</Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>Your trusted laundry pickup and delivery service</Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="contained" size="large" onClick={() => navigate('/book')} sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}>
              Book Pickup
            </Button>
            <Button variant="outlined" size="large" onClick={() => navigate('/orders')} sx={{ borderColor: 'white', color: 'white' }}>
              View Orders
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Grid container spacing={3}>
        {features.map((f, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Paper sx={{ p: 3, textAlign: 'center', boxShadow: 1, borderRadius: 2, transition: 'all 0.3s', '&:hover': { boxShadow: 3, transform: 'translateY(-4px)' } }}>
              <Box sx={{ color: 'primary.main', mb: 1 }}>{f.icon}</Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>{f.title}</Typography>
              <Typography variant="body2" color="text.secondary">{f.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
