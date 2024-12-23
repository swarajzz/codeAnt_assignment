import {
  BookText,
  Cloud,
  Code,
  Headphones,
  House,
  KeyRound,
  LogOut,
  Settings,
} from "lucide-react";

export const buttonData = {
  saas: [
    {
      label: "Sign in with GitHub",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
          />
        </svg>
      ),
    },
    {
      label: "Sign in with Bitbucket",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
          <defs>
            <linearGradient
              id="bitbucket-original-a"
              gradientUnits="userSpaceOnUse"
              x1="28.593"
              y1="14.226"
              x2="16.672"
              y2="23.532"
              gradientTransform="scale(4)"
            >
              <stop offset=".176" stopColor="#0052cc" />
              <stop offset="1" stopColor="#2684ff" />
            </linearGradient>
          </defs>
          <path
            d="M19.082 20c-1.918 0-3.355 1.758-3.039 3.516l12.95 79.289c.32 2.078 2.077 3.515 4.155 3.515h62.66c1.442 0 2.72-1.12 3.04-2.558l13.109-80.086c.316-1.918-1.121-3.516-3.039-3.516zM74.07 77.227H54.09l-5.278-28.293h30.215zm0 0"
            fill="#2684ff"
          />
          <path
            d="M107.64 48.934H78.868L74.07 77.227H54.09l-23.5 27.972s1.12.961 2.719.961h62.66c1.441 0 2.719-1.12 3.039-2.558zm0 0"
            fill="url(#bitbucket-original-a)"
          />
        </svg>
      ),
    },
    {
      label: "Sign in with Azure DevOps",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
          <defs>
            <linearGradient
              id="a"
              gradientUnits="userSpaceOnUse"
              x1="9"
              y1="16.97"
              x2="9"
              y2="1.03"
              gradientTransform="scale(7.11111)"
            >
              <stop offset="0" stopColor="#0078d4" />
              <stop offset=".16" stopColor="#1380da" />
              <stop offset=".53" stopColor="#3c91e5" />
              <stop offset=".82" stopColor="#559cec" />
              <stop offset="1" stopColor="#5ea0ef" />
            </linearGradient>
          </defs>
          <path
            fill="url(#a)"
            d="M120.89 28.445v69.262l-28.445 23.324-44.09-16.07v15.93L23.395 88.25l72.746 5.688V31.574ZM96.64 31.93 55.82 7.11v16.285L18.348 34.418 7.109 48.852v32.785l16.075 7.11V46.718Zm0 0"
          />
        </svg>
      ),
    },
    {
      label: "Sign in with GitLab",
      icon: (
        <svg viewBox="0 0 128 128">
          <path
            fill="#E24329"
            d="m124.755 51.382-.177-.452L107.47 6.282a4.459 4.459 0 0 0-1.761-2.121 4.581 4.581 0 0 0-5.236.281 4.578 4.578 0 0 0-1.518 2.304L87.404 42.088H40.629L29.077 6.746a4.492 4.492 0 0 0-1.518-2.31 4.581 4.581 0 0 0-5.236-.281 4.502 4.502 0 0 0-1.761 2.121L3.422 50.904l-.17.452c-5.059 13.219-.763 28.192 10.537 36.716l.059.046.157.111 26.061 19.516 12.893 9.758 7.854 5.93a5.283 5.283 0 0 0 6.388 0l7.854-5.93 12.893-9.758 26.218-19.634.065-.052c11.273-8.526 15.562-23.472 10.524-36.677z"
          />
          <path
            fill="#FC6D26"
            d="m124.755 51.382-.177-.452a57.79 57.79 0 0 0-23.005 10.341L64 89.682c12.795 9.68 23.934 18.09 23.934 18.09l26.218-19.634.065-.052c11.291-8.527 15.586-23.488 10.538-36.704z"
          />
          <path
            fill="#FCA326"
            d="m40.066 107.771 12.893 9.758 7.854 5.93a5.283 5.283 0 0 0 6.388 0l7.854-5.93 12.893-9.758s-11.152-8.436-23.947-18.09a18379.202 18379.202 0 0 0-23.935 18.09z"
          />
          <path
            fill="#FC6D26"
            d="M26.42 61.271A57.73 57.73 0 0 0 3.422 50.904l-.17.452c-5.059 13.219-.763 28.192 10.537 36.716l.059.046.157.111 26.061 19.516L64 89.655 26.42 61.271z"
          />
        </svg>
      ),
    },
  ],
  self_hosted: [
    {
      label: "Self Hosted GitLab",
      icon: (
        <svg viewBox="0 0 128 128">
          <path
            fill="#E24329"
            d="m124.755 51.382-.177-.452L107.47 6.282a4.459 4.459 0 0 0-1.761-2.121 4.581 4.581 0 0 0-5.236.281 4.578 4.578 0 0 0-1.518 2.304L87.404 42.088H40.629L29.077 6.746a4.492 4.492 0 0 0-1.518-2.31 4.581 4.581 0 0 0-5.236-.281 4.502 4.502 0 0 0-1.761 2.121L3.422 50.904l-.17.452c-5.059 13.219-.763 28.192 10.537 36.716l.059.046.157.111 26.061 19.516 12.893 9.758 7.854 5.93a5.283 5.283 0 0 0 6.388 0l7.854-5.93 12.893-9.758 26.218-19.634.065-.052c11.273-8.526 15.562-23.472 10.524-36.677z"
          />
          <path
            fill="#FC6D26"
            d="m124.755 51.382-.177-.452a57.79 57.79 0 0 0-23.005 10.341L64 89.682c12.795 9.68 23.934 18.09 23.934 18.09l26.218-19.634.065-.052c11.291-8.527 15.586-23.488 10.538-36.704z"
          />
          <path
            fill="#FCA326"
            d="m40.066 107.771 12.893 9.758 7.854 5.93a5.283 5.283 0 0 0 6.388 0l7.854-5.93 12.893-9.758s-11.152-8.436-23.947-18.09a18379.202 18379.202 0 0 0-23.935 18.09z"
          />
          <path
            fill="#FC6D26"
            d="M26.42 61.271A57.73 57.73 0 0 0 3.422 50.904l-.17.452c-5.059 13.219-.763 28.192 10.537 36.716l.059.046.157.111 26.061 19.516L64 89.655 26.42 61.271z"
          />
        </svg>
      ),
    },
    {
      label: "Sign in with SSO",
      icon: <KeyRound />,
    },
  ],
};

