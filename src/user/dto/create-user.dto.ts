export class CreateUserDto {
  /**
   * 主键
   */
  id: number;
  /**
   * 姓氏
   */
  firstName: string;
  /**
   * 名字
   */
  lastName: string;
  /**
   * 是否可用
   */
  isActive: boolean;
}
