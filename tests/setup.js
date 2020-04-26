import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'

configure({ adapter: new Adapter() })

global.API_BASE_URL = 'http://localhost:1337/api'
