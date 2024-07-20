import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    try {
      await this.validateToken(token);
      return true;
    } catch (err) {
      console.log(err.stack);

      if (err.response && err.response.status === 401) {
        throw new UnauthorizedException('Invalid token');
      } else if (err.response && err.response.status === 403) {
        throw new ForbiddenException('Forbidden, client_secret no provided');
      } else {
        throw new UnauthorizedException('Could not validate token');
      }
    }
  }

  private extractTokenFromHeader(request: any): string | null {
    const authHeader = request.headers['authorization'];
    if (!authHeader) {
      return null;
    }

    const [, token] = authHeader.split(' ');
    return token;
  }

  private async validateToken(token: string): Promise<void> {
    const url =
      process.env.URL_TOKEN_AUTH ||
      'http://localhost:3000/api/v1/auth/valid-token';
    await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'client-secret': process.env.CLIENT_SECRET || 'apikeytest',
      },
    });
  }
}
