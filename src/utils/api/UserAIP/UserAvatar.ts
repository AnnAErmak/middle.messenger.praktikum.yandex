import {HTTPTransport} from "../../HTTPTransport";
import {BaseAPI} from "../BaseAPI";
import {host} from "../../../constants";

const http = new HTTPTransport()

export class UserAvatar extends BaseAPI{
    update(data) {
        return http.put(`${host}user/profile/avatar`, {
            data
        })
            .then(response => response.response.avatar)
    }
}