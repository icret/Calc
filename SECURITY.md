# Security Policy

## Supported Versions

| Version       | Supported          |
| ------------- | ------------------ |
| Latest release | :white_check_mark: |
| main          | :white_check_mark: |
| Older         | :x:                |

## Reporting a Vulnerability

**Do not report security vulnerabilities through public Issues or Pull Requests.**
Please use one of the following private channels instead:

- GitHub Security Advisory: [Create a private advisory](https://github.com/icret/Calc/security/advisories/new) (preferred)
- Email: thetopuser@gmail.com

When reporting, please include:

1. Affected version and component
2. Reproduction steps and a minimal example
3. Impact assessment and severity
4. Suggested fix (optional)

| Stage                     | SLA                                              |
| ------------------------- | ------------------------------------------------ |
| Acknowledgement           | Within 3 business days                           |
| Initial assessment & plan | Within 7 business days                           |
| Fix release               | As soon as practical, depending on severity      |
| Public disclosure         | Coordinated after the fix is released; reporter credited |

If the vulnerability is accepted, a fix will be prepared and announced via the
[changelog](website/src/content/changelog/en/1.0.0.md). If declined, a rationale will be provided.

Vulnerabilities in third-party dependencies (astro, tailwindcss, sharp, date-fns)
should be reported to their upstream repositories; this project will track and bump
affected versions.