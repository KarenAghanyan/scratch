import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { ApiConfigService } from './services/api-config.service';
import { GeneratorService } from './services/generator.service';
import { JwtService } from './services/jwt.service';
import { ValidatorService } from './services/validator.service';

const providers = [
  ApiConfigService,
  ValidatorService,
  GeneratorService,
  JwtService,
];

@Global()
@Module({
  providers,
  imports: [HttpModule, CqrsModule],
  exports: [...providers, HttpModule, CqrsModule],
})
export class SharedModule {}
