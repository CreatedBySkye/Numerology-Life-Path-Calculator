import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const OtherProfile = ({
  profile,
  handleProfileDelete,
  handleUserProfileEdit,
  // showEdit,
  // handleCloseEdit,
  // handleShowEdit,
}) => {
  const {
    name,
    birthMonth,
    birthDay,
    birthYear,
    gender,
    lifePath,
    zodiacSign,
    email,
    _id: id,
  } = profile;

  const [updatedProfile, setUpdatedProfile] = useState({
    name,
    birthMonth,
    birthDay,
    birthYear,
    gender,
    lifePath,
    zodiacSign,
    email,
  });

  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handleEditAndClose = (profile, id) => {
    handleUserProfileEdit(profile, id);
    handleCloseEdit();
  };
  // const handleProfileDelete = async (userEmail, profileId) => {
  //   await axios.delete(`http://localhost:5000/profile/${profileId}`, {
  //     params: {
  //       email: userEmail,
  //     },
  //   });
  // };

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          padding: "1em 0.5em",
          margin: "2em 4em",
          borderRadius: "10px",
        }}
        className="float-top "
      >
        <h2>{name}</h2>
        <h4>Date of Birth: {`${birthMonth}/${birthDay}/${birthYear}`}</h4>
        <h4>Gender: {gender}</h4>
        <h4>Life Path Number: {lifePath}</h4>
        <h4>Zodiac Sign: {zodiacSign}</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "1.5rem",
          }}
        >
          <button
            onClick={handleShowEdit}
            className="btn btn-warning btn-block"
          >
            Edit
          </button>
          <button
            className="btn btn-danger btn-block"
            onClick={() => handleProfileDelete(email, id)}
          >
            Delete
          </button>
        </div>
      </div>
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group
            style={{ marginBottom: "10px" }}
            controlId="updatedProfileName"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="A friend's name"
              value={updatedProfile.name}
              onChange={(e) =>
                setUpdatedProfile({
                  ...updatedProfile,
                  name: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group
            style={{ marginBottom: "10px" }}
            controlId="newProfileGender"
          >
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              placeholder="Female"
              value={updatedProfile.gender}
              onChange={(e) =>
                setUpdatedProfile({
                  ...updatedProfile,
                  gender: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group
            style={{ marginBottom: "10px" }}
            controlId="newProfileBirthMonth"
          >
            <Form.Label>Birth Month (Enter as number) </Form.Label>
            <Form.Control
              type="number"
              placeholder="3"
              value={updatedProfile.birthMonth}
              onChange={(e) =>
                setUpdatedProfile({
                  ...updatedProfile,
                  birthMonth: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group
            style={{ marginBottom: "10px" }}
            controlId="newProfileBirthDay"
          >
            <Form.Label>Birth Date (Enter as number)</Form.Label>
            <Form.Control
              type="number"
              placeholder="11"
              value={updatedProfile.birthDay}
              onChange={(e) =>
                setUpdatedProfile({
                  ...updatedProfile,
                  birthDay: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group
            style={{ marginBottom: "10px" }}
            controlId="newProfileBirthYear"
          >
            <Form.Label>Birth Year (Enter as number)</Form.Label>
            <Form.Control
              type="number"
              placeholder="2000"
              value={updatedProfile.birthYear}
              onChange={(e) =>
                setUpdatedProfile({
                  ...updatedProfile,
                  birthYear: e.target.value,
                })
              }
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button
            variant="warning"
            onClick={() => handleEditAndClose(updatedProfile, id)}
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OtherProfile;
