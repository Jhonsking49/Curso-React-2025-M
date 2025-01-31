import { useState } from "react"
import { useEffect } from "react"

const url = 'https://jsonplaceholder.org/users'

const CardPlaceHolder = () => {
    const [users, setUsers] = useState([])
    const fetchDataPlaceHolder = async (setter, url) => {
        try{
            const response = await fetch(`${url}`);
            setter(await response.json());
        } catch (error) {
            console.error(error)
        }   
    }
    useEffect(() => {
        fetchDataPlaceHolder(setUsers, url);
        console.log(users);
    }, [])
    
    
    return (
        <> 
            <div className="bg-gray-200 shadow-lg flex-col justify-center items-center">
            {users.map((user) => {
                return (
                <div key={user.id} className="flex justify-center items-center">
                    <h2 className="text-xl font-bold mb-2">
                        User name: {user.firstname}
                    </h2>
                    <p className="mb-1 mx-4 text-gray-600">
                        City: {user.address.city}
                    </p>
                </div>
                );
            })}
            </div>
        </>
    )
}

export default CardPlaceHolder