import React, { useState, useEffect } from "react";
import { Tabs, Tab, AppBar, Box } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./Info_Navbar.css";
import { Button } from "./Button";
import Doctor_Sugestions_Card from "./pages/Doctor-pages/Doctor_Suggestions_Card";

import Web3 from "web3";
import { Client_ABI, Client_ADDRESS } from "../config";
import Blood_Transfusion_Card from "./pages/Report-Staff-pages/Blood_Transfusion_Card";
import Vaccine_History_Card from "./pages/Vaccine-Staff-pages/Vaccine_History_Card";
import Drug_History_Card from "./pages/Doctor-pages/Drugs_History_Card";
import Family_History_Card from "./pages/Doctor-pages/Family_History_Card";
import Personal_History_Card from "./pages/Doctor-pages/Personal_History_Card";
import Investigation_Profile_Card from "./pages/Report-Staff-pages/Investigation_Profile_Card";
import Prescription_Card from "./pages/Doctor-pages/Prescription_Card";

function Info_Navbar(props) {
  const [account, setAccount] = useState();

  const [doctorSuggestionsData, setdoctorSuggestionsData] = useState([]);
  const [booldTransfusionData, setBooldTransfusionData] = useState([]);
  const [vaccineData, setVaccineData] = useState([]);
  const [drugsData, setDrugsData] = useState([]);
  const [familyData, setFamilyData] = useState([]);
  const [personalData, setPersonalData] = useState([]);
  const [investigationData, setInvestigationlData] = useState([]);
  const [prescriptionData, setPrescriptionData] = useState([]);

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

    //////////Prescription start////////

    const prescriptionDataCount = await client.methods
      .getPrescriptionDataCount()
      .call();
    console.log("prescriptionDataCount ", prescriptionDataCount);

    for (var i = 1; i <= prescriptionDataCount; i++) {
      const dataInfo = await client.methods.getPrescriptionData(i).call();
      const Id = dataInfo[0];
      const Dfirstname = dataInfo[1];
      const Dlastname = dataInfo[2];
      const Docregid = dataInfo[3];
      const hospitalname = dataInfo[4];
      const srcUrl = dataInfo[5];
      const Time = dataInfo[6];
      const hid = dataInfo[7];

      //Compare here with hid///

      if (hid == props.user.hid) {
        setPrescriptionData((prevState) => [
          ...prevState,
          {
            Id: Id,
            Dfirstname: Dfirstname,
            Dlastname: Dlastname,
            Docregid: Docregid,
            hospitalname: hospitalname,
            srcUrl: srcUrl,
            Time: Time,
            hid: hid,
          },
        ]);
      }
    }

    //////////Prescription end////////

    //////////Investigation start////////
    const investigationDataCount = await client.methods
      .getInvestigationDataCount()
      .call();
    console.log("investigationDataCount ", investigationDataCount);

    for (var i = 1; i <= investigationDataCount; i++) {
      const dataInfo = await client.methods.getInvestigationData(i).call();
      const Id = dataInfo[0];
      const firstname = dataInfo[1];
      const lastname = dataInfo[2];
      const Rregid = dataInfo[3];
      const hospitalname = dataInfo[4];
      const srcUrl = dataInfo[5];
      const Time = dataInfo[6];
      const hid = dataInfo[7];

      //Compare here with hid///

      if (hid == props.user.hid) {
        setInvestigationlData((prevState) => [
          ...prevState,
          {
            Id: Id,
            firstname: firstname,
            lastname: lastname,
            Rregid: Rregid,
            hospitalname: hospitalname,
            srcUrl: srcUrl,
            Time: Time,
            hid: hid,
          },
        ]);
      }
    }

    //////////Investigation end////////

    //////////Personal History start////////
    const personalDataCount = await client.methods
      .getPersonalDataCount()
      .call();
    console.log("personalDataCount", personalDataCount);

    for (var i = 1; i <= personalDataCount; i++) {
      const staffDataInfo = await client.methods.getPersonalStaffData(i).call();
      const Id = staffDataInfo[0];
      const Dfirstname = staffDataInfo[1];
      const Dlastname = staffDataInfo[2];
      const Docregid = staffDataInfo[3];
      const hospitalname = staffDataInfo[4];

      const dataInfo = await client.methods.getPersonalData(i).call();
      const Problem = dataInfo[0];
      const ProblemType = dataInfo[1];
      const Time = dataInfo[2];
      const hid = dataInfo[3];

      //Compare here with hid///

      if (hid == props.user.hid) {
        setPersonalData((prevState) => [
          ...prevState,
          {
            Id: Id,
            Dfirstname: Dfirstname,
            Dlastname: Dlastname,
            Docregid: Docregid,
            hospitalname: hospitalname,
            Problem: Problem,
            ProblemType: ProblemType,
            Time: Time,
            hid: hid,
          },
        ]);
      }
    }

    //////////Personal History end////////

    //////////Family History start////////

    const familyDataCount = await client.methods
      .getFamilyDiseaseDataCount()
      .call();
    console.log("familyDataCount", familyDataCount);

    for (var i = 1; i <= familyDataCount; i++) {
      const staffDataInfo = await client.methods
        .getFamilyDiseaseStaffData(i)
        .call();
      const Id = staffDataInfo[0];
      const Dfirstname = staffDataInfo[1];
      const Dlastname = staffDataInfo[2];
      const Docregid = staffDataInfo[3];
      const hospitalname = staffDataInfo[4];

      const dataInfo = await client.methods.getFamilyDiseaseData(i).call();
      const Disease = dataInfo[0];
      const Relation = dataInfo[1];
      const Time = dataInfo[2];
      const hid = dataInfo[3];

      //Compare here with hid///

      if (hid == props.user.hid) {
        setFamilyData((prevState) => [
          ...prevState,
          {
            Id: Id,
            Dfirstname: Dfirstname,
            Dlastname: Dlastname,
            Docregid: Docregid,
            hospitalname: hospitalname,
            Disease: Disease,
            Relation: Relation,
            Time: Time,
            hid: hid,
          },
        ]);
      }
    }

    //////////Family History end////////

    //////////Drugs History start////////

    const drugsCount = await client.methods.getDrugsDataCount().call();
    console.log("drugsCount", drugsCount);

    for (var i = 1; i <= drugsCount; i++) {
      const dataStaffInfo = await client.methods.getDrugsDocData(i).call();
      const Id = dataStaffInfo[0];
      const Dfirstname = dataStaffInfo[1];
      const Dlastname = dataStaffInfo[2];
      const Docregid = dataStaffInfo[3];
      const hospitalname = dataStaffInfo[4];

      const dataInfo = await client.methods.getDrugsData(i).call();
      const Drugs = dataInfo[0];
      const DrugsDay = dataInfo[1];
      const DrugTime = dataInfo[2];
      const hid = dataInfo[3];

      //Compare here with hid///

      if (hid == props.user.hid) {
        setDrugsData((prevState) => [
          ...prevState,
          {
            Id: Id,
            Dfirstname: Dfirstname,
            Dlastname: Dlastname,
            Docregid: Docregid,
            hospitalname: hospitalname,
            Drugs: Drugs,
            DrugsDay: DrugsDay,
            DrugTime: DrugTime,
            hid: hid,
          },
        ]);
      }
    }

    //////////Drugs History end////////

    //////////Vaccine History start////////

    const vaccineCount = await client.methods.getVaccineCount().call();
    console.log("vaccineCount", vaccineCount);

    for (var i = 1; i <= vaccineCount; i++) {
      const staffDataInfo = await client.methods.getVaccineStaffData(i).call();
      const Id = staffDataInfo[0];
      const firstname = staffDataInfo[1];
      const lastname = staffDataInfo[2];
      const Rregid = staffDataInfo[3];
      const hospitalname = staffDataInfo[4];

      const dataInfo = await client.methods.getVaccineData(i).call();
      const vaccineName = dataInfo[0];
      const vaccineDisease = dataInfo[1];
      const vaccineDoseNum = dataInfo[2];
      const vaccineTime = dataInfo[3];
      const hid = dataInfo[4];

      //Compare here with hid///

      if (hid == props.user.hid) {
        setVaccineData((prevState) => [
          ...prevState,
          {
            Id: Id,
            firstname: firstname,
            lastname: lastname,
            Rregid: Rregid,
            hospitalname: hospitalname,
            vaccineName: vaccineName,
            vaccineDisease: vaccineDisease,
            vaccineDoseNum: vaccineDoseNum,
            vaccineTime: vaccineTime,
            hid: hid,
          },
        ]);
      }
    }

    //////////Vaccine History End////////

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
      const staffDataInfo = await client.methods
        .getBooldtransfusionStaffData(i)
        .call();
      const Id = staffDataInfo[0];
      const firstname = staffDataInfo[1];
      const lastname = staffDataInfo[2];
      const Rregid = staffDataInfo[3];
      const hospitalname = staffDataInfo[4];

      const dataInfo = await client.methods.getBooldtransfusionData(i).call();
      const booldtransfusionAmount = dataInfo[0];
      const booldtransfusionType = dataInfo[1];
      const booldtransfusionTime = dataInfo[2];
      const hid = dataInfo[3];

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
            booldtransfusionType: booldtransfusionType,
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

  /////////////////Buttons Start/////////////////

  /////////Personal History Button start////////
  const prescriptionButton = () => {
    navigate("/prescription", {
      state: {
        user: props.user,
        userCat: props.userCat,
        userCatInfo: props.userCatInfo,
      },
    });
  };

  //////////Personal History end////////

  /////////Personal History Button start////////
  const personalButton = () => {
    navigate("/personal_history", {
      state: {
        user: props.user,
        userCat: props.userCat,
        userCatInfo: props.userCatInfo,
      },
    });
  };

  //////////Personal History end////////

  /////////Investigation Profile Button start////////
  const investigationButton = () => {
    navigate("/investigation_profile", {
      state: {
        user: props.user,
        userCat: props.userCat,
        userCatInfo: props.userCatInfo,
      },
    });
  };

  //////////Investigation Profile end////////

  /////////Family History Button start////////
  const familyButton = () => {
    navigate("/family_history", {
      state: {
        user: props.user,
        userCat: props.userCat,
        userCatInfo: props.userCatInfo,
      },
    });
  };

  //////////Family History end////////

  //////////Drugs History Button start////////
  const drugsButton = () => {
    navigate("/drugs_history", {
      state: {
        user: props.user,
        userCat: props.userCat,
        userCatInfo: props.userCatInfo,
      },
    });
  };

  //////////Drugs History end////////

  //////////Doctor Suggestions Button start////////
  const doctorSuggestionsButton = () => {
    navigate("/doctor_suggestion", {
      state: {
        user: props.user,
        userCat: props.userCat,
        userCatInfo: props.userCatInfo,
      },
    });
  };

  //////////Doctor Suggestions end////////

  //////////Blood Transfusion start////////

  const bloodTransfusionButton = () => {
    navigate("/blood_transfusion", {
      state: {
        user: props.user,
        userCat: props.userCat,
        userCatInfo: props.userCatInfo,
      },
    });
  };

  //////////Blood Transfusion end////////

  //////////vaccine start////////

  const vaccineButton = () => {
    navigate("/vaccine_history", {
      state: {
        user: props.user,
        userCat: props.userCat,
        userCatInfo: props.userCatInfo,
      },
    });
  };

  //////////vaccine end////////

  /////////////////Buttons end/////////////////

  if (props.userCat === "vaccineStaff") {
    function TabPanel() {
      if (value == 0) {
        return (
          <>
            <p>
              <button class="recordbtn" onClick={vaccineButton}>
                Add new vaccine
              </button>
            </p>
            <br></br>
            <div>
              <div>
                <h2 className="infoHead">Vaccine History</h2>
                <div className="scorllTab">
                  {vaccineData
                    .map((vaccineData, key) => (
                      <div key={vaccineData.Id}>
                        <Vaccine_History_Card vaccineData={vaccineData} />
                      </div>
                    ))
                    .reverse()}
                </div>
              </div>
            </div>
          </>
        );
      } else if (value == 1) {
        return (
          <>
            <div>
              <h2 className="infoHead">Personal History</h2>
              <div className="scorllTab">
                {personalData
                  .map((personalData, key) => (
                    <div key={personalData.Id}>
                      <Personal_History_Card personalData={personalData} />
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
            <p>
              <button class="recordbtn" onClick={investigationButton}>
                Add new report
              </button>
            </p>
            <br></br>
            <div>
              <h2 className="infoHead">Investigation Profile</h2>
              <div className="scorllTab">
                {investigationData
                  .map((investigationData, key) => (
                    <div key={investigationData.Id}>
                      <Investigation_Profile_Card
                        investigationData={investigationData}
                      />
                    </div>
                  ))
                  .reverse()}
              </div>
            </div>
          </>
        );
      } else if (value == 1) {
        return (
          <>
            <div>
              <h2 className="infoHead">Personal History</h2>
              <div className="scorllTab">
                {personalData
                  .map((personalData, key) => (
                    <div key={personalData.Id}>
                      <Personal_History_Card personalData={personalData} />
                    </div>
                  ))
                  .reverse()}
              </div>
            </div>
          </>
        );
      } else if (value == 2) {
        return (
          <>
            <p>
              <button class="recordbtn" onClick={bloodTransfusionButton}>
                Add new blood transfusion record
              </button>
            </p>
            <br></br>
            <div>
              <h2 className="infoHead">Blood Transfusion History</h2>
              <div className="scorllTab">
                {booldTransfusionData
                  .map((booldTransfusionData, key) => (
                    <div key={booldTransfusionData.Id}>
                      <Blood_Transfusion_Card
                        booldTransfusionData={booldTransfusionData}
                      />
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
              <div>
                <h2 className="infoHead">Vaccine History</h2>
                <div className="scorllTab">
                  {vaccineData
                    .map((vaccineData, key) => (
                      <div key={vaccineData.Id}>
                        <Vaccine_History_Card vaccineData={vaccineData} />
                      </div>
                    ))
                    .reverse()}
                </div>
              </div>
            </div>
          </>
        );
      } else if (value == 1) {
        return (
          <>
            <p>
              <button class="recordbtn" onClick={personalButton}>
                Add new personal history
              </button>
            </p>
            <br></br>
            <div>
              <h2 className="infoHead">Personal History</h2>
              <div className="scorllTab">
                {personalData
                  .map((personalData, key) => (
                    <div key={personalData.Id}>
                      <Personal_History_Card personalData={personalData} />
                    </div>
                  ))
                  .reverse()}
              </div>
            </div>
          </>
        );
      } else if (value == 2) {
        return (
          <>
            <div>
              <h2 className="infoHead">Investigation Profile</h2>
              <div className="scorllTab">
                {investigationData
                  .map((investigationData, key) => (
                    <div key={investigationData.Id}>
                      <Investigation_Profile_Card
                        investigationData={investigationData}
                      />
                    </div>
                  ))
                  .reverse()}
              </div>
            </div>
          </>
        );
      } else if (value == 3) {
        return (
          <>
          <p>
              <button class="recordbtn" onClick={prescriptionButton}>
                Add new prescription
              </button>
            </p>
            <br></br>
            <div>
              <h2 className="infoHead">Prescription</h2>
              <div className="scorllTab">
                {prescriptionData
                  .map((prescriptionData, key) => (
                    <div key={prescriptionData.Id}>
                      <Prescription_Card prescriptionData={prescriptionData}/>
                    </div>
                  ))
                  .reverse()}
              </div>
            </div>
          </>
        );
      } else if (value == 4) {
        return (
          <>
            <p>
              <button class="recordbtn" onClick={drugsButton}>
                Add New Drug
              </button>
            </p>
            <br></br>

            <h2 className="infoHead">Drug History</h2>
            <div className="scorllTab">
              {drugsData
                .map((drugsData, key) => (
                  <div key={drugsData.Id}>
                    <Drug_History_Card drugsData={drugsData} />
                  </div>
                ))
                .reverse()}
            </div>
          </>
        );
      } else if (value == 5) {
        return (
          <>
            <p>
              <button class="recordbtn" onClick={familyButton}>
                Add family history
              </button>
            </p>
            <br></br>
            <h2 className="infoHead">Family History</h2>
            <div className="scorllTab">
              {familyData
                .map((familyData, key) => (
                  <div key={familyData.Id}>
                    <Family_History_Card familyData={familyData} />
                  </div>
                ))
                .reverse()}
            </div>
          </>
        );
      } else if (value == 6) {
        return (
          <>
            <p>
              <button class="recordbtn" onClick={doctorSuggestionsButton}>
                Add New Suggestions
              </button>
            </p>
            <br></br>
            <h2>Doctors' Suggestions</h2>
            <div className="scorllTab">
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
              <div className="scorllTab">
                {booldTransfusionData
                  .map((booldTransfusionData, key) => (
                    <div key={booldTransfusionData.Id}>
                      <Blood_Transfusion_Card
                        booldTransfusionData={booldTransfusionData}
                      />
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
  } else {
    function TabPanel() {
      if (value == 0) {
        return (
          <>
            <div>
              <div>
                <h2 className="infoHead">Vaccine History</h2>
                <div className="scorllTab">
                  {vaccineData
                    .map((vaccineData, key) => (
                      <div key={vaccineData.Id}>
                        <Vaccine_History_Card vaccineData={vaccineData} />
                      </div>
                    ))
                    .reverse()}
                </div>
              </div>
            </div>
          </>
        );
      } else if (value == 1) {
        return (
          <>
            <div>
              <h2 className="infoHead">Personal History</h2>
              <div className="scorllTab">
                {personalData
                  .map((personalData, key) => (
                    <div key={personalData.Id}>
                      <Personal_History_Card personalData={personalData} />
                    </div>
                  ))
                  .reverse()}
              </div>
            </div>
          </>
        );
      } else if (value == 2) {
        return (
          <>
            <div>
              <h2 className="infoHead">Investigation Profile</h2>
              <div className="scorllTab">
                {investigationData
                  .map((investigationData, key) => (
                    <div key={investigationData.Id}>
                      <Investigation_Profile_Card
                        investigationData={investigationData}
                      />
                    </div>
                  ))
                  .reverse()}
              </div>
            </div>
          </>
        );
      } else if (value == 3) {
        return (
          <>
            <div>
              <h2 className="infoHead">Prescription</h2>
              <div className="scorllTab">
                {prescriptionData
                  .map((prescriptionData, key) => (
                    <div key={prescriptionData.Id}>
                      <Prescription_Card prescriptionData={prescriptionData}/>
                    </div>
                  ))
                  .reverse()}
              </div>
            </div>
          </>
        );
      } else if (value == 4) {
        return (
          <>
            <h2 className="infoHead">Drug History</h2>
            <div className="scorllTab">
              {drugsData
                .map((drugsData, key) => (
                  <div key={drugsData.Id}>
                    <Drug_History_Card drugsData={drugsData} />
                  </div>
                ))
                .reverse()}
            </div>
          </>
        );
      } else if (value == 5) {
        return (
          <>
            <h2 className="infoHead">Family History</h2>
            <div className="scorllTab">
              {familyData
                .map((familyData, key) => (
                  <div key={familyData.Id}>
                    <Family_History_Card familyData={familyData} />
                  </div>
                ))
                .reverse()}
            </div>
          </>
        );
      } else if (value == 6) {
        return (
          <>
            <h2 className="infoHead">Doctors' Suggestions</h2>
            <div className="scorllTab">
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
              <div className="scorllTab">
                {booldTransfusionData
                  .map((booldTransfusionData, key) => (
                    <div key={booldTransfusionData.Id}>
                      <Blood_Transfusion_Card
                        booldTransfusionData={booldTransfusionData}
                      />
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
