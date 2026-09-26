import {useCallback, useMemo} from 'react';

import {
  usePluralForm,
  useQueryString,
  useQueryStringList,
} from '@docusaurus/theme-common';
// import type {TagType, User} from '@site/src/data/users';
// import {sortedUsers} from '@site/src/data/users';

export function useSearchName() {
  return useQueryString('name');
}

export function useTags() {
  return useQueryStringList('tags');
}

type Operator = 'OR' | 'AND';

export function useOperator() {
  const [searchOperator, setSearchOperator] = useQueryString('operator');
  const operator: Operator = searchOperator === 'AND' ? 'AND' : 'OR';
  const toggleOperator = useCallback(() => {
    const newOperator = operator === 'OR' ? 'AND' : null;
    setSearchOperator(newOperator);
  }, [operator, setSearchOperator]);
  return [operator, toggleOperator] as const;
}


export function useFilteredUsers() {
  const [tags] = useTags();
  const [searchName] = useSearchName();
  const [operator] = useOperator();
  return [];
  // return useMemo(
  //   () =>
  //     filterUsers({
  //       users: sortedUsers,
  //       tags: tags as TagType[],
  //       operator,
  //       searchName,
  //     }),
  //   [tags, operator, searchName],
  // );
}