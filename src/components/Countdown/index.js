import React, { useState, useEffect, useRef } from "react";
import "./index.css";

function index() {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  useEffect(() => {
    startTimer();
    // countdownTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  let interval = useRef();

  const startTimer = () => {
    let countDownDate = new Date("March 30, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  return (
    <div class="countdown">
      <div class="countdown-block">
        <span class="days time-elem">
          <span class="top">{timerDays}</span>
          <span class="top-back">
            <span>{timerDays}</span>
          </span>
          <span class="bottom">{timerDays}</span>
          <span class="bottom-back">
            <span>{timerDays}</span>
          </span>
        </span>
        <span class="title">Days</span>
      </div>

      <div class="countdown-block">
        <span class="hours time-elem">
          <span class="top">{timerHours}</span>
          <span class="top-back">
            <span>{timerHours}</span>
          </span>
          <span class="bottom">{timerHours}</span>
          <span class="bottom-back">
            <span>{timerHours}</span>
          </span>
        </span>
        <span class="title">Hours</span>
      </div>

      <div class="countdown-block">
        <span class="minutes time-elem">
          <span class="top">{timerMinutes}</span>
          <span class="top-back">
            <span>{timerMinutes}</span>
          </span>
          <span class="bottom">{timerMinutes}</span>
          <span class="bottom-back">
            <span>{timerMinutes}</span>
          </span>
        </span>
        <span class="title">Minutes</span>
      </div>

      <div class="countdown-block">
        <span class="seconds time-elem">
          <span class="top">{timerSeconds}</span>
          <span class="top-back">
            <span>{timerSeconds}</span>
          </span>
          <span class="bottom">{timerSeconds}</span>
          <span class="bottom-back">
            <span>{timerSeconds}</span>
          </span>
        </span>
        <span class="title">Seconds</span>
      </div>
    </div>
  );
}

export default index;
