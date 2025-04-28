import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import type { ContactsProps } from "../../../../shared/models";
import * as S from "./styles";
import { renderColumns } from "./table.columns";

type UsersTableProps = {
  data: ContactsProps[];
};

export const UsersTable = ({ data }: UsersTableProps) => {
  const table = useReactTable({
    data,
    columns: renderColumns(),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <S.TableWrapper>
      <S.Table>
        <S.TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <S.TableHeadRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <S.TableHeadCell key={header.id} className="test">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </S.TableHeadCell>
              ))}
            </S.TableHeadRow>
          ))}
        </S.TableHead>

        <S.TableBody>
          {table.getRowModel().rows.map((row) => (
            <S.TableBodyRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <S.TableRowData key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</S.TableRowData>
              ))}
            </S.TableBodyRow>
          ))}
        </S.TableBody>
      </S.Table>
    </S.TableWrapper>
  );
};
