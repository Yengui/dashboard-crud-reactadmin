import React from "react";
import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";

function EnseignantCreate(props) {
  return (
    <Create title="creer un enseignant" {...props}>
      <SimpleForm>
        <NumberInput source="cin" />
        <TextInput source="nom" />
        <TextInput source="prenom" />
        <TextInput source="email" />
      </SimpleForm>
    </Create>
  );
}

export default EnseignantCreate;
