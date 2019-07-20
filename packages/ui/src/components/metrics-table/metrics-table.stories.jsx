import React from 'react';
import { storiesOf } from '@storybook/react';

import { getWrapperDecorator } from '../../stories';
import { MetricsTable } from '.';

const RUNS = [
  {
    meta: {
      internalBuildNumber: 1,
    },
  },
  {
    meta: {
      internalBuildNumber: 2,
    },
  },
];

const ITEMS_SINGLE_RUN = [
  {
    key: 'webpack.assets.totalSizeByTypeALL',
    label: 'Total Size',
    biggerIsBetter: false,
    changed: false,
    runs: [
      {
        value: 873421,
        displayValue: '852.95KB',
      },
    ],
  },
  {
    key: 'lighthouse.timeToFirstByte',
    label: 'Time To First Byte',
    biggerIsBetter: false,
    changed: false,
    runs: [
      {
        value: 1231,
        displayValue: '1.231s',
      },
    ],
  },
  {
    key: 'lighthouse.score',
    label: 'Score',
    biggerIsBetter: true,
    changed: false,
    runs: [
      {
        value: 80,
        displayValue: '80',
      },
    ],
  },
  {
    key: 'webpack.assets.totalSizeByTypeJS',
    label: 'JS',
    biggerIsBetter: false,
    changed: false,
    runs: [
      {
        value: 344232,
        displayValue: '336.16KB',
      },
    ],
  },
  {
    key: 'lighthouse.domSize',
    label: 'DOM Size',
    biggerIsBetter: false,
    changed: false,
    runs: [
      {
        value: 80,
        displayValue: '80',
      },
    ],
  },
];

const ITEMS_MULTIPLE_RUNS = [
  {
    key: 'webpack.assets.totalSizeByTypeALL',
    label: 'Total Size',
    biggerIsBetter: false,
    changed: true,
    runs: [
      {
        value: 873421,
        displayValue: '852.95KB',
        delta: 613.98,
        displayDelta: '+613.98%',
      },
      {
        value: 122331,
        displayValue: '119.46KB',
      },
    ],
  },
  {
    key: 'lighthouse.timeToFirstByte',
    label: 'Time To First Byte',
    biggerIsBetter: false,
    changed: true,
    runs: [
      {
        value: 1000,
        displayValue: '1s',
        delta: 2.0408163,
        displayDelta: '+2.04%',
      },
      {
        value: 980,
        displayValue: '980ms',
      },
    ],
  },
  {
    key: 'lighthouse.score',
    label: 'Score',
    biggerIsBetter: true,
    changed: true,
    runs: [
      {
        value: 80,
        displayValue: '80',
        delta: 14.2857143,
        displayDelta: '+14.29%',
      },
      {
        value: 70,
        displayValue: '70',
      },
    ],
  },
  {
    key: 'lighthouse.accessibilityScore',
    label: 'Accessibility score',
    biggerIsBetter: true,
    changed: true,
    runs: [
      {
        value: 80,
        displayValue: '80',
        delta: 2.5641026,
        displayDelta: '+2.56%',
      },
      {
        value: 78,
        displayValue: '78',
      },
    ],
  },
  {
    key: 'webpack.assets.totalSizeByTypeJS',
    label: 'JS',
    biggerIsBetter: false,
    changed: true,
    runs: [
      {
        value: 344232,
        displayValue: '336.16KB',
        delta: 100,
        displayDelta: '+100%',
      },
      null,
    ],
  },
  {
    key: 'lighthouse.domSize',
    label: 'DOM Size',
    biggerIsBetter: false,
    changed: false,
    runs: [
      {
        value: 80,
        displayValue: '80',
        delta: 0,
        displayDelta: '0%',
      },
      {
        value: 80,
        displayValue: '80',
      },
    ],
  },
];


const stories = storiesOf('Components/MetricsTable', module);
stories.addDecorator(getWrapperDecorator());

stories.add('default', () => (
  <MetricsTable runs={RUNS.slice(0, 1)} items={ITEMS_SINGLE_RUN} />
));

stories.add('multiple runs', () => (
  <MetricsTable runs={RUNS} items={ITEMS_MULTIPLE_RUNS} />
));
