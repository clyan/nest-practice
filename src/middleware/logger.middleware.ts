/**
 * @description 日志中间件
 * @author 颜文耀
 */

import { Request, Response, NextFunction } from 'express';

/** 函数式写法 */
export function LoggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(`Request...`);
  next();
}
