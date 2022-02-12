import React from "react";

const Profile = ({ profile }) => {
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
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "1em 0.5em",
        margin: "2em 4em",
        borderRadius: "10px",
      }}
    >
      <h1>{name}</h1>
      <h3>Date of Birth: {`${birthMonth}/${birthDay}/${birthYear}`}</h3>
      <h3>Gender: {gender}</h3>
      <h3>Life Path Number: {lifePath}</h3>
      <h3>Zodiac Sign: {zodiacSign}</h3>
    </div>
  );
};

export default Profile;
