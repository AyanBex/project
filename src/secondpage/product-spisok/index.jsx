import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

// jshint ignore:start

export const ItemSpisok = ({ children }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText primary={children} />
      </ListItemButton>
    </ListItem>
  );
};

// jshint ignore:end
