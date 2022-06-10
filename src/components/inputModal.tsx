import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { AddGift } from './addGift';
import s from '../style/modal.module.css'
import gift from '../assets/1añada-el-icono-del-esquema-de-la-caja-regalo-134826450-removebg-preview.png';
import { Props } from "../types/Props"

export default function InputModal({setLista, lista}: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div >
      <div className={s.btn_modal}>
        <Button onClick={handleOpen}>
          <img src={gift} alt='gift' height='50px' width='50px'/>
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <AddGift setLista={setLista} lista={lista} handleClose={handleClose}/>
        </Box>
      </Modal>
    </div>
  );
}

const style = {
  position: 'absolute' as 'absolute',
  top: '35%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'antiquewhite',
  border: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: 2.5
};