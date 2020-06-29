
import React, { Component } from "react";
import { Grid, Row, Col, Table ,Button} from "react-bootstrap";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { th1Array, tdArray ,ts1Array} from "variables/Variables.jsx";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";

class TableList extends Component {
  render() {
    return (
      <div className="Fullview">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table >
                    <thead>
                      <tr >
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
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              if(key!==0)
                              return(    
                                 <td key={key}>{prop}</td>
                              )
                              else
                              return(
                                <Checkbox
                                isChecked={prop === "Yes"?true : false}
                              />
                              )
                               })}      
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
  }


export default TableList;
