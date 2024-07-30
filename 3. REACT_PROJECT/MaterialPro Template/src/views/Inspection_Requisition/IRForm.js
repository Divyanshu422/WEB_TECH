import React, { useState } from 'react';
import './FormComponent.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IRList from'./IRList';


const IRForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    requisitionNo: '',
    demandId: '',
    inamsReqNo: '',
    workCenter: '',
    requestBy: '',
    requisitionDate: '',
    category: '',
    priority: '',
    authority: '',
    operationName: '',
    remarks: '',
    requSubmittedTo: '',
    copiesTo: '',
  });

  const [errors, setErrors] = useState({}); // To store validation errors

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  
    if (name === 'requisitionNo') {
      await checkRequisitionNo(value);
    }
  };
  
  const checkRequisitionNo = async (requisitionNo) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/inspection-requisitions/${requisitionNo}`
      );
  
      // Check if the response is valid and has a status property
      if (response && response.status === 200) {
        setErrors((prev) => ({
          ...prev,
          requisitionNo: 'already exists.',
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          requisitionNo: undefined,
        }));
      }
    } catch (error) {
      // Check if error.response exists and has a status property
      if (error.response && error.response.status === 404) {
        setErrors((prev) => ({
          ...prev,
          requisitionNo: undefined,
        }));
      } else {
        // Handle other errors or unknown error states
        console.error("An unexpected error occurred:", error);
        setErrors((prev) => ({
          ...prev,
          requisitionNo: '',
        }));
      }
    }
  };
  

  const handleCreate = () => {
    navigate('/AddForm', { state: { inspectionRequision: formData } });
  };

  const handleSubmit = async (e) => {
   
      e.preventDefault();
  
      if (Object.values(errors).some((error) => error)) {
        console.error('Validation errors:', errors);
        return;
      }
  
      try {
        const formattedData = {
          requisitionNo: formData.requisitionNo,
          demandId: formData.demandId,
          inamsReqNo: formData.inamsReqNo,
          workCenter: formData.workCenter,
          requestBy: formData.requestBy,
          requisitionDate: formData.requisitionDate,
          category: formData.category,
          priority: formData.priority,
          authority: formData.authority,
          operationName: formData.operationName,
          remarks: formData.remarks,
          requSubmittedTo: formData.requSubmittedTo,
          copiesTo: formData.copiesTo,
        };
  
        const response = await fetch(
          `http://localhost:4000/api/inspection-requisitions/submit`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formattedData),
          }
        );
  
        if (response.ok) {
          console.log('Data saved successfully!');
          toast.success("Data Submitted as Draft Successfully!");
          navigate('/IRList');
        } else {
          console.error('Failed to save data:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

  const handleCancle = () => {
    navigate('/IRList');
  };

  const handleSaveDraft = async (e) => {
    e.preventDefault();

    if (Object.values(errors).some((error) => error)) {
      console.error('Validation errors:', errors);
      return;
    }

    try {
      const formattedData = {
        requisitionNo: formData.requisitionNo,
        demandId: formData.demandId,
        inamsReqNo: formData.inamsReqNo,
        workCenter: formData.workCenter,
        requestBy: formData.requestBy,
        requisitionDate: formData.requisitionDate,
        category: formData.category,
        priority: formData.priority,
        authority: formData.authority,
        operationName: formData.operationName,
        remarks: formData.remarks,
        requSubmittedTo: formData.requSubmittedTo,
        copiesTo: formData.copiesTo,
      };

      const response = await fetch(
        `http://localhost:4000/api/inspection-requisitions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formattedData),
        }
      );

      if (response.ok) {
        console.log('Data saved successfully!');
        toast.success("Data Submitted as Draft Successfully!");
        navigate('/IRList');
      } else {
        console.error('Failed to save data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
     <h5>Home {'>'}IR List {'>'}<b>Inspection Requisition Creation</b></h5>
      <div className="form-container">

        <table className="form-table">
          <tbody>
            {/* Row 1 */}
            <tr>
              
               {/* <label htmlFor="requisitionNo">Requisition No:</label>
                <input
                  type="text"
                  id="requisitionNo"
                  name="requisitionNo"
                  value={formData.requisitionNo}
                  onChange={handleChange}
                  required
 
                {errors.requisitionNo && (
                  <span className="error">{errors.requisitionNo}</span>
                )} />*/}
              
              <td>
                <label htmlFor="demandId">Demand ID:</label>
                <input
                  type="text"
                  id="demandId"
                  name="demandId"
                  value={formData.demandId}
                  onChange={handleChange}
                  required
                />
              </td>
              <td>
                <label htmlFor="inamsReqNo">INAMS Req No:</label>
                <input
                  type="text"
                  id="inamsReqNo"
                  name="inamsReqNo"
                  value={formData.inamsReqNo}
                  onChange={handleChange}
                  required
                />
              </td>
              <td>
              <label htmlFor="workCenter">Work Center:</label>
              <input type="text" id="workCenter" name="workCenter" value={formData.workCenter} onChange={handleChange}  required />
            </td>
            </tr>


          {/* Row 2 */}
          <tr>
           
            <td>
              <label htmlFor="requestBy">Request By:</label>
              <input type="text" id="requestBy" name="requestBy" value={formData.requestBy} onChange={handleChange} required/>
            </td>
            <td>
              <label htmlFor="requisitionDate">Requisition Date:</label>
              <input type="date" id="requisitionDate" name="requisitionDate" value={formData.requisitionDate} onChange={handleChange} required/>
            </td>
            <td>
              <label htmlFor="category">Category:</label>
              <select id="category" name="category" value={formData.category} onChange={handleChange} required>
                <option value="category1">Planned</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>
            </td>
          </tr>

          {/* Row 3 */}
          <tr>
           
            <td>
              <label htmlFor="priority">Priority:</label>
              <select id="priority" name="priority" value={formData.priority} onChange={handleChange}required>
                <option value="high">Immediate</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </td>
            <td>
              <label htmlFor="authority">Authority:</label>
              <input type="text" id="authority" name="authority" value={formData.authority} onChange={handleChange} />
            </td>
            <td>
              <label htmlFor="operationName">Operation Name:</label>
              <select id="operationName" name="operationName" value={formData.operationName} onChange={handleChange}>
                <option value="operation1">Preparation of Torpedo</option>
                <option value="operation2">Operation 2</option>
                <option value="operation3">Operation 3</option>
              </select>
            </td>
          </tr>
          

         
         
          {/* Row 5 */}
          <tr>
          <td>
              <label htmlFor="remarks">Remarks:</label>
              <input type="text" id="remarks" name="remarks"  value={formData.remarks} onChange={handleChange} />
            </td>
            <td>
              <label htmlFor="requSubmittedTo">RequestedSubmittedTo(NAI Section):</label>
              <input type="text" id="requSubmittedTo" name="requSubmittedTo" value={formData.requSubmittedTo} onChange={handleChange} />
            </td>
            <td>
              <label htmlFor="copiesTo">Copies To:</label>
              <input type="text" id="copiesTo" name="copiesTo" value={formData.copiesTo} onChange={handleChange} />
            </td>
           
           
          </tr>
            <tr>
              <td colSpan="3" style={{ textAlign: 'center' }}>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={errors.requisitionNo}
                >
                  Submit
                </button>
              
                <button
                  type="draft-button"
                  onClick={handleSaveDraft}
                  disabled={errors.requisitionNo}
                >
                  Save as Draft
                </button>
             
                <button
                  type="cancle-button"
                  onClick={handleCancle}
                >
                  Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
       
      </div>
      <ToastContainer />
    </div>
  );
};

export default IRForm;
