import { ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import RowStack from '../auxiliary/RowStack';

export type ContactItemProps = {
  title: string;
  href?: string;
  icon: React.ReactElement;
};

const ContactItem: React.FC<ContactItemProps> = ({ title, href, icon }) => {
  const contactArr = title.split(' ');
  const [contactMeta, ...contactData] = contactArr;

  return (
    <MenuItem
      sx={{
        whiteSpace: 'unset'
      }}
      onClick={href ? () => window.open(href, '_blank') : undefined}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>
        <RowStack spacing={1}>
          <Typography fontWeight={600}>{contactMeta}</Typography>
          <Typography>{contactData.join(' ')}</Typography>
        </RowStack>
      </ListItemText>
    </MenuItem>
  );
};

export default ContactItem;
