import { useBook } from "../context/BookContext";

export const Profile = () => {
  const { profileData } = useBook();

  return (
    <div>
      <h1>Profile</h1>
      <img src={profileData.img} alt="profile" width="240px" height="150px" />
      <p>
        <strong>Name:</strong>
        {profileData.name}
      </p>
      <p>
        <strong>Bio:</strong>
        {profileData.bio}
      </p>
    </div>
  );
};
