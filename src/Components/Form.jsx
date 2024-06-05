import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Form = ({ setFormDetails }) => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        phoneno: "+91 ",
        country: "India",
        city: "Jaipur",
        panno: "",
        adharno: ""
    });
    const navigate = useNavigate();

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setFormDetails(formData);
        navigate('/post-successful');
    };


    return (
        <div>
            <div className='internal'>
                <form onSubmit={submitHandler}>
                    <br />
                    <label htmlFor='firstname'>First name</label>
                    <br />
                    <input
                        onChange={changeHandler}
                        value={formData.firstname}
                        className='input'
                        type="text"
                        name='firstname'
                        placeholder='Enter your first name'
                    />
                    <br />
                    <label htmlFor='lastname'>Last name</label>
                    <br />
                    <input
                        onChange={changeHandler}
                        value={formData.lastname}
                        className='input'
                        type="text"
                        name='lastname'
                        placeholder='Enter your last name'
                    />
                    <br />
                    <label htmlFor='username'>Username</label>
                    <br />
                    <input
                        onChange={changeHandler}
                        value={formData.username}
                        className='input'
                        type="text"
                        name='username'
                        placeholder='Enter your username'
                    />
                    <br />
                    <label htmlFor='email'>Email address</label>
                    <br />
                    <input
                        onChange={changeHandler}
                        value={formData.email}
                        className='input'
                        type="email"
                        name='email'
                        placeholder='abc@gmail.com'
                    />
                    <br />
                    <label htmlFor='password'>Password</label>
                    <br />
                    <div className="password-input-container">
                        <input
                            onChange={changeHandler}
                            value={formData.password}
                            className='input'
                            type="password"
                            name='password'
                            placeholder='Use strong password'
                        />
                    </div>
                    <br />
                    <label htmlFor='phoneno'>Phone No.</label>
                    <br />
                    <input
                        onChange={changeHandler}
                        value={formData.phoneno}
                        className='input'
                        type="number"
                        name='phoneno'
                        placeholder='Write country code before phone no. like: +91 0123456789'
                    />
                    <br />
                    <div className='countryCityWrapper'>
                        <div className='countryCity'>
                            <div>
                                <label htmlFor='country'>Country</label>
                                <br />
                                <select
                                    className='input'
                                    onChange={changeHandler}
                                    name="country"
                                    id="country"
                                    value={formData.country}
                                >
                                    <option value="India">India</option>
                                    <option value="America">America</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Europe">Europe</option>
                                    <option value="Australia">Australia</option>
                                    <option value="NewZeland">NewZeland</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor='city'>City</label>
                                <br />
                                <select
                                    className='input'
                                    onChange={changeHandler}
                                    name="city"
                                    id="city"
                                    value={formData.city}
                                >
                                    <option value="Jaipur">Jaipur</option>
                                    <option value="Ajmer">Ajmer</option>
                                    <option value="Udaipur">Udaipur</option>
                                    <option value="Banglore">Banglore</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Delhi">Delhi</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <br />
                    <label htmlFor='panno'>PAN No.</label>
                    <br />
                    <input
                        onChange={changeHandler}
                        value={formData.panno}
                        className='input'
                        type="number"
                        name='panno'
                        placeholder='Enter your PAN No.'
                    />
                    <br />
                    <label htmlFor='adharno'>Aadhar No.</label>
                    <br />
                    <input
                        onChange={changeHandler}
                        value={formData.adharno}
                        className='input'
                        type="number"
                        name='adharno'
                        placeholder='Enter your Aadhar No.'
                    />
                    <br />
                    <button type="submit" className='button'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;