import React, { useState, useEffect } from 'react';
import Table from '../../components/table/Table';
import { fetchUsers } from '../../services/userServices/userservices';

const customerTableHead = [
    '',
    'username',
    'email',
    'level',
    'speciality',
    'Actions'
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
    <tr key={index}>
        <td></td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>{item.level}</td>
        <td>{item.speciality}</td>
    </tr>
);

const Etudiant = () => {
    const [customerList, setCustomerList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchUsers(); // Appel de la fonction fetchUsers
                setCustomerList(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2 className="page-header">Etudiant</h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='3'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Etudiant;
