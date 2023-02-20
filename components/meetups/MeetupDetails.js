import classes from './MeetupDetails.module.css';

 function MeetupDetail(props){
    
    return <section className={classes.details}>
        <img src={props.meetup.image} alt={props.meetup.title} />
        <h1>{props.meetup.title}</h1>
        <address>{props.meetup.address}</address>
        <p>{props.meetup.description}</p>        
    </section>
 }

 export default MeetupDetail