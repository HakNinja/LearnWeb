import React, { useRef, useState } from 'react';
import './Biodata.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Biodata = () => {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const [pincode, setPincode] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [district, setDistrict] = useState('')
    const [stateName, setStateName] = useState('')
    const [country, setCountry] = useState('')
    const [instituteName, setInstituteName] = useState('')


    const handleChange = async (e) => {

        if (e.target.name === 'name') {
            setName(e.target.value)
        }
        else if (e.target.name === 'phoneNumber') {
            setphoneNumber(e.target.value)
        }
        else if (e.target.name === 'pincode') {
            setPincode(e.target.value)
            if (e.target.value.length === 6) {
                getpincode(e.target.value)
            }
            else {
                setCity('')
                setStateName('')
            }
        }
        else if (e.target.name === 'address') {
            setAddress(e.target.value)
        }
        else if (e.target.name === 'city') {
            setCity(e.target.value)
        }
        else if (e.target.name === 'district') {
            setDistrict(e.target.value)
        }
        else if (e.target.name === 'stateName') {
            setStateName(e.target.value)
        }
        else if (e.target.name === 'country') {
            setCountry(e.target.value)
        }
        else if (e.target.name === 'instituteName') {
            setInstituteName(e.target.value)
        }
    }

    const getpincode = async (pin) => {
        let data = pin
        let pins = await fetch(`http://127.0.0.1:5001/data/pinData?pincode=${data}`)
        let response = await pins.json()
        // console.log(response.Response.Success)
        if (response.Response.Success === true) {
            setCity(response.Response.taluk)
            setDistrict(response.Response.districtName)
            setStateName(response.Response.stateName)

        }
        else {
            toast.error(response.message, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setCity('')
            setDistrict('')
            setStateName('')
        }
    }

    const handleUserSubmit = async (e) => {
        e.preventDefault();
        // const data = { name, email, city, phoneNumber, image, pincode, address, district, stateName, country, instituteName }
        // console.log(data)
        // const formData = new FormData();
        // formData.append('image', image);
        // formData.append("name", name)
        // formData.append("email", email)
        // formData.append("city", city)
        // formData.append("phoneNumber", phoneNumber)
        // formData.append("pincode", pincode)
        // formData.append("address", address)
        // formData.append("district", district)
        // formData.append("stateName", stateName)
        // formData.append("country", country)
        // formData.append("instituteName", instituteName)
        // console.log(formData.name)
    }



    const fileInputRef = useRef(null);

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        // Do something with the selected file
        setImage(event.target.files[0])
        // console.log(image)
        // console.log(file)
        const reader = new FileReader();

        reader.onload = function (event) {
            const img = document.createElement('img');
            img.src = event.target.result;

            const avatarContainer = document.querySelector('.avatar-container');
            avatarContainer.innerHTML = '';
            avatarContainer.appendChild(img);
        };

        reader.readAsDataURL(file);
    };



    return (
        <div className="biodata_body mb-3">

            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <section className="biodata">
                <h1 className="biodata_title">Learner Biodata</h1>

                <div className="biodata_container">
                    <div className="avatar-section">
                        <h2 className="avatar_head">Create Avatar</h2>
                        <div className="avatar-container">
                            {/* Display the selected image here */}
                        </div>
                        <input
                            type="file"
                            id="avatarInput"
                            accept="image/*"
                            className="avatar_btn visually-hidden"
                            onChange={handleFileInputChange}
                            ref={fileInputRef}

                        />
                        <label htmlFor="avatarInput" className="file-label" >
                            Choose File
                        </label>

                    </div>

                    <div className="biodata_container2 ">
                        <form className=" flex w-full" onSubmit={handleUserSubmit}>
                            <div className='flex w-full'>
                                <div className="biodata_input-field w-1/2 ">
                                    <input type="text" placeholder="Name" id="name" name="name"
                                        onChange={handleChange}
                                        value={name} className="biodata_a" />
                                </div>
                                <div className="biodata_input-field w-1/2">
                                    <input type="email" placeholder="Email"
                                        id="email" name="email"
                                        readOnly={true}
                                        value={email}
                                        className="biodata_a" />
                                </div>
                            </div>
                            <div className='flex w-full'>
                                <div className="biodata_input-field">
                                    <input type="tel" placeholder="Contact Number" id="phoneNumber"
                                        name="phoneNumber"
                                        onChange={handleChange}
                                        value={phoneNumber} className="biodata_a" />
                                </div>

                                <div className="biodata_input-field">
                                    <input type="text" placeholder="Pin Code" id="pincodes"
                                        name="pincode"
                                        onChange={handleChange}
                                        value={pincode} className="biodata_a" />
                                </div>
                            </div>
                            <div className='flex w-full'>
                                <div className="biodata_input-field">
                                    <input type="text" placeholder="City"
                                        id="city"
                                        name="city"
                                        onChange={handleChange}
                                        value={city} className="biodata_a" />
                                </div>

                                <div className="biodata_input-field">
                                    <input type="text" placeholder="District" id="district"
                                        name="district"
                                        onChange={handleChange}
                                        value={district} className="biodata_a" />
                                </div>
                            </div>

                            <div className='flex w-full'>
                                <div className="biodata_input-field">
                                    <input type="text" placeholder="State" id="stateName"
                                        name="stateName"
                                        onChange={handleChange}
                                        value={stateName} className="biodata_a" />
                                </div>

                                <div className="biodata_input-field">
                                    <input type="text" placeholder="Country" id="country"
                                        name="country"
                                        onChange={handleChange}
                                        value={country}
                                        className="biodata_a" />
                                </div>

                            </div>

                            <div className="col-12">
                                <div className="biodata_input-field">
                                    <input type="text" placeholder="Street and House Number" name="address"
                                        onChange={handleChange}
                                        value={address} className="biodata_a" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="biodata_input-field">
                                    <input type="text" placeholder="Institute Name" id="instituteName"
                                        name="instituteName"
                                        onChange={handleChange}
                                        value={instituteName} className="biodata_a" />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="col-12">
                                    <button type='submit' className="btn biodata_submit-btn btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                                {/* <button onClick={handleUserSubmit} className="btn biodata_submit-btn btn btn-primary">submit</button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </div>

    );
};

export default Biodata;
