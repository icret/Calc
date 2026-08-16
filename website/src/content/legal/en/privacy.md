---
slug: privacy
locale: en
title: Privacy Policy
version: 2026-V1
effectiveDate: 2026-08-08
description: This Privacy Policy clarifies the rules and commitments of the AuraCalc application regarding the collection, use, storage, sharing, and protection of personal information.
---

## Article 1 Scope of Application

1.1 This Privacy Policy (hereinafter "this Policy") applies to all products and services provided by AuraCalc (hereinafter "this Application" or "we") to users through the Apple App Store.

1.2 This Policy applies to all versions of this Application on macOS, iOS, and iPadOS platforms. If this Application subsequently adds functional modules involving the processing of Personal Information, we will update this Policy and publish a notification within the Application or on this page.

1.3 This Policy does not apply to the privacy practices of Apple Inc. and its services; please refer to the Apple Privacy Policy for relevant matters.

## Article 2 Definitions

2.1 **Personal Information**: Information recorded in electronic or other forms that can, alone or in combination with other information, identify a specific natural person or reflect the activities of a specific natural person.

2.2 **Sensitive Personal Information**: Personal Information that, once leaked or illegally used, could easily result in infringement of a natural person's personal dignity or endanger their personal or property safety, including biometric information, religious belief information, medical and health information, financial account information, whereabouts and trajectory information, etc.

2.3 **User Content**: Data inputted, generated, or stored by users during the use of this Application, including calculation expressions, calculation results, history records, custom constants and formulas, etc.

## Article 3 Collection of Personal Information

3.1 **Identity Information**: This Application does not require users to register accounts and does not collect names, email addresses, phone numbers, identity card numbers, or other personal identity information.

3.2 **Device Identifiers**: This Application does not collect advertising identifiers (IDFA), vendor identifiers (IDFV), device serial numbers, or any device identifiers that can track users across applications.

3.3 **Location Information**: This Application does not request or collect precise or coarse location information.

3.4 **Biometric Information**: This Application does not collect fingerprint, facial recognition, or other biometric data.

3.5 **Usage Behavior Data**: This Application does not integrate any user behavior analytics or telemetry systems, and does not collect application usage duration, feature click frequency, screen browsing paths, or other behavioral data.

3.6 The statements in this Article cover all information collection practices of this Application's own code. Apple system frameworks relied upon by this Application may process necessary information in accordance with Apple's own privacy practices when performing their functions; such processing is not within the scope of this Policy.

## Article 4 Storage and Processing of User Content

4.1 **Local Storage**: User Content is stored by default on the user's device locally, using SwiftData database (structured data) and UserDefaults (configuration preferences) as storage mechanisms. This Application does not upload User Content to any server operated or controlled by us.

4.2 **Scope of Stored Content**:

- Calculation expressions and corresponding results (history records, SwiftData)
- User preference settings (theme, font, precision, language, etc., UserDefaults)
- User custom constants and custom formulas (UserDefaults)
- Memory function stored values (MS/MR/MC/M+/M-, UserDefaults)
- Submitted expression history (most recent 50 entries, UserDefaults)

4.3 **Data Retention**: User Content is retained on the device locally for the duration of this Application's existence, unless the user actively deletes it or uninstalls this Application.

4.4 **Data Deletion**: Users may delete specific User Content at any time through in-application operations. Uninstalling this Application will clear all local data of this Application on the device.

## Article 5 System Integration and User Content Sharing

This Application has integrated the following Apple system features, which transmit certain User Content to the system layer or other devices. All transmissions are performed by Apple system frameworks; we cannot independently control the transmission process or access the transmitted data.

5.1 **Spotlight Indexing**: This Application indexes the expressions and results of historical calculation snapshots into the Apple Spotlight search system. Indexed content includes expression text, calculation results, and keywords. Users can disable this Application's Spotlight search permission in system "Settings → Siri & Search".

5.2 **Handoff**: This Application supports Apple Handoff functionality, which can transfer the current calculation activity (including expression text) between different devices under the same Apple account. Handoff data transmission is handled by Apple system frameworks; we cannot access data during transmission.

5.3 **Siri Shortcuts**: This Application provides two shortcuts to Siri through the App Intents framework: "Calculate Expression" and "Unit Conversion". When users execute shortcuts through Siri, the inputted expressions are calculated locally on the device and are not sent to our servers. Users can manage this Application's Siri permissions in system "Settings → Siri & Search".

5.4 **Home Screen Widgets**: This Application provides home screen widgets that display the user's most recent calculation expression and result. Widgets read this data through an App Group shared container (UserDefaults); the sharing scope is limited to the two fields mentioned above. Users can remove widgets in system settings.

5.5 **Live Activity**: This Application supports Live Activity on iOS, which can display the current calculation expression and result on the lock screen. Live Activity data is managed by system frameworks; we cannot access it remotely.

5.6 **Deep Links**: This Application registers the `auracalc://` URL Scheme, supporting direct navigation to specified pages via URL (e.g., `auracalc://history`). The URL Scheme does not carry User Content and is used solely for page navigation.

## Article 6 Third-Party Services

6.1 **Analytics Services**: This Application does not integrate Google Analytics, Firebase Analytics, Mixpanel, or any other user behavior analytics services.

