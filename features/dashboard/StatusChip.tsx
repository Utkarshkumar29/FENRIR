export const StatusChip = ({ status }) => {
  const styles = {
    Completed: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    Scheduled: "bg-gray-200 text-gray-600 dark:bg-neutral-800 dark:text-gray-400",
    Failed: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
  }

  return (
    <span className={`px-3 py-1 rounded-md text-xs font-medium ${styles[status]}`}>
      {status}
    </span>
  )
}