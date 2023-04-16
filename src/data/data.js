import response from './response.json';

const data = []
for (let i = 0; i < 424; i++) {
  data.push({
    time: response.time[i],
    magIzq: response.magIzq[i],
    magDer: response.magDer[i],
  })
}

export const rmsLeft = response.RMSLeft
export const rmsRight = response.RMSRight
export default data;