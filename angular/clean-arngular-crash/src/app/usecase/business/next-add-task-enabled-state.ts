export function nextAddTaskEnabledState(oldState: boolean) {
  console.debug(
    `[business]: nextAddTaskEnabledState(${oldState}): ${!oldState}`
  );
  return !oldState;
}