6.2 **Advertising Services**: This Application does not integrate any advertising SDK or advertising tracking frameworks, does not display advertisements, and does not participate in personalized advertising delivery.

6.3 **Social Services**: This Application does not integrate social login, social sharing SDKs, or any third-party social platform interfaces.

6.4 **Exchange Rate Data**: The currency conversion feature obtains exchange rate data from public exchange rate APIs. Such requests do not carry any user Personal Information or device identifiers; only currency code parameters are transmitted. Obtained exchange rate data is cached locally on the device for 12 hours; cached data is used when offline.

6.5 If this Application subsequently introduces new third-party services, we will update this Policy and clearly explain the privacy impact and the user's right to choose.

## Article 6A Third-Party Software Components (SDK) Disclosure

In accordance with the Provisions on the Administration of Mobile Internet Application Information Services and the Personal Information Protection Law, the third-party software components (SDKs) used by this Application are disclosed as follows:

| SDK Name | Source | Version | Purpose | Data Collected | Data Usage |
|----------|--------|---------|---------|----------------|------------|
| Defaults | sindresorhus (open source) | v9.0.9 | Type-safe UserDefaults wrapper for reading/writing user preference configurations | None | Only wraps system UserDefaults API; collects no additional data |
| swift-async-algorithms | Apple (open source) | v1.1.5 | AsyncChannel and debounce pipeline for input throttling | None | Pure algorithm library; collects no data |
| swift-collections | Apple (open source) | v1.5.1 | Deque double-ended queue for efficient undo/redo stack operations | None | Pure data structure library; collects no data |

The above components are all open-source libraries that do not integrate advertising, analytics, tracking, or any data reporting functionality, and do not collect user Personal Information.

## Article 6B System API Usage Disclosure

The Apple system APIs used by this Application and their purposes are described as follows:

| API Category | Purpose | Linked to User |
|--------------|---------|----------------|
| UserDefaults | Store user preference settings (theme, precision, language, etc.) and non-sensitive application data | No |
| FileTimestamp | Access file timestamps for SwiftData database file management | No |
| SystemBootTime | Get system boot time for cache validity calculation | No |
| Keychain | Access Keychain for StoreKit 2 in-app purchase transaction verification and subscription status storage | No |
| Network | Make network requests for currency conversion feature to fetch public exchange rate data | No |
| ActiveKeyboards | Get active keyboard information for input experience adaptation | No |

The above API usages are all declared in the Apple Privacy Manifest (PrivacyInfo.xcprivacy) and are not used for tracking users or linking to user identity.

## Article 7 Data Security Measures

7.1 This Application runs within the Apple App Sandbox environment, following the Apple platform security architecture; application processes can only access files within their sandbox directory and system-authorized resources.

7.2 On iOS, Data Protection (NSFileProtectionComplete) is enabled; application data files are protected by hardware key encryption when the device is locked. On macOS, security relies on App Sandbox isolation and user-optional FileVault full-disk encryption.

7.3 This Application does not request the following system permissions: Location Services, Contacts, Photos, Camera, Microphone, Health Data, HomeKit, Bluetooth.

7.4 Although we have taken the reasonable security measures described above, no technical means can achieve absolute security. We do not assume absolute guarantee responsibility for data breaches caused by force majeure, system vulnerabilities, or factors beyond our control, but commit to taking remedial measures in a timely manner and notifying users upon discovery of security incidents.

## Article 8 Protection of Minors

8.1 This Application is not directed at minors under the age of 14, nor does it specifically collect Personal Information of minors. If you are a minor under the age of 14, please use this Application under the guidance of a guardian.

8.2 If we discover that we have inadvertently collected Personal Information of a minor under the age of 14, we will delete the relevant information immediately upon verification and notify the minor's guardian.

## Article 9 User Rights

9.1 **Right to Know**: Users have the right to understand this Application's rules for processing Personal Information through this Policy.

9.2 **Right to Delete**: Users may delete all User Content stored on the device at any time through in-application operations or by uninstalling this Application.

9.3 **System Feature Control**: For the system integration features described in Article 5 (Spotlight, Handoff, Siri, Widget, Live Activity), users can enable or disable each feature individually in system settings, independent of this Application's control.

9.4 **Response Timeline**: For reasonable requests submitted by users pursuant to this Article, we will respond within 15 business days of receiving the request.

## Article 10 Policy Updates

10.1 We reserve the right to revise this Policy. The revised Policy will be published on this page with an updated version number and effective date.

10.2 If the revised Policy expands the scope of Personal Information collection or changes the purpose of Personal Information use, we will notify users through one or more of the following methods before the revision takes effect: (1) in-application pop-up notification; (2) summary of updates annotated on this page.

10.3 The revised Policy takes effect from the effective date. Continued use of this Application after a Policy revision constitutes acceptance of the revised Policy.

## Article 11 Contact Information

If you have any questions, comments about this Policy, or need to exercise your rights pursuant to Article 9, please contact us through:

- Email: [ispro@foxmail.com](mailto:ispro@foxmail.com)
- ICP Filing Number: *(To be filled upon ICP filing completion)*
- App Filing Number: *(To be filled upon App filing completion)*

We will respond within 15 business days of receiving your message.