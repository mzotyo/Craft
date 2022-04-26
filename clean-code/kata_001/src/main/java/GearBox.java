/*
 * CodingAssignments Refactoring: GearBox
 *
 * This is a refactoring challenge where the candidate can look at a single-method
 * case, where the method is untested, needs refactoring, and is hard to read. Oh,
 * and contains bugs;-)
 *
 * The assignment is as follows:
 *
 * This is the code for our customer's new environmentally friendly electric car.
 * The car is very dependent on software for almost everything, and the part that we're
 * working on is the automatic gear box. The code you see is the automatic gear box, which
 * currently shifts up if the engine goes over 2000 rpm, and down if it goes under 500.
 *
 * For our this new car, it's been determined that the choice of gear can be much
 * more efficient if we could just set more specific ranges of rpm for each gear.
 * Future versions of the car could then use actual measurements of fuel consumption
 * to configure those ranges on the fly!
 * Your assignment is to make the gearbox accept a range of rpms for each gear (and
 * of course use that range to shift gears!)
 *
 */

public class GearBox {
  static final int GEAR_UP_RPM = 2000;
  static final int GEAR_DOWN_RPM = 500;
  static final int GEAR_POSITION_UPPER_LIMIT = 6;
  static final int GEAR_POSITION_LOWER_LIMIT = 1;


	private int gearPosition = 0;
  private int gearUpRpm;
  private int gearDownRpm;
	private int e = 0;

  public GearBox() {
    this(GEAR_UP_RPM, GEAR_DOWN_RPM);
  }

  public GearBox(int gearUpRpm, int gearDownRpm) {
    this.gearUpRpm = gearUpRpm;
    this.gearDownRpm = gearDownRpm;
  }

	public void doit(int currentRpm) {
    if (isMovingForward(gearPosition)) {
      gearPosition = calculateGearChange(currentRpm, gearPosition);
    }
    gearPosition = limitUpperRange(gearPosition);
    gearPosition = limitLowerRange(gearPosition);

    e = currentRpm; // What is this e variable? Should I remove it?
}

boolean isMovingForward(int gearPosition) {
  return gearPosition > 0;
}

int limitUpperRange(int gearPosition) {
  if(gearPosition > GEAR_POSITION_UPPER_LIMIT) {
    return gearPosition - 1;
  }
  return gearPosition;
}

int limitLowerRange(int gearPosition) {
  if(gearPosition < GEAR_POSITION_LOWER_LIMIT) {
    return gearPosition + 1;
  }
  return gearPosition;
}
 
int calculateGearChange(int currentRpm, int gearPosition) {
  if(shouldGearUp(currentRpm)) {
    return gearPosition + 1;
  }

  if(shouldGearDown(currentRpm)) {
    return gearPosition - 1;
  }

  return gearPosition;
}

boolean shouldGearUp(int currentRpm) {
  return currentRpm > GEAR_UP_RPM;
}

boolean shouldGearDown(int currentRpm) {
  return currentRpm < GEAR_DOWN_RPM;
}
