import {env} from 'process'

  export const axioDefaultConfig = {
    method: 'get',
    url: 'https://localhost:44321/api/contractors',
    data: {},
    headers: {
      'Content-Type': 'application/json',
      //ApiKey: process.env.RACT_APP_API_KEY,
    },
   /* validateStatus: function (status) {
      return status >= 200 && status < 400 // default
    },*/
  }

export const phoneRegex =
  /(^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$)/

export const nicRegex =
  /(^(?:19|20)?\d{2}((?:[0-35-8]\d\d(?<!(?:000|500|36[7-9]|3[7-9]\d|86[7-9]|8[7-9]\d)))\d{4}(?:([vVxX]))|\d{8})$)/

export const vehicleRegex = /(^([0-9]{1,3}|[A-Z]{1,3})-[0-9]{1,4}$)/

export const options = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  // and so on ...
}
