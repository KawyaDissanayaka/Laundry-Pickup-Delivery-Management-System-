import React from 'react';
import { Card, CardContent, CardHeader, Box, Grid, Typography, Paper } from '@mui/material';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ShoppingCart as ShoppingCartIcon, LocalShipping as LocalShippingIcon, Person as PersonIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';

const mockData = {
  orders: 156,
  pending: 23,
  drivers: 8,
  revenue: '$4,280',
  chartData: [
    { name: 'Mon', orders: 24, delivered: 20 },
    { name: 'Tue', orders: 32, delivered: 28 },
    { name: 'Wed', orders: 28, delivered: 25 },
    { name: 'Thu', orders: 35, delivered: 32 },
    { name: 'Fri', orders: 42, delivered: 40 },
    { name: 'Sat', orders: 38, delivered: 36 },
  ],
  statusData: [
    { name: 'Pending', value: 23, color: '#ff9800' },
    { name: 'In Progress', value: 45, color: '#2196f3' },
    { name: 'Delivered', value: 88, color: '#4caf50' },
  ],
};

export default function AdminDashboard() {
  const StatCard = ({ icon, label, value, color }) => (
    <Paper sx={{ p: 2.5, boxShadow: 1, borderRadius: 2, borderLeft: `4px solid ${color}` }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ color, fontSize: 28 }}>{icon}</Box>
        <Box>
          <Typography variant="body2" color="text.secondary">{label}</Typography>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>{value}</Typography>
        </Box>
      </Box>
    </Paper>
  );

  return (
    <Box>
      <Grid container spacing={2.5} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard icon={<ShoppingCartIcon />} label="Total Orders" value={mockData.orders} color="#1976d2" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard icon={<LocalShippingIcon />} label="Pending" value={mockData.pending} color="#ff9800" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard icon={<PersonIcon />} label="Active Drivers" value={mockData.drivers} color="#4caf50" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard icon={<TrendingUpIcon />} label="Today Revenue" value={mockData.revenue} color="#9c27b0" />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
            <CardHeader title="Orders Trend" subheader="Last 7 days" sx={{ bgcolor: 'primary.light', color: 'white' }} />
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockData.chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="orders" fill="#1976d2" />
                  <Bar dataKey="delivered" fill="#4caf50" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
            <CardHeader title="Order Status" subheader="Distribution" sx={{ bgcolor: 'primary.light', color: 'white' }} />
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={mockData.statusData} cx="50%" cy="50%" labelLine={false} label={(entry) => entry.name} dataKey="value">
                    {mockData.statusData.map((entry, idx) => (
                      <Cell key={idx} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
