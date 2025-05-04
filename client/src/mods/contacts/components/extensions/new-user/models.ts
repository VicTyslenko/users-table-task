export type FormProps = {
  DisplayName: string;
  UserId?: number;
  Email: string;
  MFA_Mobile: string;
  AdminUser?: boolean;
  BlockAccess: boolean;
  O365Email: string;
};

export type Props = {
  onClose: () => void;
};
