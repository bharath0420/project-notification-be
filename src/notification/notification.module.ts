import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notifications } from './entities/notification.entity';
import { NotificationToken } from './entities/notification-token.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notifications, NotificationToken]),
    HttpModule,
  ],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: [NotificationService]
})

export class NotificationModule {}