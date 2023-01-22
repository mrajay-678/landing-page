import userEvent from '@testing-library/user-event'
import React, { useEffect, useState } from 'react'

let newnames = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Zidane", "Zijie", "Zinedine", "Zion", "Zishan", "Ziya", "Ziyaan", "Zohaib", "Zohair", "Zoubaeir", "Zubair", "Zubayr", "Zuriel"]

const user = (id, value) => {
    return (<li key={value}>{id}</li>)
}

let text = '';
let user_array_new = []
function capitalizeFirstLetter(string) {
    text = string.charAt(0).toUpperCase() + string.slice(1)
    return text;
}

const SearchName = () => {
    const [search, setSearch] = useState("");
    const [names, setNames] = useState([]);

    useEffect(() => {
        filter(search);
    },[search]);

    const filter = (search) => {
            console.log('ccccccccccccccccccccccc')
    capitalizeFirstLetter(search)
    console.log(search)
    user_array_new = []
    for (let index = 0; index < newnames.length; index++) {
        if (newnames[index].startsWith(search)) {
           user_array_new.push(newnames[index])
            console.log('kjkjkjk',user_array_new)
        }
    }

    setNames(user_array_new);

}

    console.log('IMPUT', search)

    return (
        <>
            <input className='m-5' placeholder='Search Name' type="search" value={search} onChange={(e) => setSearch(e.target.value)} name="" id="" />
            <div className='col-12 p-5 pt-1'>
                <ol>
                    {names.map(user)}
                </ol>
            </div>
            {   
                false &&
                <p>jhghjguhg</p>
            }
        </>
    )
}
export default SearchName;