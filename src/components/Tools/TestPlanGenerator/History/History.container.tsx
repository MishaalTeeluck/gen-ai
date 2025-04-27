import { useMemo, useState } from 'react';
import { HistoryRow } from './History.interface';
import { historyRows } from './History.constants';

export const HistoryContainer = () => {
  const [sortOption, setSortOption] = useState('date-desc');
  const [searchValue, setSearchValue] = useState('');

  const isHistoryRowsEmpty = (rows: HistoryRow[]): boolean => {
    return rows.length === 0;
  };

  const filteredAndSortedRows = useMemo(() => {
    let filteredRows = [...historyRows];

    if (searchValue) {
      const searchLower = searchValue.toLowerCase();
      filteredRows = filteredRows.filter(
        (row) =>
          row.fileName.toLowerCase().includes(searchLower)
      );
    }

    const [sortBy, sortOrder] = sortOption.split('-') as [
      'fileName' | 'date',
      'asc' | 'desc'
    ];

    filteredRows.sort((a, b) => {
      let valueA: string | number = '';
      let valueB: string | number = '';

      if (sortBy === 'fileName') {
        valueA = a.fileName.toLowerCase();
        valueB = b.fileName.toLowerCase();
      } else if (sortBy === 'date') {
        valueA = new Date(a.date).getTime();
        valueB = new Date(b.date).getTime();
      }

      if (valueA < valueB) return sortOrder === 'asc' ? -1 : 1;
      if (valueA > valueB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return filteredRows;
  }, [searchValue, sortOption]);

  return {
    isHistoryRowsEmpty,
    sortOption,
    setSortOption,
    searchValue,
    setSearchValue,
    filteredAndSortedRows,
  };
};
