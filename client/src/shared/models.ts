export type ContactsProps = {
  UserID: number;
  DisplayName: string;
  Email: string;
  IsOSPAdmin: boolean;
  Status: string;
  FunctionalUser: number;
  AdminUser: number;
  BlockAccess: number;
  O365Email?: string;
  MFA_Mobile: string;
  ColourMode: string;
  HierarchyMaintenance: boolean;
};

export type EditFormProps = Pick<ContactsProps, "DisplayName" | "Email" | "IsOSPAdmin" | "BlockAccess" | "O365Email" | "MFA_Mobile" | "UserID">;
