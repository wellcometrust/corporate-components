import { configure } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';

require('@testing-library/jest-dom/extend-expect');

configure({ adapter: new Adapter() });
registerRequireContextHook();
