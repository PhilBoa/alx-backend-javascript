export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let innerTask = true;
    let innerTask2 = false;

    return [innerTask, innerTask2];
  }

  return [task, task2];
}

