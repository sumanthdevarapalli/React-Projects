function Employee({employeeObj})
{

    return(
        <>
            <h1>Employee Details:</h1>
            <p>Employee id:{employeeObj.id}</p>
            <p>Employee name:{employeeObj.name}</p>
            <p>Employee Salary:{employeeObj.salary}</p>
</>
    )


}
export default Employee;