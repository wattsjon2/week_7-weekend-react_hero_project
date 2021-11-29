import React, { Suspense, useState } from 'react';
import { makeStyles } from '@mui/styles';
import {Container, Button, Typography, Snackbar, Alert, AlertProps  } from '@mui/material';
import hero_image from '../../assets/images/avengers.png'
import { Link} from 'react-router-dom'
import { useAuth, AuthCheck } from 'reactfire';
import firebase from 'firebase/app';
import 'firebase/auth';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props{
    title: string;
}

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    logo:{
        margin:'0 0 0 0.45em'
    },
    logo_a: {
        color:'rgb(28,24,22)'
    },
    logo_navigation:{
        listStyle:'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a: {
        display: 'block',
        padding: '1em',
        color: 'black'
    },
    main:{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${hero_image})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute'
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top:'50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        color:'white'
    },
    googleButton:{
        backgroundColor: 'rgb(66,133,244)',
        marginTop: '2em',
        padding: '0',
        color: 'white',
        height: '100px',
        width: '400px',
        border: 'none',
        textAlign: 'center',
        boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px 0px',
        fontsize: '16px',
        lineHeight: '48px',
        display: 'block',
        borderRadius: '1px',
        fontFamily: 'Roboto, arial, sans-serif',
        cursor: 'pointer'
    }
})

export const Home = ( props:Props) =>{
    
    const auth = useAuth();
    const classes =  useStyles();
    


    const sign_in = async () => {
        await auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());

    }

    const sign_out = async() => {
        await auth.signOut();
    }
    
    return(
        <div className={classes.root}>
            <nav>
            <div className={classes.navbar_container}>
                <h1 className = { `${classes.logo}`}>
                    <Link to = "/" className={` ${classes.logo_a} ${classes.logo_navigation} `}>Favorite Heroes</Link>
                </h1>

                <ul className = {`${classes.navigation} ${classes.logo_navigation}`}>
                    <Suspense fallback={'... loading'}>
                        <AuthCheck fallback={
                            <li><Button className={classes.googleButton} onClick={sign_in}>Sign In With Google</Button></li>
                        }>
                            <li><Link to="/" className = {classes.nav_a}>Home</Link></li>
                            <li><Link to="/dashboard" className = {classes.nav_a}>Dashboard</Link></li>
                            <li><Button className={classes.googleButton} onClick={sign_out}>Sign Out</Button></li>
                        </AuthCheck>
                    </Suspense>
                </ul>
            </div>
        </nav>
            <main className = {classes.main}>
                <div className = {classes.main_text}>
                    <h1>{props.title}</h1>
                    <p>Heroes are cool!</p>
                    <Button color='primary' variant ='contained'>Click Me </Button>
                </div>


            </main>
        </div>

    )
}