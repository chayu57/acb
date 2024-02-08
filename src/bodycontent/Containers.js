import { Card, Input } from "react-rainbow-components";
import "./Containers.css";

import { useEffect, useState } from "react";




const Containers = () => {
    const [v1, setV1] = useState();
    const [v2, setV2] = useState();
    const [v3, setV3] = useState();
    const [i1, setI1] = useState();
    const [i2, setI2] = useState();
    const [i3, setI3] = useState();
    const [w1, setW1] = useState();
    const [w2, setW2] = useState();
   
      
    useEffect(() => {
      setInterval(() => {
          fetch("https://acbbbbp.onrender.com/api/sensordata")
              .then(async result => {
                  const data = await result.json();
                  setV1(data.v1);
                  setV2(data.v2);
                  setV3(data.v3);
                  setI1(data.i1);
                  setI2(data.i2);
                  setI3(data.i3);
                  setW1(data.w1);
                  setW2(data.w2);
                  
              })
              .catch(error => {
                  console.error(error);
              });
      }, 2000);
  }, []);

    

    return (
        <div>
            
                <Card className="child">
                    <div className="row row__card">


                        <div className="down">
                            <div className="arrange">
                        <div className="col-6">
                            <p className="col__text">Voltage(v1)</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={v1} className="xy " disabled />
                        </div>
                        </div>
                        <div className="arrange">
                        <div className="col-6">
                            <p className="col__text">Voltage(v2)</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={v2} className="xy" disabled />
                        </div></div>
                        <div className="arrange">
                        <div className="col-6">
                            <p className="col__text">Voltage(v3)</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={v3} className="xy" disabled />
                        </div></div>

                        <div className="arrange">
                        <div className="col-6">
                            <p className="col__text">Power(w1)</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={w1} className="xy" disabled />
                        </div></div>
                        </div>



                       <div  className="side">
                       <div className="arrange">
                        <div className="col-6">
                            <p className="col__text">Current(i1)          </p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={i1} className="xy" disabled />
                        </div></div>
                        <div className="arrange">
                        <div className="col-6">
                            <p className="col__text">Current(i2)</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={i2} className="xy" disabled />
                        </div></div>
                        <div className="arrange">
                        <div className="col-6">
                            <p className="col__text">Current(i3)</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={i3} className="xy" disabled />
                        </div>
                        </div>

                        <div className="arrange">
                        <div className="col-6">
                            <p className="col__text">Power(w2)</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={w2} className="xy" disabled />
                        </div>
                        </div>
                        </div>
                    </div>
                </Card>
                
            
                
            
        </div>
    );
};  
export default Containers;

