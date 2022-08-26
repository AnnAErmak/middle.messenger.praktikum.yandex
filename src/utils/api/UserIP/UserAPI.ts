import {BaseAPI} from "../BaseAPI";
import {HTTPTransport} from "../../HTTPTransport";
import {host} from '../../../constants'
const http = new HTTPTransport()
export class UserAPI extends BaseAPI{
    request() {
        return http.get(`${host}auth/user`).then(data => JSON.parse(data.response))
    }
}