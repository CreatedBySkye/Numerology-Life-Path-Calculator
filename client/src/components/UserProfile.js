
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import OtherProfile from "./OtherProfile";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const UserProfile = ({
  userProfile,
  otherProfiles,
  show,
  handleClose,
  handleShow,
  showEdit,
  handleCloseEdit,
  handleShowEdit,
  handleProfileDelete,
  handleUserProfileAdd,
  handleUserProfileEdit,
}) => {
  const [newUserProfile, setNewUserProfile] = useState({});
  // const [show, setShow] = useState(false);
  const {
    user: { email },
  } = useAuth0();

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <>
      <div className="user-profile-container">
        <div className="profile-container">
          <h1 className="absolute top-20 mt-2 right-96">Your Profile</h1>
          <div
           className="absolute right-64 mr-10 top-40"
          >
            <h2>{userProfile.name}</h2>
            <h3>
              Date of Birth:{" "}
              {`${userProfile.birthMonth}/${userProfile.birthDay}/${userProfile.birthYear}`}
            </h3>
            <h3>Gender: {userProfile.gender}</h3>
            <h3>Life Path Number: {userProfile.lifePath}</h3>
            <h3>Zodiac Sign: {userProfile.zodiacSign}</h3>
          </div>
          <button onClick={handleShow} className="btn btn-success btn-block">
            Add Profile
          </button>
        </div>
        <div className="profile-container">
          <h1 style={{ color: "#fff" }}>Other Profiles</h1>
          <div className="other-profiles-grid">
            {otherProfiles.length > 0 ? (
              otherProfiles.map((profile, idx) => (
                <OtherProfile
                  key={idx}
                  profile={profile}
                  handleProfileDelete={handleProfileDelete}
                  handleUserProfileEdit={handleUserProfileEdit}
                  showEdit={showEdit}
                  handleCloseEdit={handleCloseEdit}
                  handleShowEdit={handleShowEdit}
                />
              ))
            ) : (
              <h3 style={{color: '#fff'}}>No other profiles</h3>
            )}
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group
            style={{ marginBottom: "10px" }}
            controlId="newProfileName"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="A friend's name"
              value={newUserProfile.name}
              onChange={(e) =>
                setNewUserProfile({
                  ...newUserProfile,
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
              value={newUserProfile.gender}
              onChange={(e) =>
                setNewUserProfile({
                  ...newUserProfile,
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
              value={newUserProfile.birthMonth}
              onChange={(e) =>
                setNewUserProfile({
                  ...newUserProfile,
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
              value={newUserProfile.birthDay}
              onChange={(e) =>
                setNewUserProfile({
                  ...newUserProfile,
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
              value={newUserProfile.birthYear}
              onChange={(e) =>
                setNewUserProfile({
                  ...newUserProfile,
                  birthYear: e.target.value,
                })
              }
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handleUserProfileAdd(newUserProfile, email)}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserProfile;
