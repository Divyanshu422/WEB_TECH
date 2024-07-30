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

const NadPostPage = () => {
  const [nadPosts, setNadPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedNadPost, setEditedNadPost] = useState({
    id: null,
    postName: '',
    code: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchNadPosts();
  }, []);

  const fetchNadPosts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8089/nad-posts/getall');
      if (!response.ok) {
        throw new Error('Failed to fetch NAD Posts');
      }
      const data = await response.json();
      setNadPosts(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching NAD Posts:', error);
    }
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    setIsEditMode(false); // Reset edit mode when modal is closed
    setEditedNadPost({
      id: null,
      postName: '',
      code: '',
    }); // Reset edited NAD Post
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedNadPost({
      ...editedNadPost,
      [name]: value,
    });
  };

  const handleAddNadPost = async () => {
    try {
      let url = 'http://127.0.0.1:8089/nad-posts/set';
      let method = 'POST';
      if (isEditMode) {
        url = `http://127.0.0.1:8089/nad-posts/update/${editedNadPost.id}`;
        method = 'PUT';
      }
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedNadPost),
      });
      if (!response.ok) {
        throw new Error('Failed to add/update NAD Post');
      }
      toggleModal(); // Close modal after successful addition/update
      fetchNadPosts(); // Fetch updated list of NAD Posts
    } catch (error) {
      console.error('Error adding/updating NAD Post:', error);
    }
  };

  const handleEditNadPost = (rowData) => {
    setIsEditMode(true);
    setEditedNadPost(rowData);
    setModalOpen(true);
  };

  const handleDeleteNadPost = async (rowData) => {
    console.log(rowData);
    const isConfirmed = window.confirm(`Are you sure you want to delete ${rowData.postName}?`);
    if (isConfirmed) {
      try {
        const response = await fetch(`http://127.0.0.1:8089/nad-posts/${rowData.id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete NAD Post');
        }
        fetchNadPosts(); // Fetch updated list of NAD Posts after deletion
      } catch (error) {
        console.error('Error deleting NAD Post:', error);
      }
    }
  };

  const columns = [
    {
      Header: 'Post Name',
      accessor: 'postName',
    },
    {
      Header: 'Code',
      accessor: 'code',
    },
    {
      Header: 'Actions',
      Cell: ({ row }) => (
        <div>
          {' '}
          {/* <Button
                                color="outline-info"
                                size="sm"
                                style={{ padding: '4px 10px', fontSize: '12px', marginBottom: '10px' }}
                                onClick={() => handleEditNadPost(row._original)}
                              >
                                <Icon.Edit2 size={20} />{' '}
                              </Button>{' '}
                              <Button
                                color="outline-danger"
                                size="sm"
                                style={{ padding: '4px 10px', fontSize: '12px', marginBottom: '10px' }}
                                onClick={() => handleDeleteNadPost(row._original)}
                              >
                                <Icon.Trash2 size={20} />{' '}
                              </Button>{' '} */}{' '}
          <Icon.Edit
            size={20}
            style={{ color: 'blue' }}
            onClick={() => handleEditNadPost(row._original)}
          />{' '}
          <Icon.Trash2
            size={20}
            style={{ color: 'red' }}
            onClick={() => handleDeleteNadPost(row._original)}
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
          {isEditMode ? 'Edit Post' : 'Add New Post'}{' '}
        </ModalHeader>{' '}
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="postName"> Post Name </Label>{' '}
              <Input
                type="text"
                name="postName"
                id="postName"
                value={editedNadPost.postName}
                onChange={handleChange}
              />{' '}
            </FormGroup>{' '}
            <FormGroup>
              <Label for="code"> Code </Label>{' '}
              <Input
                type="text"
                name="code"
                id="code"
                value={editedNadPost.code}
                onChange={handleChange}
              />{' '}
            </FormGroup>{' '}
          </Form>{' '}
        </ModalBody>{' '}
        <ModalFooter>
          <Button color="outline-primary" onClick={handleAddNadPost}>
            {' '}
            {isEditMode ? 'Save Changes' : 'Add'}{' '}
          </Button>{' '}
          <Button color="outline-secondary" onClick={toggleModal}>
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
              <Icon.Plus size={20} />
              Add{' '}
            </Button>{' '}
            <ReactTable
              data={nadPosts}
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

export default NadPostPage;
