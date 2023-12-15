import * as React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { services } from 'shared/constants/services';

interface TabPanelProps {
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, color: '#000' }}>{children}</Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export const TabsComponent = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => setValue(newValue);

  return (
    <Box
      sx={{
        flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {services.map(({ id, title }, index) => (
          <Tab key={id} label={title} {...a11yProps(index)} />
        ))}
      </Tabs>
      {services.map(({ id, description }, index) => (
        <TabPanel key={id} value={value} index={index}>
          {description}
        </TabPanel>
      ))}
    </Box>
  );
};
