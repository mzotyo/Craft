import { HeaderViewModel } from '../presenter-outputboundary';

export function mapTaskEnabledToViewModel(enabled: boolean): HeaderViewModel {
  return {
    title: 'Task Tracker',
    addTaskButton: {
      style: enabled ? ['btn', 'btn-red'] : ['btn', 'btn-green'],
      label: enabled ? 'Cacel' : 'Add',
    },
  };
}
