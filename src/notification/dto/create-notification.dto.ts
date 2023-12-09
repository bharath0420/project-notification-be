export class CreateNotificationDto {}
import { ApiProperty } from '@nestjs/swagger';
// notification.dto.ts


export class NotificationDto {


  @ApiProperty()
  device_type: string;

  @ApiProperty()
  notification_token: string;
  
}

// notification-token.dto.ts


export class NotificationTokenDto {
 @ApiProperty()
  device_type: string;

  @ApiProperty()
  notification_token: string;

  @ApiProperty()
  status: string;
}

export class Notification{

@ApiProperty()
title: string;

@ApiProperty()
    body: string;

    @ApiProperty()
    icon: string;
}
export class notificationPayload{
    @ApiProperty({ type: Notification })
    notification: Notification;

    @ApiProperty()
    to:string;
}