import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://localhost:27017`, {
      user: 'root',
      pass: 'example',
      dbName: 'mikelopster',
    }),
    ProductsModule,],
  controllers: [AppController ],
  providers: [AppService ],
})
export class AppModule {}
