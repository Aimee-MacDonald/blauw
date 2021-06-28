import notesReducer from '../../../state_management/reducers/notes'

test('Add a new note', () => {
  const state = []
  const action = {
    type: 'CREATE_NOTE',
    payload: {
      title: 'Title',
      content: 'text'
    }
  }

  const result = notesReducer(state, action)
  
  expect(result).toEqual([{
    title: 'Title',
    content: 'text'
  }])
})