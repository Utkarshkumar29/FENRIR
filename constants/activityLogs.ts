export const activityLogs = [
  {
    time: "09:00:00",
    message:
      "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.",
  },
  {
    time: "09:01:00",
    message:
      "Good! target is online. Now let me perform port scanning to identify running services.",
  },
  {
    time: "09:02:00",
    message:
      "Excellent reconnaissance results:",
  },
  {
    time: "09:02:00",
    message:
      "helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)",
    indent: true,
  },
  {
    time: "09:02:00",
    message:
      "Let me probe the web server on target first to understand its structure.",
  },
  {
    time: "09:03:00",
    message:
      'Great! I found a login page for a Help Desk Platform. I can see a useful comment: "TODO: Delete the testing account (test:test)". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.',
  },
  {
    time: "09:04:00",
    message:
      "The POST method is not allowed on /password/test. Let me check what the JavaScript does — it posts to '#' which means the current page. Let me try a different approach.",
  },
  {
    time: "09:05:00",
    message:
      "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.",
  },
  {
    time: "09:06:00",
    message:
      'Great! I can access the dashboard using the X-UserId: 10032 header. The dashboard shows "Welcome, John Doe". This suggests an IDOR vulnerability — I can access any user\'s dashboard by just changing the X-UserId header. Let me explore more of the application...',
  },
]