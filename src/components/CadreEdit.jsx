import React from "react";
import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";

function CadreEdit(props) {
  return (
    <Edit title="modifier un cadre administratif" {...props}>
      <SimpleForm>
        <NumberInput disabled source="cin" />
        <TextInput source="nom" />
        <TextInput source="prenom" />
        <TextInput source="email" />
      </SimpleForm>
    </Edit>
  );
}

export default CadreEdit;
