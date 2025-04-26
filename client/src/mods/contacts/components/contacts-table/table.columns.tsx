import { EditButton } from "../../../../assets/icons";
import { ColumnDef } from "@tanstack/react-table";
import { Name } from "../extensions/name";

import type { Contacts } from "../../../../shared/models";

export const renderColumns = (): ColumnDef<Contacts>[] => [
  {
    accessorKey: "DisplayName",
    header: "Name",
    cell: (info) => <Name contact={info.row.original} />,
  },

  {
    accessorKey: "MFA_Mobile",
    header: "Mobile",
  },
  {
    accessorKey: "Email",
    header: "Email",
  },

  {
    header: "Edit",
    accessorKey: "edit",
    cell: () => <EditButton />,
  },
];
