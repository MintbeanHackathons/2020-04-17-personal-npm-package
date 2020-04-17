// Inspired by Kristin Baumann's countdown component, converted to hooks
// https://medium.com/@kristin_baumann/react-countdown-6455838b6faf

import React, { useState, useEffect } from 'react'

const PROGRESS_BAR_RADIUS = 161 // px

const Countdown = ({ text, targetDate, tMinusNDays }) => {
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timeLeft = calculateCountdown(targetDate);
    timeLeft && setTimeRemaining(timeLeft)
    setProgress(Math.round((360 * (tMinusNDays - timeLeft.days))/tMinusNDays))
  }, [targetDate])

  const calculateCountdown = (endDate) => {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      days: 0,
    }

    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    return timeLeft;
  }

  const addLeadingZeros = (value) => {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  // Math from Matt's answer:
  // https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle/24569190#24569190

  // for calculating progress segment of SVG
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  const describeArc = (x, y, radius, startAngle, endAngle) => {

      const start = polarToCartesian(x, y, radius, endAngle);
      const end = polarToCartesian(x, y, radius, startAngle);

      const arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

      const d = [
          "M", start.x, start.y,
          "A", radius, radius, 0, arcSweep, 0, end.x, end.y,
      ].join(" ");

      return d;
  }

  return (
    <div className="countdown">
      <h4>{text}</h4>
      <div className="countdown-date-group">
        <div className="countdown-date-item">
          <strong>{addLeadingZeros(timeRemaining.days ? timeRemaining.days : ' . ' )}</strong>
          <span>{`Jour${timeRemaining.days !== 1 && 's'}`}</span>
        </div>
      </div>
      <svg className="countdown-circle" viewBox="-8 -8 338 338" height="100" width="100">
        <circle className="countdown-circle-back" cx={PROGRESS_BAR_RADIUS} cy={PROGRESS_BAR_RADIUS} r={PROGRESS_BAR_RADIUS}  fill="none" />
        <path className="countdown-circle-progress" d={describeArc(PROGRESS_BAR_RADIUS, PROGRESS_BAR_RADIUS, PROGRESS_BAR_RADIUS, 0, progress)} stroke-width="8" fill="none" />
      </svg>
    </div>
  )
}

export default Countdown;
