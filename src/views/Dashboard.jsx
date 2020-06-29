
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col,Table } from "react-bootstrap";
import { th1Array, tdArray ,ts1Array,td2Array,td1Array,thArray} from "variables/Variables.jsx";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";

import { Card } from "components/Card/Card.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
 
} from "variables/Variables.jsx";

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="Fullview" >
        <Grid fluid>
          <Row>
            <Col md={10}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Sensors"
                category="24 Hours performance"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div>
                  <Table >
                    <thead >
                      <tr>
                      {thArray.map((prop, key) => {
                          return <th className="thh" key={key}>{prop}</th>;
                        })}                    
                      </tr>
                        <tr>
                          {td1Array.map((prop,key)=>{
                            return <th className="thd" key={key}>{prop}</th>
                          })}
                        </tr>
                    </thead>
                    <thead>
                      <tr>
                        {th1Array.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <thead className="trf">
                      <tr>
                        {ts1Array.map((prop,key)=>{
                          return <th className="the" key={key}>{prop}</th>
                        })}
                      </tr>
                    </thead>
                     <tbody>
                      {tdArray.map((prop, key1) => {
                        return (
                          <tr key={key1}>
                            {prop.map((prop, key) => {
                              if(key==0&&key1%2==0)
                              return( <Checkbox
                                isChecked={prop === "Yes"?true : false}
                              />
                              )
                              else if(key1%2==1)
                              {
                                return(
                                  <td style={{color:"gray",borderBottom:"1px solid white"}} key={key}>{prop}</td>
                               )
                              }
                              else 
                              return(
                                  <td key={key}>{prop}</td>
                               )
                               })}      
                          </tr>
                        );
                      })}
                    </tbody> 
                  </Table>
                }
              />
              </div>

            </Col>
          </Row>
          
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
