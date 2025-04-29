import { useState } from 'react';
import { GridColumns, RowData } from './ExcelViewer.interface';
import ExcelJS from 'exceljs';
import { RowsChangeData, textEditor } from 'react-data-grid';
import { toast } from 'react-toastify';

export const ExcelViewerContainer = () => {
  const [columns, setColumns] = useState<GridColumns[]>([]);
  const [rows, setRows] = useState<RowData[]>([]);
  const [loaded, setLoaded] = useState(false);

  const handleBlob = async (blob: Blob) => {
    const workbook = new ExcelJS.Workbook();
    const buffer = await blob.arrayBuffer();
    await workbook.xlsx.load(buffer);

    const worksheet = workbook.worksheets[0];
    const loadedColumns: GridColumns[] = [];
    const loadedRows: RowData[] = [];

    worksheet.eachRow((row, rowIndex) => {
      const rowData: Record<
        string,
        string | number | boolean | null | undefined
      > = {
        id: `row-${rowIndex}`,
      };

      row.eachCell((cell, colNumber) => {
        const key = `col-${colNumber - 1}`;
        rowData[key] = cell.value as
          | string
          | number
          | boolean
          | null
          | undefined;

        if (rowIndex === 1) {
          loadedColumns.push({
            key,
            name: String(cell.value ?? `Column ${colNumber}`),
            editable: true,
            renderEditCell: textEditor,
          });
        }
      });

      if (rowIndex > 1) {
        loadedRows.push(rowData as RowData);
      }
    });

    setColumns(loadedColumns);
    setRows(loadedRows);
    setLoaded(true);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    await handleBlob(file);
  };

  const handleFetchExcelBlob = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APIPORT}/api/path-to-excel-download`
      );

      if (!response.ok) {
        toast.error('Failed to download the Excel file.');
      }

      const blob = await response.blob();
      await handleBlob(blob);
    } catch {
      toast.error('Could not fetch and parse the Excel file.');
    }
  };

  function rowKeyGetter(row: RowData) {
    return row.id;
  }

  const handleRowsChange = (
    updatedRows: RowData[],
    data: RowsChangeData<RowData, unknown>
  ) => {
    setRows((prevRows) => {
      const newRows = [...prevRows];
      for (const i of data.indexes) {
        newRows[i] = {
          ...newRows[i],
          [data.column.key]: updatedRows[i][data.column.key],
        };
      }
      return newRows;
    });

    console.log('Rows updated:', updatedRows);
  };

  const handleExport = async () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Sheet1');

    sheet.addRow(columns.map((col) => col.name));
    rows.forEach((row) => {
      sheet.addRow(columns.map((col) => row[col.key] ?? ''));
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'exported.xlsx';
    link.click();
    URL.revokeObjectURL(url);
  };

  return {
    handleFetchExcelBlob,
    handleFileUpload,
    handleRowsChange,
    handleExport,
    rowKeyGetter,
    rows,
    columns,
    loaded,
  };
};
