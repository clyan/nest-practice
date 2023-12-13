export class CreateUserDto {
  /**
   * 姓氏
   */
  userName: string;
  /**
   * 密码
   */
  password: string;
  /**
   * 是否可用
   */
  isActive: boolean;
}
