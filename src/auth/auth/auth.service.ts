import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpService) { }

  async login(username: string, password: string): Promise<void> {
    const { data } = await firstValueFrom(
      this.http.post(
        'http://localhost:8080/auth/realms/keycloak-nest/protocol/openid-connect/token',
        new URLSearchParams({
          client_id: 'app-nest',
          client_secret: 'a41e671c-6bf4-4039-b3fc-0b91cfebb5d8',
          grant_type: 'password',
          username,
          password,
        }),
      ),
    );

    return data;
  }



  // validateCredentials(username: string, password: string): any {
  //   const user = users.find(register =>
  //     register.username === username && bcrypt.compareSync(password, register.password),
  //   );

  //   if (!user) {
  //     throw new Error('User not found');
  //   }

  //   return user;
  // }
}
