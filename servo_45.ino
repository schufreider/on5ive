#include <Servo.h>

Servo myServo;

const int SERVO_PIN = 9;

void setup() {
  myServo.attach(SERVO_PIN);
  myServo.write(45);  // Rotate to 45 degrees
}

void loop() {
  // Nothing needed - servo holds position
}
