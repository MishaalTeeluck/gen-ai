import { Badge, IconButton } from '@chakra-ui/react';
import { HistoryRow } from './History.interface';
import { Column } from 'react-data-grid';
import { FaDownload } from 'react-icons/fa';
import { MdDoNotDisturb } from 'react-icons/md';

export const dropdownItems = [
  { label: 'Newest to Oldest', value: 'date-desc' },
  { label: 'Oldest to Newest', value: 'date-asc' },
  { label: 'File Name (Ascending)', value: 'fileName-asc' },
  { label: 'File Name (Descending)', value: 'fileName-desc' },
];

export const historyTableColumns: Column<HistoryRow>[] = [
  {
    key: 'fileName',
    name: 'File Name',
    sortable: true,
    resizable: true,
  },
  {
    key: 'status',
    name: 'Status',
    sortable: true,
    resizable: true,
    width: 120,
    renderCell: ({ row }) => (
      <Badge
        colorPalette={getStatusColor(row.status)}
        px={2}
        py={1}
        borderRadius='md'
      >
        {row.status}
      </Badge>
    ),
  },
  {
    key: 'createdAt',
    name: 'Date',
    sortable: true,
    resizable: true,
    width: 160,
  },
  {
    key: 'download',
    name: 'Download',
    resizable: true,
    width: 100,
    renderCell: ({ row }) =>
      row.status == 'COMPLETED' ? (
        <a href={row.download} download>
          <IconButton
            aria-label='Download file'
            colorScheme='blue'
            size='sm'
            variant='ghost'
          >
            <FaDownload />
          </IconButton>
        </a>
      ) : (
        <IconButton
          aria-label='Download not available'
          colorScheme='gray'
          size='sm'
          variant='ghost'
          disabled
        >
          <MdDoNotDisturb />
        </IconButton>
      ),
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'COMPLETED':
      return 'green';
    case 'CREATED':
      return 'orange';
    case 'FAILED':
      return 'red';
    default:
      return 'gray';
  }
};