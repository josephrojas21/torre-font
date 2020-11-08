export const loadStorage = (key = 'torre') => {
  try {
    const storage = window.localStorage.getItem(key)
    return storage ? JSON.parse(storage) : null
  } catch (error) {
    return null
  }
}

export const saveStorage = (state, key = 'torre') => {
  try {
    const storage = JSON.stringify(state)
    window.localStorage.setItem(key, storage)
  } catch (error) {
    throw new Error(`Error saving storage: ${error}`)
  }
}

export const removeStorage = key => {
  try {
    window.localStorage.removeItem(key)
  } catch (error) {
    throw new Error(`Error removing storage: ${error}`)
  }
}

export const clearStorage = () => {
  try {
    window.localStorage.clear()
  } catch (error) {
    throw new Error(`Error clearing storage: ${error}`)
  }
}
