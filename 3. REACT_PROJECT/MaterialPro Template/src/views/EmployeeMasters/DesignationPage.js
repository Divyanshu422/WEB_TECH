import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import { useNavigate } from 'react-router-dom';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import * as Icon from 'react-feather';

const DesignationPage = () => {
  const [designations, setDesignations] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedDesignation, setEditedDesignation] = useState({
    id: null,
    designationName: '',
    code: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchDesignations();
  }, []);

  const fetchDesignations = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8089/designation/getall');
      if (!response.ok) {
        throw new Error('Failed to fetch designations');
      }
      const data = await response.json();
      setDesignations(data.data);
    } catch (error) {
      console.error('Error fetching designations:', error);
    }
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    setIsEditMode(false); // Reset edit mode when modal is closed
    setEditedDesignation({
      id: null,
      designationName: '',
      code: '',
    }); // Reset edited designation
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDesignation({
      ...editedDesignation,
      [name]: value,
    });
  };

  const handleAddDesignation = async () => {
    try {
      let url = 'http://127.0.0.1:8089/designation/set';
      let method = 'POST';
      if (isEditMode) {
        url = `http://127.0.0.1:8089/designation/${editedDesignation.id}`;
        method = 'PUT';
      }
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedDesignation),
      });
      if (!response.ok) {
        throw new Error('Failed to add/update designation');
      }
      toggleModal(); // Close modal after successful addition/update
      fetchDesignations(); // Fetch updated list of designations
    } catch (error) {
      console.error('Error adding/updating designation:', error);
    }
  };

  const handleEditDesignation = (rowData) => {
    setIsEditMode(true);
    setEditedDesignation(rowData);
    setModalOpen(true);
  };

  const handleDeleteDesignation = async (rowData) => {
    console.log(rowData);
    const isConfirmed = window.confirm(
      `Are you sure you want to delete ${rowData.designationName}?`,
    );
    if (isConfirmed) {
      try {
        const response = await fetch(`http://127.0.0.1:8089/designation/${rowData.id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete designation');
        }
        fetchDesignations(); // Fetch updated list of designations after deletion
      } catch (error) {
        console.error('Error deleting designation:', error);
      }
    }
  };

  const columns = [
    {
      Header: 'Designation Name',
      accessor: 'designationName',
    },
    {
      Header: 'Code',
      accessor: 'code',
    },
    {
      Header: 'Actions',
      Cell: ({ row }) => (
        <div style={{ textAlign: 'center' }}>
          {' '}
          {/* <Button
                                                                                                                color="outline-info"
                                                                                                                size="sm"
                                                                                                                style={{ padding: '4px 10px', fontSize: '12px', marginBottom: '10px' }}
                                                                                                                onClick={() => handleEditDesignation(row._original)}
                                                                                                              >
                                                                                                                <Icon.Edit size={20} />{' '}
                                                                                                              </Button>{' '}
                                                                                                              <Button
                                                                                                                color="outline-danger"
                                                                                                                size="sm"
                                                                                                                style={{ padding: '4px 10px', fontSize: '12px', marginBottom: '10px' }}
                                                                                                                onClick={() => handleDeleteDesignation(row._original)}
                                                                                                              >
                                                                                                                <Icon.Trash2 size={20} />{' '}
                                                                                                              </Button>{' '} */}{' '}
          <Icon.Edit
            size={20}
            style={{ color: 'blue' }}
            onClick={() => handleEditDesignation(row._original)}
          />{' '}
          <Icon.Trash2
            size={20}
            style={{ color: 'red' }}
            onClick={() => handleDeleteDesignation(row._original)}
          />{' '}
        </div>
      ),
    },
  ];

  return (
    <Container>
      <BreadCrumbs />
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          {' '}
          {isEditMode ? 'Edit Designation' : 'Add New Designation'}{' '}
        </ModalHeader>{' '}
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="designationName"> Designation Name </Label>{' '}
              <Input
                type="text"
                name="designationName"
                id="designationName"
                value={editedDesignation.designationName}
                onChange={handleChange}
              />{' '}
            </FormGroup>{' '}
            <FormGroup>
              <Label for="code"> Code </Label>{' '}
              <Input
                type="text"
                name="code"
                id="code"
                value={editedDesignation.code}
                onChange={handleChange}
              />{' '}
            </FormGroup>{' '}
          </Form>{' '}
        </ModalBody>{' '}
        <ModalFooter>
          <Button color="primary" onClick={handleAddDesignation}>
            {' '}
            {isEditMode ? 'Save Changes' : 'Add'}{' '}
          </Button>{' '}
          <Button color="secondary" onClick={toggleModal}>
            Cancel{' '}
          </Button>{' '}
        </ModalFooter>{' '}
      </Modal>{' '}
      <ComponentCard
        title={
          <div>
            <Button
              className="btn"
              color="outline-primary"
              style={{ padding: '4px 10px', fontSize: '12px', marginBottom: '10px' }}
              onClick={() => {
                setIsEditMode(false);
                toggleModal();
              }}
            >
              <Icon.Plus size={20} /> Add{' '}
            </Button>{' '}
            <ReactTable
              data={designations}
              filterable
              sortable
              showPaginationBottom
              columns={columns}
              defaultPageSize={5}
              style={{ height: '450px' }}
              className="-highlight"
            />
          </div>
        }
      />{' '}
    </Container>
  );
};

export default DesignationPage;
