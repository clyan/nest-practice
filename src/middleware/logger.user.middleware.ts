/**
 * @description 日志中间件
 * @author 颜文耀
 */

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/** class 写法 */
@Injectable()
export class LoggerUserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('User Request...');
    next();
  }
}