export const repositories = [
  {
    name: "design-system",
    isPublic: true,
    language: "React",
    size: "7320 KB",
    updatedAt: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    isPublic: false,
    language: "Javascript",
    size: "5871 KB",
    updatedAt: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    isPublic: false,
    language: "Python",
    size: "4521 KB",
    updatedAt: "5 days ago",
  },
  {
    name: "mobile-app",
    isPublic: true,
    language: "Swift",
    size: "3096 KB",
    updatedAt: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    isPublic: false,
    language: "Java",
    size: "6210 KB",
    updatedAt: "6 days ago",
  },
  {
    name: "blog-website",
    isPublic: true,
    language: "HTML/CSS",
    size: "1876 KB",
    updatedAt: "4 days ago",
  },
  {
    name: "social-network",
    isPublic: false,
    language: "PHP",
    size: "5432 KB",
    updatedAt: "7 days ago",
  },
];

export const sidebarItems = [
  {
    label: "Repositories",
    icon: <House />,
    route: "/repositories",
  },
  {
    label: "AI Code Review",
    icon: <Code />,
    route: "/code-review",
  },
  {
    label: "Cloud Security",
    icon: <Cloud />,
    route: "/security",
  },
  {
    label: "How to Use",
    icon: <BookText />,
    route: "/how-to-use",
  },
  {
    label: "Settings",
    icon: <Settings />,
    route: "/settings",
  },
];

export const sidebarFooterItems = [
  {
    label: "Support",
    icon: <Headphones />,
    route: "/support",
  },
  {
    label: "Logout",
    icon: <LogOut />,
    route: "/logout",
  },
];

export const options = [
  { label: "SAAS", value: "saas" },
  { label: "Self Hosted", value: "self_hosted" },
];
