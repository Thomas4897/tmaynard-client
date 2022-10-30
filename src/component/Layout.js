import { Box } from '@mantine/core';
import React from 'react';
import AppShell from './AppShell';

export default function Layout(props) {
  const { children } = props;

  return (
    
    <Box style={{ display: "flex", flexDirection: "row", height: "100vh"}}>
      <Box style={{ }}>
        <AppShell />
      </Box>
      <Box style={{ width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"}}>
      {children}
        </Box>
    </Box>
  );
}