
/**
 * Page: Developer Page
 * Coder: Kareem Idris
 * Date 16/10/2023
 */

import React from 'react';

const developersData = [
  {
    id: 1,
    githubname: 'kareem823',
    role: 'Frontend Developer',
    bio: 'Passionate developer who loves creating beautiful user interfaces.',
  },
  ////////////////////////////
  //everyone, please add your own usernames, positions, and bio.
  //we can also use images if you guys want
  //make sure that you post your github name correctly cuz it will be clickable
  ////////////////////////
  {
    id: 2,
    githubname: 'Github Username here',
    role: 'Backend Developer',
    bio: 'Experienced backend developer with a focus on scalability and performance.',
  },
  {
    id: 3,
    githubname: 'Github Username here',
    role: 'Frontend Developer',
    bio: 'Passionate developer who loves creating beautiful user interfaces.',
  },
  {
    id: 4,
    githubname: 'Github Username here',
    role: 'Backend Developer',
    bio: 'Experienced backend developer with a focus on scalability and performance.',
  },
  {
    id: 5,
    githubname: 'Github Username here',
    role: 'Backend Developer',
    bio: 'Experienced backend developer with a focus on scalability and performance.',
  },
  {
    id: 6,
    githubname: 'Github Username here',
    role: 'Frontend Developer',
    bio: 'Passionate developer who loves creating beautiful user interfaces.',
  },
  {
    id: 7,
    githubname: 'Github Username here',
    role: 'Backend Developer',
    bio: 'Experienced backend developer with a focus on scalability and performance.',
  },
  {
    id: 8,
    githubname: 'Github Username here',
    role: 'Backend Developer',
    bio: 'Experienced backend developer with a focus on scalability and performance.',
  },
  {
    id: 9,
    githubname: 'Github Username here',
    role: 'Frontend Developer',
    bio: 'Passionate developer who loves creating beautiful user interfaces.',
  },
  {
    id: 10,
    githubname: 'Github Username here',
    role: 'Backend Developer',
    bio: 'Experienced backend developer with a focus on scalability and performance.',
  },
  {
    id: 11,
    githubname: 'Github Username here',
    role: 'Backend Developer',
    bio: 'Experienced backend developer with a focus on scalability and performance.',
  },
  {
    id: 12,
    githubname: 'Github Username here',
    role: 'Frontend Developer',
    bio: 'Passionate developer who loves creating beautiful user interfaces.',
  },

];


//Print out developer info from the array above.
const DeveloperPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.pageTitle}>Meet Our Developers</h1>
      <div style={styles.developerList}>
        {developersData.map((item) => (
          <div key={item.id} style={styles.developerCard}>
          <div style={styles.githubLink}>

            <p style={styles.githubText}>GitHub Link:</p>
            <a href={`https://github.com/${item.githubname}`} style={styles.developerName}>
              {item.githubname}
            </a>
            </div>
            <p style={styles.developerRole}>{item.role}</p>
            <p style={styles.developerBio}>{item.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperPage;

//styling 
const styles = {
  container: {
    backgroundColor: '#000',
    color: '#00ff00',
    padding: '16px',
    textAlign: 'center',
  },
  pageTitle: {
    fontSize: '29px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  developerList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  developerCard: {
    backgroundColor: '#000',
    color: '#00ff00',
    borderRadius: '10px',
    padding: '16px',
    marginBottom: '16px',
    width: '300px',
    margin: '8px',
    textAlign: 'center',
  },
  developerImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  developerName: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#00ff00',
    textDecoration: '', 
  },
  developerRole: {
    fontSize: '14px',
    color: '#888',
  },
  developerBio: {
    fontSize: '16px',
  },
  githubText: {
    fontSize: '17px',
    fontWeight: 'bold',
    color: '#00ff00',
    marginRight: '8px', 
  },
  githubLink: {
    display: 'flex',
    alignItems: 'center', 
  },
};


