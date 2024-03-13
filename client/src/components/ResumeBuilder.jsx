import React, { useState, useEffect } from 'react';
import './ResumeBuilder.css';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import { pf } from '../assets';

// Define loader component
const Loader = () => <div>Loading...</div>;

const styles = StyleSheet.create({
  rcontainer: {
    display: "flex",
    flexDirection: "row",
    margin: "auto 0",
    justifyContent: "center",
  },
 sectionl: {
  width: "40%",
  display:"flex",
  paddingTop:"30",
  paddingLeft:"50",
  flexDirection:"column",
  justifyContent:"flex-start",
  backgroundColor:"#323B4C",
  color:"white"
 },
 rimage: {
  width:"130px",
  height:"130px",
  borderRadius:"50%",
 },
 heading: {
  marginTop:"25px",
  marginBottom:"15px",
  fontSize:"20px",
  borderBottom:"2px solid white",
  paddingBottom:"5px",
  fontWeight:"bold",
  textTransform:"uppercase"
 },
 sheading:{
  marginTop:"15px",
  fontSize:"16px",
  textTransform:"capitalize"
 },
 ltext: {
  fontSize:"12px",
  textTransform:"capitalize"
 },
 ltext1: {
  fontSize:"12px",
  marginBottom:"10px",
  textTransform:"capitalize"
 },
 ytext:{
  fontSize:"12px",
  fontWeight:"bold",
 },
 sectionr: {
  width:"60%",
  display:"flex",
  paddingTop:"30",
  paddingLeft:"20",
  paddingRight:"20",
  flexDirection:"column",
  justifyContent:"flex-start",
 },
 nheading: {
  fontSize:"50px",
  color:"#323B4C",
 },
 nheading1: {
  fontSize:"50px",
  color:"#737373",
 },
 profession:{
  fontSize:"20px",
  color:"#1F3A68",
  marginTop:"5px"
 },
 about: {
  fontSize:"12px",
  textAlign:"justify",
  color:"#737373",
  marginTop:"6px"
 },
 pheading:{
  marginTop:"25px",
  marginBottom:"15px",
  fontSize:"20px",
  borderBottom:"2px solid #1F3A68",
  paddingBottom:"5px",
  color:"#1F3A68",
  fontWeight:"bold",
  textTransform:"uppercase"
 },
 ptext:{
  fontSize:"15px",
  color:"#27384C",
  marginTop:"3px",
 },
});

