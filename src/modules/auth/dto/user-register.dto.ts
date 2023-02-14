import { EmailField, PasswordField, StringField } from '../../../decorators';
// import { CreateUserSettingsDto } from '../../user/dto/create-user-settings.dto';

export class UserRegisterDto {
  @StringField()
  username: string;

  @EmailField()
  email: string;

  @PasswordField()
  password: string;

  @StringField({ each: true })
  problemsList?: string[];
}
