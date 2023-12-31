import React from "react";
import useDrivePicker from "react-google-drive-picker";
import "./GooglePicker.css";

export default function GooglePicker(props) {
  const [openPicker, authResponse] = useDrivePicker();

  async function pickerCallback(data) {
    console.log(data);
    if (data.action === "picked") {
      var returnedData = {
        url: data.docs[0].url,
        embeded: data.docs[0].embededUrl,
      };
      props.callback(returnedData);
    }
  }

  const handleOpenPicker = () => {
    openPicker({
      clientId: props.clientId,
      developerKey: props.developerKey,
      viewId: "DOCS",
      supportDrives: false,
      token: props.token,
      setIncludeFolders: true,
      multiselect: false,
      callbackFunction: pickerCallback,
    });
  };

  return (
    <div className="google-picker-container">
      <button
        className="google-picker-button"
        onClick={() => handleOpenPicker()}
      >
        Upload Via Google
      </button>
    </div>
  );
}

/* me trying to do it right. the npm library used doesn't have the capability to display 'MINE_ONLY'
import { Component } from "react";
import { defer } from "react-router-dom";
export default class GooglePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gisLoaded: false,
      initializePicker: false
    }
    defer("https://accounts.google.com/gsi/client").done(() => { this.state.gisLoaded = true});
  }
}*/
