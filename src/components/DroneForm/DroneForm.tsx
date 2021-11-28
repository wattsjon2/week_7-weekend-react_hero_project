import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseFavHero, chooseReason } from '../../redux/slices/rootSlice';
import  { Input } from '../sharedComponents/Input';
import { Button } from '@mui/material';

//Access API
import { server_calls } from '../../api'
import { useGetData } from '../../custom-hooks';

interface HeroFormProps {
    id?: string;
    data?: {}
}

interface HeroState {
    fav_hero: string;
    reason: string;
}

export const DroneForm = (props:HeroFormProps) =>{
    const dispatch = useDispatch()
    let  { heroData, getData } = useGetData()
    const store = useStore()
    const fav_hero = useSelector<HeroState>(state => state.fav_hero)
    const reason = useSelector<HeroState>(state => state.reason)
    const { register, handleSubmit} = useForm({ })

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!) {
            await server_calls.update(props.id!, data)
            console.log(`Updated: ${data} for ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseFavHero(data.fav_hero))
            dispatch(chooseReason(data.reason))
            await server_calls.create(store.getState())
            window.location.reload()
        }
    }

return (
    <div>
        <form onSubmit = {handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="fav_hero">Favorite Hero</label>
                <Input {...register('fav_hero')} name="fav_hero" placeholder='Favorite Hero' />
            </div>
            <div>
                <label htmlFor="reason">Reason</label>
                <Input {...register('reason')} name="reason" placeholder="Reason"/>
            </div>
            <Button type='submit'>Submit</Button>
        </form>
    </div>
)
}
