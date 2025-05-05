import { useEffect, useMemo, useState } from 'react';
import { HistoryRow } from './History.interface';
import { toast } from 'react-toastify';
import { RootState } from '../../../../store';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

export const HistoryContainer = () => {
  const [sortOption, setSortOption] = useState('date-desc');
  const [searchValue, setSearchValue] = useState('');
  const [historyRows, setHistoryRows] = useState<HistoryRow[]>([]);
  const token = useSelector((state: RootState) => state.header.token);
  const { toolId } = useParams();

  useEffect(() => {
    getHistoryList();
  });

  const getHistoryList = async () => {
    try {
      const response = await axios.get<HistoryRow[]>(
        `${import.meta.env.VITE_APIPORT}/jobs/list/${toolId!}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const rawData = response.data;

      const formattedData: HistoryRow[] = rawData.map((item) => ({
        id: item.id,
        fileName: item.fileName,
        status: item.status,
        createdAt: format(new Date(item.createdAt), 'dd/MM/yyyy HH:mm'),
        download: `/api/download/${item.fileName}`,
      }));

      setHistoryRows(formattedData);
    } catch {
      toast.error('Error occurred while fetching the history');
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
        valueA = new Date(a.createdAt).getTime();
        valueB = new Date(b.createdAt).getTime();
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
