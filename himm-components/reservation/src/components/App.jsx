import React from "react";
import Reservation from "./ReservationForm";
import { ReservationProvider } from "../context/reservation.context";
import ReservationController from "./ResponsiveController";

const App = () => (
  <ReservationProvider>
    <Reservation />
    <ReservationController />
  </ReservationProvider>
);

export default App;
