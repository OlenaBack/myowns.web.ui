import React from 'react';
import {
  Box,
  Button,
  Collapsible,
  Layer
} from 'grommet';
import {
  FormClose
} from 'grommet-icons';
import {
  SidebarNav
} from './navigation';
export const Sidebar = ({
  showSidebar
}) => {
  return (
    <Collapsible direction="horizontal"
      open={
        showSidebar
      } >
      <Box flex width='medium'
        background='light-2'
        elevation='small'
        align='center'
        justify='center' >
        <
          SidebarNav />
      </Box>
    </Collapsible >
  );
}
export const CollapsedSidebar = ({
  onClose
}) => {
  return (

    <Layer >
      <Box background='light-2'
        tag='header'
        justify='end'
        align='center'
        direction='row' >

        <Button icon={
          <FormClose />
        }
          onClick={
            onClose
          }
        /> </Box >
      <Box fill background='light-2'
        align='center'
        justify='center' >
      </Box> </Layer >
  );
}