import uuidV4 from 'uuid/v4'

const initialSate = {
  cities: [
    {name: 'NY', country: 'USA', id: uuidV4()},
    {name: 'London', country: 'UK', id: uuidV4()},
    {name: 'Mumbai', country: 'India', id: uuidV4()},
    {name: 'Shanghai', country: 'China', id: uuidV4()},
    {name: 'Tokyo', country: 'Japan', id: uuidV4()},
    {name: 'Paris', country: 'France', id: uuidV4()},
    {name: 'Berlin', country: 'Germany', id: uuidV4()},
  ],
  error: false,
  isFetching: false
}

export default function citiesReducer(state = initialSate, action) {
  switch (action.type) {
    case 'ADD_CITY':
      const cityWithInfo = {
        ...action.city,
        id: uuidV4()
      }
      return {
        cities: [
          ...state.cities,
          cityWithInfo
        ]
      }

    default:
      return state
  }
  return state;
}
