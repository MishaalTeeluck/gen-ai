import { Column } from "react-data-grid";

export interface RowData {
    [key: string]: string | number | boolean | null;
    id: string;
}

export type GridColumns = Column<RowData>;