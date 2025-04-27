
export type EditFormProps = {
  DisplayName: string;
  Email: string;
  IsOSPAdmin: boolean;
  BlockAccess: number;
  O365Email?: string;
  MFA_Mobile: string;
};

export type Props = {
  onClose: () => void;
  values: EditFormProps;
};
