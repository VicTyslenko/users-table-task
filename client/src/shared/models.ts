export type ContactsProps = {
  UserID: number;
  DisplayName: string;
  Email: string;
  IsOSPAdmin: boolean;
  Status: string;
  FunctionalUser: number;
  AdminUser?: boolean;
  BlockAccess: boolean;
  O365Email?: string;
  MFA_Mobile: string;
  ColourMode: string;
  HierarchyMaintenance: boolean;
};

export type EditFormProps = Pick<ContactsProps, "DisplayName" | "Email" | "BlockAccess" | "O365Email" | "MFA_Mobile" | "UserID">;

export type EditButtonProps = Pick<ContactsProps, "DisplayName" | "Email" | "BlockAccess" | "O365Email" | "MFA_Mobile" | "UserID" | "AdminUser">;
