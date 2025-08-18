import * as React from 'react';
import { ILocalStore } from '@/store/createContextLocalStore';

export const useLocalStore = <S extends ILocalStore>(creator: () => S): S => {
  const [store] = React.useState(creator);

  React.useEffect(
    () => () => {
      store.destroy();
    },
    [store],
  );

  return store;
};
