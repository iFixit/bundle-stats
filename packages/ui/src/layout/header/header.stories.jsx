import React from 'react';
import { storiesOf } from '@storybook/react';

import { getWrapperDecorator } from '../../stories';
import { Tabs } from '../../ui/tabs';
import { Header } from '.';

const stories = storiesOf('Layout/Header', module);
stories.addDecorator(getWrapperDecorator());

stories.add('default', () => (
  <Header
    renderLeft={({ className }) => (
      <div className={className}>
        Title
      </div>
    )}
    render={({ className }) => (
      <div className={className}>
        <Tabs>
          <Tabs.Item>Totals</Tabs.Item>
          <Tabs.Item>Assets</Tabs.Item>
          <Tabs.Item>Modules</Tabs.Item>
        </Tabs>
      </div>
    )}
    renderRight={({ className }) => (
      <div className={className}>
        Option
      </div>
    )}
  />
));

stories.add('menu on the right', () => (
  <Header
    renderLeft={({ className }) => (
      <div className={className}>
        Title
      </div>
    )}
    renderRight={({ className }) => (
      <div className={className} style={{ flexBasis: '100%' }}>
        <Tabs>
          <Tabs.Item>Totals</Tabs.Item>
          <Tabs.Item>Assets</Tabs.Item>
          <Tabs.Item>Modules</Tabs.Item>
        </Tabs>
      </div>
    )}
  />
));
