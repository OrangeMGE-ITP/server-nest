import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

import ormconfig from '@app/ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
