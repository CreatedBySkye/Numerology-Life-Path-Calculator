import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

const ProfileForm = () => {
  const {
    user: { email },
  } = useAuth0();

  const [currentName, setCurrentName] = useState("");
  const [currentGender, setCurrentGender] = useState("");
  const [currentBirthMonth, setCurrentBirthMonth] = useState("");
  const [currentBirthDay, setCurrentBirthDay] = useState("");
  const [currentBirthYear, setCurrentBirthYear] = useState("");

  const handleFormSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/profiles", {
        name: currentName,
        birthMonth: Number(currentBirthMonth),
        birthDay: Number(currentBirthDay),
        birthYear: Number(currentBirthYear),
        gender: currentGender,
        email,
      });
      window.location.reload()
      console.log("Calculating......")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Form className="lg:w-2/5 border-8 radius-25 border-purple-400 ml-4 pl-4">
      <h1 className="ml-40 mt-4">Create Profile</h1>
      <FormGroup className="w-1/2 ml-40">
        <Label for="profileName">Name</Label>
        <Input
          type="text"
          name="profileName"
          id="profileName"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          
        />
      </FormGroup>
      <FormGroup className="w-1/2 ml-40">
        <Label for="profileGender">Gender</Label>
        <Input
          type="text"
          name="profileGender"
          id="profileGender"
          value={currentGender}
          onChange={(e) => setCurrentGender(e.target.value)}
          
        />
      </FormGroup>
      <FormGroup className="w-1/2 ml-40">
        <Label for="profileBirthMonth">Birth Month-(MM)</Label>
        <Input
          type="number"
          name="profileBirthMonth"
          id="profileBirthMonth"
          value={currentBirthMonth}
          onChange={(e) => setCurrentBirthMonth(e.target.value)}
         
        />
      </FormGroup>
      <FormGroup className="w-1/2 ml-40">
        <Label for="profileBirthDay">Birth Day-(DD)</Label>
        <Input
          type="number"
          name="profileBirthDay"
          id="profileBirthDay"
          value={currentBirthDay}
          onChange={(e) => setCurrentBirthDay(e.target.value)}
         
        />
      </FormGroup>
      <FormGroup className="w-1/2 ml-40">
        <Label for="profileBirthYear">Birth Year-(YYYY)</Label>
        <Input
          type="number" 
          name="profileBirthYear"
          id="profileBirthYear"
          value={currentBirthYear}
          onChange={(e) => setCurrentBirthYear(e.target.value)}
         
        />
      </FormGroup>
      <Button className="ml-40 mb-4"onClick={handleFormSubmit}>Submit</Button>
    </Form>
    </>
  );
};

export default ProfileForm;
