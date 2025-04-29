export type FormProps = {
  firstName: string;
  lastName: string;
  Email: string;
  MFA_Mobile: string;
  AdminUser: boolean;
  BlockAccess: boolean;
  O365Email: string;
};

export type Props = {
  onClose: () => void;
};
