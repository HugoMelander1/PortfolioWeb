import type { ProjectStatus } from '../data/projects.ts'

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  const variant = status === 'Klart' ? 'badge-done' : 'badge-pending'
  return <span className={`badge ${variant}`}>{status}</span>
}
