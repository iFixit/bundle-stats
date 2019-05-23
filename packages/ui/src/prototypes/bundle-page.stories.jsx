import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStats, createStatsSummary } from '@bundle-stats/utils';

import currentData from '../../__mocks__/job.current.json';
import baselineData from '../../__mocks__/job.baseline.json';
import {
  Box, Container, Panels, Tabs,
} from '../ui';
import { BundleAssets } from '../components/bundle-assets';
import { BundleAssetsTotalsTable } from '../components/bundle-assets-totals-table';
import { BundleAssetsTotalsChartBars } from '../components/bundle-assets-totals-chart-bars';
import { BundleAssetsTotalsChartPie } from '../components/bundle-assets-totals-chart-pie';
import { BundleModules } from '../components/bundle-modules';
import { Summary } from '../components/summary';
import { getWrapperDecorator } from '../stories';
import css from './bundle-page.module.css';

const stories = storiesOf('Prototypes/BundlePage', module);
stories.addDecorator(getWrapperDecorator());

const currentStats = createStats(baselineData.rawData, currentData.rawData);
const baselineStats = createStats(null, baselineData.rawData);

const currentJob = {
  ...currentData,
  stats: currentStats,
  summary: createStatsSummary(baselineStats, currentStats),
};

const baselineJob = {
  ...baselineData,
  stats: baselineStats,
  summary: createStatsSummary(null, baselineStats),
};

const JOBS = [currentJob, baselineJob];

stories.add('totals', () => (
  <div className={css.root}>
    <Container>
      <Summary data={currentJob.summary} />
    </Container>
    <Container>
      <Tabs>
        <span isTabActive>Totals</span>
        <span>Assets</span>
        <span>Modules</span>
      </Tabs>
    </Container>
    <Container>
      <Panels>
        <Box>
          <BundleAssetsTotalsChartPie jobs={JOBS} />
        </Box>
        <Box>
          <BundleAssetsTotalsChartBars jobs={JOBS} />
        </Box>
      </Panels>
    </Container>
    <Container>
      <Box>
        <BundleAssetsTotalsTable jobs={JOBS} />
      </Box>
    </Container>
  </div>
));

stories.add('assets', () => (
  <div className={css.root}>
    <Container>
      <Summary data={currentJob.summary} />
    </Container>
    <Container>
      <Tabs>
        <span>Totals</span>
        <span isTabActive>Assets</span>
        <span>Modules</span>
      </Tabs>
    </Container>
    <Container>
      <Box>
        <BundleAssets jobs={JOBS} />
      </Box>
    </Container>
  </div>
));

stories.add('modules', () => (
  <div className={css.root}>
    <Container>
      <Summary data={currentJob.summary} />
    </Container>
    <Container>
      <Tabs>
        <span>Totals</span>
        <span>Assets</span>
        <span isTabActive>Modules</span>
      </Tabs>
    </Container>
    <Container>
      <BundleModules jobs={JOBS} />
    </Container>
  </div>
));
