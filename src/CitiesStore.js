import { observable } from 'mobx'
import uuidV4 from 'uuid/v4'

//import fetch from 'node-fetch'
import { AsyncStorage } from 'react-native'

const CITIES_KEY = 'CITIES_KEY'

class CitiesStore {

  @observable
  cities = [
    {name: 'NY', country: 'USA', id: uuidV4()},
    {name: 'London', country: 'UK', id: uuidV4()},
    {name: 'Mumbai', country: 'India', id: uuidV4()},
    {name: 'Shanghai', country: 'China', id: uuidV4()},
    {name: 'Tokyo', country: 'Japan', id: uuidV4()},
    {name: 'Paris', country: 'France', id: uuidV4()},
    {name: 'Berlin', country: 'Germany', id: uuidV4()},
  ]

  // @observable
  // citiesRemote = [];

  // fetchCities() {
  //   fetch('https://gist.githubusercontent.com/tapsboy/894b6cd7c5ebafc149e7b7c106ebcd8a/raw/e733c3e267c798bc49400bcc746d576896adc38c/cities.json')
  //     .then(response => {
  //       response.json().then(cities => {
  //         citiesRemote = cities;
  //       })
  //     })
  // }

  init() {
    //this.fetchCities();
    AsyncStorage.getItem(CITIES_KEY)
      .then(data => {
        data = JSON.parse(data)
        this.cities = data
      })
  }

  addCity(city) {
    const cityWithInfo = {
      ...city,
      id: uuidV4()
    }
    this.cities.push(cityWithInfo)
    AsyncStorage.setItem(CITIES_KEY, JSON.stringify(this.cities))
      .then(() => {
        console.log('Successfully Added Item')
      })
  }

}

export default new CitiesStore()