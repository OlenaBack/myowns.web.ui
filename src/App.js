import React, { Component } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
    ResponsiveContext,
} from 'grommet';
import { FormClose, Menu} from 'grommet-icons';
import { Items } from './pages/Items';
import { grommet } from 'grommet/themes';
import { CollapsedSidebar, Sidebar } from './components/SideBar.jsx';

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='accent-4'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

class App extends Component {
  state = {
    showSidebar: true,
  }
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={grommet} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Heading level='3' margin='none' color>My Owns</Heading>              
                <Button
                  icon={<Menu />}
                  onClick={() => this.setState({ showSidebar: !this.state.showSidebar })}
                />
              </AppBar>
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align='center' justify='center'>
                <Items/>
                </Box>
                {(!showSidebar || size !== 'small') ? (
                 <Sidebar showSidebar={this.state.showSidebar}/>
                ): 
    <CollapsedSidebar onClose ={() => this.setState({ showSidebar: false })}/>
                }
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
