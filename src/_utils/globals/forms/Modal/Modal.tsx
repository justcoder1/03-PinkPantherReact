import { IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { MdClose } from 'react-icons/md';

import './Modal.css';

export interface ModalProps {
  show: boolean;
  hide?: () => void;
  title?: string;
  modalMinWidth?: number;
  modalMaxWidth?: number;
}

const AppModal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  show,
  hide,
  title,
  modalMinWidth,
  modalMaxWidth,
  children,
}) => {
  return (
    <>
      {show ? (
        <Stack justifyContent={'center'} alignItems={'center'} id="modalBackground" onClick={hide}>
          <Stack
            id="modalPanel"
            sx={{
              minWidth: modalMinWidth | 400,
              maxWidth: modalMaxWidth | 400,
            }}
          >
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ height: 40}}>
              <Typography variant='h6'>{title}</Typography>
              <IconButton onClick={hide}>
                <MdClose />
              </IconButton>
            </Stack>
            {children}
          </Stack>
        </Stack>
      ) : null}
    </>
  );
};

export default AppModal;
