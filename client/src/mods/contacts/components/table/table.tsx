import { useEffect, useMemo, useState } from "react";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import type { Contacts } from "../../../../shared/models";
import { instance } from "../../../../services/api/axios";
import * as S from "./styles";
import { renderColumns } from "./table.columns";

export const UsersTable = () => {
  const [data, setData] = useState<Contacts[]>([]);

  useEffect(() => {
    try {
      const test = async () => {
        const res = await instance.get("/users");

        const data = res.data;
        setData(data);
      };

      test();
    } catch (error) {
      console.error(error);
    }
  }, []);
  useEffect(() => {
    console.log("data", data);
  }, [data]);

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
                <S.TableHeadCell key={header.id}>
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
