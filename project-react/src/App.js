import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
  <Plan/>    

{/* <Likecounter name={"SAMSUNG"} />
<Likecounter name={"MOTO"} />
<Likecounter name={"APPLE"} /> */}
    </div>
  );
}
function Likecounter(props){
  const [like, setlike] = useState(0);

  return <div>
    <h1>{props.name}</h1>
    <button onClick={() => setlike(like + 1)}>👍 {like}</button>
    </div>
  ;
}
function Plan(){
  const plans = [
    {name: "FREE",
    price: 0,
    features: [
    "Single User",
    "5GB Storage",
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain",
    "Monthly Status Reports",
    ],
  },
    {name: "PLUS",
    price: 19,
    features: [
      "5 Users",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports",
      ],
  },
    {name: "PRO",
    price: 49,
    features: [
      "Unlimited Users",
      "150GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Unlimited Free Subdomains",
      "Monthly Status Reports",
      ],
  },
  ];
  return(
    <div>
      {plans.map((plan)=>(
      <Card name={plan.name} price={plan.price} features={plan.features}/>
      ))}
    </div>
  )
}

function Card(props){
  return <div className="card">
    <p className='plan-name'>{props.name}</p>
    <p className='price'>${props.price}<span className='price-duration'>/month</span></p>
<ul className='features'>
  {props.features.map((features)=>(<li>{features}</li>))}
</ul>
<button className='buy'>BUY</button>
  </div>
}