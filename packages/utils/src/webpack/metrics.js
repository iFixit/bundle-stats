import {
  METRIC_TYPE_FILE_SIZE,
  METRIC_TYPE_NUMERIC,
  METRIC_TYPE_PERCENTAGE,
} from '../config/metrics';

export const metrics = {
  totalSizeByTypeALL: {
    label: 'Bundle Size',
    description: 'Sum of all assets emitted by webpack.',
    url: 'https://relative-ci.com/documentation/metrics-and-data#assets',
    type: METRIC_TYPE_FILE_SIZE,
  },
  totalInitialSizeJS: {
    label: 'Initial JS',
    description: 'Sum of all JavaScript assets that are labeled as initial(eg: vendor.js, app.js).',
    url: 'https://relative-ci.com/documentation/metrics-and-data#assets',
    type: METRIC_TYPE_FILE_SIZE,
  },
  totalInitialSizeCSS: {
    label: 'Initial CSS',
    description: 'Sum of all CSS assets that are labeled as initial(eg: vendor.css, app.css).',
    url: 'https://relative-ci.com/documentation/metrics-and-data#assets',
    type: METRIC_TYPE_FILE_SIZE,
  },
  cacheInvalidation: {
    label: 'Cache Invalidation',
    description: 'Ratio between the total changed assets and Bundle Size.',
    url: 'https://relative-ci.com/documentation/metrics-and-data#assets',
    type: METRIC_TYPE_PERCENTAGE,
    biggerIsBetter: false,
  },
  chunkCount: {
    label: 'Chunks',
    description: 'Total number of chunks generated by webpack.',
    url: 'https://relative-ci.com/documentation/metrics-and-data#assets',
    type: METRIC_TYPE_NUMERIC,
    biggerIsBetter: false,
  },
  assetCount: {
    label: 'Assets',
    description: 'Total number of assets emitted by webpack.',
    url: 'https://relative-ci.com/documentation/metrics-and-data#assets',
    type: METRIC_TYPE_NUMERIC,
    biggerIsBetter: false,
  },
  moduleCount: {
    label: 'Modules',
    description: 'Total number of modules bundled by webpack.',
    url: 'https://relative-ci.com/documentation/metrics-and-data#modules-1',
    type: METRIC_TYPE_NUMERIC,
    biggerIsBetter: false,
  },
  duplicateModulesCount: {
    label: 'Duplicate Modules',
    description: 'Total number of modules that belong to more than one chunk.',
    url: 'https://relative-ci.com/documentation/metrics-and-data#modules-1',
    type: METRIC_TYPE_NUMERIC,
    biggerIsBetter: false,
  },
  duplicateCode: {
    label: 'Duplicate Code',
    description: 'The percentage of duplicate module total size',
    url: 'https://relative-ci.com/documentation/metrics-and-data#modules-1',
    type: METRIC_TYPE_PERCENTAGE,
    biggerIsBetter: false,
  },
  packageCount: {
    label: 'Packages',
    description: 'Total number of packages bundled by webpack.',
    url: 'https://relative-ci.com/documentation/metrics-and-data#packages',
    type: METRIC_TYPE_NUMERIC,
    biggerIsBetter: false,
  },
  duplicatePackagesCount: {
    label: 'Duplicate Packages',
    description: 'Total number of packages that are duplicated.',
    url: 'https://relative-ci.com/documentation/metrics-and-data#packages',
    type: METRIC_TYPE_NUMERIC,
    biggerIsBetter: false,
  },
  sizes: {
    totalSizeByTypeJS: {
      label: 'JS',
      type: METRIC_TYPE_FILE_SIZE,
    },
    totalSizeByTypeCSS: {
      label: 'CSS',
      type: METRIC_TYPE_FILE_SIZE,
    },
    totalSizeByTypeIMG: {
      label: 'IMG',
      type: METRIC_TYPE_FILE_SIZE,
    },
    totalSizeByTypeMEDIA: {
      label: 'Media',
      type: METRIC_TYPE_FILE_SIZE,
    },
    totalSizeByTypeFONT: {
      label: 'Fonts',
      type: METRIC_TYPE_FILE_SIZE,
    },
    totalSizeByTypeHTML: {
      label: 'HTML',
      type: METRIC_TYPE_FILE_SIZE,
    },
    totalSizeByTypeOTHER: {
      label: 'Other',
      type: METRIC_TYPE_FILE_SIZE,
    },
  },
};
