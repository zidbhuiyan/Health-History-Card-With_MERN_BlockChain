import React, { useState, useEffect } from "react";
import { Tabs, Tab, AppBar, Box } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./Info_Navbar.css";
import { Button } from "./Button";
import Doctor_Sugestions_Card from "./pages/Doctor-pages/Doctor_Suggestions_Card";

import Web3 from "web3";
import { Client_ABI, Client_ADDRESS } from "../config";
import Blood_Transfusion_Card from "./pages/Report-Staff-pages/Blood_Transfusion";

function Info_Navbar(props) {
  const [account, setAccount] = useState();

  const [doctorSuggestionsData, setdoctorSuggestionsData] = useState([]);
  const [booldTransfusionData, setBooldTransfusionData] = useState([]);

  const [client, setClient] = useState([]);

  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    onPageLoading();
  }, []);

  const onPageLoading = async () => {
    ///////WEB3////////////////////////

    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

    const accounts = await web3.eth.getAccounts();
    setAccount(accounts);
    console.log(accounts);

    const client = new web3.eth.Contract(Client_ABI, Client_ADDRESS);
    setClient(client);

    console.log(client);

    ///////WEB3////////////////////////

    //////////Doctor Suggestions start////////
    const suggestionsCount = await client.methods
      .getSuggestionsDataCount()
      .call();
    console.log("doctorSuggestionsCount", suggestionsCount);

    for (var i = 1; i <= suggestionsCount; i++) {
      const dataInfo = await client.methods.getSuggestionsData(i).call();
      const Id = dataInfo[0];
      const Dfirstname = dataInfo[1];
      const Dlastname = dataInfo[2];
      const Docregid = dataInfo[3];
      const hospitalname = dataInfo[4];
      const Dsuggestios = dataInfo[5];
      const DsuggestiosTime = dataInfo[6];
      const hid = dataInfo[7];

      console.log(dataInfo[7]);

      console.log(props.user.hid);

      //Compare here with hid///

      if (hid == props.user.hid) {
        setdoctorSuggestionsData((prevState) => [
          ...prevState,
          {
            Id: Id,
            Dfirstname: Dfirstname,
            Dlastname: Dlastname,
            Docregid: Docregid,
            hospitalname: hospitalname,
            Dsuggestios: Dsuggestios,
            DsuggestiosTime: DsuggestiosTime,
            hid: hid,
          },
        ]);
      }
    }

    //////////Doctor Suggestions end////////

    //////////Blood Transfusion start////////

    const booldtransfusionCount = await client.methods
      .getBooldtransfusionCount()
      .call();
    console.log("booldtransfusionCount", booldtransfusionCount);

    for (var i = 1; i <= booldtransfusionCount; i++) {
      const dataInfo = await client.methods.getBooldtransfusionData(i).call();
      const Id = dataInfo[0];
      const firstname = dataInfo[1];
      const lastname = dataInfo[2];
      const Rregid = dataInfo[3];
      const hospitalname = dataInfo[4];
      const booldtransfusionAmount = dataInfo[5];
      const booldtransfusionTime = dataInfo[6];
      const hid = dataInfo[7];

      //Compare here with hid///

      if (hid == props.user.hid) {
        setBooldTransfusionData((prevState) => [
          ...prevState,
          {
            Id: Id,
            firstname: firstname,
            lastname: lastname,
            Rregid: Rregid,
            hospitalname: hospitalname,
            booldtransfusionAmount: booldtransfusionAmount,
            booldtransfusionTime: booldtransfusionTime,
            hid: hid,
          },
        ]);
      }
    }
    

    //////////Blood Transfusion end////////
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const doctorSuggestionsButton = () => {
    navigate("/doctor_suggestion", {
      state: {
        user: props.user,
        userCat: props.userCat,
        userCatInfo: props.userCatInfo,
      },
    });
  };

  if (props.userCat === "vaccineStaff") {
    function TabPanel() {
      if (value == 0) {
        return (
          <>
            <div>
              <h1> Vaccine History </h1>
            </div>
          </>
        );
      } else if (value == 1) {
        return (
          <>
            <div>
              <h1>Personal History</h1>
            </div>
          </>
        );
      }
    }

    return (
      <>
        <Box className="info_navbar">
          <Tabs
            className="info_navbar-container"
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab className="tab_size" label="Vaccination History" />
            <Tab className="tab_size" label="Personal History" />
          </Tabs>
        </Box>
        <TabPanel />
      </>
    );
  } else if (props.userCat === "reportStaff") {
    function TabPanel() {
      if (value == 0) {
        return (
          <>
            <div>
              <h1>Investigation Profile</h1>
            </div>
          </>
        );
      } else if (value == 1) {
        return (
          <>
            <div>
              <h1>Personal History</h1>
            </div>
          </>
        );
      } else if (value == 2) {
        return (
          <>
            <div>
              <h1>Blood Transfusion History</h1>
            </div>
          </>
        );
      }
    }

    return (
      <>
        <Box className="info_navbar">
          <Tabs
            className="info_navbar-container"
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab className="tab_size" label="Investigation Profile" />
            <Tab className="tab_size" label="Personal History" />
            <Tab className="tab_size" label="Blood Transfusion History" />
          </Tabs>
        </Box>
        <TabPanel />
      </>
    );
  } else if (props.userCat === "doctor") {
    function TabPanel() {
      if (value == 0) {
        return (
          <>
            <div>
              <h1>Vaccine History</h1>
            </div>
          </>
        );
      } else if (value == 1) {
        return (
          <>
            <div>
              <h1>Personal History</h1>
            </div>
          </>
        );
      } else if (value == 2) {
        return (
          <>
            <div>
              <h1>Investigation Profile</h1>
            </div>
          </>
        );
      } else if (value == 3) {
        return (
          <>
            <div>
              <h1>Prescriptions</h1>
            </div>
          </>
        );
      } else if (value == 4) {
        return (
          <>
            <div>
              <h1>Drug History</h1>
            </div>
          </>
        );
      } else if (value == 5) {
        return (
          <>
            <div>
              <h1>Family History</h1>
            </div>
          </>
        );
      } else if (value == 6) {
        return (
          <>
            <h1>
              <Button onClick={doctorSuggestionsButton}>
                Add New Suggestions
              </Button>
            </h1>
            <h2>Doctors' Suggestions</h2>
            <div className="doctorSuggestionTab">
              {doctorSuggestionsData
                .map((doctorSuggestionsData, key) => (
                  <div key={doctorSuggestionsData.Id}>
                    <Doctor_Sugestions_Card
                      doctorSuggestionsData={doctorSuggestionsData}
                    />
                  </div>
                ))
                .reverse()}
            </div>
          </>
        );
      } else if (value == 7) {
        return (
          <>
            <div>
              <h1>Blood Transfusion History</h1>
            </div>
          </>
        );
      }
    }

    return (
      <>
        <Box className="info_navbar">
          <Tabs
            className="info_navbar-container"
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab className="tab_size" label="Vaccination History" />
            <Tab className="tab_size" label="Personal History" />
            <Tab className="tab_size" label="Investigation Profile" />
            <Tab className="tab_size" label="Prescriptions" />
            <Tab className="tab_size" label="Drug History" />
            <Tab className="tab_size" label="Family History" />
            <Tab className="tab_size" label="Doctors’ Suggestions" />
            <Tab className="tab_size" label="Blood Transfusion History" />
          </Tabs>
        </Box>
        <TabPanel />
      </>
    );
  } else {
    function TabPanel() {
      if (value == 0) {
        return (
          <>
            <div>
              <h2 className="infoHead">Vaccine History</h2>
            </div>
          </>
        );
      } else if (value == 1) {
        return (
          <>
            <div>
              <h2 className="infoHead">Personal History</h2>
            </div>
          </>
        );
      } else if (value == 2) {
        return (
          <>
            <div>
              <h2 className="infoHead">Investigation Profile</h2>
            </div>
          </>
        );
      } else if (value == 3) {
        return (
          <>
            <div>
              <h2 className="infoHead">Prescriptions</h2>
            </div>
          </>
        );
      } else if (value == 4) {
        return (
          <>
            <div>
              <h2 className="infoHead">Drug History</h2>
            </div>
          </>
        );
      } else if (value == 5) {
        return (
          <>
            <div>
              <h2 className="infoHead">Family History</h2>
            </div>
          </>
        );
      } else if (value == 6) {
        return (
          <>
            <h2 className="infoHead">Doctors' Suggestions</h2>
            <div className="doctorSuggestionTab">
              {doctorSuggestionsData
                .map((doctorSuggestionsData, key) => (
                  <div key={doctorSuggestionsData.Id}>
                    <Doctor_Sugestions_Card
                      doctorSuggestionsData={doctorSuggestionsData}
                    />
                  </div>
                ))
                .reverse()}
            </div>
          </>
        );
      } else if (value == 7) {
        return (
          <>
            <div>
              <h2 className="infoHead">Blood Transfusion History</h2>
              <div className="booldTransfusionTab">
              {booldTransfusionData
                .map((booldTransfusionData, key) => (
                  <div key={booldTransfusionData.Id}>
                    
                    <Blood_Transfusion_Card booldTransfusionData = {booldTransfusionData}/>
                  </div>
                ))
                .reverse()}
            </div>
            </div>
          </>
        );
      }
    }

    return (
      <>
        <Box className="info_navbar">
          <Tabs
            className="info_navbar-container"
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab className="tab_size" label="Vaccination History" />
            <Tab className="tab_size" label="Personal History" />
            <Tab className="tab_size" label="Investigation Profile" />
            <Tab className="tab_size" label="Prescriptions" />
            <Tab className="tab_size" label="Drug History" />
            <Tab className="tab_size" label="Family History" />
            <Tab className="tab_size" label="Doctors’ Suggestions" />
            <Tab className="tab_size" label="Blood Transfusion History" />
          </Tabs>
        </Box>
        <TabPanel />
      </>
    );
  }
}

export default Info_Navbar;
