import { Column, Entity, OneToMany, Unique } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { RoleTypeEnum } from '../../constants';
import { UseDto } from '../../decorators/use-dto.decorator';
import { UserDto } from './dto/user.dto';
import { UserSettingsEntity } from './user-settings.entity';

@Entity({ name: 'users' })
@UseDto(UserDto)
@Unique(['username'])
@Unique(['email'])
export class UserEntity extends AbstractEntity<UserDto> {
  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ enum: RoleTypeEnum, type: 'enum' })
  role: RoleTypeEnum;

  @OneToMany(
    () => UserSettingsEntity,
    (userSettingsEntity) => userSettingsEntity.user,
  )
  settings: UserSettingsEntity;
}
