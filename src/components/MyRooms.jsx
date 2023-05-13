import React from 'react'
import useGetData from '../hooks/useGetData'
import { useAuth } from '../hooks/useAuth'
import { ChatCenteredDots } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import convertObjInArray from '../functions/ObjToArray'
const MyRooms = () => {

    const navigate = useNavigate()
    const { user } = useAuth()
    const roomsFromUser = useGetData( `users/${user?.id}/rooms/` );
    const roomsInArray = convertObjInArray( roomsFromUser.data )
    const findItem = roomsInArray?.filter( item => !item.endedAt )

    //grid grid-cols-1 gap-2 w-3/4 place-items-center items-center

    return (

        <section className={`h-full  w-full flex justify-stretch items-center flex-col p-2 border-t  mt-4`}>

            <h1 className='mb-4'>Minhas Salas</h1>
            <div className={` ${findItem?.length > 1 ? 'gap-2 flex flex-col w-full items-center justify-center' : 'flex'} `}>


                {findItem && findItem.map( ( room,index ) => {
                    return (
                        <div
                            onClick={() => navigate( `/admin/sala/${room?.idRoom}` )}
                            className='flex items-center w-1/4 max-sm:w-3/4 jus  gap-2 cursor-pointer h-8 rounded-sm px-4 bg-purple-400'
                            key={index}>
                            <ChatCenteredDots className='text-slate-50' />
                            <h1 className='text-xs text-slate-50'>{room?.title}</h1>
                        </div>
                    )
                } )}

            </div>
        </section>
    )

}

export default MyRooms