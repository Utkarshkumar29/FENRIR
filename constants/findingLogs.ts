export const findingLogs = [
  {
    id: "finding-1",
    severity: "Critical",
    title: "SQL Injection in Authentication Endpoint",
    endpoint: "/api/users/profile",
    timestamp: "10:45:23",
    description:
      "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.",
  },
  {
    id: "finding-2",
    severity: "High",
    title: "Unauthorized Access to User Metadata",
    endpoint: "/api/auth/login",
    timestamp: "10:45:23",
    description:
      "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
  },
  {
    id: "finding-3",
    severity: "Medium",
    title: "Broken Authentication Rate Limiting",
    endpoint: "/api/search",
    timestamp: "10:45:23",
    description:
      "No effective rate limiting detected on login attempts. Automated brute-force attempts possible.",
  },
]