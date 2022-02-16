import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import ProfileForm from "./ProfileForm";
import UserProfile from "./UserProfile";

const CreateProfile = () => {
  const [userProfiles, setUserProfiles] = useState([]);
  const [error, setError] = useState(undefined);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const {
    isLoading,
    user: { email },
  } = useAuth0();

  const handleUserProfileEdit = async (updatedProfile,id) => {
    try {
      await axios.put(`https://numerology-app-server.herokuapp.com/profile/${id}`, updatedProfile);
      const { data } = await axios.get("https://numerology-app-server.herokuapp.com/profiles/user", {
        params: { email },
      });
      setUserProfiles(data);
      handleCloseEdit()
    } catch (error) {
      console.log(error);
    }

  }

  const handleUserProfileAdd = async (newProfile, email) => {

    try {

      await axios.post("https://numerology-app-server.herokuapp.com/profiles", {
        name: newProfile.name,
        birthMonth: Number(newProfile.birthMonth),
        birthDay: Number(newProfile.birthDay),
        birthYear: Number(newProfile.birthYear),
        gender: newProfile.gender,
        email,
      });
   
      const { data } = await axios.get("https://numerology-app-server.herokuapp.com/profiles/user", {
        params: { email },
      });
      
      setUserProfiles(data);
      handleClose()
    
    } catch (error) {
      console.log(error);
    }
  };

  const handleProfileDelete = async (userEmail, profileId) => {
    await axios.delete(`https://numerology-app-server.herokuapp.com/profile/${profileId}`, {
      params: {
        email: userEmail,
      },
    });

    const { data } = await axios.get("https://numerology-app-server.herokuapp.com/profiles/user", {
      params: { email },
    });
    setUserProfiles(data);
  };

  useEffect(() => {
    const fetchUserProfiles = async () => {
      try {
        const { data } = await axios.get(
          "https://numerology-app-server.herokuapp.com/profiles/user",
          {
            params: { email },
          }
        );
        setUserProfiles(data);
        error && setError(undefined);
      } catch (err) {
        setError({
          status: err.response.status,
          errMsg: "Couldn't fetch life paths from db",
        });
      }
    };
    fetchUserProfiles();
  }, [error]);

  if (isLoading) return <h1>Loading...</h1>;

  return userProfiles.length > 0 ? (
    <>

    <UserProfile
      userProfile={userProfiles[0]}
      otherProfiles={userProfiles.slice(1)}
      show={show}
      handleClose={handleClose}
      handleShow={handleShow}
      showEdit={showEdit}
      handleCloseEdit={handleCloseEdit}
      handleShowEdit={handleShowEdit}
      handleProfileDelete={handleProfileDelete}
      handleUserProfileAdd={handleUserProfileAdd}
      handleUserProfileEdit={handleUserProfileEdit}
    />
    </>
  ) : ( <ProfileForm />
  
  );
};

export default CreateProfile;
