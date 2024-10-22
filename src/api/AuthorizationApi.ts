import {PasswordDto} from "@/types/PasswordDto.ts";
import {UserDto} from "@/types/UserDto.ts";

class AuthorizationApi {
    postNewUser(user: UserDto){
        return this.post('/api/auth/signup', user).then(response => response.json());
    }

    postLogin(user: UserDto){
        return this.post('/api/auth/login', user).then(response => response.json());
    }

    postResetPassword(email: string){
        return this.post(`/api/auth/resetPassword?email=${email}`);
    }

    postNewPassword(passwordDto: PasswordDto){
        return this.post('/api/auth/savePassword', passwordDto).then(response => response.json());
    }
}

export default new AuthorizationApi();