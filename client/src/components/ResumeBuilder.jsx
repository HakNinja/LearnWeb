import React, { useState, useEffect } from 'react';
import './ResumeBuilder.css';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Define loader component
const Loader = () => <div>Loading...</div>;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const ResumeBuilder = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state

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

      <div>
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <input
              type="text"
              value={project.name}
              onChange={(e) => {
                handleProjectChange(index, 'name', e.target.value);
              }}
              placeholder="Project Name"
            />
            <textarea
              value={project.description}
              onChange={(e) => {
                handleProjectChange(index, 'description', e.target.value);
              }}
              placeholder="Project Description"
            />
          </div>
        ))}
        <button onClick={handleAddProject}>Add Project</button>
      </div>

      <div>
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <input
              type="text"
              value={edu.school}
              onChange={(e) => {
                handleEducationChange(index, 'school', e.target.value);
              }}
              placeholder="School/College Name"
            />
            <input
              type="text"
              value={edu.course}
              onChange={(e) => {
                handleEducationChange(index, 'course', e.target.value);
              }}
              placeholder="Course"
            />
            <input
              type="text"
              value={edu.year}
              onChange={(e) => {
                handleEducationChange(index, 'year', e.target.value);
              }}
              placeholder="Year"
            />
          </div>
        ))}
        <button onClick={handleAddEducation}>Add Education</button>
      </div>

      {isLoading ? ( // Render loader if loading
        <Loader />
      ) : (
        <PDFViewer width="1000" height="600">
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text style={styles.heading}>Name: {name}</Text>
                <Text style={styles.content}>Contact Number: {contactNumber}</Text>
                <Text style={styles.content}>Email: {email}</Text>

                <Text style={styles.heading}>Projects</Text>
                {projects.map((project, index) => (
                  <View key={index}>
                    <Text style={styles.content}>Project Name: {project.name}</Text>
                    <Text style={styles.content}>Project Description: {project.description}</Text>
                  </View>
                ))}

                <Text style={styles.heading}>Education</Text>
                {education.map((edu, index) => (
                  <View key={index}>
                    <Text style={styles.content}>School/College Name: {edu.school}</Text>
                    <Text style={styles.content}>Course: {edu.course}</Text>
                    <Text style={styles.content}>Year: {edu.year}</Text>
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
