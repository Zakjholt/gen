module.exports = (name) => `import test from 'ava'
import { shallow } from 'enzyme'
import ${name} from './index'

test('${name}', async t => {
  const component = shallow(<${name} />)

  t.snapshot(component)
})
`
