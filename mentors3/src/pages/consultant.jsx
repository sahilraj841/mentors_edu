import React, { useState } from 'react';

export default function Consultant() {
  // State hooks for each form field
  const [memberType, setMemberType] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [email, setEmail] = useState('');
  const [experienceDetails, setExperienceDetails] = useState('');
  const [city, setCity] = useState('');
  const [stateVal, setStateVal] = useState('');
  const [pincode, setPincode] = useState('');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [agree, setAgree] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      memberType,
      applicantName,
      phoneNumber,
      whatsappNumber,
      email,
      experienceDetails,
      city,
      state: stateVal,
      pincode,
      aadhaarNumber,
      panNumber,
      agree,
    };
    console.log('Form Data:', formData);
    // TODO: Submit the formData to your backend API
  };

  return (
    <>
      <div className="consultant-container">
        <div className="consultant-card">
          <h2 className="consultant-title">Partner As Education Consultant</h2>
          <p className="consultant-subtitle">With One Of India’s Leading Education Brands</p>
          <form onSubmit={handleSubmit} className="form-grid">
            {/* Full width field */}
            <div className="form-group full-width">
              <label htmlFor="memberType">Member Type</label>
              <select
                id="memberType"
                value={memberType}
                onChange={(e) => setMemberType(e.target.value)}
                required
              >
                <option value="">Select Member Type</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="counselor">Counselor</option>
              </select>
            </div>
            {/* Three column row */}
            <div className="form-group">
              <label htmlFor="applicantName">Applicant Name</label>
              <input
                type="text"
                id="applicantName"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="whatsappNumber">WhatsApp Number</label>
              <input
                type="tel"
                id="whatsappNumber"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* Full width textarea */}
            <div className="form-group full-width">
              <label htmlFor="experienceDetails">Experience Details</label>
              <textarea
                id="experienceDetails"
                value={experienceDetails}
                onChange={(e) => setExperienceDetails(e.target.value)}
                rows="3"
              />
            </div>
            {/* Three column row */}
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="stateVal">State</label>
              <input
                type="text"
                id="stateVal"
                value={stateVal}
                onChange={(e) => setStateVal(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode</label>
              <input
                type="text"
                id="pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                required
              />
            </div>
            {/* Three column row */}
            <div className="form-group">
              <label htmlFor="aadhaarNumber">Aadhaar Number</label>
              <input
                type="text"
                id="aadhaarNumber"
                value={aadhaarNumber}
                onChange={(e) => setAadhaarNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="panNumber">PAN Number</label>
              <input
                type="text"
                id="panNumber"
                value={panNumber}
                onChange={(e) => setPanNumber(e.target.value)}
                required
              />
            </div>
            {/* Full width checkbox */}
            <div className="form-group full-width checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  required
                />{' '}
                I agree to be contacted by the team of Mentors
              </label>
            </div>
            {/* Note and Submit */}
            <div className="form-group full-width">
              <p className="note">
                It is not a full-time employment opportunity with Mentors and is only part-time counselling.
              </p>
            </div>
            <div className="form-group full-width">
              <button type="submit" className="submit-btn">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Inline CSS */}
      <style>{`
        /* Global reset and improved font */
        * {
          box-sizing: border-box;
        }
        body, input, select, textarea {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        /* Background container with image overlay and smooth gradient */
        .consultant-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          background: linear-gradient(135deg, rgba(224,247,250,0.85), rgba(241,248,233,0.85)), url('https://source.unsplash.com/1600x900/?education,technology');
          background-size: cover;
          background-position: center;
          min-height: 100vh;
          width: 100%;
        }
        
        /* Card styling with enhanced shadow and border radius */
        .consultant-card {
          background: rgba(255,255,255,0.98);
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          width: 100%;
          max-width: 1200px;
          animation: fadeIn 0.8s ease-in-out;
        }
        
        /* Titles */
        .consultant-title {
          margin-bottom: 0.5rem;
          font-size: 2.4rem;
          text-align: center;
          color: #222;
        }
        
        .consultant-subtitle {
          margin-bottom: 1.5rem;
          text-align: center;
          color: #555;
          font-size: 1.2rem;
        }
        
        /* Grid layout for form with three columns */
        .form-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
        }
        
        /* Full width items spanning all three columns */
        .full-width {
          grid-column: span 3;
        }
        
        /* Form groups */
        .form-group {
          display: flex;
          flex-direction: column;
        }
        
        .form-group label {
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #333;
        }
        
        /* Input styling with subtle shadow and transition */
        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.8rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
          transition: border 0.3s ease, box-shadow 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #007bff;
          box-shadow: 0 0 8px rgba(0,123,255,0.4);
          outline: none;
        }
        
        /* Checkbox styling */
        .checkbox-group {
          flex-direction: row;
          align-items: center;
        }
        
        .checkbox-group input {
          margin-right: 0.5rem;
          width: 20px;
          height: 20px;
        }
        
        /* Note text */
        .note {
          font-style: italic;
          margin-bottom: 1.2rem;
          color: #777;
          font-size: 0.95rem;
        }
        
        /* Submit button with hover and active effects */
        .submit-btn {
          background: #007bff;
          color: #fff;
          border: none;
          padding: 1rem;
          width: 100%;
          border-radius: 8px;
          font-size: 1.15rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }
        
        .submit-btn:hover {
          background: #0056b3;
          transform: translateY(-2px);
        }
        
        .submit-btn:active {
          transform: translateY(0);
        }
        
        /* Fade in animation */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Responsive adjustments for smaller screens */
        @media (max-width: 992px) {
          .form-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .full-width {
            grid-column: span 2;
          }
        }
        
        @media (max-width: 600px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .full-width {
            grid-column: span 1;
          }
          .consultant-card {
            padding: 1.5rem;
          }
          .consultant-title {
            font-size: 1.8rem;
          }
          .consultant-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
