declare class AmbientLightSensor {
  onactivate: Function;
  onreading: Function;
  onerror: Function;
  illuminance: number;

  start()
  stop()
}
