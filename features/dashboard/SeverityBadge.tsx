export const SeverityBadge = ({ type, count }) => {
  if (!count) return null

  const colors = {
    critical: "bg-red-500",
    high: "bg-orange-500",
    medium: "bg-yellow-500",
    low: "bg-green-500",
  }

  return (
    <span className={`px-2 py-1 text-white text-xs rounded-md ${colors[type]}`}>
      {count}
    </span>
  )
}