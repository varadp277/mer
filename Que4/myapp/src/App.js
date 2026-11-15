import React, {useState} from "react";
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Checkbox from "@mui/material/Checkbox"
import Switch from "@mui/material/Switch"
import Alert from "@mui/material/Alert"
import FormControlLabel from "@mui/material/FormControlLabel"
import Typography from "@mui/material/Typography"

function App(){
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  return(
    <div style = {{margin: "30px"}}>
      <Typography variant="h4">MUI Components</Typography>
      <br/> 

      <TextField label="Enter your name" variant="outlined" value={name} onChange={ (e) => setName(e.target.value)}/>
        <br/> <br/>

      <Button variant="contained" color="primary" onClick={ () => setShow(true)}>Submit</Button>
      <br /> <br />
      
      <FormControlLabel control={<Checkbox defaultChecked/>} label="Accept terms"/>
      <br /><br />

      <FormControlLabel control={<Switch/>} label="Dark mode" />
      <br /><br />

      {show && <Alert severity="success">Hello {name}, form submitted!</Alert>}
    </div>
  );
}

export default App;