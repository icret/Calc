# AuraCalc

[中文](README_CN.md)

> A lightweight macOS calculator written in pure Swift. Installer only 2.4MB, free to share.

## Background

I used to rely on a lightweight third-party calculator on Windows. After switching to macOS as my main driver last year, that calculator had no Mac version, and nothing suitable on the App Store or third-party options either. Since I depend on a calculator daily, I spent two weeks writing one in pure Swift. The final build is just **2.4MB** — small codebase, no features cut.

## Features

- **38-digit precision** — Decimal engine
- **Three calculation modes** — Basic / Scientific / Programmer (trig, log, factorial, permutations, prime factorization, base conversion, bitwise ops)
- **Equation solving** — Newton's method iteration
- **Unit & currency conversion** — 16 unit categories + multi-source rate cache + Chinese uppercase amount
- **Full ecosystem integration** — Dynamic Island / Interactive Widget / Control Widget / Siri / Spotlight / Handoff / Menu bar calculator
- **Privacy first** — zero data collection, no tracking, no ads
- **Cross-platform** — iOS 17+ / macOS 14+ (Apple Silicon only)

## Notes

Currently signed only with a personal Developer ID (G sign), not on the App Store (requires the $99/year Apple Developer Program fee), so no IPA for iOS / iPadOS users — good enough for personal use. The macOS DMG is shared here for free; feel free to try it, and Issues / PRs are welcome.

The icon and name were picked casually — the icon is admittedly ugly. If anyone good at icon design is willing to help, that would be great.

## Download

- DMG installer: [`AuraCalc-latest.dmg`](website/public/AuraCalc-latest.dmg) (2.2MB, arm64)
- Lanzou Cloud mirror: <https://wwbvs.lanzouq.com/iV51842eq2od>

## Security Verification

- VirScan: <https://www.virscan.org/report/fe56e9e6e81873d6215cb55edac9aa714ffb5f2169bf14c944b956971af594e9>
- VirusTotal: <https://www.virustotal.com/gui/file/fe56e9e6e81873d6215cb55edac9aa714ffb5f2169bf14c944b956971af594e9>

## Screenshots

![Screenshot 1](website/src/assets/gallery/macos-01.webp)
![Screenshot 2](website/src/assets/gallery/macos-02.webp)
![Screenshot 3](website/src/assets/gallery/macos-03.webp)
![Screenshot 4](website/src/assets/gallery/macos-04.webp)
![Screenshot 5](website/src/assets/gallery/macos-05.webp)
![Screenshot 6](website/src/assets/gallery/macos-06.webp)
![Screenshot 7](website/src/assets/gallery/macos-07.webp)
![Screenshot 8](website/src/assets/gallery/macos-08.webp)
![Screenshot 9](website/src/assets/gallery/macos-09.webp)
![Screenshot 10](website/src/assets/gallery/macos-10.webp)
![Screenshot 11](website/src/assets/gallery/macos-11.webp)
![Screenshot 12](website/src/assets/gallery/macos-12.webp)

## Changelog

See [`website/src/content/changelog/en/1.0.0.md`](website/src/content/changelog/en/1.0.0.md) for release history.
