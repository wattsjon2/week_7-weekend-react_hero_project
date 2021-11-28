import  React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle    
} from '@mui/material';
import { DroneForm } from '../../components';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 650 },
  {
    field: 'fav_hero',
    headerName: 'Favorite Hero',
    width: 350,
  },
  {
    field: 'reason',
    headerName: 'Reason',
    width: 700,
  },

];

interface gridData{
  data:{
    id?:string; 
  }
}

export const DataTable = () =>{
    let { heroData, getData} = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])

    let handleOpen = () =>{
      setOpen(true)
    }

    let handleClose = () =>{
      setOpen(false)
    }

    let deleteData = async () => {
      await server_calls.delete(`${gridData[0]}`)
      getData()
    }

    console.log(gridData) // a list of the boxes checked

    return (
        <div style={{ height: 400, width: '100%'}}>
            <h2>Your Favorite Heros!</h2>
            <DataGrid rows={heroData} 
                      columns={columns} 
                      pageSize={5} 
                      checkboxSelection
                      onSelectionModelChange= { (newSelectionModel) => {setData(newSelectionModel);}}
                      {...heroData} 
                      />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant='contained' color='error' onClick={deleteData}>Delete</Button>
            {/* Dialog Popup Start*/}
            <Dialog open={open} onClose={handleClose} aria-labledby='form-dialog-title'>
              <DialogTitle id='form-dialog-title'>Update a Hero</DialogTitle>
              <DialogContent>
                <DialogContentText>Updating: {gridData[0]}</DialogContentText>
                  <DroneForm id= {`${gridData[0]}`}/>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color='warning'>Cancel</Button>
              </DialogActions>
            </Dialog>
        </div>
    )
}

