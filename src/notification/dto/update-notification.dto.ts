import { PartialType } from '@nestjs/swagger';
import { NotificationDto } from './create-notification.dto';


export class UpdateNotificationDto extends PartialType(NotificationDto) {}
