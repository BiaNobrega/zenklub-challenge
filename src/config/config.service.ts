import { EnvConfig } from '@config/enums/config.enum';
import { Injectable, Scope } from '@nestjs/common';
import { DotenvParseOutput, parse } from 'dotenv';
import * as fs from 'fs';

@Injectable({ scope: Scope.DEFAULT })
export class ConfigService {
  private envConfig: DotenvParseOutput;
  constructor() {
    this.envConfig = parse(fs.readFileSync(__dirname + `/env/.env.${process.env.NODE_ENV}`));
  }

  getEnvConfig(key: EnvConfig): string {
    return this.envConfig[key];
  }
}
