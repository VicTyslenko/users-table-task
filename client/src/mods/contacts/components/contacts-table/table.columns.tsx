import { EditButton } from "../extensions/edit-button/edit-button";
import { ColumnDef } from "@tanstack/react-table";
import { Name } from "../extensions/name";
import { AccessCell } from "../extensions/access-cell/access-cell";
import type { ContactsProps } from "../../../../shared/models";

import { DeleteButton } from "../extensions/delete-button/delete-button";

export const renderColumns = (): ColumnDef<ContactsProps>[] => [
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
    accessorKey: "AdminUser",
    header: "Role",
    cell: (info) => {
      const role = info.row.original.AdminUser;

      return role ? "Admin" : "User";
    },
  },

  {
    accessorKey: "BlockAccess",
    header: "Access",
    cell: (info) => {
      const access = info.row.original.BlockAccess;

      return AccessCell(access);
    },
  },

  {
    header: "Edit",
    accessorKey: "edit",

    cell: (info) => {
      const { Status, FunctionalUser, ColourMode, HierarchyMaintenance, ...formValues } = info.row.original;

      return <EditButton values={formValues} />;
    },
  },

  {
    header: "Delete user",
    accessorKey: "delete",
    cell: (info) => {
      const id = info.row.original.UserID;

      return <DeleteButton id={id} disabled={info.row.original?.AdminUser} />;
    },
  },
];
