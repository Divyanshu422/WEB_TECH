/*
    * 1. accessor: In React Table, an accessor is a property of a column 
    * definition that specifies how to extract and format data for that 
    * column from a data object. It defines the key or path to the data 
    * value within a data object, enabling the table to display the 
    * appropriate data for each cell in that column.
*/
 
 export const Columns = [
    {
        Header: 'Id',
        accessor: 'id',
    },
    {
        Header: 'First Name',
        accessor: 'first_name'
    },
    {
        Header: 'Last Name',
        accessor: 'last_name'
    },
    // {
    //     Header: 'Email',
    //     accessor: 'email'
        
    // },
    {
        Header: 'Date of Birth',
        accessor: 'date_of_birth'
    },
    {
        Header: 'Phone',
        accessor: 'phone'
    },
    // {
    //     Header: 'Age',
    //     accessor: 'age'
    // },
    {
        Header: 'Country',
        accessor: 'country'
    }
 ]