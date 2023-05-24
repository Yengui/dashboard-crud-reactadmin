import React from "react";

import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

function CadreList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="nom" />
        <TextField source="prenom" />
        <TextField source="cin" />
        <TextField source="email" />
        <EditButton resource="cadre_admin" />
        <DeleteButton resource="cadre_admin" />
      </Datagrid>
    </List>
  );
}

export default CadreList;
