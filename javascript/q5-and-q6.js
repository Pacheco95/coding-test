/*
* There is no difference between the result of the implementations (excpet in performance).
* The problem is that both implementations will immediately finish with the deviceDataArr empty because the filling
* process was done asyncronously. This is the correct way of implementing it
* */

const axios = require('axios')

const devices = ["0x00077C98", "0x00078D38", "0x0007964F"]
const deviceDataArr = []

const promises = devices.map((device, index) => {
  return axios.get(`http://a.url.com/device/` + device)
    .then(res => {
      deviceDataArr[index] = res.data;
    })
    .catch(err => console.log(err))
})

Promise.all(promises).then(() => {
  console.log(deviceDataArr)
}).catch((e) => console.error(e))
