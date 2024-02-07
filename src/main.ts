import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //2
  // app.use(
  //   // Paths you want to protect with basic auth
  //   '/docs*',
  //   basicAuth({
  //     challenge: true,
  //     users: {
  //       yourUserName: 'p4ssw0rd',
  //     },
  //   }),
  // ); // 2->end
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Employee')
    .setDescription('The user API description')
    .setVersion('1.0')
    // .addTag('cats')
    // 3
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    ) //3 -> end
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(3000);
}
bootstrap();

// const options = {
//   origin: '*',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   preflightContinue: true,
//   optionsSuccessStatus: 204,
//   credentials: true,
// };
// app.enableCors(options);
// await app.listen(3000);
// }
// bootstrap();

// 1.import basic auth npm like this-> npm i express-basic-auth.
// 2. use app object already mentioned.
// 3. addBearerAuth (you added onother one like this.)
