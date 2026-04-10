#include <Servo.h>

Servo myServo;

const int SERVO_PIN   = 9;
const int SWITCH_PIN  = 2;
const int DEBOUNCE_MS = 50;

bool rotated        = false;  // false = 0°, true = 45°
bool lastSwitchState = HIGH;
unsigned long lastDebounceTime = 0;

void setup() {
  myServo.attach(SERVO_PIN);
  pinMode(SWITCH_PIN, INPUT_PULLUP);
  myServo.write(0);
}

void loop() {
  bool reading = digitalRead(SWITCH_PIN);

  // Reset debounce timer on any change
  if (reading != lastSwitchState) {
    lastDebounceTime = millis();
    lastSwitchState = reading;
  }

  // Only act once the reading has been stable long enough
  if ((millis() - lastDebounceTime) > DEBOUNCE_MS && reading == LOW) {
    rotated = !rotated;
    myServo.write(rotated ? 45 : 0);

    // Wait for switch release before allowing next trigger
    while (digitalRead(SWITCH_PIN) == LOW);
    lastDebounceTime = millis();
  }
}
