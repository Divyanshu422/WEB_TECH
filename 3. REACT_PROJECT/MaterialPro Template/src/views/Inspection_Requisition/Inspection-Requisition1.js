import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component'; // Importing DataTable component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'reactstrap';
import ComponentCard from '../../components/ComponentCard';
import { Button, ButtonGroup, Row, Col } from 'reactstrap';

const InspectionRequisition1 = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // To store filtered data
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(''); // Search query
  const [statusFilter, setStatusFilter] = useState(''); // Status filter
  const [expandedRows, setExpandedRows] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/inspection-requisitions'); // Replace with your backend URL
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData);
      setFilteredData(jsonData); // Initialize with full data set
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Filter data based on search query and status filter
    let newFilteredData = data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(search.toLowerCase())
      )
    );

    if (statusFilter) {
      newFilteredData = newFilteredData.filter((item) => item.status === statusFilter);
    }

    setFilteredData(newFilteredData);
  }, [search, data, statusFilter]);

  const handleCreate = () => {
    navigate('/Inspection_Requisition/Inspection-Requisition2');
  };

  const handleEdit = (index) => {
    const itemToEdit = filteredData[index];
    navigate('/InspectionRequisition', { state: { item: itemToEdit } });
  };

  const handleDelete = async (index) => {
    try {
      const item = filteredData[index];
      const response = await fetch(
        `http://localhost:5000/api/inspection-requisitions/${item.requisitionNo}`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) {
        throw new Error('Failed to delete item');
      }
      const newData = filteredData.filter((_, i) => i !== index);
      setData(newData); // Update main data set
      setFilteredData(newData); // Update filtered data
    } catch (err) {
      setError(err.message);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const columns = [
    {
      name: 'Requisition No',
      selector: (row) => row.requisitionNo,
      minWidth: '150px',
      sortable: true,
      visible: true,
      rowPinningDisplayMode: 'select-sticky',
    },
    {
      name: 'Request By',
      selector: (row) => row.requestBy,
      minWidth: '140px',
      sortable: true,
    },
    {
      name: 'INAMS Req No',
      selector: (row) => row.inamsReqNo,
      minWidth: '140px',
      sortable: true,
    },
    {
      name: 'Requisition Date',
      selector: (row) => row.requisitionDate,
      minWidth: '140px',
      sortable: true,
    },
    {
      name: 'Operation Name',
      selector: (row) => row.operationName,
      minWidth: '140px',
      sortable: true,
    },
    {
      name: 'Status',
      selector: 'status',
      minWidth: '100px',
      cell: (row) => (
        <div style={{ textAlign: 'center', width: '100%', backgroundColor: getStatusColor(row.status), height: '50%', borderRadius: '10px', }}>
          {row.status}
        </div>
      ),
      filterDropdown: ({ name, id, onFilter, setSelected }) => (
        <select
          id={id}
          name={name}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            onFilter(e.target.value || '');
          }}
          style={{ padding: '5px', fontSize: '14px' }}
          value={statusFilter}
        >
          <option value="">All</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>
      ),
    },
  ];

  // Function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        // return '#33A532';
        return '#90D26D';
      case 'Pending':
        // return '#FF9D00';
        return '#FFDB5C';
      case 'Rejected':
        // return '#f01e2c';
        return '#FA7070';
      default:
        return 'white';
    }
  };

  return (
    <>
      <div>
        <div className="new-item-form">
          <BreadCrumbs />
        </div>

        <ComponentCard title={"Inspection Requisition"}>
          <Container>
            <Row>
              <Col>
              <Button className="btn btn-small" outline color="primary" style={{ padding: '4px 10px', fontSize: '12px' }} onClick={handleCreate}>New</Button>

              </Col>
              <Col>
                <div className="search-container" style={{ textAlign: 'right' }}>
                  <input
                    type="text"
                    placeholder="Search Record"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                    style={{ fontSize: '14px' }}
                  />
                </div>
              </Col>
            </Row>
            <div style={{ overflowX: 'auto' }}>
              <DataTable
                columns={columns}
                data={filteredData}
                pagination
                fixedHeader
                paginationPerPage={10}
                paginationRowsPerPageOptions={[10, 20, 30]}
                // expandableRows
                // expandableRowExpanded={(row) => expandedRows.includes(row.id)}
                // onRowExpandToggled={(expanded, row) => {
                //   const rows = expanded ? [...expandedRows, row.id] : expandedRows.filter(id => id !== row.id);
                //   setExpandedRows(rows);
                // }}
                expandableRowsComponent={<ExpandedComponent />}
                customStyles={{
                  headRow: {
                    style: {
                      backgroundColor: '',
                      color: '',
                      paddingTop: '1px',
                      minHeight: '35px',
                      fontWeight: 'bold',
                    },
                  },
                }}
              />
            </div>
          </Container>
        </ComponentCard>
      </div>
    </>
  );
};

const ExpandedComponent = ({ data }) => (
  <div>
    <p>{data.details}</p>
    {/* Add any additional content you want to display in the expanded row */}
    <h1>Hello</h1>
  </div>
);

export default InspectionRequisition1;
