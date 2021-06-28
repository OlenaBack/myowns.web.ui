import React from 'react';

import { Grommet, Box, List, Menu, Text } from 'grommet';
import { More } from 'grommet-icons';
import { grommet } from 'grommet/themes';

const data = [];

for (let i = 0; i < 5; i += 1) {
  data.push({
    entry: `entry-${i + 1}`,
  });
}

export const Items = () => (
  <Grommet theme={grommet}>
    <Box pad="large">
      <List
        data={data}
        primaryKey={item => (
          <Text size="large" weight="bold">
            {item.entry}
          </Text>
        )}
        pad={{ left: 'none', right: 'none' }}
        action={(item, index) => (
          <Menu
            key={index}
            icon={<More />}
            hoverIndicator
            items={[{ label: 'change' }, { label: 'tags' }]}
          />
        )}
      />
    </Box>
  </Grommet>
);