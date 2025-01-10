import React from 'react'

const EmployeeCard = ({ details }) => {
    const { id, name, designation, contact, responsibility } = details;

    console.log(details)
    return (
        <tr className='grid lg:grid-cols-[1fr_2fr_2.5fr_2fr_4fr] grid-cols-[.5fr_1fr_1.5fr_1.2fr_1.5fr] text-primary odd:bg-bg-4 even:bg-bg-3'>
            <td className='table-body'>{id}</td>
            <td className='table-body'>{name}</td>
            <td className='table-body'>{designation}</td>
            <td className='table-body'>{contact}</td>
            <td className='table-body text-left'>{responsibility}</td>
        </tr>
    )
}

export default EmployeeCard