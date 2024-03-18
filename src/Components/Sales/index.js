
import {
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Area
  } from "recharts"

  // import { useEffect } from "react"

  import './index.css'
  import '../Card/index.css'
  import { SpanEl } from "../../StyledComponents"
  import AnimatedText from "../AnimatedText"
  // import ApexCharts from "apexcharts"

  const data = [
    {
      month: 'Jan',
      app: 50,
    },
    {
      month: 'Feb',
      app: 40,
    },
    {
      month: 'Mar',
      app: 300,
    },
    {
      month: 'Apr',
      app: 220,
    },
    {
      month: 'May',
      app: 500,
    },
    {
      month: 'Jun',
      app: 250,
    },
    {
      month: 'Jul',
      app: 400,
    },
    {
      month: 'Aug',
      app: 230,
    },
    {
      month: 'Sep',
      app: 500,
    },
  ]

  // var options = {
  //   series: [{
  //     name: "Mobile Apps",
  //     data:[50, 40, 300, 220, 500, 250, 400, 230, 500]
  //   }],
  //   chart: {
  //     type: 'area',
  //     height:380,
  //     zoom: {
  //       enabled: false
  //     }
  //   },
  //   toolbar: {
  //     show: false,
  //   },
  //   dataLabels: {
  //     enabled: false
  //   },
  //   stroke: {
  //     curve: 'smooth'
  //   },
  //   yaxis:{
  //     min: 0,
  //     max: 600,
  //     stepSize: 100,
  //     labels:{
  //       style:{
  //         colors:'#a0aec0'
  //       }
  //     }
  //   },
  //   xaxis: {
  //     type: 'category',
  //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  //     labels:{
  //       style:{
  //         colors:"#a0aec0"
  //       }
  //     },
  //     axisTicks:{
  //       show:false
  //     },
  //   },
  //   grid: {
  //     strokeDashArray: 5,
  //   }
  // }

  

const Sales = () => {

        // useEffect(() => {
        //   var chart = new ApexCharts(document.querySelector("#area"), options);
        //   chart.render();
        // }, [])

        return (
            <div id="area" className="sales-container">
                <h1 className="price"><AnimatedText text={"Sales Overview"} /></h1>
                <p className="para"><SpanEl loss={false}>(+5%) more</SpanEl>in 2022</p>
            <AreaChart
              width={750}
              height={380}
              data={data}
              margin={{
                top: 30,
                right: 0,
                left: -20,
                bottom: 0,
              }}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis stroke="#a0aec0" dataKey="month" tickMargin={0} axisLine={false} tickLine={false} tick={{ fontSize: 12 }}/>
              <YAxis stroke="#a0aec0" tickCount={7} domain={[0, "dataMax + 100"]} axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <Tooltip 
                wrapperStyle={{
                  width: 130,
                  color: '#ffffff',
                  border: '1px solid #E2E8F0',
                  borderRadius: 8,
                  backgroundColor: '#454443',
                }}
                contentStyle={{fontSize: 13, fontWeight: "bold", backgroundColor:"#454443", borderRadius:6}}
                itemStyle={{ color: "#ffffff" }}
              />
              <Area type="monotone" dataKey="app" strokeWidth={3.5} stroke="#3182ce" fill="rgb(66 153 225 / 60%)" />
            </AreaChart>
            </div>
          );
    
}

export default Sales