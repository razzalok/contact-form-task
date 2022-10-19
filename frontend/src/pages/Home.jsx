import React, { useEffect, useState } from "react";
// import WorkoutDetails from "../components/WorkoutDetails";
import { useWorkoutsContext } from "../hooks/useContactFormContext";
import { useAuthContext } from "../hooks/useAuthContex";
import Card from "../components/Card";
const Home = () => {
  const { user } = useAuthContext();
  console.log(user);
  //   useEffect(() => {
  //     const fetchWorkouts = async () => {
  //       const response = await fetch("/api/workouts", {
  //         headers: { Authorization: `Bearer ${user.token}` },
  //       });
  //       const json = await response.json();

  //       if (response.ok) {
  //         dispatch({ type: "SET_WORKOUTS", payload: json });
  //       }
  //     };
  //     if (user) {
  //       fetchWorkouts();
  //     }
  //   }, [user]);
  return (
    <div className="home">
      <div className="hero-section mb-3">
        <img
          className="masthead-avatar land"
          src="https://images.pexels.com/photos/13694183/pexels-photo-13694183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="..."
        />
      </div>
      <div className="cards">
        <div className="container">
          <div className="row">
            <Card
              imgLink={
                "https://images.pexels.com/photos/8337436/pexels-photo-8337436.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
            />
            <Card
              imgLink={
                "https://images.pexels.com/photos/9550419/pexels-photo-9550419.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
            />
            <Card
              imgLink={
                "https://images.pexels.com/photos/9611952/pexels-photo-9611952.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
            />
            <Card
              imgLink={
                "https://images.pexels.com/photos/7402639/pexels-photo-7402639.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
            />
            <Card
              imgLink={
                "https://images.pexels.com/photos/9796261/pexels-photo-9796261.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
            />
            <Card
              imgLink={
                "https://images.pexels.com/photos/1592261/pexels-photo-1592261.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
            />
            <Card
              imgLink={
                "https://images.pexels.com/photos/761815/pexels-photo-761815.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
            />
            <Card
              imgLink={
                "https://images.pexels.com/photos/2306890/pexels-photo-2306890.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
            />
            <Card
              imgLink={
                "https://images.pexels.com/photos/761820/pexels-photo-761820.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
