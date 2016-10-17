
import { Controller, get} from 'vio'

export default class Default extends Controller {
    @get()
    default() {
        return {
            title: 'hello, Steve',
            content: 'read the source code'
        }
    }
}