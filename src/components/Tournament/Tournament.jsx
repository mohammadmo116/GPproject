import React from "react";
import { useState, useEffect } from "react";
import FilterBar from "./Searchbar";
import Cardview from "./Cardview";
import NavTop from "../Homepage/NavTop";
import SimpleAccordion from "./Sidebar";
import axios from "../axios/axios";
import Input from "../Login/Input"


function Tournament() {
  const [allData, setData] = useState("");
  useEffect(() => {
    axios()
      .get("/api/tournaments")
      .then((response) => {
        console.log(response.data)
        setData(response.data);
      })
      .catch((error) => {
        if(!error.response)
        return
      });
  }, []);

  return (
    <React.Fragment>
      <NavTop page="Tournaments"></NavTop>
 
    <div className="container">
      <div className="row">
        <div className="col-sm-3">

          <FilterBar />

        <SimpleAccordion>
          
        </SimpleAccordion>

        </div>
        <div className="col-sm-9">
          <div className="row md-5">
          <Input type="email" placeholder="Search.."></Input>
            {!allData?"":allData.map((item) => (
              <Cardview items={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Tournament;
