import { Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { NotificationModule } from './notification/notification.module';
import { UsersModule } from './users/users.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
  }),
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    extra: {
      connectionLimit: process.env.POOL_SIZE
    },
    // synchronize: true,
    autoLoadEntities: true,
  }),
  NotificationModule,
  UsersModule,HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
