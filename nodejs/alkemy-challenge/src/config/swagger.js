import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Alkemy Challenge',
      version: '1.0.0',
      description: 'Alkemy template express',
    },
  },
  apis: ['./src/router/*.js'],
};
const specs = swaggerJSDoc(options);

export { specs, swaggerUI };
