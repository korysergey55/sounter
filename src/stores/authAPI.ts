// import axios from 'axios'
import {
  makeAutoObservable,
  observable,
  action,
  // configure,
  // computed,
  // runInAction,
  // reaction,
  // toJS,
} from 'mobx'

class AuthAPI {
  @observable auth: any = null
  @observable accessToken: string = localStorage.getItem('accessToken')
    ? JSON.parse(localStorage.getItem('accessToken') as string)
    : null
  @observable user: any = null

  constructor() {
    makeAutoObservable(this)
    // reaction(
    //   () => this.accessToken,
    //   _ => console.log(toJS(this.accessToken))
    // )
  }
  @action setAccessTokenAPI(tokenData: any) {
    this.accessToken = tokenData
    localStorage.setItem('accessToken', JSON.stringify(tokenData))
  }
  @action setUserAPI(data: any) {
    this.user = data
  }

  // @action.bound setAuthAPI(authData: any) {
  //   this.auth = authData
  // }
  // @action async fetchAuthGoogleAPI(authData: any) {
  //   const BASE_URL =
  //     'https://saunter-3a6ad-default-rtdb.firebaseio.com/'
  //   try {
  //     const response = await axios.post(`${BASE_URL}`, { ...authData })
  //     this.setAuthAPI(response)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // @action async fetchAuthFacebookAPI(authData: any) {
  //   const BASE_URL =
  //     'https://saunter-3a6ad-default-rtdb.firebaseio.com/'
  //   try {
  //     const response = await axios.post(`${BASE_URL}`, { ...authData })
  //     this.setAuthAPI(response)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // @action async fetchTokenAPI(tokenData: any) {
  //   const BASE_URL =
  //     'https://saunter-3a6ad-default-rtdb.firebaseio.com/'
  //   try {
  //     const response = await axios.post(`${BASE_URL}`, { ...tokenData })
  //     this.setAccessTokenAPI(response)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
}

export default new AuthAPI()

// @action async fetchForecast(sity: string) {
//   const response = await api.get(`/weather`, {
//     params: {
//       q: sity,
//       units: 'metric',
//       appid: process.env.REACT_APP_API_KEY,
//       lang: this.lenguage,
//     },
//   })
//   this.setForecast(response.data)
// }
// @action.bound setForecast(newForecastApi: IWeather) {
//   this.forecast = [newForecastApi]
// }

// @action async fetchAuthAPI(authData: any) {
//   const BASE_URL = 'http://localhost:3000/products'
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(authData),
//   }
//   const response = await fetch(`${BASE_URL}`, options)
//   const res = await response.json()
//   this.setAuth(res)
//   // await axios.post(`${BASE_URL}${product}`).then(res => {
//   //   this.setAllProductApi(res)
//   // })
// }

// @action.bound setTokenAPI(tokenhData: any) {
//   this.token = tokenhData
// }
// @action async fetchProductsAPI(page: number = 1) {
//   const BASE_URL = 'http://localhost:3000/products'
//   await fetch(`${BASE_URL}?_page=${page}&_limit=9`)
//     .then(res => res.json())
//     .then(products => {
//       this.setTokenAPI(products)
//     })
// }
