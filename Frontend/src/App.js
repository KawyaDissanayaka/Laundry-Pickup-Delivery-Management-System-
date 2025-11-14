import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box, AppBar, Toolbar, IconButton, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography, Divider, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, Home as HomeIcon, AddBox as AddBoxIcon, ListAlt as ListAltIcon, Dashboard as DashboardIcon, DirectionsCar as DirectionsCarIcon } from '@mui/icons-material';
import OrderForm from './pages/OrderForm';
import OrderList from './pages/OrderList';
import OrderDetails from './pages/OrderDetails';
import AdminDashboard from './pages/AdminDashboard';
import DriverDashboard from './pages/DriverDashboard';
import CustomerDashboard from './pages/CustomerDashboard';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    success: { main: '#4caf50' },
    info: { main: '#0288d1' },
    warning: { main: '#f57c00' },
    background: { default: '#f5f7fa', paper: '#ffffff' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
  shape: { borderRadius: 8 },
});

function AppContent() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Home', icon: <HomeIcon />, path: '/' },
    { label: 'Book Pickup', icon: <AddBoxIcon />, path: '/book' },
    { label: 'My Orders', icon: <ListAltIcon />, path: '/orders' },
    { label: 'Admin', icon: <DashboardIcon />, path: '/admin' },
    { label: 'Driver', icon: <DirectionsCarIcon />, path: '/driver' },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 280 }}>
      <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>LaundryPro</Typography>
        {isMobile && <IconButton onClick={() => setDrawerOpen(false)} size="small"><CloseIcon /></IconButton>}
      </Box>
      <Divider />
      <List sx={{ pt: 2 }}>
        {navItems.map((item) => (
          <ListItemButton 
            key={item.path} 
            onClick={() => handleNavClick(item.path)} 
            sx={{ mx: 1, mb: 1, borderRadius: 1, '&:hover': { bgcolor: 'action.hover' } }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* AppBar */}
      <AppBar position="sticky" sx={{ boxShadow: 2, background: 'linear-gradient(to right, #1976d2, #1565c0)' }}>
        <Toolbar>
          <IconButton color="inherit" onClick={() => setDrawerOpen(true)} sx={{ mr: 2 }} size="large">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>LaundryPro Management System</Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ display: 'flex', flex: 1 }}>
        {/* Drawer (Responsive) */}
        {isMobile ? (
          <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            {drawer}
          </Drawer>
        ) : (
          <Drawer 
            variant="permanent" 
            sx={{ 
              '& .MuiDrawer-paper': { 
                boxShadow: 1,
                bgcolor: '#fafafa',
              } 
            }}
          >
            {drawer}
          </Drawer>
        )}

        {/* Page Content */}
        <Box sx={{ flex: 1, p: { xs: 2, sm: 3, md: 4 }, background: '#f5f7fa', overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<CustomerDashboard />} />
            <Route path="/book" element={<OrderForm />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/orders/:id" element={<OrderDetails />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/driver" element={<DriverDashboard />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
