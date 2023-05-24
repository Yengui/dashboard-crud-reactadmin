import React from "react";

import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

function EnseignantList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="nom" />
        <TextField source="prenom" />
        <TextField source="cin" />
        <TextField source="email" />
        <EditButton resource="enseignant" />
        <DeleteButton resource="enseignant" />
      </Datagrid>
    </List>
  );
}

export default EnseignantList;
