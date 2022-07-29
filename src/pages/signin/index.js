import Signin from "./signin";
import {renderTemplate} from "../../utils/utils";
import {isValid} from "../../utils/validator";

const signinPage = new Signin({
    settings: {withInternalID: false},
    events: {
        submit: e => {
            e.preventDefault()
            isValid(e.target)
        }
    }
})

renderTemplate('#root', signinPage)