import {renderTemplate} from "../../utils/utils";
import Header from "../../components/header/header";

const header = new Header({settings: {withInternalID: false}})
renderTemplate('#root', header);