import { Fragment, useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

/*const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://www.shutterstock.com/image-photo/picturesque-street-rancho-domingo-charming-260nw-283142876.jpg",
    title: "A First Meetup",
    address: "Some Address Malaga",
  },
  {
    id: "m2",
    image:
      "https://www.shutterstock.com/image-photo/picturesque-street-rancho-domingo-charming-260nw-283142876.jpg",
    title: "A Second Meetup",
    address: "Some Address Malaga 2",
  },
];
*/

function HomePage(props) {
  /* 
    const [loaderMeetups,setLoaderMeetups] = useState([]);
    useEffect(()=>{
        //send http request to retrieve the meetups from backend
        setLoaderMeetups(props.DUMMY_MEETUPS);
    },[])
    
    return <MeetupList meetups={loaderMeetups}></MeetupList>     
    */
  // With Static pre rendeting

  return (
    <Fragment>
      <Head>
            <title>React Meetups</title>
            <meta name="description" content="Browse a huge list of highly active React meetups!"/>
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>
    </Fragment>
  );
}

export async function getStaticProps() {
  // run on the Server Side as this is executed during the build process
  // fetch data from API o from a database

  const uri =
    "mongodb+srv://gabo:uaUoQdtL5GHJSJT4@cluster0.gkvum.mongodb.net/meetups";
  const client = await MongoClient.connect(uri);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 3600, // Incremental static generation. this will get call every 3600 seconds. this page will get regenerated every 3600 seconds
  };
}

/*
export async function getServerSideProps(context){ //this will not run on the build process. It will get executed on every request.
    const req = context.req;
    const res = context.res;

    return {
        props:{
            meetups: DUMMY_MEETUPS
        },        
    }
}
*/
export default HomePage;
