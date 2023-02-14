import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/abstract.dto';
import { RoleTypeEnum } from '../../../constants';
import { ApiEnumProperty } from '../../../decorators';
import { Nullable } from '../../../types';
import type { UserEntity } from '../user.entity';

export class UserDto extends AbstractDto {
  @ApiPropertyOptional()
  username: Nullable<string>;

  @ApiEnumProperty(() => RoleTypeEnum)
  role: RoleTypeEnum;

  @ApiPropertyOptional()
  email: string;

  constructor(user: UserEntity) {
    super(user);
    this.username = user.username;
    this.role = user.role;
    this.email = user.email;
  }
}
