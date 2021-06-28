import {createNote} from '../../../state_management/actions/notes'

test(`Generate a 'Create Note' action`, () => {
  const note = {
    title: 'Title',
    content: 'Text'
  }

  const action = createNote(note)
  expect(action).toEqual({
    type: 'CREATE_NOTE',
    payload: {
      title: 'Title',
      content: 'Text'
    }
  })
})