import React,{useEffect, useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory,{textFilter} from 'react-bootstrap-table2-filter';
import { Link } from 'react-router-dom';

function TableComponent() {
  const [userList, setUserList]= useState([]);

  const columns = [
    {dataField: 'id',text: 'Id',sort: true},
    {dataField: 'name',text: 'Name',sort: true, filter: textFilter()},
    {dataField: 'company.name',text: 'Company',sort: true,filter: textFilter()},
    {dataField: 'username',text: 'Username/Blogs Link',
    formatter: (cell, row) =>
      <Link to={`/blogsForUser/`+ row.id}> {cell} </Link>
    }
  ];

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUserList(data);
      })
      .catch(error =>console.log(error));
  }, [])
  
  return (
    <div  className='tableComponent'>   
    <BootstrapTable bootstrap4 keyField='id' data={userList} filter={filterFactory()} columns={columns} />
    </div>
  )
}

export default TableComponent;