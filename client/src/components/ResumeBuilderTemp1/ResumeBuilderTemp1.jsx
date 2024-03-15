import React, { useState, useEffect } from 'react';
import './ResumeBuilderTemp1.css';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import { pf } from '../../assets'
// import Certificates from '../../pages/Dashboard/Certificates';

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
    marginTop: "5px",
    textTransform: "capitalize",
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
    marginTop: "5px",
    textTransform: "capitalize",
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

const ResumeBuilderTemp1 = () => {

  const [userImage, setUserImage] = useState(pf);

  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const [profession, setProfession] = useState('');
  const [about, setAbout] = useState('');
  const [DOB, setDob] = useState('');
  const [projects, setProjects] = useState([]);
  const [certificates, setcertificate] = useState([]);
  const [exps, setexp] = useState([]);
  const [education, setEducation] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [theme, setTheme] = useState(true);

  // Function to set loading state for 2 seconds
  const setLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleAddProject = () => {
    setLoading();
    setProjects([...projects, { name: '', description: '' }]);
  };

  const handleAddCertificate = () => {
    setLoading();
    setcertificate([...certificates, { name: '', description: '' }]);
  };


  const handleExp = () => {
    setLoading();
    setexp([...exps, { year: '', name: '', description: '' }]);
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

  const handleExpChange = (index, key, value) => {
    setLoading();
    const updatedExp = [...exps];
    updatedExp[index][key] = value;
    setexp(updatedExp);
  };



  const handleChangeCertificate = (index, key, value) => {
    setLoading();
    const updatedCertificates = [...certificates];
    updatedCertificates[index][key] = value;
    setcertificate(updatedCertificates);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // Do something with the selected file
    
    // console.log(image)
    // console.log(file)
    const reader = new FileReader();

    reader.onload = function (event) {
        const img = document.createElement('img');
        img.src = event.target.result;
        setUserImage(event.target.result)

        // const avatarContainer = document.querySelector('.avatar-container');
        // avatarContainer.innerHTML = '';
        // avatarContainer.appendChild(img);
    };

    reader.readAsDataURL(file);
};


  useEffect(() => {
    setLoading(); // Set loading on initial render
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "2rem auto" }}>
        <div style={{ fontSize: "1.3rem", fontWeight: "500" }}>Select Theme: </div>
        <button style={{ padding: "8px 10px", fontSize: "1.3rem", fontWeight: "600", marginLeft: "1rem", width: "150px", borderRadius: "10px" }} className='b-button' onClick={(e) => setTheme(true)}>Subtle</button>
        <button style={{ padding: "8px 10px", fontSize: "1.3rem", fontWeight: "600", marginLeft: "1rem", width: "150px", borderRadius: "10px" }} className='r-button' onClick={(e) => setTheme(false)}> Crimson</button>
      </div>
      <div className='flex'>
        <div className='inputValueResume' style={{ marginTop: "3rem" }}>

{/* {/* */}
          <div className="input-container">
            <div className="myimage">
              <input type="file" id="file-input" name="ImageStyle"
               onChange={handleFileInputChange}
              /> 
            </div>
          </div>

              {/* */} 

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


          {/* <div className='inputValueResume' style={{ marginTop: "3rem" }}> */}
          <div className="input-container">
            {/* <label className="label">Name:</label> */}
            <input
              className="input-field"
              type="text"
              value={address}
              placeholder='Your Address'
              onChange={(e) => {
                setAddress(e.target.value);
                setLoading();
              }}
            />
          </div>
          {/* </div> */}


          <div className="input-container">
            {/* <label className="label">Email:</label> */}
            <input
              className="input-field"
              type="date"
              placeholder='Your DOB in (day/month/year) format'
              value={DOB}
              onChange={(e) => {
                setDob(e.target.value);
                setLoading();
              }}
            />
          </div>

          <div className="input-container">
            {/* <label className="label">Email:</label> */}
            <input
              className="input-field"
              type="text"
              placeholder='Your Current Profession'
              value={profession}
              onChange={(e) => {
                setProfession(e.target.value);
                setLoading();
              }}
            />
          </div>

          <div className="input-container">
            <textarea
              value={about}
              className='input-field'
              style={{ marginBottom: "1.2rem" }}
              onChange={(e) => {
                setAbout(e.target.value)
              }}
              placeholder="About Yourself"
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
            {exps.map((exp, index) => (
              <div key={index} style={{ display: "flex", flexDirection: 'column', }}>
                <input
                  type="text"
                  className='input-field'
                  style={{ marginBottom: "1.2rem" }}
                  value={exp.year}
                  onChange={(e) => {
                    handleExpChange(index, 'year', e.target.value);
                  }}
                  placeholder="Experience Period (month/year to month/year) Format"
                />
                <textarea
                  value={exp.name}
                  className='input-field'
                  style={{ marginBottom: "1.2rem" }}
                  onChange={(e) => {
                    handleExpChange(index, 'name', e.target.value);
                  }}
                  placeholder="Company Name"
                />
                <textarea
                  value={exp.description}
                  className='input-field'
                  style={{ marginBottom: "1.2rem" }}
                  onChange={(e) => {
                    handleExpChange(index, 'description', e.target.value);
                  }}
                  placeholder="Designation"
                />
              </div>
            ))}
            <button onClick={handleExp} className='p-button' style={{ marginBottom: "1.2rem" }}>Add Experience</button>
          </div>

          <div className='p-container'>
            {/* <h2 className='p-head'>Projects</h2> */}
            {projects.map((exp, index) => (
              <div key={index} style={{ display: "flex", flexDirection: 'column', }}>
                <textarea
                  value={exp.name}
                  className='input-field'
                  style={{ marginBottom: "1.2rem" }}
                  onChange={(e) => {
                    handleProjectChange(index, 'name', e.target.value);
                  }}
                  placeholder="Name"
                />
                <textarea
                  value={exp.description}
                  className='input-field'
                  style={{ marginBottom: "1.2rem" }}
                  onChange={(e) => {
                    handleProjectChange(index, 'description', e.target.value);
                  }}
                  placeholder="Designation"
                />
              </div>
            ))}
            <button onClick={handleAddProject} className='p-button' style={{ marginBottom: "1.2rem" }}>Add Projects</button>
          </div>

          <div className='p-container'>
            {/* <h2 className='p-head'>Projects</h2> */}
            {certificates.map((certificate, index) => (
              <div key={index} style={{ display: "flex", flexDirection: 'column', }}>
                <input
                  type="text"
                  className='input-field'
                  style={{ marginBottom: "1.2rem" }}
                  value={certificate.name}
                  onChange={(e) => {
                    handleChangeCertificate(index, 'name', e.target.value);
                  }}
                  placeholder="Certificate Name"
                />
                <textarea
                  value={certificate.description}
                  className='input-field'
                  style={{ marginBottom: "1.2rem" }}
                  onChange={(e) => {
                    handleChangeCertificate(index, 'description', e.target.value);
                  }}
                  placeholder="Certificate Provider"
                />
              </div>
            ))}
            <button onClick={handleAddCertificate} className='p-button' style={{ marginBottom: "1.2rem" }}>Add Certificates</button>
          </div>
        </div>

        {isLoading ? ( // Render loader if loading
          <Loader />
        ) : (<>
          {theme &&
            <PDFViewer width="1000" height="800" style={{ marginTop: "3rem", marginBottom: "2rem", borderRadius: "20px", marginRight: "3rem" }}>
              <Document>
                <Page size="A4" style={styles.rcontainer}>
                  <View style={styles.sectionl}>
                    <Image src={userImage} style={styles.rimage} id='avatar-container'/> 
                    <Text style={styles.heading} > Contact </Text>
                    <Text style={styles.sheading}>phone </Text>
                    <Text style={styles.ltext}>{contactNumber}</Text>
                    <Text style={styles.sheading}>E-mail </Text>
                    <Text style={styles.ltext}>{email}</Text>
                    <Text style={styles.sheading}>Address </Text>
                    <Text style={styles.ltext1}>{address}</Text>
                    <Text style={styles.sheading}>Date of birth </Text>
                    <Text style={styles.ltext1}>{DOB}</Text>
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
                    <Text style={styles.nheading}>{name}</Text>
                    <Text style={styles.profession}>{profession}</Text>
                    <Text style={styles.about}>{about}</Text>
                    <Text style={styles.pheading}>Experience</Text>
                    {exps.map((exp, index) => (
                      <View key={index}>
                        <Text style={styles.ptext}>{exp.year}</Text>
                        <Text style={styles.ptext}>{exp.name}</Text>
                        <Text style={styles.ptext}>{exp.description}</Text>
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
                    {certificates.map((certificate, index) => (
                      <View key={index}>
                        <Text style={styles.ptext}>{certificate.name}</Text>
                        <Text style={styles.ptext}>{certificate.description}</Text>
                      </View>
                    ))}
                  </View>
                </Page>
              </Document>
            </PDFViewer>
          }

          {!theme &&
            <PDFViewer width="1000" height="800" style={{ marginTop: "3rem", marginBottom: "2rem", borderRadius: "20px", marginRight: "3rem" }}>
              <Document>
                <Page size="A4" style={styles.rcontainert}>
                  <View style={styles.sectionlt}>
                    <Image src={userImage} style={styles.rimaget} />
                    <Text style={styles.headingt} > Contact </Text>
                    <Text style={styles.sheadingt}>phone </Text>
                    <Text style={styles.ltextt}>{contactNumber}</Text>
                    <Text style={styles.sheadingt}>E-mail </Text>
                    <Text style={styles.ltextt}>{email}</Text>
                    <Text style={styles.sheadingt}>Address </Text>
                    <Text style={styles.ltext1t}>{address}</Text>
                    <Text style={styles.sheadingt}>Date of birth </Text>
                    <Text style={styles.ltext1t}>{DOB}</Text>
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
                    <Text style={styles.nheadingt}>{name}</Text>
                    <Text style={styles.professiont}>{profession}</Text>
                    <Text style={styles.aboutt}>{about}</Text>
                    <Text style={styles.pheadingt}>Experience</Text>
                    {exps.map((exp, index) => (
                      <View key={index}>
                        <Text style={styles.ptextt}>{exp.year}</Text>
                        <Text style={styles.ptextt}>{exp.name}</Text>
                        <Text style={styles.ptextt}>{exp.description}</Text>
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
                    {certificates.map((certificate, index) => (
                      <View key={index}>
                        <Text style={styles.ptextt}>{certificate.name}</Text>
                        <Text style={styles.ptextt}>{certificate.description}</Text>
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

export default ResumeBuilderTemp1;
