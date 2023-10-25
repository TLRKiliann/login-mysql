export default class AuthenticationService {

  static isAuthenticate: boolean = false;

  static login(username: string, password: string, 
    verifyUsername: string, verifyPassword: string): Promise<boolean> {
      const isAuthenticate = (verifyUsername === username && verifyPassword === password);

    return new Promise(resolve => {
      setTimeout(() => {
        this.isAuthenticate = isAuthenticate;
        resolve(isAuthenticate)
      }, 1000)
    })
  }
}