const ResumeBuilder = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [theme, setTheme] = useState(true);

  // Function to set loading state for 2 seconds
  const setLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const handleAddProject = () => {
    setLoading();
    setProjects([...projects, { name: '', description: '' }]);
  };

  const handleProjectChange = (index, key, value) => {
    setLoading();
    const updatedProjects = [...projects];
    updatedProjects[index][key] = value;
    setProjects(updatedProjects);
  };

  const handleAddEducation = () => {
    setLoading();
    setEducation([...education, { school: '', course: '', year: '' }]);
  };

  const handleEducationChange = (index, key, value) => {
    setLoading();
    const updatedEducation = [...education];
    updatedEducation[index][key] = value;
    setEducation(updatedEducation);
  };

  useEffect(() => {
    setLoading(); // Set loading on initial render
  }, []);

  return (
    <div className='flex'>
      <div className='inputValueResume' style={{marginTop:"3rem"}}>
        <div className="input-container">
          <label className="label">Name:</label>
          <input
            className="input-field"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setLoading();
            }}
          />
        </div>
        <div className="input-container">
          <label className="label">Contact Number:</label>
          <input
            className="input-field"
            type="text"
            value={contactNumber}
            onChange={(e) => {
              setContactNumber(e.target.value);
              setLoading();
            }}
          />
        </div>
        <div className="input-container">
          <label className="label">Email:</label>
          <input
            className="input-field"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setLoading();
            }}
          />
        </div>

          <div className='p-container'>
            {/* <h2 className='p-head'>Education</h2> */}
            {education.map((edu, index) => (
              <div key={index} style={{ display: "flex", flexDirection: 'column', }}>
                <input
                  type="text"
                  className='input-field'
                  style={{ marginBottom: "1.2rem" }}
                  value={edu.school}
                  onChange={(e) => {
                    handleEducationChange(index, 'school', e.target.value);
                  }}
                  placeholder="School/College Name"
                />
                <input
                  type="text"
                  className='input-field'
                  style={{ marginBottom: "1.2rem" }}
                  value={edu.course}
                  onChange={(e) => {
                    handleEducationChange(index, 'course', e.target.value);
                  }}
                  placeholder="Course"
                />
                <input
                  type="text"
                  className='input-field'
                  style={{ marginBottom: "1.2rem" }}
                  value={edu.year}
                  onChange={(e) => {
                    handleEducationChange(index, 'year', e.target.value);
                  }}
                  placeholder="Year"
                />
              </div>
            ))}
            <button onClick={handleAddEducation} className='p-button' style={{ marginBottom: "1.2rem" }}>Add Education</button>
          </div>

          <div className='p-container'>
            {/* <h2 className='p-head'>Projects</h2> */}
            {projects.map((project, index) => (
              <div key={index} style={{ display: "flex", flexDirection: 'column', }}>
                <input
                  type="text"
                  className='input-field'
                  style={{ marginBottom: "1.2rem" }}
                  value={project.name}
                  onChange={(e) => {
                    handleProjectChange(index, 'name', e.target.value);
                  }}
                  placeholder="Project Name"
                />
                <textarea
                  value={project.description}
                  className='input-field'
                  style={{ marginBottom: "1.2rem" }}
                  onChange={(e) => {
                    handleProjectChange(index, 'description', e.target.value);
                  }}
                  placeholder="Project Description"
                />
              </div>
            ))}
            <button onClick={handleAddProject} className='p-button' style={{ marginBottom: "1.2rem" }}>Add Project</button>
          </div>

          <div className='p-container'>
            {/* <h2 className='p-head'>Projects</h2> */}
            {projects.map((project, index) => (
              <div key={index} style={{ display: "flex", flexDirection: 'column', }}>
                <input
                  type="text"
                  className='input-field'
                  style={{ marginBottom: "1.2rem" }}
                  value={project.name}
                  onChange={(e) => {
                    handleProjectChange(index, 'name', e.target.value);
                  }}
                  placeholder="Experience Period (month/year to month/year) Format"
                />
                <textarea
                  value={project.description}
                  className='input-field'
                  style={{ marginBottom: "1.2rem" }}
                  onChange={(e) => {
                    handleProjectChange(index, 'description', e.target.value);
                  }}
                  placeholder="Company Name"
                />
                <textarea
                  value={project.description}
                  className='input-field'
                  style={{ marginBottom: "1.2rem" }}
                  onChange={(e) => {
                    handleProjectChange(index, 'description', e.target.value);
                  }}
                  placeholder="Designation"
                />
              </div>
            ))}
            <button onClick={handleAddProject} className='p-button' style={{ marginBottom: "1.2rem" }}>Add Experience</button>
          </div>

          <div className='p-container'>
            {/* <h2 className='p-head'>Projects</h2> */}
            {projects.map((project, index) => (
              <div key={index} style={{ display: "flex", flexDirection: 'column', }}>
                <input
                  type="text"
                  className='input-field'
                  style={{ marginBottom: "1.2rem" }}
                  value={project.name}
                  onChange={(e) => {
                    handleProjectChange(index, 'name', e.target.value);
                  }}
                  placeholder="Certificate Name"
                />
                <textarea
                  value={project.description}
                  className='input-field'
                  style={{ marginBottom: "1.2rem" }}
                  onChange={(e) => {
                    handleProjectChange(index, 'description', e.target.value);
                  }}
                  placeholder="Certificate Provider"
                />
              </div>
            ))}
            <button onClick={handleAddProject} className='p-button' style={{ marginBottom: "1.2rem" }}>Add Certificates</button>
          </div>
        </div>

      {isLoading ? ( // Render loader if loading
        <Loader />
      ) : (
        <PDFViewer width="1000" height="600" style={{marginTop:"3rem"}}>
          <Document>
            <Page size="A4" style={styles.rcontainer}>
              <View style={styles.sectionl}>
              <Image src={pf} style={styles.rimage} />
                <Text style={styles.heading} > Contact </Text>
                <Text style={styles.sheading}>phone </Text>
                <Text style={styles.ltext}>8279847842</Text>
                <Text style={styles.sheading}>E-mail </Text>
                <Text style={styles.ltext}>hello@gmail.com</Text>
                <Text style={styles.sheading}>Address </Text>
                <Text style={styles.ltext1}>Sec-63, Noida, U.P.</Text>
                <Text style={styles.heading} > Education </Text>
                {education.map((edu, index) => (
                  <View key={index}>
                    <Text style={styles.ytext}>{edu.year}</Text>
                    <Text style={styles.ltext}>{edu.course}</Text>
                    <Text style={styles.ltext1}>{edu.school}</Text>
                  </View>
                ))}
                </View>

                <View style={styles.sectionr}>
                <Text style={styles.nheading}>Jack <Text style={styles.nheading1}>Mishra</Text></Text>
                <Text style={styles.profession}>Full Stack Developer</Text>
                <Text style={styles.about}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc. </Text>
                <Text style={styles.pheading}>Projects</Text>
                {projects.map((project, index) => (
                  <View key={index}>
                    <Text style={styles.ptext}>{project.name}</Text>
                    <Text style={styles.ptext}>{project.description}</Text>
                  </View>
                ))}
              </View>
            </Page>
          </Document>
        </PDFViewer>
      )}
    </div>
  );
};

export default ResumeBuilder;
