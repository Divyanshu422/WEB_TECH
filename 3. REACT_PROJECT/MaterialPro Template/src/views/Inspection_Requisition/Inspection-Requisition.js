import React, { useEffect, useState } from 'react';
import { Button, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; // Import Modal from reactstrap
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import TicketFilter from '../../components/apps/ticket/TicketFilter';

const InspectionRequisition1 = () => {
  const [data, setData] = useState([]);
  const [deleteRecord, setDeleteRecord] = useState(null); // Track record to delete
  const [showModal, setShowModal] = useState(false); // Control modal visibility
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/inspection-requisitions');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/inspection-requisitions/${deleteRecord}`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) {
        throw new Error('Failed to delete item');
      }
      const newData = data.filter(item => item.requisitionNo !== deleteRecord);
      setData(newData);
      setShowModal(false); // Close modal after successful deletion
    } catch (err) {
      console.error('Error deleting record:', err);
    }
  };

  const handleEdit = (requisitionNo) => {
    // Handle edit action
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const columns = [
    {
      Header: 'Requisition No',
      accessor: 'requisitionNo',
    },

    {
      Header: 'INAMS Req No',
      accessor: 'inamsReqNo',
    },

    {
      Header: 'Requested By',
      accessor: 'requestBy',
    },
    {
      Header: 'Requisition Date',
      accessor: 'requisitionDate',
    },

    {
      Header: 'Operation Name',
      accessor: 'operationName',
    },

    {
      Header: 'Status',
      accessor: 'status',
    },
    // other columns...
    {
      Header: 'Actions',
      filterable: false,
      sortable: false,
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon 
            icon={faPencilAlt} 
            onClick={() => handleEdit(row.requisitionNo)} 
            style={{ color: 'blue', marginRight: '10px' }}
          />
          <FontAwesomeIcon 
            icon={faTrash} 
            onClick={() => { 
              setDeleteRecord(row.requisitionNo); 
              toggleModal(); 
            }} 
            style={{ color: 'red' }}
          />
        </>
      ),
    },
  ];

  return (
    <Container>
      <BreadCrumbs />
      <ComponentCard 
        title={
          <div>
            {/* <TicketFilter></TicketFilter> */}
            <Button
              className="btn"
              color="primary"
              style={{ padding: '4px 10px', fontSize: '12px', marginBottom: '10px' }}
              onClick={() => navigate('/Inspection_Requisition/Inspection-Requisition2')}
            >
              + Add IR
            </Button>
            <ReactTable
             
              data={data}
              
              filterable
              sortable
              showPaginationBottom
              columns={columns}
              defaultPageSize={5}
              style={{
                height: '450px',
              }}
              className=" -highlight"
            />
          </div>
        }
      />
      <Modal isOpen={showModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Confirmation</ModalHeader>
        <ModalBody>
          Are you sure you want to delete this record?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleDelete}>Yes</Button>
          <Button color="secondary" onClick={toggleModal}>No</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default InspectionRequisition1;
