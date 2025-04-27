import { EditButton } from "../extensions/edit-button/edit-button";
import { ColumnDef } from "@tanstack/react-table";
import { Name } from "../extensions/name";
import { LockedIcon } from "../../../../assets/icons/locked-icon";
import type { ContactsProps } from "../../../../shared/models";
import { UnlockedIcon } from "../../../../assets/icons/unlocked-icon";
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
      if (!access) return;

      return <LockedIcon />;
    },
  },

  {
    header: "Edit",
    accessorKey: "edit",
    cell: () => <EditButton />,
  },
];
