import React from 'react';
import PropTypes from 'prop-types';
import './ProfileOverviewBioNameLocation.css';

const ProfileOverviewBioNameLocation = ({ name, bio, location }) => {
  return (
    <div className="profile-overview">
      <h2 className="profile-overview__name">{name}</h2>
      <p className="profile-overview__bio">{bio}</p>
      <p className="profile-overview__location">{location}</p>
    </div>
  );
};

ProfileOverviewBioNameLocation.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  location: PropTypes.string,
};

ProfileOverviewBioNameLocation.defaultProps = {
  location: 'Unknown',
};

export default ProfileOverviewBioNameLocation;