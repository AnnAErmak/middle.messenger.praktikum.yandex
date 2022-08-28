import {BaseAPI} from "../BaseAPI";
import {HTTPTransport} from "../../HTTPTransport";
import {host} from "../../../constants";

const http = new HTTPTransport()

export class UserPasswordAPI extends BaseAPI{
    update({ oldPassword, newPassword }) {
        http.put(`${host}user/password`, {
            headers: {
                'content-type': 'application/json',
            },
            data: {
                oldPassword,
                newPassword
            }
        })
    }
}