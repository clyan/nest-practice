/**
 * @description 日志中间件
 * @author 颜文耀
 */

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/** class 写法 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}

/** 函数式写法 */
// export function LoggerMiddleware(req: Request, res: Response, next: NextFunction) {
//   console.log(`Request...`);
//   next();
// }
