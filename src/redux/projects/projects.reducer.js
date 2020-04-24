import { GET_PROJECTS } from './projects.types'

const projects = (state = [], action) => {
    switch(action.type) {
        case GET_PROJECTS: 
        return action.payload.slice()
        default:
      return state;
    }
}

export default projects