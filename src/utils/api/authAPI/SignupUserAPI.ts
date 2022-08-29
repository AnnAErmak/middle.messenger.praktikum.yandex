import {BaseAPI} from "../BaseAPI";
import {HTTPTransport} from "../../HTTPTransport";
import {host} from "../../../constants";

const http = new HTTPTransport()
export class SignupUserAPI extends BaseAPI{
    request() {
        return http.get(`${host}auth/user`)
    }

    create() {
        http.post(`${host}auth/signup`, {
            headers: {
                'content-type': 'application/json',
            },
            data: {}
        })
    }
}