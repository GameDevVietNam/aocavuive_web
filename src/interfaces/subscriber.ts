import { IDocument } from './document'

export interface ISubscriber extends IDocument {
  email: string;
  ipAddress?: string | null;
  userAgent?: string;
  language?: string;
  screenWidth?: number;
  screenHeight?: number;
}
