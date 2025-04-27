import { EditButton } from "../extensions/edit-button/edit-button";
import { ColumnDef } from "@tanstack/react-table";
import { Name } from "../extensions/name";
import { LockedIcon } from "../../../../assets/icons/locked-icon";
import type { ContactsProps } from "../../../../shared/models";
import { UnlockedIcon } from "../../../../assets/icons/unlocked-icon";
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
      const role = info.row.original.IsOSPAdmin;

      return role ? "Admin" : "User";
    },
  },

  {
    accessorKey: "BlockAccess",
    header: "Access",
    cell: (info) => {
      const access = info.row.original.BlockAccess;
      if (!access) return;

      return <LockedIcon />;
    },
  },

  {
    header: "Edit",
    accessorKey: "edit",
    cell: (info) => {
      const formValues = info.row.original;

      return <EditButton values={formValues} />;
    },
  },

  {
    header: "Delete user",
    accessorKey: "delete",
    cell: (info) => {
      const id = info.row.original.UserID;

      return <DeleteButton id={id} />;
    },
  },
];
