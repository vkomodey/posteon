import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor(
    private readonly httpAdapterHost: HttpAdapterHost,
    private config: ConfigService,
  ) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    const httpStatus = this.getStatus(exception);
    const message = this.getMessage(exception);

    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
      message,
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }

  getStatus(exception: unknown): number {
    return exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;
  }

  getMessage(exception: unknown): string {
    const defaultMsg = 'Something went wrong';
    const isDevelopment = this.config.get<string>('app_env') === 'development';

    if (exception instanceof HttpException) {
      if (
        exception.getStatus() === HttpStatus.INTERNAL_SERVER_ERROR &&
        !isDevelopment
      ) {
        return defaultMsg;
      }

      return exception.message;
    } else if (exception instanceof Error) {
      const stack = exception.stack;
      return exception.message + isDevelopment ? ` ${stack}` : '';
    } else {
      return defaultMsg;
    }
  }
}
