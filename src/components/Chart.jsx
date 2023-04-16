import { LineChart, Line, CartesianGrid, XAxis, YAxis, ReferenceArea, Legend } from 'recharts';
import { rmsRight, rmsLeft } from '../data/data';

export default function Chart({data, type}) {
  return(
    <LineChart width={600} height={300} data={data}>
      <Line name={type == "left" ? "Mano Izquierda" : "Mano Derecha"} type="natural" dataKey={type == "left" ? "magIzq" : "magDer"} stroke="#8884d8" dot={false} />
      <Legend verticalAlign="top" height={36} iconSize={0}/>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="time" />
      <YAxis dataKey={type == "left" ? "magIzq" : "magDer"} />
      <ReferenceArea x1={data[0].time} x2={data[423].time} y1={0} y2={(type == "left" ? rmsLeft : rmsRight)} stroke="purple" strokeOpacity={0.3} />
    </LineChart>
  )
}