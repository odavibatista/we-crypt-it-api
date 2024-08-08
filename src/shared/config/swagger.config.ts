import { DocumentBuilder } from '@nestjs/swagger';

export const sharedSwaggerConfig = new DocumentBuilder()
  .setTitle('Insira o nome do projeto aqui')
  .setDescription(
    'Insira a Descrição Aqui.',
  )
  .setVersion('1.0.0')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      description: 'Insira um token JWT para autenticar a requisição.',
    },
    'user-token',
  )
  .build();
