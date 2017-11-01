export const addDestination = (destination) => {
  return {
    type: 'ADD_DESTINATION_ACTION',
    destination
  };
};
export const removeDestination = (destination) => {
  return {
    type: 'REMOVE_DESTINATION_ACTION',
    destination
  };
};
