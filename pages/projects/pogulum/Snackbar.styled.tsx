import {
  Snackbar,
  Alert,
  IconButton,
  styled,
  SnackbarProps,
  Typography,
  AlertProps
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RowStack from '@/components/auxiliary/RowStack';

type CustomSnackProps = {
  setOpen: (state: boolean) => void;
  open: boolean;
  content: string;
  color: AlertProps['color'];
};

const StyledSnackbar = styled(
  ({ setOpen, open, content, color, ...props }: CustomSnackProps & SnackbarProps) => (
    <Snackbar {...props} open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
      <Alert variant="filled" color={color}>
        <RowStack>
          <Typography>{content}</Typography>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </RowStack>
      </Alert>
    </Snackbar>
  )
)({
  '& .MuiAlert-root div:not(.MuiAlert-icon)': {
    width: 500,
    justifyContent: 'space-between'
  },
  '& .MuiIconButton-root': {
    padding: 0,
    justifySelf: 'center'
  },
  '& .MuiSvgIcon-root': {
    color: 'white',
    fontSize: '20px'
  }
});

export default StyledSnackbar;
