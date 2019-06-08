import { Generator, generate } from '@zappjs/core';
import { JsonEngine } from '@zappjs/json';

import { PrettierConfigSchema } from '../schemas';
import { PrettierConfigSpec } from '../specs';

export const PrettierConfigGenerator: Generator = (spec: PrettierConfigSpec) => generate({
  engine: JsonEngine,
  schema: PrettierConfigSchema,
  spec
});
