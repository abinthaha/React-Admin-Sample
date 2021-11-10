import * as React from "react";
import { List, Datagrid, DateField, TextField, ArrayField, useRecordContext } from 'react-admin';

const CustomTextField = ({ source }) => {
    const record = useRecordContext();
    return (<div>{record && record[source]}</div>);
};

const ConditionalDataField = ({source}) => {
    const record = useRecordContext();
    return (
        !record.isDate ? (<TextField source="value" />) : (<DateField source="value" />)
    );
};


export const PostList = (props) => (
    <List {...props}>
        <ArrayField source="data">
            <Datagrid>
                <CustomTextField source="name" />
                <ConditionalDataField source="value" />
            </Datagrid>
        </ArrayField>
    </List>
);