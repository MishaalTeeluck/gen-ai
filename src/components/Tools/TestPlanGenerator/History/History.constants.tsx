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
    key: 'date',
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
      row.download ? (
        <a href={row.download} download>
          <IconButton aria-label='Download file' colorScheme='blue' size='sm' variant='ghost'>
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
    case 'Success':
      return 'green';
    case 'Processing':
      return 'orange';
    case 'Failed':
      return 'red';
    default:
      return 'gray';
  }
};

export const historyRows: HistoryRow[] = [
  {
    fileName: 'LoginModule_generated_test_plan.xlsx',
    status: 'Success',
    date: '2025-04-25',
    download: '/downloads/LoginModule_generated_test_plan.xlsx',
  },
  {
    fileName: 'PaymentGateway_generated_test_plan.xlsx',
    status: 'Processing',
    date: '2025-04-26',
    download: '',
  },
  {
    fileName: 'UserProfile_generated_test_plan.xlsx',
    status: 'Failed',
    date: '2025-04-24',
    download: '',
  },
  {
    fileName: 'NotificationService_generated_test_plan.xlsx',
    status: 'Success',
    date: '2025-04-23',
    download: '/downloads/NotificationService_generated_test_plan.xlsx',
  },
  {
    fileName: 'AnalyticsDashboard_generated_test_plan.xlsx',
    status: 'Success',
    date: '2025-04-22',
    download: '/downloads/AnalyticsDashboard_generated_test_plan.xlsx',
  },
];
