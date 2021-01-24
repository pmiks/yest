import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql'
import { Tests } from './tests/tests.module'
@Module({
  imports: [
    Tests,
    GraphQLModule.forRoot({
      typePaths:['./**/*.graphql'],
      installSubscriptionHandlers:true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
