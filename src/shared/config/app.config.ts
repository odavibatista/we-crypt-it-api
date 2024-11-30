import 'dotenv/config';

import z, { ZodError } from 'zod';
import { EnvironmentException } from '../domain/errors/Environment.exception';
import { join } from 'path';

const appConfigurationsSchema = z.object({
  FRONTEND_URL: z.string().min(1),

  API_URL: z.string().min(1),
  API_PORT: z.number(),
  NODE_ENV: z
    .enum(['development', 'production', 'test', 'local'])
    .default('development'),

});

let appConfigurations: z.infer<typeof appConfigurationsSchema> = {};

try {
  appConfigurations = appConfigurationsSchema.parse({
    FRONTEND_URL: process.env.FRONTEND_URL,
    NODE_ENV: process.env.NODE_ENV,

    API_URL: process.env.API_URL,
    API_PORT: parseInt(process.env.API_PORT), 
    
  });
} catch (error) {
  if (error instanceof ZodError) {
    throw new EnvironmentException(error);
  }
}

export { appConfigurations };
