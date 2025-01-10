import React from 'react'
import { EMPLOYEE_DETAILS } from '../../constants/EmployeeData'
import EmployeeCard from './EmployeeCard'

const EmployeeDetails = () => {
    return (
        <div className='w-full flex items-center justify-center px-4 py-2'>
            <div className='w-full flex flex-col items-center text-center max-w-5xl min-w-lg' id='contact'>
                <h1 className='text-2xl uppercase mb-12 font-bold text-primary'>Employee Details</h1>
                <div className='mb-20'>
                    <table className=''>
                        <thead>
                            <tr className='grid lg:grid-cols-[1fr_2fr_2.5fr_2fr_4fr] grid-cols-[.5fr_1fr_1.5fr_1.2fr_1.5fr]'>
                                <th className='table-heading'>Code</th>
                                <th className='table-heading'>Name</th>
                                <th className='table-heading'>Designation</th>
                                <th className='table-heading'>Contact Details</th>
                                <th className='table-heading'>Work Profile</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                EMPLOYEE_DETAILS.map((item) => {
                                    return (
                                        <EmployeeCard details={item} key={item.id} />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetails