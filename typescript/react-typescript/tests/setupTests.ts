import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// According to the official enzyme docs, you will need to install enzyme along with an Adapter corresponding
// to the version of react (or other UI Component library) you are using
// https://airbnb.io/enzyme/
configure({ adapter: new Adapter() });
