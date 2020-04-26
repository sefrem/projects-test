const loader = (state = {}, action) => {
  const { type } = action;
  const regExp = new RegExp(/(.*)_(FETCH|REQUEST|SUCCESS|ERROR)/);
  const matches = type.match(regExp);

  if (!matches) {
    return state;
  }

  const [requestName, requestPrefix, requestState] = matches;

  return {
    ...state,
    [requestPrefix]: requestState === "REQUEST",
  };
};

export default loader;

export const isFetchingProjects = (state) => state.loader.FETCH_PROJECTS;
export const isFetchingProject = (state) => state.loader.FETCH_PROJECT;
export const isFetchingStructure = (state) => state.loader.FETCH_STRUCTURE;
