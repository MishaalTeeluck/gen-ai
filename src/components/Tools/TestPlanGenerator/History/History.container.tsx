import { useEffect, useMemo, useState } from 'react';
import { HistoryRow } from './History.interface';
import { historyRowsList } from './History.constants';
import { toast } from 'react-toastify';
import { RootState } from '../../../../store';
import { useSelector } from 'react-redux';

export const HistoryContainer = () => {
  const [sortOption, setSortOption] = useState('date-desc');
  const [searchValue, setSearchValue] = useState('');
  const [historyRows, setHistoryRows] = useState<HistoryRow[]>([]);
  const username = useSelector((state: RootState) => state.header.userDetails.name);

  useEffect(() => {
    getHistoryList();
  });

  const getHistoryList = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APIPORT}/history/${username}`
      );
      if (!response.ok) {
        toast.error('Error while loading the history');
        return;
      }

      const data: HistoryRow[] = await response.json();
      setHistoryRows(data);
    } catch {
      setHistoryRows(historyRowsList);
      toast.error('Error occured while fetching the history');
    }
  };

  const filteredAndSortedRows = useMemo(() => {
    let filteredRows = [...historyRows];

    if (searchValue) {
      const searchLower = searchValue.toLowerCase();
      filteredRows = filteredRows.filter((row) =>
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
  }, [historyRows, searchValue, sortOption]);

  return {
    sortOption,
    setSortOption,
    searchValue,
    setSearchValue,
    filteredAndSortedRows,
    getHistoryList,
  };
};
