import { NotificationCountProps } from 'components/atoms/notificationCount';

interface IInput {
  className?: string;
  description?: string;
  disabled?: boolean;
  hasError?: boolean;
  id: string;
  label?: string;
  notificationsProps?: NotificationCountProps;
  size?: 'small' | 'medium';
  sx?: any;
  tooltip?: string;
}

export type { IInput };
