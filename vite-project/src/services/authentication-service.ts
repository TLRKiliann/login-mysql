export default class AuthenticationService {

  static isAuthenticate: boolean = false;

  static login(username: string, password: string, 
    verifyUsername: string, verifyPassword: string, verifyStatus: string | undefined): Promise<boolean> {
      const isAuthenticate = (verifyUsername === username && 
        verifyPassword === password && verifyStatus === 'admin');

    return new Promise(resolve => {
      setTimeout(() => {
        this.isAuthenticate = isAuthenticate;
        resolve(isAuthenticate)
      }, 1000)
    })
  }
}
