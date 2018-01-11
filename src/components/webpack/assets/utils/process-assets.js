import { last, map, round, uniq } from 'lodash';

const getDelta = (baseline, current) => {
  const baselineValue = baseline && baseline.size || 0;
  const currentValue = current && current.size || 0;

  if (baselineValue === currentValue) {
    return 0;
  }

  if (baselineValue === 0) {
    return 100;
  }

  return round(currentValue / baselineValue * 100 - 100, 2);
};

// The first entry is the latest, for the others we compute delta
const getEntriesDelta = entries =>
  entries.reduce((aggregator, asset, index) => {
    if (index === 0) {
      return [asset];
    }

    return [
      ...aggregator,
      {
        ...asset,
        delta: getDelta(asset, aggregator[0]),
      },
    ];
  }, []);

const checkIfChanged = values => uniq(values).length !== 1;
const checkIfAdded = values => typeof last(values) === 'undefined';
const checkIfDeleted = values => typeof values[0] === 'undefined';

const processAssets = assets =>
  Object.entries(assets).reduce((aggregator, [key, asset]) => {
    const sizes = map(asset.entries, 'size');
    const entries = getEntriesDelta(asset.entries);

    return [
      ...aggregator,
      {
        key,
        data: {
          changed: checkIfChanged(sizes),
          added: checkIfAdded(sizes),
          deleted: checkIfDeleted(sizes),
        },
        entries,
      },
    ];
  }, []);

export default processAssets;
