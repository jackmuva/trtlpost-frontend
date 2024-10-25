import {PasswordDto} from "@/types/PasswordDto.ts";
import {UserDto} from "@/types/UserDto.ts";
import StandardApi from "@/api/StandardApi.ts";

class AuthorizationApi extends StandardApi {
    postNewUser(user: UserDto){
        return this.post('/api/auth/signup', user)?.then((response: Response) => response.json());
    }

    postLogin(user: UserDto){
        return this.post('/api/auth/login', user)?.then((response: Response) => response.json());
    }

    postResetPassword(email: string){
        return this.post(`/api/auth/resetPassword?email=${email}`)?.then((response: Response) => response.json());
    }

    postNewPassword(passwordDto: PasswordDto){
        return this.post('/api/auth/savePassword', passwordDto)?.then((response: Response) => response.json());
    }
}

export default new AuthorizationApi();