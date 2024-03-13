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
    display: "flex",
    paddingTop: "30",
    paddingLeft: "50",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#323B4C",
    color: "white"
  },
  rimage: {
    width: "130px",
    height: "130px",
    borderRadius: "50%",
  },
  heading: {
    marginTop: "25px",
    marginBottom: "15px",
    fontSize: "20px",
    borderBottom: "2px solid white",
    paddingBottom: "5px",
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  sheading: {
    marginTop: "15px",
    fontSize: "16px",
    textTransform: "capitalize"
  },
  ltext: {
    fontSize: "12px",
    textTransform: "capitalize"
  },
  ltext1: {
    fontSize: "12px",
    marginBottom: "10px",
    textTransform: "capitalize"
  },
  ytext: {
    fontSize: "12px",
    fontWeight: "bold",
  },
  sectionr: {
    width: "60%",
    display: "flex",
    paddingTop: "30",
    paddingLeft: "20",
    paddingRight: "20",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  nheading: {
    fontSize: "50px",
    color: "#323B4C",
  },
  nheading1: {
    fontSize: "50px",
    color: "#737373",
  },
  profession: {
    fontSize: "20px",
    color: "#1F3A68",
    marginTop: "5px"
  },
  about: {
    fontSize: "12px",
    textAlign: "justify",
    color: "#737373",
    marginTop: "6px"
  },
  pheading: {
    marginTop: "25px",
    marginBottom: "15px",
    fontSize: "20px",
    borderBottom: "2px solid #1F3A68",
    paddingBottom: "5px",
    color: "#1F3A68",
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  ptext: {
    fontSize: "15px",
    color: "#27384C",
    marginTop: "3px",
  },
  rcontainert: {
    display: "flex",
    flexDirection: "row",
    margin: "auto 0",
    justifyContent: "center",
  },
  sectionlt: {
    width: "40%",
    display: "flex",
    paddingTop: "30",
    paddingLeft: "50",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#8D4B55",
    color: "white"
  },
  rimaget: {
    width: "130px",
    height: "130px",
    borderRadius: "50%",
  },
  headingt: {
    marginTop: "25px",
    marginBottom: "15px",
    fontSize: "20px",
    borderBottom: "2px solid white",
    paddingBottom: "5px",
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  sheadingt: {
    marginTop: "15px",
    fontSize: "16px",
    textTransform: "capitalize"
  },
  ltextt: {
    fontSize: "12px",
    textTransform: "capitalize"
  },
  ltext1t: {
    fontSize: "12px",
    marginBottom: "10px",
    textTransform: "capitalize"
  },
  ytextt: {
    fontSize: "12px",
    fontWeight: "bold",
  },
  sectionrt: {
    width: "60%",
    display: "flex",
    paddingTop: "30",
    paddingLeft: "20",
    paddingRight: "20",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  nheadingt: {
    fontSize: "50px",
    color: "#8D4B55",
  },
  nheading1t: {
    fontSize: "50px",
    color: "#8D4B55",
  },
  professiont: {
    fontSize: "20px",
    color: "#8D4B55",
    marginTop: "5px"
  },
  aboutt: {
    fontSize: "12px",
    textAlign: "justify",
    color: "#737373",
    marginTop: "6px"
  },
  pheadingt: {
    marginTop: "25px",
    marginBottom: "15px",
    fontSize: "20px",
    borderBottom: "2px solid #8D4B55",
    paddingBottom: "5px",
    color: "#8D4B55",
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  ptextt: {
    fontSize: "15px",
    color: "#8D4B55",
    marginTop: "3px",
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
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "2rem auto" }}>
        <div style={{ fontSize: "1.3rem", fontWeight: "500" }}>Select Theme: </div>
        <button style={{ padding: "8px 10px", fontSize: "1.3rem", fontWeight: "600", marginLeft: "1rem", width: "150px", borderRadius: "10px" }} className='b-button' onClick={(e)=> setTheme(true)}>Subtle</button>
        <button style={{ padding: "8px 10px", fontSize: "1.3rem", fontWeight: "600", marginLeft: "1rem", width: "150px", borderRadius: "10px" }} className='r-button' onClick={(e)=> setTheme(false)}> Crimson</button>
      </div>
      <div className='flex'>
        <div className='inputValueResume' style={{ marginTop: "3rem" }}>
          <div className="input-container">
            {/* <label className="label">Name:</label> */}
            <input
              className="input-field"
              type="text"
              value={name}
              placeholder='Your Name'
              onChange={(e) => {
                setName(e.target.value);
                setLoading();
              }}
            />
          </div>
          <div className="input-container">
            {/* <label className="label">Contact Number:</label> */}
            <input
              className="input-field"
              type="text"
              placeholder='Your Phone Number'
              value={contactNumber}
              onChange={(e) => {
                setContactNumber(e.target.value);
                setLoading();
              }}
            />
          </div>
          <div className="input-container">
            {/* <label className="label">Email:</label> */}
            <input
              className="input-field"
              type="text"
              placeholder='Your E-mail Address'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setLoading();
              }}
            />
          </div>
          <div className="input-container">
            {/* <label className="label">Email:</label> */}
            <input
              className="input-field"
              type="text"
              placeholder='Your DOB in (day/month/year) format'
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
        ) : (<>
          {theme &&
            <PDFViewer width="1000" height="600" style={{ marginTop: "3rem", marginBottom: "2rem", borderRadius: "20px", marginRight: "3rem" }}>
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
                    <Text style={styles.sheading}>Date of birth </Text>
                    <Text style={styles.ltext1}>10/03/2002</Text>
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
                    <Text style={styles.pheading}>Experince</Text>
                    {projects.map((project, index) => (
                      <View key={index}>
                        <Text style={styles.ptext}>{project.name}</Text>
                        <Text style={styles.ptext}>{project.description}</Text>
                      </View>
                    ))}
                    <Text style={styles.pheading}>Project</Text>
                    {projects.map((project, index) => (
                      <View key={index}>
                        <Text style={styles.ptext}>{project.name}</Text>
                        <Text style={styles.ptext}>{project.description}</Text>
                      </View>
                    ))}
                    <Text style={styles.pheading}>Certificate</Text>
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
          }

          {!theme &&
            <PDFViewer width="1000" height="600" style={{ marginTop: "3rem", marginBottom: "2rem", borderRadius: "20px", marginRight: "3rem" }}>
              <Document>
                <Page size="A4" style={styles.rcontainert}>
                  <View style={styles.sectionlt}>
                    <Image src={pf} style={styles.rimaget} />
                    <Text style={styles.headingt} > Contact </Text>
                    <Text style={styles.sheadingt}>phone </Text>
                    <Text style={styles.ltextt}>8279847842</Text>
                    <Text style={styles.sheadingt}>E-mail </Text>
                    <Text style={styles.ltextt}>hello@gmail.com</Text>
                    <Text style={styles.sheadingt}>Address </Text>
                    <Text style={styles.ltext1t}>Sec-63, Noida, U.P.</Text>
                    <Text style={styles.sheadingt}>Date of birth </Text>
                    <Text style={styles.ltext1t}>10/03/2002</Text>
                    <Text style={styles.headingt} > Education </Text>
                    {education.map((edu, index) => (
                      <View key={index}>
                        <Text style={styles.ytextt}>{edu.year}</Text>
                        <Text style={styles.ltextt}>{edu.course}</Text>
                        <Text style={styles.ltext1t}>{edu.school}</Text>
                      </View>
                    ))}
                  </View>

                  <View style={styles.sectionrt}>
                    <Text style={styles.nheadingt}>Jack <Text style={styles.nheading1t}>Mishra</Text></Text>
                    <Text style={styles.professiont}>Full Stack Developer</Text>
                    <Text style={styles.aboutt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc. </Text>
                    <Text style={styles.pheadingt}>Experince</Text>
                    {projects.map((project, index) => (
                      <View key={index}>
                        <Text style={styles.ptextt}>{project.name}</Text>
                        <Text style={styles.ptextt}>{project.description}</Text>
                      </View>
                    ))}
                    <Text style={styles.pheadingt}>Project</Text>
                    {projects.map((project, index) => (
                      <View key={index}>
                        <Text style={styles.ptextt}>{project.name}</Text>
                        <Text style={styles.ptextt}>{project.description}</Text>
                      </View>
                    ))}
                    <Text style={styles.pheadingt}>Certificate</Text>
                    {projects.map((project, index) => (
                      <View key={index}>
                        <Text style={styles.ptextt}>{project.name}</Text>
                        <Text style={styles.ptextt}>{project.description}</Text>
                      </View>
                    ))}
                  </View>
                </Page>
              </Document>
            </PDFViewer>
          }
        </>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;
