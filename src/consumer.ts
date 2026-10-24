import type { AgentraEvent } from '@x12i/agentra-types';

const events: AgentraEvent[] = [{
  scope: { tenantId: 'demo', environment: 'dev' },
  event: { id: 'event-1', type: 'usage', name: 'example.opened', createdAt: '2026-01-01T00:00:00.000Z' },
  measures: { durationMs: 25 },
}];
function totalDuration(input: AgentraEvent[], tenant: string): number {
  return input.filter(event => event.scope.tenantId === tenant).reduce((total, event) => total + (event.measures?.durationMs ?? 0), 0);
}
// @ts-expect-error A tenant identifier must be a string in the published contract.
const invalidTenant: AgentraEvent['scope']['tenantId'] = 7;
void invalidTenant;
console.log(JSON.stringify({ totalDurationMs: totalDuration(events, 'demo') }));
