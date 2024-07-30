import React, { useState } from 'react';
import { Col, Card, CardTitle, CardBody, Form, FormGroup, Label, Input, Row, Button, Alert } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';

const InspectionRequisition2 = () => {
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

  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

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
      const response = await axios.get(`http://localhost:5000/api/inspection-requisitions/${requisitionNo}`);

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
      if (error.response && error.response.status === 404) {
        setErrors((prev) => ({
          ...prev,
          requisitionNo: undefined,
        }));
      } else {
        console.error('An unexpected error occurred:', error);
        setErrors((prev) => ({
          ...prev,
          requisitionNo: '',
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(errors).some((error) => error)) {
      console.error('Validation errors:', errors);
      return;
    }

    try {
      const formattedData = { ...formData };

      const response = await fetch(`http://localhost:5000/api/inspection-requisitions/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        console.log('Data saved successfully!');
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
        //navigate('/IRList');
      } else {
        console.error('Failed to save data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCancel = () => {
    //navigate('/IRList');
  };

  const handleSaveDraft = async (e) => {
    e.preventDefault();

    if (Object.values(errors).some((error) => error)) {
      console.error('Validation errors:', errors);
      return;
    }

    try {
      const formattedData = { ...formData };

      const response = await fetch(`http://localhost:5000/api/inspection-requisitions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        console.log('Data saved successfully!');
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
        //navigate('/IRList');
      } else {
        console.error('Failed to save data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <BreadCrumbs />
      <div className="form-container">
        <Card>
          <CardTitle tag="h4" className="border-bottom bg-primary p-3 mb-0 text-white">
            IR Form{' '}
          </CardTitle>{' '}
          <CardBody>
            <Form>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label> Demand ID: </Label>{' '}
                    <Input type="text" id="demandId" name="demandId" value={formData.demandId} onChange={handleChange} required />
                  </FormGroup>{' '}
                </Col>{' '}
                <Col md="6">
                  <FormGroup>
                    <Label> INAMS Req No: </Label>{' '}
                    <Input type="text" id="inamsReqNo" name="inamsReqNo" value={formData.inamsReqNo} onChange={handleChange} required />
                  </FormGroup>{' '}
                </Col>{' '}
                <Col md="6">
                  <FormGroup>
                    <Label> Work Center: </Label>{' '}
                    <Input type="text" id="workCenter" name="workCenter" value={formData.workCenter} onChange={handleChange} required />
                  </FormGroup>{' '}
                </Col>{' '}
                <Col md="6">
                  <FormGroup>
                    <Label> Request By: </Label>{' '}
                    <Input type="text" id="requestBy" name="requestBy" value={formData.requestBy} onChange={handleChange} required />
                  </FormGroup>{' '}
                </Col>{' '}
                <Col md="6">
                  <FormGroup>
                    <Label> Requisition Date: </Label>{' '}
                    <Input type="date" id="requisitionDate" name="requisitionDate" value={formData.requisitionDate} onChange={handleChange} required />
                  </FormGroup>{' '}
                </Col>{' '}
                <Col md="6">
                  <FormGroup>
                    <Label> Category: </Label>{' '}
                    <Input type="select" id="category" name="category" value={formData.category} onChange={handleChange} required>
                      <option value="category1"> Planned </option>{' '}
                      <option value="category2"> Category 2 </option>{' '}
                      <option value="category3"> Category 3 </option>{' '}
                    </Input>{' '}
                  </FormGroup>{' '}
                </Col>{' '}
                <Col md="6">
                  <FormGroup>
                    <Label> Priority: </Label>{' '}
                    <Input type="select" id="priority" name="priority" value={formData.priority} onChange={handleChange} required>
                      <option value="high"> Immediate </option>{' '}
                      <option value="medium"> Medium </option> <option value="low"> Low </option> {' '}{' '}
                    </Input>{' '}
                  </FormGroup>{' '}
                </Col>{' '}
                <Col md="6">
                  <FormGroup>
                    <Label> Authority: </Label>{' '}
                    <Input type="text" id="authority" name="authority" value={formData.authority} onChange={handleChange} />
                  </FormGroup>{' '}
                </Col>{' '}
                <Col md="6">
                  <FormGroup>
                    <Label> Operation Name: </Label>{' '}
                    <Input type="select" id="operationName" name="operationName" value={formData.operationName} onChange={handleChange}>
                      <option value="operation1"> Preparation of Torpedo </option>{' '}
                      <option value="operation2"> Operation 2 </option>{' '}
                      <option value="operation3"> Operation 3 </option>{' '}
                    </Input>{' '}
                  </FormGroup>{' '}
                </Col>{' '}
                <Col md="6">
                  <FormGroup>
                    <Label> Remarks: </Label>{' '}
                    <Input type="text" id="remarks" name="remarks" value={formData.remarks} onChange={handleChange} />
                  </FormGroup>{' '}
                </Col>{' '}
                <Col md="6">
                  <FormGroup>
                    <Label> Requested Submitted To(NAI Section): </Label>{' '}
                    <Input type="text" id="requSubmittedTo" name="requSubmittedTo" value={formData.requSubmittedTo} onChange={handleChange} />
                  </FormGroup>{' '}
                </Col>{' '}
                <Col md="6">
                  <FormGroup>
                    <Label> Copies To: </Label>{' '}
                    <Input type="text" id="copiesTo" name="copiesTo" value={formData.copiesTo} onChange={handleChange} />
                  </FormGroup>{' '}
                </Col>{' '}
              </Row>{' '}
              <Button type="submit" onClick={handleSubmit} disabled={Object.values(errors).some((error) => error)}>
                Submit{' '}
              </Button>{' '}
              <Button type="button" onClick={handleSaveDraft} disabled={Object.values(errors).some((error) => error)}>
                Save as Draft{' '}
              </Button>{' '}
              <Button type="button" onClick={handleCancel}>
                Cancel{' '}
              </Button>{' '}
            </Form>{' '}
            {saved && <Alert color="success"> Data saved successfully! </Alert>}{' '}
          </CardBody>{' '}
        </Card>{' '}
      </div>{' '}
    </div>
  );
};

export default InspectionRequisition2;
