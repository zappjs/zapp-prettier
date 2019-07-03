import { Generator, generate } from '@zappjs/core';
import { JsonEngine } from '@zappjs/json';

import { IPrettierConfigSpec } from '../interfaces';
import { PrettierConfigSchema } from '../schemas';

export const PrettierConfigGenerator: Generator = (spec: IPrettierConfigSpec) => generate({
  engine: JsonEngine,
  schema: PrettierConfigSchema,
  spec
});
