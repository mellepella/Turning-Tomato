function calculateSps() {
  return round(
    (SaveFile.current.turningVelocity * (1000 / UPDATE_INTERVAL)) / 360
  );
}
