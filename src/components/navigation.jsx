import React, { useState } from 'react';

import { Box, Button, Nav, Text } from 'grommet';

const SidebarButton = ({ label, ...rest }) => (
  <Button plain {...rest}>
    {({ hover }) => (
      <Box
      >
        <Text size="large" color={hover? 'dark-1' : 'dark-2'}>{label}</Text>
      </Box>
    )}
  </Button>
);

const SidebarNav = () => {
  const [active, setActive] = useState();
  return (

        <Nav>
          {['Dashboard', 'Devices', 'Settings'].map(label => (
            <SidebarButton
              key={label}
              label={label}
              active={label === active}
              onClick={() => setActive(label)}
            />
          ))}
        </Nav>
  );
};

export const Sidebar = () => <SidebarNav />;