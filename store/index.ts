import { createContextLocalStore } from './createContextLocalStore';

import { CounterStore } from './CounterStore';

const { Provider, useStore } = createContextLocalStore(CounterStore);

export { Provider as CounterStoreProvider, useStore as useCounterStore, CounterStore };
